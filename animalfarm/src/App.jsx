// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'

function App() {
const [animals, setAnimals] = useState([]);
const search = async (q)=>{
  const response = await fetch (
    'http://localhost:8080/?' + new URLSearchParams({q})
  );
    const data = await response.json();
    setAnimals(data);

};

  return (
    <main>
<h1>Animal Farm</h1>
<input 
  type ="text"
  placeholder='search'
    onChange={(e) => search(e.target.value)}
  />


  <ul>
    {animals.map((animal) => (
      <li key={animal.id}>
        <strong>{animal.type}</strong> {animal.name} age is {animal.age}
      </li>
    ))}


    {animals.length === 0 && 'No animals found'}
  </ul>

      </main>
  )
}

export default App
