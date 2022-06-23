import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Import the helper function that will check if email is valid
import { validateEmail } from "../utils/helpers";

export default function Contact() {
  const form = useRef();

  // Create state variables for the fields in the form as well as setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Will check if the email is not valid or if the userName is empty. If so will displayed an error message on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email, message, or username is invalid");
      // Will exit out of the code block if something is wrong so that the user can correct it
      return;
    }

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
        },
        (error) => {
          console.log(error.text);
        }
      );

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div style={styles.divForm}>
      <h1 style={styles.h1}>Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        {/* <label>Name</label><br></br> */}
        <input
          style={styles.input}
          value={userName}
          type="text"
          name="userName"
          onChange={handleInputChange}
          placeholder="Name"
        />
        <br></br>
        {/* <label>Email</label><br></br> */}
        <input
          style={styles.input}
          value={email}
          type="email"
          name="email"
          onChange={handleInputChange}
          placeholder="Email"
        />
        <br></br>
        {/* <label>Message</label><br></br> */}
        <textarea
          style={styles.textArea}
          value={message}
          name="message"
          type="text"
          onChange={handleInputChange}
          placeholder="Message..."
        />
        <br></br>
        <input type="submit" value="Send" style={styles.send} />
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
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
    marginBottom: "10px",
    borderRadius: "7px",
    boxShadow: "5px 5px 10px rgb(151, 151, 143)",
  },
  textArea: {
    width: "100%",
    height: "140px",
    borderRadius: "7px",
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
    borderRadius: "7px",
    boxShadow: "5px 5px 10px rgb(151, 151, 143)",
    background: "rgb(44, 86, 86)",
  },
  // div: {
  //   textAlign: "center",
  //   textShadow: "15px 15px 35px rgb(151, 151, 143)",
  // },
  // p: {
  //   marginTop: "-15px",
  // },
};
