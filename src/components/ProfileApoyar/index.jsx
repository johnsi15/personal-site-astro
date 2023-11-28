import styles from './ProfileApoyar.module.css'

const ProfileApoyar = () => {
  return (
    <div className={styles.apoyar}>
      <p>
        Si te gusta lo que lees y quieres respaldar mi trabajo, puedes realizar una donación a través de Tarjeta de crédito o PSE.
        Además, estoy disponible para recibir tu apoyo por correo electrónico en <strong>me@johnserrano.co</strong> si
        prefieres otras opciones. Tu apoyo ayuda a mantener este proyecto en marcha. ¡Gracias por tu apoyo!
      </p>
      <a 
        className={styles.linkDonacion} 
        href="https://link.mercadopago.com.co/johnserrano"  
        aria-label='Donar aquí Mercado Pago' 
        target='_blank'
        rel='noopener noreferrer'
      >Donar aquí</a>
      <p className={styles.cripto}>
        Puedes donar criptomonedas con: <br />
        <strong>TRX Tron red TRC20:</strong> <br />
        TR3nVEsRexQkdXasRLAXLW2n7DmyS7ksrq <br />
        <strong>BTC Bitcoin red BTC:</strong> <br />
        1Bd849Xr3T3i9nn96uF2JuYhp98wZyod6Q <br />
        <strong>BNB Smart Chain BSC:</strong> <br />
        0xe8ac8dc8e56208d4dad5f719ba627436187acc16
      </p>
      <q className={styles.citaBible}>
        No hay un amor más grande que el dar la vida por los amigos. Juan 15:13
      </q>
    </div>
  )
}

export default ProfileApoyar
