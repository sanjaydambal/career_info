import React from 'react'
import careers from '../mockdata/data'

function CareerList() {
  return (
    <div>
      <h2>Careers</h2>
      <ol>
        {
            careers.map(career =>(<li key={career.id}>
{career.title}:{career.description}
            </li>))
        }
      </ol>
    </div>
  )
}

export default CareerList
