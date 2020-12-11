import './App.css';
import { useEffect } from 'react';
import { Header } from './pages/header/header';
import { MainView } from './pages/main/mainView';

function App() {
  useEffect(()=>{
    async function getPokedex(){

    }
    getPokedex()
  },[])
  return (
    <div className="App">
      <Header/>
      <MainView/>      
    </div>
  );
}

export default App;
