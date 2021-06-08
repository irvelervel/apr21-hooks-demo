import { useEffect, useState, useCallback } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  // hooks are a way of using component state and lifecycle in a function

  // USESTATE
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('Choose a name')
  // stateArray[0] --> the state variable
  // stateArray[1] --> the setter function

  // every time you call useState you will create something like this --> [stateVariable, setterFunction]

  // my two useState are declared at the top on the component
  // before the return, not in other functions, not in conditions, not in loops

  // USEEFFECT

  useEffect(
    () => {
      // useEffect is used for performing SIDE EFFECTS in your functional component
      // it's a replacement for:
      // componentDidMount
      // componentDidUpdate
      // componentWillUnmount
      fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => console.log(response))
    },
    [name, counter]
    // the second parameter is an array of dependencies
    // every time the value of even one of this dependencies changes,
    // the function in the first parameter will be executed
  )

  // replacing componentDidMount...
  useEffect(() => {
    console.log('component just finished mounting')
    setName('Mike')
  }, [])

  // replacing componentDidUpdate
  useEffect(() => {
    if (counter > 5) {
      console.log('re-rendered...')
    }
  })

  // replacing componentWillUnmount
  useEffect(() => {
    return () => {
      // this code will be executed just if the component is about to unmount
      console.log('bye bye!')
      // here you may want to use clearInterval, etc.
    }
  }, [])

  useEffect(() => {
    if (counter > 5) {
      alert('counter more than 5!!!')
    }
  })

  const myFunction = useCallback((c, n2) => c * n2 * c + 300, [])
  // useCallback will memorize your function and re-calculate it just when
  // one of the dependencies gets a new value

  return (
    <div className="App">
      <header className="App-header">
        <div onClick={() => setName('Vardan')}>{myFunction(counter, 85)}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setCounter(counter < 10 ? counter + 1 : counter)}>INCREASE</button>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter > 0 ? counter - 1 : counter)}>DECREASE</button>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
