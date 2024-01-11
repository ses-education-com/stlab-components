import React, { useEffect, useState } from "react";
import { Button, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import "./notifications.scss";
import { Close } from "@material-ui/icons";
import actionTypes from './actionTypes'
import reducers from './reducers'

const defaultConfig = {
  // number of milliseconds to auto-close the message in
  // if empty - message won't close
  autoCloseIn : 3000,
  // array of Alert closing reasons that should not close the alert
  doNotCloseOn : ["clickaway"],
  // closing animation time in milliseconds
  animationTime : 300,
  alertProps : {
    elevation: 6,
    variant: "filled",
  },
  manyMessagesIs: 2
  // closeMethod: "delete", // delete|hide  
}

const CustomAlert = (props) => {
  const {
    children,
    onClose,
    autoCloseIn,
    /**
     * Array of reasons that won't close the alert. Pass null or empty array to close on every reason
     */
    doNotCloseOn, // = ["clickaway"]
    animationTime = 300,
    ...other
  } = props;

  let [cssClass, setCssClass] = useState("");
  let [isClosing, setIsClosing] = useState(false);

  /**
   * Starts close animation and sets onClose timer to animation end
   */
  const closeThis = (event, reason) => {
    // console.debug("closethis", reason);

    if (Array.isArray(doNotCloseOn) && doNotCloseOn.includes(reason)) {
      // console.debug("closethis: do not close because of reason", reason);
      return;
    }

    setCssClass("closing");
    setTimeout(onClose, animationTime);
  };

  useEffect(() => {
    if (!isClosing && autoCloseIn && typeof onClose === "function") {
      // console.debug("closethis autoCloseIn", autoCloseIn);
      setIsClosing(true);
      // set auto-close timer
      setTimeout(closeThis, autoCloseIn);
    }
  });

  return (
    <Snackbar open={true} onClose={closeThis} className={cssClass}>
      <Alert {...other} onClose={closeThis}>
        {children}
      </Alert>
    </Snackbar>
  );
};

class Notifications extends React.Component {
  
  closeHandler = (index) => {
    const { onCloseMessage } = this.props;

    if (typeof onCloseMessage === "function") {
      onCloseMessage(index);
      return;
    }
  };

  render() {
    let { messages, className = "notifications-container", config = {}, onCloseAll } = this.props;

    // const { messages } = this.state;

    
    console.debug("Notofications messages:", messages);

    config = {
      ...defaultConfig,
      ...config
    }

    const {    
      autoCloseIn ,      
      doNotCloseOn, 
      // closeMethod,     
      animationTime,
      alertProps,
      topToBottom,
      manyMessagesIs,
    } = config;

    if (!Array.isArray(messages)) {
      console.error("Notitifactions error: messages is not an array!");
      return "";
    }

    // console.debug("messages", messages.reverse() );

    messages = topToBottom ? [...messages].reverse() : messages;


    const visibleMessages = messages.filter( m => !m.hidden );
    const messageCount = visibleMessages.length;    
    const hasManyItems = messageCount > manyMessagesIs ;


    return (
      <div className={`${className}${ hasManyItems ? " has-many-items" : "" }`}>
        {hasManyItems && <Button className="close-button" onClick={ onCloseAll || (() => console.debug("closing all")) }><Close size="small" color="secondary"/>close all</Button>}
        <div className={`messages`}>
          {!messageCount
            ? null
            : visibleMessages.map((m) => {
                console.debug("message ", m)
                
                // don't show hidden messages
                if( m.hidden ) return null ;

                return (
                  <CustomAlert
                    key={`notification-${m.id}`}
                    severity={m.type}
                    onClose={() => this.closeHandler(m.id)}
                    autoCloseIn={ m.autoCloseIn === null ||  m.autoCloseIn === undefined ? autoCloseIn : m.autoCloseIn }
                    {...{ doNotCloseOn, animationTime }}
                    {...alertProps}
                  >
                    {m.message}
                  </CustomAlert>
                );
              })}
        </div>
      </div>
    );
  }
}

export default Notifications;
export {actionTypes, reducers};