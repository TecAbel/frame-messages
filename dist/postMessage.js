"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listenMessage = listenMessage;
exports.postMessage = postMessage;
function listenMessage(origin, callback) {
    if (typeof window === "undefined")
        throw new Error("frame-messages: window is undefined");
    window.addEventListener("message", (event) => {
        if (event.origin === origin.toString()) {
            callback(event.data);
        }
        else {
            return;
        }
    });
}
function postMessage(targetOrigin, messageContent) {
    const url = new URL(targetOrigin);
    if (typeof window === "undefined")
        return;
    window.postMessage(messageContent, url.toString());
}
