import { useEffect, useState } from 'react'
import Button from './components/Button'
import DivColor from './components/DivColor'

function App() {
  const [counter, setCounter] = useState(0)
  const [counterMessage, setCounterMessage] = useState('')
  const showDiv = counter % 2 === 0

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCounterMessage(
      counter % 2 === 0 ? 'Contador par: div visivel' : 'Contador impar: div oculta',
    )
  }, [counter])

  function handleClick() {
    setCounter((currentCounter) => currentCounter + 1)
  }

  return (
    <div>
      <h1>Hello World</h1>
      <Button label="Clique aqui para atualizar o contador" onClick={handleClick} />
      <p>Contador: {counter}</p>
      <p>{counterMessage}</p>
      {showDiv && <DivColor />}
    </div>
  )
}

export default App
