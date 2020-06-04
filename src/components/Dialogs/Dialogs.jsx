import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const Dialogs = (props) => {

  let dialogsElement = props.dialogsPage.dialogs
    .map(d => <Dialog name={d.name} id={d.id} />);

  let messagesElement = props.dialogsPage.messages
    .map(m => <Message message={m.message} id={m.id} />);

    let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

   if (!props.isAuth) return <Redirect to={"/login"} />

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElement}

      </div>
      <div className={s.messages}>
        {messagesElement}
      </div>

      <AddMessageFormRedux onSubmit = {addNewMessage}/>
    </div>

  );
}
const maxlength50 = maxLengthCreator(50)
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea}
       validate = {[required, maxlength50]}
       name='newMessageBody'
       placeholder='Enter your message' />

      <div>
        <button>Send</button>
      </div>

    </form>
  );
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);
export default Dialogs;
