import React from 'react';
import aboutI from '../images/about.gif';

export default function About() {
  return (
    <div style={styles.div}>
      <img style={styles.img1} src={aboutI} alt="Avatar" />
      <h1 style={styles.h1}>About me</h1>
      <p style={styles.p}>
      Will soon graduate from full stack academy. Currently learning and will soon be an expert in the ins and outs of the web. Already am obsses with the field and expect to be an outstanding full stack web developer. I like cleanly written codes and when it comes to CSS/server side scripting, I am obsses with the details and ensuring that all users get the experience they deserve.
      </p>
    </div>
  );
}

const styles = {
  div: {
    textAlign: 'center',
    textShadow: '15px 15px 35px rgb(151, 151, 143)',
  },
  img1: {
    marginTop: '130px',
    border: 'solid',
    borderWidth: '1px',
    borderColor: 'goldenrod',
    boxShadow: '15px 15px 35px rgb(151, 151, 143)',
    height: '150px',
    width: '200px',
  },
  h1: {
    fontSize: '45px',
  },
  p: {
    marginTop: '-15px',
  }

}