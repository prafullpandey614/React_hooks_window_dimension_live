import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';

import UseEffectApi from './components/UseEffectApi';

function App() {
  let style = {
    // backgroundColor: 'whitesmoke',
  }
  return (
    <>
    <div style={style}>
    <Header/>
    
    <UseEffectApi />
    </div>
    
    </>
  );
}

export default App;
