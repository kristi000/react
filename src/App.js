import { useRef, useState } from 'react'
import CityInput from './components/CityInput'
import DataDisplay from './components/DataDisplay'

const KEY = 'e486677af3184a71a5b193143232204'

function App() {
  const [input, setInput] = useState()
  const [datafromkarlliku, setDatafromkarlliku] = useState()
  const [loading, setLoading] = useState(false)

  const city = input
  const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!input) {
      alert('o bythqir shkruj i llaf aty')
    }

    setLoading(true)
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then((data) => {
        setDatafromkarlliku(data)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
      })
  }

  return (
    <div className='App'>
      <h1>hello</h1>
      <CityInput
        input={input}
        setInput={setInput}
        handleSearch={handleSearch}
      />
      {loading && <div>patate</div>}
      {datafromkarlliku && (
        <DataDisplay input={input} datafromkarlliku={datafromkarlliku} />
      )}
    </div>
  )
}

export default App
