# @tecabel/frame-messages

This is a simple library to send and receive web messages in js and typescript projects

## Usage

```typescript
import {listenMessage , postMessage} from '@tecabel/frame-messages'

listenMessage<T>('http://localhost:3000',(value: T | null) => {
    // your code here
  })

postMessage('http://localhost:3000', messageContent: 'hi!')

```
