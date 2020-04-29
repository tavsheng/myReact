import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {sendMessageActionCreator,updateNewMessageTextActionCreator} from './../../redux/dialogsReducer'


;

const Dialogs = (props) => {

  let dialogsElement = props.dialogsPage.dialogs
.map (d => <Dialog name={d.name} id= {d.id}/>);

let messagesElement = props.dialogsPage.messages
.map (m => <Message message= {m.message} id={m.id}/>);

let newMessageElement= React.createRef();

let sendMessage = () => {  
  let body= newMessageElement.current.value;
  props.sendMessage ();
}


  let onMessageChange =() => {
    let body= newMessageElement.current.value;
    props.updateNewMessageBody (body);
    
}
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
{dialogsElement}

      </div>
      <div className={s.messages}>
    {messagesElement}
      </div>
      <div>
        <textarea ref= {newMessageElement}
        onChange= {onMessageChange}
        value= {props.dialogsPage.newMessageBody}/>
      </div>
      <div>
        <button onClick= {sendMessage}>Send</button>
      </div>

    </div>
  );
}



export default Dialogs;
