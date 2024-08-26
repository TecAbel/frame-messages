export function listenMessage<T>(
  origin: URL,
  callback: (response: T | null) => void,
) {
  if (typeof window === "undefined")
    throw new Error("frame-messages: window is undefined");
  window.addEventListener("message", (event) => {
    if (event.origin === origin.toString()) {
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
