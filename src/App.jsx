import React from 'react'
import Sidebar from './Sidebar'
import TopNavigation from './components/TopNavigation'
import ContentContainer from './components/ContentContainer'
import Channelbar from './components/Channelbar'

const App = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <Channelbar/>
      <ContentContainer/>
    </div>
  )
}

export default App