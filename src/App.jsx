import { useState, useEffect } from 'react'
import Formulario from './components/Fomulario'
import Resultado from './components/Resultado'
import TabelaIMC from './components/TabelaIMC'

export default () => {
  const [altura, setAltura] = useState(1.74)
  const [peso, setPeso] = useState(65)

  function exibirEstado(evt){
    evt.preventDefault()
    console.log(altura, peso);
  }

  return (
    <div className='container'>
      <Formulario alteraPeso={({ target }) => { setPeso(target.value) }} alteraAltura={({ target }) => { setAltura(target.value) }} calcular={exibirEstado} />
      <Resultado peso={peso} altura={altura} />
      <TabelaIMC />
    </div>
  )
}
