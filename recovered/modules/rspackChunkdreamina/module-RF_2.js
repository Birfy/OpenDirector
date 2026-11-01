import n from "z8";
import s from "cO";
import a from "B3";
import r from "Cc";
export function N() {
  const e =
    r.D() === a.l.Dark
      ? "data:image/png;base64,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"
      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABTRJREFUeAHNmVtMHFUYx/8DFRvLwpKaFnuR6UVbHyqL8UGbxi7tQ29GTBNiNRrXFx8L0cRLrC3ERBtNbdG0NTGRxdr0QhNo2hhprQuhlRoLLCjSIoWlVO7CclkKLDuf3zm7S1uC7hmKdP/Jf8+Z2fN95zfnzJmZndXw37Kz14dKG9uKmZGX7Q45j+2BSQkYF5tmyaIvHYrKmkWwyd4TCW7PfYSLCBkNcGFnT4bTowgubNudgK4oBBRM0EKj14x70Lx4Kx5dacPDybrMPDzkRU+HBzca3bhHpc/BFPOtqvVbHXhu8+t4wmaXYMEPwJBjQOjpbEG9uxRFzlx0M/A0ZBcjKIbSbiZqwSM63vm0CCkrUxGcBMkzIUNuaHKnqHZ3tOCHwjx8f/IATKo0lj9E1FzViOWrbPjMWYHkxTpiYjXEcgbhmBhhYot9mtwOl5bEJNie2QSNmeuqymBCVgG4V7W1gNp/tAIJiYmIjQnCaQwl6hIuNggVK2BFPQa3QZluzdN2+Pj8bPj9F9Uu54r5IdXWp1zNWLgohQM0eZ6RmEKui2k0QllEfXDAi0sXilF7pQy//Voq98+zWPHCK1l4Nj0DO3c8hc42j1KfyoAZmQ7k7suXACLAMMJwFDr/NPT3e3EsPw+FBQcwNOCdMs8+pwvXr9bg0F71tal0XSqvbKbGToP+7CRqYF9rJ7rK/qONqO4vosKSalq0VI+YZ9t2B52v6iVLglWp3xiVI9jyfAZWPZYCCy+l+AeJzeXcoC1cP+7MQ+amNLS1eiLm6uLLTfKCJGzYnAEVKQFuSE9nKC0IFIKSgFx+uS8XH32gPl1rnkyVOdatsyvHRBxm108/khHwk2EEpAMBg8bZH+7OMX0LO3KsiHqGiFyXqlVjIjfq7W4h8g+wB8nwc/ZxH+Xs3mUaLkXXadRv0Ai7o7tv5gBphFfCSDsZox1Eo11UVPitaTjh/G++JjLGiHg2+EhnENB3XdrwNVFz/UXSU5aahhMxNNbL7uOZ8LL7leLmQEHe3k4kJlog7lUFR47B09IKM7JaE+AqOQEEhmUOcc309g8qxSqtYk9To0yujQ/D+V0RzCr/8MfQF88HBXwyD7E9TQ1KsUqAbncdMDaM4tPn4LnRBjPKP7QHL25dy7ceHzQBNx4sPc1NSvFKgGUXK6ExYE1tPVRlTYhH/hfvwpG5EeTnkfPz9AZuSTgwZPHZ80p5lACLSyrQ19PDHfhVmkNfshCuk5/AsT2dR56h2PDfAo0y6CjXR4dRVn5FKZfaIhnwoeDkOaxPWxGxbZZjK3KyXpIjKE6L8KIQpSZLwHnKBU9rB1Sk/DSjL5qP6hO7cODoBeR+dfau76yWh+DIWIudr23CsiULglB3gIXrsiOuL9+wE56bXSrdqgMKZb+8EZ+/nYmW9r/hvnYT3qFh2B5fAtvqxRMAQZYQ0MSo3YbMPXwGOYfUrwQiqg8mXgrtf+tVZO/YzDWDo8WzoMFP1eIwKbhPVLnUxHcCWZsYO5RWNiD9zf0wIa945Be96aoRJRW18vpuT0vjrTjuPI63H5Am4m0uw/tEqRlzZLuCM5fxRq4TI2NqCy2kywJwGUz+qiurquNp7kXqitVIik9imLgQXJyEIQFHwbJ/0I/3Dx7HewdPmIUTOq2F4FyYpuxpqXBs24KU5IXQk5PltIupLq1284HUoLj8Z3gHfZimloUrApCizHcNmi0KAXVMUnYUweXgX5QTzXDRAKn860vH7L9Et00FoiEyqDiqVPw/f0OIN0mlIU+pfwAEgF4q/3LF1QAAAABJRU5ErkJggg==";
  return n.jsxs("div", {
    className: "container-uTTkG2",
    children: [
      n.jsx("div", {
        className: "icon-wrap-Ybi1oq",
        children: n.jsx("img", {
          className: "icon-uQf3QS",
          src: s.m(e, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: true,
            bid: "cc_dreamina",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: false,
            escapeRule: "escape-report",
            reportUrl:
              "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
            htmlparserOptions: "{}",
            scmBranch: "-",
            scmName: "-",
            scmVersion: "-",
            webpackPluginVersion: "3.6.0",
            filename:
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTA1d1drZFdl$Xh-T$d4aWJs$jJZakpPT%dKN%9Xc*lNak-zWWpJMWJHSn$$bnBNTWpsc$pF-zRkR015-kd0-$$6RjBXb*MxT$$4W*JEQmFWekIxWk$oT05*bFlTbT$r$0%wOQ",
          }),
          alt: "Octo",
          draggable: false,
        }),
      }),
      n.jsx("span", {
        className: "text-T18xuO",
        children: "Octo",
      }),
      n.jsx("span", {
        className: "badge-xrzkIk",
        children: "Beta",
      }),
    ],
  });
}
