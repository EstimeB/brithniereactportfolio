import React from "react";

export default function Home() {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>Contact</h1>
      <p style={styles.p}>
        Email: &nbsp;
        <a href="mailto:patrick@gmail.com">estimebrithnie@yahoo.com</a>
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
  img1: {
    border: "solid",
    borderWidth: "1px",
    borderColor: "goldenrod",
    boxShadow: "15px 15px 35px rgb(151, 151, 143)",
  },
  h1: {
    fontSize: "45px",
  },
  h3: {
    marginTop: "-35px",
    fontSize: "22px",
  },
  p: {
    marginTop: "-15px",
    gap: "15px",
  },
};
