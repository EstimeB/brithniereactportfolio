import React from "react";

export default function Contact() {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>Contact</h1>
      <p style={styles.p}>
        Email: &nbsp;
        <a href="mailto:estimebrithnie@yahoo.com">Brithnie Estime</a>
      </p>
      <p style={styles.p}>Phone: &nbsp; (760)267-7388</p>
    </div>
  );
}

const styles = {
  div: {
    textAlign: "center",
    textShadow: "15px 15px 35px rgb(151, 151, 143)",
  },
  h1: {
    marginTop: '130px',
    fontSize: "45px",
  },
  p: {
    marginTop: "-15px",
  },
};
