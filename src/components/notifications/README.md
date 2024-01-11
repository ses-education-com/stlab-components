# Notifications component
Shows messages passed in `messages` props array

## props:
- `messages` array of message objects 
- `className` string that will be used as CSS class name for wrapper container. Defaults to `notifications-container`
- `onCloseAll` callback to call on 'close all' button click
- `config` configuration object. Accepts the next values:
  - `doNotCloseOn` - array of strings. All "reasons" that should not close the alert. Defaults to `[ "clickaway" ]`. Pass empty array or falsy value to close on any reason.
  - `autoCloseIn` integer. Number of milliseconds to autoclose the message after, by default. Can be overriden by adding `autoCloseIn` value to message object. If `false`- messages won't be closed automatically, if `null` - default value will be used.
  - <s>`closeMethod` string `[delete|hide]` - what to do with message when closing. When `hide`, the message is updated with property `hidden: true`. Defaults to `delete`.  </s>
  - `animationTime` closing animation time in milliseconds
  - `alertProps` object that is passed to Alert component. defaults to:
      ```js 
      {
        elevation: 6,
        variant: "filled",
      }  
  - `topToBottom` boolean. Whether to display last messages at the bottom. Defaults to true. If false, the messages are listed bottom to top.
  - `manyMessagesIs` - number of messages that is considered "many" - after that number a scrolling box will be shown around the messages. Defaults to 2

## message object
Object that defines a single message.
```js
  {
      id: "as#$gsa", // unique string identificator (e.g. uniqid() )
      type: "error", // can be error|warning|info|success
      message: "Error loading data", // string to show within alert (not HTML)
      autoCloseIn:  1000 // [optional] positive integer - omit to use the default 3 seconds, set to a positive integer to override defaults, set to falsy value to not use autoclose
  }
