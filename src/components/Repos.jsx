import React from 'react'
import { useGlobalContext } from '../context/context'

const Repos = () => {
  const { gitRepos } = useGlobalContext()

  //calculate langauge occurrence
  let data = gitRepos.reduce((total, current) => {
    if (!current.language) return total
    total[current.language] = total[current.language] ?? {
      label: current.language,
      value: 0,
    }
    total[current.language] = {
      ...total[current.language],
      value: total[current.language].value + 1,
    }
    return total
  }, {})
  // keep top 5 used language
  data = Object.values(data)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5)

  return <div>Repos</div>
}

export default Repos
