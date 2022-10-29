import React, { useState } from 'react';
import data from './data';

function App() {
  const [count,setCount] = useState(0)
  const [texts,setTexts] = useState([])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = Number(count)
  if(count <= 0){
  amount = 1
  }
  if(count > 8){
    amount = 8
  }
    setTexts(data.slice(0, amount))
  }
  
  return (
  <section className='section-center'>
    <h3>Tired of boring lorem ipsum?</h3>
    <form onSubmit={handleSubmit} className="lorem-form">
      <label htmlFor="amount">paragraphs:</label>
      <input type="number" name="amount" id="amount" value={count}  onChange={(e) => setCount(e.target.value)}/>
      <button  type="submit" className='btn'>Generate</button>

    </form>
    <article className='lorem-text'>
      {texts.map((text,index)=> {
       return (
          <p key={index}>{text} </p>
       )
        
       
      })}
    </article>
  </section>
    )
}

export default App;
