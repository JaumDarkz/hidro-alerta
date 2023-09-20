import Image from 'next/image'

import styles from './styles.module.scss'

import logo from './assets/logo.svg'

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.rowContainer}>
          <div className={styles.logo} onClick={() => window.open('/', '_self')}>
            HIDRO ALERTA
          </div>

          <div className={styles.midOptions}>
            <div onClick={() => window.open('/', '_self')}>
              Início
            </div>

            <div onClick={() => window.scrollTo({top: document.body.scrollHeight,behavior: 'smooth'})}>
              Sobre
            </div>

            <div onClick={() => window.open('/amostra', '_self')}>
              Funcionamento
            </div>
          </div>

          <div className={styles.authOptions}>
            <div onClick={/*() => window.open('/login', '_self')*/() => console.log('login')}>
              Login
            </div>

            <div className={styles.signIn} onClick={/*() => window.open('/signup', '_self')*/() => console.log('signup')}>
              <div className={styles.border}>
                Registro
              </div>
            </div>
          </div>
        </div>

        <div className={styles.centerLine}>
          <div className={styles.line}/>
        </div>
      </div>
    </div>
  )
}

export default NavBar