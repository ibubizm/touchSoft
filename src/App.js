import { useState, useEffect } from 'react'
import Counter from './components/Counter'
import './App.css'

function App() {
  const [counters, setCounters] = useState([])
  const [total, setTotal] = useState(0)

  const onDelete = (id) => {
    const list = [...counters]
    const index = list.findIndex((item) => item.id === id)
    list.splice(index, 1)
    list.forEach((item, i) => {
      if (item.value % 2 === 1) {
        list[i].value--
      }
    })
    setCounters(list)
  }

  const add = () => {
    const list = [...counters, { value: 0, id: new Date().getTime() }]
    list.forEach((item, i) => {
      if (list.length > 1 && item.value % 2 === 0 && item.value !== 0) {
        list[i].value++
      }
    })
    setCounters(list)
  }

  const increment = (id) => {
    const list = [...counters]
    const index = list.findIndex((item) => item.id === id)
    list[index].value++
    setCounters(list)
  }

  const decrement = (id) => {
    const list = [...counters]
    const index = list.findIndex((item) => item.id === id)
    if (list[index].value > 0) {
      list[index].value--
    }
    setCounters(list)
  }

  const onReset = (id) => {
    const list = [...counters]
    const index = list.findIndex((item) => item.id === id)
    list[index].value = 0
    setCounters(list)
  }

  const resultFunc = () => {
    const res = counters.reduce(
      (sum, currentValue) => sum + currentValue.value,
      0
    )
    setTotal(res)
  }

  useEffect(() => {
    resultFunc()
  }, [counters])

  return (
    <div className="App">
      <button className="main__btn blue" onClick={add}>
        add
      </button>
      <button className="main__btn red" onClick={() => setCounters([])}>
        reset
      </button>
      <div>Количество счетчиков: {counters.length}</div>
      <div>Общий счет: {total}</div>
      <div className="counters">
        {counters.length === 0
          ? 'Нет счетчиков '
          : counters.map((item) => (
              <Counter
                key={item.id}
                id={item.id}
                value={item.value}
                increment={increment}
                decrement={decrement}
                onReset={onReset}
                onDelete={onDelete}
              />
            ))}
      </div>
    </div>
  )
}

export default App
