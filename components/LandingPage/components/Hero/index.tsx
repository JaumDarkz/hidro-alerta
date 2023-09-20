import Image from 'next/image'

import styles from './styles.module.scss'

import appdemo from '@/public/assets/arduino.png'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.leftSide}>
          <div className={styles.title}>
            Conheça a <br /> <span>Solução</span>
          </div>

          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>

          <div className={styles.buttonContainer}>
            <div className={styles.button}>
              Estou Interessado
            </div>
          </div>
        </div>

        <div className={styles.rightSide}>
          <Image src={appdemo} alt='App' width={650}/>
        </div>
      </div>
    </div>
  )
}

export default Hero