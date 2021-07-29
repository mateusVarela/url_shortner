import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import findData from './services/urlRoute'
import InputTest from './components/input'
import Button from './components/button'
import './App.css'

function App() {
  return (
    <div>
      <div className="header">Desafio</div>
      <div className="organize-inputs">
        <InputTest /> <Button />
      </div>
    </div>
  )
}

export default App
