import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Main from './components/main'
import Footer_blok from './components/footer_blok'
import CardWord from './components/card_world'

function App() {
return (
    <div class Name="App">
      <Header/>
      <Footer_blok name="Логотип"/>   
<Main/> 
<CardWord/>
<Footer/> 
<Footer_blok name="Контакты"/> 
<Footer_blok name="Социальные сети"/> 
<Footer_blok name="Обратная связь"/> 

    </div>
  )
}

export default App