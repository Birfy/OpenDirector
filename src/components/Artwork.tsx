import { useId } from "react";

export type ArtKind =
  | "orbit"
  | "chair"
  | "landscape"
  | "poster"
  | "portrait"
  | "wave";

/** Authored illustrations, intentionally independent of the captured site's media. */
export function Artwork({
  kind,
  className,
}: {
  kind: ArtKind;
  className?: string;
}) {
  const uid = useId().replaceAll(":", "");
  return (
    <svg
      className={className}
      viewBox="0 0 480 340"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      role="img"
      aria-label={
        {
          orbit: "紫色星环与发光球体",
          chair: "暖光下的现代设计椅",
          landscape: "暮色山峦与湖水",
          poster: "蓝色字体实验海报",
          portrait: "抽象人物雕塑",
          wave: "彩色声音波形",
        }[kind]
      }
    >
      <defs>
        <linearGradient
          id={`${uid}-bg`}
          x1="0"
          y1="0"
          x2="480"
          y2="340"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor={
              {
                orbit: "#351952",
                chair: "#ddc8a9",
                landscape: "#7d7997",
                poster: "#b7dfef",
                portrait: "#536255",
                wave: "#19193b",
              }[kind]
            }
          />
          <stop
            offset="1"
            stopColor={
              {
                orbit: "#0f0e26",
                chair: "#8f7058",
                landscape: "#252c48",
                poster: "#6897d2",
                portrait: "#1c292d",
                wave: "#2a1740",
              }[kind]
            }
          />
        </linearGradient>
        <radialGradient id={`${uid}-sphere`} cx=".33" cy=".25" r=".8">
          <stop stopColor="#fbdfeb" />
          <stop offset=".35" stopColor="#d799ef" />
          <stop offset=".7" stopColor="#7558c9" />
          <stop offset="1" stopColor="#242848" />
        </radialGradient>
        <linearGradient
          id={`${uid}-shine`}
          x1="100"
          y1="0"
          x2="300"
          y2="340"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#faf5d5" />
          <stop offset=".5" stopColor="#aecea5" />
          <stop offset="1" stopColor="#668080" />
        </linearGradient>
        <linearGradient id={`${uid}-wave`}>
          <stop stopColor="#8ab9ff" />
          <stop offset=".5" stopColor="#be9bff" />
          <stop offset="1" stopColor="#ffc7af" />
        </linearGradient>
        <filter id={`${uid}-blur`}>
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>
      <path fill={`url(#${uid}-bg)`} d="M0 0h480v340H0z" />
      {kind === "orbit" && (
        <>
          <circle
            cx="370"
            cy="60"
            r="140"
            fill="#8f5cec"
            opacity=".12"
            filter={`url(#${uid}-blur)`}
          />
          <circle cx="241" cy="164" r="92" fill={`url(#${uid}-sphere)`} />
          <ellipse
            cx="240"
            cy="174"
            rx="168"
            ry="35"
            stroke="#e8b7fa"
            strokeWidth="3"
            transform="rotate(-27 240 174)"
          />
          <path
            d="M91 237c41 14 126-7 204-46 70-35 113-71 100-88"
            stroke="#c1aeef"
            strokeWidth="7"
            strokeLinecap="round"
          />
          {[
            [85, 61],
            [359, 247],
            [416, 118],
            [139, 280],
            [315, 35],
          ].map(([x, y]) => (
            <path
              key={`${x}-${y}`}
              d={`M${x! - 3} ${y}h6m-3-3v6`}
              stroke="#e9daf8"
              opacity=".6"
            />
          ))}
          <text x="27" y="309" fill="#e8d7ff" fontSize="11" letterSpacing="5">
            A LITTLE BEYOND
          </text>
        </>
      )}
      {kind === "chair" && (
        <>
          <path d="M0 240 480 192v148H0Z" fill="#d4b99a" opacity=".6" />
          <path d="m0 0 176 0 135 233-197 19Z" fill="#f9e8c8" opacity=".25" />
          <ellipse
            cx="264"
            cy="288"
            rx="102"
            ry="17"
            fill="#594b3f"
            opacity=".2"
            filter={`url(#${uid}-blur)`}
          />
          <path
            d="m191 211-17 83m114-83 27 83"
            stroke="#3c3b2f"
            strokeWidth="11"
          />
          <path
            d="M164 103q1-26 31-26h73q31 0 37 31l15 79q7 32-25 35H183q-34-3-29-32Z"
            fill="#4b5640"
          />
          <path
            d="M167 105q0-18 20-18h77q23 0 28 22l15 72q4 16-18 18H181q-20 0-18-22Z"
            fill="#697451"
          />
          <path d="M155 193q81-17 167-6l3 28q-89 20-171 5Z" fill="#414d38" />
          <path
            d="m158 190 4 24q78 14 158-2l-3-22q-81 12-159 0Z"
            fill="#7c8461"
          />
          <text x="28" y="37" fill="#3c4435" fontSize="11" letterSpacing="4">
            EVERYDAY OBJECTS
          </text>
        </>
      )}
      {kind === "landscape" && (
        <>
          <circle cx="323" cy="87" r="35" fill="#f6d5b7" />
          <path
            d="m0 174 72-64 50 43 83-113 75 118 54-45 71 68 75-36v195H0Z"
            fill="#797c8f"
          />
          <path
            d="m0 224 76-48 63 32 69-91 77 100 56-59 139 78v104H0Z"
            fill="#464e67"
          />
          <path d="m0 259 98-31 96 22 98-25 188 26v89H0Z" fill="#262d47" />
          <path d="M0 271h480v69H0Z" fill="#8292a4" opacity=".4" />
          <path
            d="M266 283h105m-167 17h197m-242 18h144"
            stroke="#d5b7b0"
            opacity=".5"
          />
          <path
            d="m63 271 12-55 11 55m-20-13h17"
            stroke="#1e2939"
            strokeWidth="5"
          />
          <text x="27" y="36" fill="#e2dcd9" fontSize="11" letterSpacing="5">
            SOMEWHERE QUIET
          </text>
        </>
      )}
      {kind === "poster" && (
        <>
          <circle cx="387" cy="49" r="107" stroke="#e9f7f9" strokeWidth="1" />
          <circle cx="387" cy="49" r="132" stroke="#e9f7f9" strokeWidth="1" />
          <text
            x="29"
            y="113"
            fill="#153b83"
            fontSize="82"
            fontWeight="800"
            letterSpacing="-7"
          >
            MAKE
          </text>
          <text
            x="29"
            y="195"
            fill="#153b83"
            fontSize="82"
            fontWeight="800"
            letterSpacing="-7"
          >
            ROOM.
          </text>
          <path
            d="m350 189 20 22 35-52m-79 66 98-66"
            stroke="#f5f2a5"
            strokeWidth="12"
          />
          <path d="M31 241h417" stroke="#285291" />
          <text x="31" y="267" fill="#214c86" fontSize="10" letterSpacing="3">
            FOR YOUR NEXT BIG IDEA
          </text>
          <text x="31" y="309" fill="#214c86" fontSize="12">
            01 — TYPE EXPERIMENT
          </text>
        </>
      )}
      {kind === "portrait" && (
        <>
          <ellipse
            cx="244"
            cy="300"
            rx="105"
            ry="15"
            fill="#141c1d"
            opacity=".5"
          />
          <path
            d="M147 291q8-62 61-78l4-40h61l-2 40q59 15 66 78Z"
            fill={`url(#${uid}-shine)`}
          />
          <path
            d="M188 115q0-66 57-65 59 3 60 66l-9 59q-9 45-52 45-40-1-50-46Z"
            fill={`url(#${uid}-shine)`}
          />
          <path
            d="m252 102-9 48 19 6m-43 25q23 10 45-2m-65-61 27-5m40 0 22 6"
            stroke="#738c74"
            strokeWidth="3"
          />
          <path
            d="M185 111q-3-72 59-74 66 0 65 79l-19-41-41 15-34-11Z"
            fill="#344a3c"
          />
          <path d="m239 220-2 68" stroke="#5e7c6d" opacity=".7" />
          <text x="28" y="40" fill="#c4d5bd" fontSize="11" letterSpacing="4">
            STUDIES IN FORM
          </text>
        </>
      )}
      {kind === "wave" && (
        <>
          {[...Array(42)].map((_, i) => {
            const h =
              30 + Math.abs(Math.sin(i * 0.47)) * 90 + Math.sin(i * 0.12) * 40;
            return (
              <rect
                key={i}
                x={32 + i * 10}
                y={170 - h / 2}
                width="4"
                height={h}
                rx="2"
                fill={`url(#${uid}-wave)`}
                opacity={0.6 + (i % 4) * 0.1}
              />
            );
          })}
          <text x="27" y="39" fill="#c5c7ed" fontSize="11" letterSpacing="5">
            SOUND, IMAGINED
          </text>
          <text x="27" y="309" fill="#c5c7ed" fontSize="11">
            ♪ LOCAL AUDIO CONCEPT
          </text>
        </>
      )}
    </svg>
  );
}
