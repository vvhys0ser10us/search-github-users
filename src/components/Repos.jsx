import React from 'react'
import { useGlobalContext } from '../context/context'
import { PieChart, DonutChart, ColumnChart, BarChart } from './charts'
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
  // stars and forks data
  let { stars, forks } = gitRepos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item
      total.stars[stargazers_count] = { label: name, value: stargazers_count }
      total.forks[forks] = { label: name, value: forks }
      return total
    },
    {
      stars: {},
      forks: {},
    }
  )

  stars = Object.values(stars).slice(-5).reverse()
  forks = Object.values(forks).slice(-5).reverse()
  return (
    <section className="section">
      <Wrapper className="section-center">
        <PieChart data={barData}></PieChart>
        <ColumnChart data={stars}></ColumnChart>
        <DonutChart data={donutData}></DonutChart>
        <BarChart data={forks}></BarChart>
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.section``

export default Repos
