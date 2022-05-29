import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uzqke1u', 'template_xfq5dwh', form.current, 'LcW3i_988XlqEoQHP')
      .then((result) => {
          console.log(result.text);
          document.location.reload();
        }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
    // <div style={styles.div}>
    //   <h1 style={styles.h1}>Contact</h1>
    //   <p style={styles.p}>
    //     Email: &nbsp;
    //     <a href="mailto:estimebrithnie@yahoo.com">Brithnie Estime</a>
    //   </p>
    //   <p style={styles.p}>Phone: &nbsp; (760)267-7388</p>
    // </div>
  );
}

const styles = {
  div: {
    textAlign: "center",
    textShadow: "15px 15px 35px rgb(151, 151, 143)",
  },
  h1: {
    marginTop: "130px",
    fontSize: "45px",
  },
  p: {
    marginTop: "-15px",
  },
};
