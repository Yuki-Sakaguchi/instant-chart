import React from 'react'
import Pie from './chart/Pie'
import './App.css'

const createParameterMap = () => {
  const search = window.location.search
  if (!search) {
    return false
  }
  const list = [...search.slice(1).split("&")]
  const map = {}
  list.forEach((val) => {
    const param = val.split("=")
    map[param[0]] = param[1]
  })
  return map
}

const createDataset = (map) => {
  const dataset = []
  const values = map.v.split(',')
  const legends = map.n.split(',')
  const colors = map.c.split(',')
  for (let i = 0; i < values.length; i++) {
    dataset.push({
      value: values[i],
      legend: legends[i] ? legends[i] : null,
      color: colors[i] ? '#' + colors[i] : null
    })
  }
  return dataset
}

const App = (props) => {
  const params = createParameterMap()

  if (!params) {
    return <p>クエリなし</p>
  }

  console.log(params)
  console.log(createDataset(params))

  const dataset = createDataset(params)
  
  return (
      <div className="App">
        <h1>{decodeURI(params.t)}</h1>
        <Pie dataset={dataset}/>
      </div>
  ) 
}

export default App;
