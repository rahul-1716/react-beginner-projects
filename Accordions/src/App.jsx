import React from 'react'
import Accordian from './components/Accordian'
import { accordionData } from './utils/content'
const App = () => {
  return (
    <div className='accordian'>
      {
        accordionData.map(({title, content}) => (
          <Accordian title={title} content={content} />
        ))
      }
    </div>
  )
}

export default App
