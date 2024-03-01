'use client'

import styles from '../lib/styles/Home.module.css';
import { useRef } from 'react';

export default function Contact() {

  const name = useRef(null)
  const email = useRef(null)
  const message = useRef(null)

  async function sendForm(name, email, message) {
    try {
      const response = await fetch(
        "https://2djjbv3sdl.execute-api.eu-west-2.amazonaws.com/default/sendHapistaxEmail",
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            accept: 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            message,
          })
        }
      );
      const msg = await response.json();
      console.log({msg});
    } catch (err) {
      alert(`err: ${err}`);
    }
  }

  return (
    <main className={styles.contents}>
      <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          sendForm(
            name.current.value,
            email.current.value,
            message.current.value
          )
        }}
      >
        <input type="text" name="name" ref={name} placeholder="name" />
        <br />
        <input type="text" name="email" ref={email} placeholder="email" />
        <br />
        <textarea name="message" ref={message} placeholder="message" />
        <br />
        <button type="submit">hello</button>
      </form>
    </div>
    </main>
  )
}