import Image from 'next/image'

import NavBar from '@/components/NavBar'

import circuit from '@/public/assets/circuit.svg'

export default function Amostra() {
  return (
    <>
      <NavBar />

      <div style={{display: 'flex', justifyContent: 'center', marginTop: '70px'}}>
        <Image width={650} src={circuit} alt='Circuito' />
      </div>
    </>
  )
}
