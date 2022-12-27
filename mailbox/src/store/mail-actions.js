import { mailActions } from '../store/mail-slice';

export const addMail = (mail, clearInput) => {
  const senderEmail = mail.from.replace('@', '').replace('.', '');
  const receiverEmail = mail.to.replace('@', '').replace('.', '');
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://mailbox-7121f-default-rtdb.firebaseio.com/${senderEmail}.json`,
        {
          method: 'POST',
          body: JSON.stringify(mail),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      await fetch(
        `https://mailbox-7121f-default-rtdb.firebaseio.com/${receiverEmail}.json`,
        {
          method: 'POST',
          body: JSON.stringify(mail),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        dispatch(
          mailActions.add({
            id: data.name,
            ...mail,
          })
        );
        clearInput();
      } else {
        throw data.error;
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const replaceMail = (email) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://mailbox-7121f-default-rtdb.firebaseio.com/${email}.json`
      );

      const data = await response.json();

      if (response.ok) {
        let mailData = [];

        for (let key in data) {
          mailData = [{ id: key, ...data[key] }, ...mailData];
        }

        dispatch(mailActions.replace(mailData));
      } else {
        throw data.error;
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};