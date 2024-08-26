# @tecabel/frame-messages

This is a simple library to send and receive web messages in js and typescript projects

## Usage

```typescript
import {listenMessage , postMessage} from '@tecabel/frame-messages'

listenMessage<T>((value: T | null) => {
    // your code here
  })

postMessage(targetOrigin: string, messageContent: string)

```
