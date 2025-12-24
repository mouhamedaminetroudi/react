import logo from './logo.svg';
import './App.css';
import Header from "./Header.js"
import Post from "./Post"
import Sidemenu from "./Sidemenu"

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
      <div style={{float:"left",width:"100%"}}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      </div>
      <div style={{float:"right",width:"25%",backgroundColor:"red",height:"100%"}}>
      <Sidemenu/>
      </div>
      </div>
      </div>
  );
}

export default App;
