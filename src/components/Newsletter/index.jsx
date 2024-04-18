import { useState } from 'react'
import styles from './Newsletter.module.css'
import { sendEventData } from '@/helpers/sendEventData'

const URL_API = 'https://contact.johnserrano.co/api/contact'

function Newsletter() {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target
    // console.log(form)

    const formData = new FormData(form)

    // const formJson = Object.fromEntries(formData.entries())
    // console.log(formJson)
    dataLayer.push({
      email: formData.get('email'),
    })

    setButtonDisabled(true)

    const dataJson = JSON.stringify(Object.fromEntries(formData.entries()))

    const hashName = await codeHashSHA256(formData.get('firstName'))
    const hashEmail = await codeHashSHA256(formData.get('email'))

    fetch(URL_API, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: dataJson,
    })
      .then(res => res.json())
      .then(data => {
        setMessage(data?.message)
        setStatus(data?.status)
        // document.getElementById('formContactenos').reset()
        sendEventData({
          event_name: 'CompleteRegistration',
          event_id: 'newsletter_form_id',
          fn: hashName,
          em: hashEmail,
        })
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        if (err) console.log(`Error ${err}`)
      })
      .finally(() => {
        // console.log('Se termino la promise')
        setButtonDisabled(false)
      })
  }

  async function codeHashSHA256(text) {
    const encoder = new TextEncoder()
    const dataBytes = encoder.encode(text.toLocaleLowerCase().trim())

    const hashBuffer = await crypto.subtle.digest('SHA-256', dataBytes)

    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('')

    return hashHex
  }

  return (
    <div className={styles.Newsletter}>
      <h3>¿Te gusta lo que lees?</h3>
      <span>Suscríbete</span>
      {(status === 200 || status === 500) && (
        <p id='message_newsletter' className={styles.message}>
          {message}
        </p>
      )}

      <form id='form_newsletter' method='post' className={styles.newsletter} onSubmit={handleSubmit}>
        <input type='text' name='firstName' placeholder='Nombres' required />
        <input type='email' name='email' placeholder='Email' required />

        <button id='enviar' className='enviar' type='submit' disabled={buttonDisabled}>
          Suscribirme
        </button>

        <aside className={styles.messageRequest}>{message}</aside>
      </form>
    </div>
  )
}

export default Newsletter
