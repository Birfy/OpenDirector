import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type ReactNode,
} from "react";

const Playback = createContext<{
  blocked: boolean;
  claim: (element: HTMLMediaElement) => void;
}>({ blocked: false, claim: () => {} });
export function CanvasPlaybackProvider({
  blocked,
  children,
}: {
  blocked: boolean;
  children: ReactNode;
}) {
  const [visible, setVisible] = useState(() => !document.hidden);
  const owner = useRef<HTMLMediaElement | null>(null);
  useEffect(() => {
    const update = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", update);
    return () => {
      document.removeEventListener("visibilitychange", update);
      owner.current?.pause();
    };
  }, []);
  useEffect(() => {
    if (blocked || !visible) owner.current?.pause();
  }, [blocked, visible]);
  return (
    <Playback.Provider
      value={{
        blocked: blocked || !visible,
        claim: (element) => {
          if (owner.current && owner.current !== element) owner.current.pause();
          owner.current = element;
        },
      }}
    >
      {children}
    </Playback.Provider>
  );
}

export function CanvasVideoPreview(props: ComponentProps<"video">) {
  const playback = useContext(Playback);
  const element = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const previous = useRef(props.src);
  const playing = useRef(false);
  const pause = () => {
    playing.current = false;
    element.current?.pause();
  };
  useEffect(() => {
    if (previous.current !== props.src) {
      previous.current = props.src;
      setHovered(false);
    }
    const media = element.current;
    if (!media || !hovered || playback.blocked) {
      if (playback.blocked && hovered) setHovered(false);
      pause();
      return;
    }
    let active = true;
    const timer = setTimeout(() => {
      playback.claim(media);
      media.muted = true;
      playing.current = true;
      void media
        .play()
        .then(() => {
          if (!active || !playing.current) media.pause();
        })
        .catch(() => {});
    }, 300);
    return () => {
      active = false;
      clearTimeout(timer);
      pause();
    };
  }, [hovered, playback.blocked, props.src]);
  return (
    <video
      {...props}
      ref={element}
      onPointerMove={(event) => {
        if (!event.buttons && event.pointerType !== "touch") setHovered(true);
        props.onPointerMove?.(event);
      }}
      onPointerLeave={(event) => {
        setHovered(false);
        props.onPointerLeave?.(event);
      }}
      onPointerDown={(event) => {
        setHovered(false);
        pause();
        props.onPointerDown?.(event);
      }}
      onPlay={(event) => {
        if (playback.blocked) event.currentTarget.pause();
        else playback.claim(event.currentTarget);
        props.onPlay?.(event);
      }}
    />
  );
}
