export function listenMessage<T>(callback: (response: T | null) => {}) {
  if (typeof window === "undefined") return;
  window.addEventListener("message", (event) => {
    if (event.origin === "https://tla-front-end.vercel.app") {
      callback(event.data);
    } else {
      return;
    }
  });
}

export function postMessage(targetOrigin: string, messageContent: string) {
  const url = new URL(targetOrigin);
  if (typeof window === "undefined") return;
  window.postMessage(messageContent, url.toString());
}
