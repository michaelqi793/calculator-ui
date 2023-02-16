import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef } from 'react';
function App() {
  const [item1,setItem1] = React.useState(0);
  const [item2,setItem2] = React.useState(0);
  const [sum,setSum] = React.useState('');
  const sumRef = useRef();
  const handleClick = (e) => {
    fetch('http://localhost:8081/sum',
    {
      method: 'post',
      headers: {"Content-type": 'application/json;charset=UTF-8'},
      body: JSON.stringify({a:item1, b:item2})
  }).then(resp => resp.text()).then(text => sumRef.current.value = text);

    console.log('handle click item1..' + item1 );
    console.log('handle click item2..' + item2 );

};
  return (
    <div className="App">
       <input type="text" onChange={(e) => setItem1(e.target.value)} value={item1} />
       +
       <input type="text" onChange={(e) => setItem2(e.target.value)} value={item2} />
       <button type="button" onClick={handleClick} >=</button> 
       <input type="text" readOnly ref={sumRef}  />

    </div>
  );
}

export default App;
