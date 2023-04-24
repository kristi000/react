import { useEffect, useRef, useState } from "react"
import CityInput from "./components/CityInput"
import DataDisplay from "./components/DataDisplay"
import CityOptions from "./components/CityOptions"

const KEY = "e486677af3184a71a5b193143232204"

function App() {
  const [input, setInput] = useState()
  const [datafromkarlliku, setDatafromkarlliku] = useState()
  const [loading, setLoading] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")

  const city = input
  const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!input) {
      alert("o bythqir shkruj i llaf aty")
    }

    setLoading(true)
    fetch(weatherUrl)
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

  useEffect(() => {
    const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${selectedOption}&aqi=no`

    setLoading(true)
    fetch(weatherUrl)
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
  }, [selectedOption])

  return (
    <div className="app">
      <div className="container">
        <div className="content">
          <h1>Weather App</h1>
          <CityInput
            input={input}
            setInput={setInput}
            handleSearch={handleSearch}
          />
          <CityOptions
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          {loading && <div>patate</div>}
          {datafromkarlliku && (
            <DataDisplay input={input} datafromkarlliku={datafromkarlliku} />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
