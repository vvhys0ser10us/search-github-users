import React from 'react'
import { useGlobalContext } from '../context/context'
import { PieChart, DonutChart } from './charts'
import styled from 'styled-components'
const Repos = () => {
  const { gitRepos } = useGlobalContext()

  let data = gitRepos.reduce((total, current) => {
    if (!current.language) return total
    total[current.language] = total[current.language] ?? {
      label: current.language,
      value: 0,
      stars: 0,
    }
    total[current.language] = {
      ...total[current.language],
      value: total[current.language].value + 1,
      stars: total[current.language].stars + current.stargazers_count,
    }
    return total
  }, {})

  console.log(data)
  // top 5 used language
  let barData = Object.values(data)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5)

  // top 5 popular language
  let donutData = Object.values(data)
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 5)
    .map((item) => {
      return { label: item.label, value: item.stars }
    })
  console.log(donutData)

  return (
    <section className="section">
      <Wrapper className="section-center">
        <PieChart data={barData}></PieChart>
        <div>column</div>
        <DonutChart data={donutData}></DonutChart>
        <div>bar</div>
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.section``

export default Repos
