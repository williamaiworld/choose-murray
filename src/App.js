import React, {useState} from 'react';
import './App.css';

const UserCard = ({user}) => {
  if(!user) return '';
  return (
    <div>
      {user.name}
      <img src={user.imgURL} />
    </div>
  )
}

let id = 300;
const murrays = [
  {
    imgURL: `https://www.fillmurray.com/g/250/${id}`,
    id,
    name: 'Bill',
  },
  {
    imgURL: `https://www.fillmurray.com/g/250/${++id}`,
    id,
    name: 'Billy',
  },
  {
    imgURL: `https://www.fillmurray.com/g/250/${++id}`,
    id,
    name: 'Billy Bob',
  },
  {
    imgURL: `https://www.fillmurray.com/g/250/${++id}`,
    id,
    name: 'What About Bob',
  },
]
function App() {
  const [currentDirection, setDirection] = useState(false)
  const [murrayArray, setMurrayArray] = useState(murrays);
  const [chosenId, setChosenId] = useState(murrays[0].id);
  const changeDir = () => {
    setDirection(!currentDirection)
    murrayArray.sort((murray1, murray2) => {
      return currentDirection ? murray1.id - murray2.id : murray2.id - murray1.id
    })
    setMurrayArray([...murrayArray]);
  }
  const getMurrayById = id => murrayArray.filter(murray => murray.id === chosenId)[0];
  return (
    <main className="App">
      <div>Chosen Murray</div>
      <UserCard user={getMurrayById(chosenId)} />
      <div>
      
        <h1>Choose Murray</h1>
        <button onClick={changeDir}>Change Direction</button>
        <div className="list-container">
        {murrayArray.map(murray => (
          <div className = "list-item" onClick={() => setChosenId(murray.id)}>
            <UserCard user={murray} />
          </div>
        ))}
        </div>
      </div>

    </main>
  );
}

export default App;
