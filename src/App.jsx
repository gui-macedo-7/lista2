import './App.css'
import Botao from './components/botao'
import Frase from './components/Frase'
import HelloWorld from './components/HelloWorld'
import Imagem from './components/Imagem'
import Lista from './components/Lista'
import Link from './components/Link'
import Titulo from './components/Titulo'
import BomDia from './components/BomDia'
import Div from './components/Div'
import TextoFragmento from './components/TextoFragmento'

function App() {

  return (
    <>
    <div className='App'>
    <HelloWorld />
    </div>

    <div>
      <Frase />
    </div>

    <div>
      <Lista />
    </div>

    <div>
      <Imagem />
    </div>

    <div>
      <Botao />
    </div>

    <div>
      <Link />
    </div>

    <div>
      <Titulo />
    </div>

    <div>
      <BomDia mensagem={true} />
      <BomDia mensagem={false} />
    </div>

    <div>
      <Div />
    </div>

    <div>
      <TextoFragmento />
    </div>

    </>
  )
}

export default App
