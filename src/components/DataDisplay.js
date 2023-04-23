const DataDisplay = ({ datafromkarlliku }) => {
  return (
    <div className="data">
      <img src={datafromkarlliku.current.condition.icon} />
      <div>Temperature: {datafromkarlliku.current.temp_c} C</div>
      <div>Condition: {datafromkarlliku.current.condition.text}</div>
      <div>Humidity: {datafromkarlliku.current.humidity}</div>
      <div>Wind Kph: {datafromkarlliku.current.wind_kph}</div>
    </div>
  )
}
export default DataDisplay
