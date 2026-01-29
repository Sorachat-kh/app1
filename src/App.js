import React from 'react'
import { userContext } from './context'
import Content from './context-content2'
import Header2 from './context-header2'
export default function App() {
  let [user, setUser] = React.useState('')
  return (
    <userContext.Provider value={[user, setUser]}>
    <Header2/>
    <Content/>
    </userContext.Provider>
  )
}