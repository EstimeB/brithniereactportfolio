import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uzqke1u",
        "template_xfq5dwh",
        form.current,
        "LcW3i_988XlqEoQHP"
      )
      .then(
        (result) => {
          console.log(result.text);
          document.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div style={styles.divForm}>
      <h1 style={styles.h1}>Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        {/* <label>Name</label><br></br> */}
        <input
          style={styles.input}
          type="text"
          name="user_name"
          placeholder="Name"
        />
        <br></br>
        {/* <label>Email</label><br></br> */}
        <input
          style={styles.input}
          type="email"
          name="user_email"
          placeholder="Email"
        />
        <br></br>
        {/* <label>Message</label><br></br> */}
        <textarea
          style={styles.textArea}
          name="message"
          placeholder="Message..."
        />
        <br></br>
        <input type="submit" value="Send" style={styles.send}/>
      </form>
    </div>
    // <div style={styles.div}>
    //   <p style={styles.p}>
    //     Email: &nbsp;
    //     <a href="mailto:estimebrithnie@yahoo.com">Brithnie Estime</a>
    //   </p>
    //   <p style={styles.p}>Phone: &nbsp; (760)267-7388</p>
    // </div>
  );
}

const styles = {
  divForm: {
    textAlign: "center",
    textShadow: "15px 15px 35px rgb(151, 151, 143)",
    marginRight: "30%",
    marginLeft: "30%",
  },
  input: {
    width: "100%",
    height: "40px",
    marginBottom: '10px',
    borderRadius: '7px',
    boxShadow: "5px 5px 10px rgb(151, 151, 143)",
  },
  textArea: {
    width: "100%",
    height: "140px",
    borderRadius: '7px',
    boxShadow: "5px 5px 10px rgb(151, 151, 143)",
  },
  h1: {
    marginTop: "130px",
    fontSize: "45px",
  },
  send: {
    marginTop: "10px",
    width: "100%",
    height: "40px",
    borderRadius: '7px',
    boxShadow: "5px 5px 10px rgb(151, 151, 143)",
    background: "rgb(44, 86, 86)"
  }
  // div: {
  //   textAlign: "center",
  //   textShadow: "15px 15px 35px rgb(151, 151, 143)",
  // },
  // p: {
  //   marginTop: "-15px",
  // },
};
