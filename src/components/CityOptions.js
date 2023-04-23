import React, { useEffect, useState } from "react"

const CityOptions = ({ selectedOption, setSelectedOption }) => {
  const [cities, setCities] = useState()

  const cityUrl = "https://api.openaq.org/v2/cities"
  useEffect(() => {
    fetch(cityUrl)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        let cities = []
        Object.keys(data.results).forEach((key) => {
          cities.push(data.results[key].city)
        })
        setCities(cities)
      })
  }, [])

  const handleChange = (event) => {
    setSelectedOption(event.target.value)
  }

  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        {cities?.map((city) => {
          console.log(city)
          return <option value={city}>{city}</option>
        })}
      </select>
    </div>
  )
}

export default CityOptions
