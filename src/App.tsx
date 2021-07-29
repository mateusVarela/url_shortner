import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import findData from './services/urlRoute'
import Input from './components/input'
import Button from './components/button'
import './app.css'

function App() {

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      console.log("chama função");
      
      const list : any = await findData.getHomeList()
      setMovieList(list)
      console.log(list, "lista");
    }
    loadAll()
  }, [])

  console.log(movieList);
  

  return (
    <div>
      <div className="header">
        Desafio
      </div>
      <div className="organize-inputs">
        <Input/>  <Button/>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default App;
