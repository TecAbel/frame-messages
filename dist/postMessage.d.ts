export declare function listenMessage<T>(origin: URL, callback: (response: T | null) => void): void;
export declare function postMessage(targetOrigin: string, messageContent: string): void;
