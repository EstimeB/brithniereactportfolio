import React from 'react';
import avatar from '../images/avatar.jpeg';

export default function Home() {
  return (
    <div style={styles.div}>
      <img style={styles.img1} src={avatar} alt="Avatar" />
      <h1 style={styles.h1}>Brithnie Estime</h1>
      <h3 style={styles.h3}>Full Stack Web Developer</h3>
      <p style={styles.p}>
        Knowledgeable and proficient in many technologies.
      </p>
    </div>
  );
}

const styles = {
  div: {
    textAlign: 'center',

  },
  img1: {
    border: 'solid',
    borderWidth: '1px',
    borderColor: 'goldenrod',
    boxShadow: '15px 15px 35px rgb(151, 151, 143)',
  },
  h1: {
    fontSize: '45px',
    textShadow: '15px 15px 35px rgb(151, 151, 143)',
  },
  h3: {
    marginTop: '-35px',
    fontSize: '22px'
  },
  p: {
    marginTop: '-15px',
  }
}