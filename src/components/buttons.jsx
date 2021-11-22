const Buttons = ({ result, setResult }) => {
  return (
    <div>
      <button
        className="btn"
        onClick={() => (result > 0 ? setResult(result - 1) : '')}
      >
        -
      </button>
      <button className="btn" onClick={() => setResult(0)}>
        reset
      </button>
      <button className="btn" onClick={() => setResult(result + 1)}>
        +
      </button>
    </div>
  )
}

export default Buttons
