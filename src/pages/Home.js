import React from 'react'
import { useState } from 'react';

function Home() {
  const [text, setText] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();
  }
  const onChange = (e) =>{
    const {
      target:{value},
    } = e; //'e로부터'라는 의미. 즉 e안에 있는 target안에 있는 value를 달라고 하는것.
    setText(value);
  }
  return (
    <div>
      <form onSubmit={onSubmit}> 
        <input value={text} onChange={onChange} type="text" placeholder="what's on your mind?" maxLength={120} />
        <input type="submit" value={'submit'}/>
      </form>
    </div>
  )
}

export default Home;