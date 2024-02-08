import styles from './ProfileApoyar.module.css'

const ProfileApoyar = () => {
  return (
    <div className={styles.apoyar}>
      <header className={styles.header}>
        <h2 className={styles.title}>Apoyo</h2>
      </header>
      <p>
        Estoy muy feliz de que disfrutes del contenido de johnserrano.co, si te gusta lo que lees y quieres respaldar mi trabajo, puedes realizar una donación a través de Tarjeta de crédito o PSE.
        Además, estoy disponible para recibir tu apoyo por correo electrónico en <strong>me@johnserrano.co</strong> si
        prefieres otras opciones. Tu apoyo ayuda a mantener este proyecto en marcha. ¡Gracias por tu apoyo!
      </p>

      <div className={styles.btns}>
        <a 
          className={styles.linkDonacion} 
          href="https://link.mercadopago.com.co/johnserrano"  
          aria-label='Donar aquí Mercado Pago' 
          target='_blank'
          rel='noopener noreferrer'
        >Donar aquí</a>

        <a
          href='https://www.buymeacoffee.com/jandrey15'
          className={[styles.linkDonacion, styles.bgWhite].join(' ')}
          aria-label='Tu apoyo es importante'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='/bmc-logo.svg' alt='Cómprame un café' width={20} height={20} />
          Cómprame un café
        </a>
      </div>
      {/* <p className={styles.cripto}>
        Puedes donar criptomonedas con: <br />
        <strong>TRX Tron red TRC20:</strong> <br />
        TR3nVEsRexQkdXasRLAXLW2n7DmyS7ksrq <br />
        <strong>BTC Bitcoin red BTC:</strong> <br />
        1Bd849Xr3T3i9nn96uF2JuYhp98wZyod6Q <br />
        <strong>BNB Smart Chain BSC:</strong> <br />
        0xe8ac8dc8e56208d4dad5f719ba627436187acc16
      </p> */}

      <header className={[styles.header, styles.noMoney].join(' ')}>
        <h2 className={styles.title}>Apoyo no monetario</h2>
      </header>
      <p>
        Otra manera de ayudarme es difundiéndolo de boca en boca! Si consideras que el contenido que comparto en
        johnserrano.co puede ser valioso para tus amig@s y compañer@s, te invito a compartirlo en Twitter, LinkedIn o
        en la plataforma que prefieras. Tu recomendación puede marcar la diferencia. ✨
      </p>
      <q className={styles.citaBible}>
        No hay un amor más grande que el dar la vida por los amigos. Juan 15:13
      </q>
    </div>
  )
}

export default ProfileApoyar
