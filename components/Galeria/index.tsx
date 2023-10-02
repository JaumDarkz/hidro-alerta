import Image from 'next/image'

import styles from './styles.module.scss'

import photo1 from '@/public/assets/galeria/1.jpg'
import photo2 from '@/public/assets/galeria/2.jpg'
import photo3 from '@/public/assets/galeria/3.jpg'
import photo4 from '@/public/assets/galeria/4.jpg'
import photo5 from '@/public/assets/galeria/5.jpg'
import photo6 from '@/public/assets/galeria/6.jpg'
import photo7 from '@/public/assets/galeria/7.jpg'

const GaleriaComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <Image width={300} src={photo1} alt='Foto' />
      </div>

      <div className={styles.photo}>
        <Image width={300} src={photo2} alt='Foto' />
      </div>

      <div className={styles.photo}>
        <Image width={300} src={photo3} alt='Foto' />
      </div>

      <div className={styles.photo}>
        <Image width={300} src={photo4} alt='Foto' />
      </div>

      <div className={styles.photo}>
        <Image width={300} src={photo5} alt='Foto' />
      </div>

      <div className={styles.photo}>
        <Image width={300} src={photo6} alt='Foto' />
      </div>

      <div className={styles.photo}>
        <Image width={300} src={photo7} alt='Foto' />
      </div>
    </div>
  )
}

export default GaleriaComponent