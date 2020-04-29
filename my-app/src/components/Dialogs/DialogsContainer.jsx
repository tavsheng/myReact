import React from 'react';
import {sendMessageActionCreator,updateNewMessageBodyActionCreator} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch (sendMessageActionCreator())
    },
    updateNewMessageBody: (message) => {
      dispatch (updateNewMessageBodyActionCreator(message))
    }
  }
}
const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
