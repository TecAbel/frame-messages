export function listenMessage<T>(
  origin: URL,
  callback: (response: T | null) => void,
) {
  if (typeof window === "undefined")
    throw new Error("frame-messages: window is undefined");
  window.addEventListener("message", (event) => {
    if (event.origin === origin.origin) {
      callback(event.data);
    } else {
      return;
    }
  });
}

export function postMessage(targetOrigin: URL, messageContent: string) {
  if (typeof window === "undefined") return;
  window.postMessage(messageContent, targetOrigin.origin);
}
