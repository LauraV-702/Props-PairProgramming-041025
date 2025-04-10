import './App.css'
import Hobbies from './Hobbies.jsx'

function App() {
  const hobbies = [
    {name: 'Baking', desc: 'Making yummy bread'},
    {name: 'Art', desc: 'Creating digital art'},
    {name: 'Sleeping', desc: 'I love sleeping'}
  ];

  return (
    <>
      <h1>My Hobbies</h1>

      {/* Pass the 'hobbies' array to the 'Hobbies' component as a prop */}
      <Hobbies hobbies={hobbies} />
    </>
  )
}

export default App
