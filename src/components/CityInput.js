const CityInput = ({ input, setInput, handleSearch }) => {
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          value={input}
          type='text'
          placeholder='Enter City'
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default CityInput
