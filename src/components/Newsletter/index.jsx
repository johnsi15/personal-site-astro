import { useState } from 'react'
import styles from './Newsletter.module.css'

const URL_API = 'https://contact.johnserrano.co/api/contact'

function Newsletter() {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  function handleSubmit(e) {
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

    const dataJson = JSON.stringify( Object.fromEntries(formData.entries()))

    fetch(URL_API, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: dataJson,
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data?.message)
        setStatus(data?.status)
        // document.getElementById('formContactenos').reset()
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        if (err) console.log(`Error ${err}`)
      })
      .finally(() => {
        console.log('Se termino la promise')
        setButtonDisabled(false)
      })
  }

  return (
    <div className={styles.Newsletter}>
      <h3>¿Te gusta lo que lees?</h3>
      <span>Suscríbete</span>
      {status === 200 || status === 500 ? (
        <p className={styles.message}>{message}</p>
      ) : (
        <form
          method='post'
          className={styles.newsletter}
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            name='firstName'
            placeholder='Nombres'
            required
            // ref={this.setInputName}
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            required
            // ref={this.setRefEmail}
          />

          <button
            id='enviar'
            className='enviar'
            type='submit'
            disabled={buttonDisabled}
          >
            Suscribirme
          </button>

          <aside className={styles.messageRequest}>{message}</aside>
        </form>
      )}
    </div>
  )
}

export default Newsletter
