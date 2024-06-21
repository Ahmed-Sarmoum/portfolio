import React from 'react'
import './App.css';
import Main from './containers/Main'
import { ThemeProvider } from "styled-components"
import {chosenTheme} from './theme'
import  {GlobalStyles}  from './global'
import SocialMedia from './components/socialMedia/SocialMedia'

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        
        <div>
        <SocialMedia theme={chosenTheme} />
          <Main theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  )
}

export default App
