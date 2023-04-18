import styles from './ProfileApoyar.module.css'

const ProfileApoyar = () => {
  return (
    <div className={styles.apoyar}>
      <p>
        Si te gusta lo que lees puedes apoyarme haciendo una donación con
        PayPal, de antemano gracias por tu apoyo.
      </p>
      <form
        action='https://www.paypal.com/cgi-bin/webscr'
        method='post'
        target='_top'
      >
        <input type='hidden' name='cmd' value='_s-xclick' />
        <input type='hidden' name='hosted_button_id' value='SJZPTCRX7TYGA' />
        <input
          type='image'
          src='https://www.paypalobjects.com/webstatic/en_US/btn/btn_donate_pp_142x27.png'
          border='0'
          name='submit'
          title='PayPal - The safer, easier way to pay online!'
          alt='Donate with PayPal button'
        />
      </form>
      <p className={styles.cripto}>
        Puedes donar criptomonedas con: <br />
        <strong>TRX Tron red TRC20:</strong> <br />
        TDDmbLNFcjYsddsdiUAgxDDTaR5EarDbKo <br />
        <strong>BTC Bitcoin red BTC:</strong> <br />
        1Bd849Xr3T3i9nn96uF2JuYhp98wZyod6Q
      </p>
      <q className={styles.citaBible}>
        No hay un amor más grande que el dar la vida por los amigos. Juan 15:13
      </q>
    </div>
  )
}

export default ProfileApoyar
