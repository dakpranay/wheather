import './App.css';
import Homebody from './Main/homeBody';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from './common/header';
import Templet from './common/templet';

function App() {
  return (
    <div >
      <Header></Header>
      <Homebody></Homebody>
    </div>
  );
}
export default App;
