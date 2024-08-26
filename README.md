# @tecabel/frame-messages

This is a simple library to send and receive web messages in js and typescript projects

## Usage

```typescript
import {listenMessage , postMessage} from '@tecabel/frame-messages'

const url = new URL('http://localhost:3000')
listenMessage<T>(url,(value: T | null) => {
    // your code here
  })

postMessage(url, messageContent: 'hi!')

```
