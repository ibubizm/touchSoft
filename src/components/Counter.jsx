import { memo } from 'react'

const Counter = ({ id, onDelete, value, increment, decrement, onReset }) => {
  return (
    <div className="content">
      <div className="result">{value}</div>
      <div className="buttons">
        <div className="btn__block">
          <button className="btn" onClick={() => decrement(id)}>
            -
          </button>
          <button className="btn" onClick={() => onReset(id)}>
            reset
          </button>
          <button className="btn" onClick={() => increment(id)}>
            +
          </button>
        </div>
        <button onClick={() => onDelete(id)}>delete</button>
      </div>
    </div>
  )
}

export default memo(Counter)
