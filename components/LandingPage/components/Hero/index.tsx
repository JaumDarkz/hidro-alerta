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
          Os alunos do Colégio Estadual de Seabra | Tempo Integral, movidos pelo interesse em pesquisa e indignados com a situação do bairro Baixinha de Seabra, pesquisaram sobre os impactos e problemas causados pelo racismo ambiental.
          </div>

          <div className={styles.buttonContainer}>
            <div className={styles.button} onClick={() => window.open('/sobre', '_self')}>
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