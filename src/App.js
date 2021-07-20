import RocketLukasz from './app/RocketLukasz/Rocket';
import RocketPawel from './app/RocketPawel/Rocket';
import RocketAsad from './app/RocketAsad/Rocket';
import RocketDean from './app/RocketDean/Rocket';
import Button from './app/Button/Button';
import './App.css';

function App() {
  return (
    <div style={{position: 'relative', width: '1000px', height: '1000px', border: "3px solid black"}}>
     <RocketPawel />
     <RocketLukasz />
     <RocketAsad />
     <RocketDean />
     <Button />
    </div>
  );
}

export default App;
