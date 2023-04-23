const CityInput = ({ input, setInput, handleSearch }) => {
  return (
    <div>
      <form className="form" onSubmit={handleSearch}>
        <input
          className="input"
          value={input}
          type="text"
          placeholder="Enter City"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  )
}
export default CityInput
