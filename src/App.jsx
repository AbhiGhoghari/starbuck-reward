import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Info from './components/info/Info'
import Glutter from './components/Glutter'
import InfoSecond from './components/InfoSecond'
import Instruction from './components/instructions/Instruction'
function App() {
  

  return (
    <>
    <Header />
    <main>
    
    <div className="reward" >
                    <div className="container1 h-full flex items-center">
                        <p className="font-bold text-white text-m tracking-widest">STARBUCKS® REWARDS</p>
                    </div>
                </div>
                <Hero />
                <Info />
                <Glutter />
                <InfoSecond />
                <Instruction />
               
    </main>
   
    </>
  )
}

export default App
