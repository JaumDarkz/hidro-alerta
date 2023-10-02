import Image from 'next/image'

import styles from './styles.module.scss'

import googlePlay from './assets/googleplay.svg'
import apk from './assets/apk.svg'

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.textContainer}>
          <div className={styles.text1}>
          Perceberam ainda que os problemas da baixinha sempre estiveram ali e nunca foi de interesse dos gestores municipais em promover um bairro digno de moradia para os seabrenses daquela região.
          </div>

          <div className={styles.text2}>
          Através da coleta de dados, perceberam ainda que existe uma série de problemas em comum durante toda a extensão da baixinha, porém, a água é o principal motivo, seja pela abundância ou ainda pela falta que nossa cidade sofre sem reservatório próprio.
          </div>
        </div>

        <div className={styles.lineContainer}>
          <div className={styles.line} />
        </div>
      </div>
    </div>
  )
}

export default Content