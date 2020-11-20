import React from 'react'
import DarkTheme, { createTheme } from 'react-dark-theme'

const lightTheme = {
  background: 'white',
  text: 'black',
}
 
const darkTheme = {
  background: 'black',
  text: 'white',
}
 
const myTheme = createTheme(darkTheme, lightTheme)
 
class App extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor:myTheme.background,color:myTheme.text,padding:"100px",margin:"0"}}>
        <DarkTheme light={lightTheme} dark={darkTheme} />
        <h1>Hiiii</h1>
      </div>
    )
  }
}

export default App;