import React from 'react';

import classes from './MailData.module.css';

const MailData = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.mailId}>
        <i className='ri-user-shared-fill'></i>
        <div>{props.mailId}</div>
      </div>
      <div className={classes.title}>{props.mail.title}</div>
      <div className={classes.body}>{props.mail.text}</div>
    </div>
  );
};

export default MailData;