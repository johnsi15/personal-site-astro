import { useState } from 'react'
import styles from './Newsletter.module.css'
import { sendEventData } from '@/helpers/sendEventData'

const URL_API = '/api/newsletter'

function Newsletter() {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target

    const formData = new FormData(form)

    // const formJson = Object.fromEntries(formData.entries())
    // console.log(formJson)
    dataLayer.push({
      email: formData.get('email'),
    })

    setButtonDisabled(true)

    const formDataObj = {}
    for (const [key, value] of formData.entries()) {
      if (key === 'firstName') {
        formDataObj['names'] = value
      } else {
        formDataObj[key] = value
      }
    }

    // const dataJson = JSON.stringify(Object.fromEntries(formData))
    const dataJson = JSON.stringify(formDataObj)

    const hashName = await codeHashSHA256(formData.get('firstName'))
    const hashEmail = await codeHashSHA256(formData.get('email'))

    fetch(URL_API, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: dataJson,
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Algo salio mal :(')
        }

        if (res.status === 204) {
          return {
            message: '¡Gracias por suscribirte! Revisa tu bandeja de entrada para descargar tu libro.',
            status: 200,
          }
        }

        return res.json()
      })
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
        form.reset()
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
      <p className='text-white text-lg text-center mt-2'>
        🔥 ¡Obtén Gratis un Libro para Aprender Programación con uno de los Lenguajes Más Demandados de la Industria! 👇
      </p>
      <form id='form_newsletter' method='post' className={styles.newsletter} onSubmit={handleSubmit}>
        <input type='text' name='firstName' placeholder='Nombres' required />
        <input type='email' name='email' placeholder='Email' required />

        <button id='enviar' className='enviar' type='submit' disabled={buttonDisabled}>
          Suscribirme
        </button>

        <aside className='text-white mt-5 text-base text-center text-pretty w-[320px]'>{message}</aside>
      </form>
    </div>
  )
}

export default Newsletter
