import Image from 'next/image'
import { useState } from 'react'

import styles from './styles.module.scss'

import hamburguermenu from '../../public/assets/hamburguermenu.svg'
import closesvg from '../../public/assets/close.svg'

const NavBar = () => {
  const [menu, setMenu] = useState(false)
  
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

            <div onClick={() => window.open('/sobre', '_self')}>
              Sobre
            </div>

            <div onClick={() => window.open('/amostra', '_self')}>
              Funcionamento
            </div>

            <div onClick={() => window.open('/galeria', '_self')}>
              Galeria
            </div>
          </div>

          <div className={styles.hamburguerMenu} onClick={() => setMenu(true)}>
            <Image src={hamburguermenu} alt='Menu' width={35} />
          </div>

          {menu == true ? 
            <div className={styles.menuContainer}>
              <div className={styles.closeContainer}>
                <Image style={{cursor: 'pointer'}} src={closesvg} alt='Fechar' onClick={() => setMenu(false)}/>
              </div>

              <div className={styles.optionsContainer}>
                <div className={styles.option} onClick={() => window.open('/', '_self')}>
                  Início
                </div>

                <div className={styles.option} onClick={() => window.open('/sobre', '_self')}>
                  Sobre
                </div>

                <div className={styles.option} onClick={() => window.open('/amostra', '_self')}>
                  Funcionamento
                </div>

                <div className={styles.option} onClick={() => window.open('/galeria', '_self')}>
                  Galeria
                </div>
              </div>
            </div>
          : null}
        </div>

        <div className={styles.centerLine}>
          <div className={styles.line}/>
        </div>
      </div>
    </div>
  )
}

export default NavBar