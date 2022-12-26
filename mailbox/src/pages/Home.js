import React, { useState, useRef } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';

import classes from './Home.module.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { json } from 'react-router-dom';

const Home = () => {
  const emailRef = useRef();
  const titleRef = useRef();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorChange = (editorState) => {
    setEditorState(editorState);
    // console.log(editorState.getCurrentContent().getPlainText());
  };

  const sendMailHandler = async(event) => {
    event.preventDefault();

    try{
      const response = await fetch('https://mailbox-7121f-default-rtdb.firebaseio.com/mails.json',{
        method: 'POST',
        body: JSON.stringify({
          to: emailRef.current.value,
          from: JSON.parse(localStorage.getItem('idToken')).email,
          title: titleRef.current.value,
          text: editorState.getCurrentContent().getPlainText(),
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await response.json();

      if(response.ok) {
          console.log(data);
      } else {
        throw data.error
      }
    } catch(error) {
      console.log(error.message);
    }
  }

  return (
    <React.Fragment>
      <h1 className={classes.h1}>
        <span>Mail Box client</span>
      </h1>
      <form className={classes.form} onSubmit={sendMailHandler}>
        <div className={classes.to}>
          <label>To: </label>
          <input type='email' ref={emailRef} required/>
        </div>
        <div className={classes.title}>
          <label>Subject: </label>
          <input type='text' ref={titleRef} required/>
        </div>
        <Editor
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          wrapperClassName={classes['wrapper-class']}
          editorClassName={classes['editor-class']}
          toolbarClassName={classes['toolbar-class']}
        />
        <div className={classes.button}>
          <button type='submit'>Send</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Home;