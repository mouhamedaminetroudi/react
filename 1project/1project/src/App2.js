import Heade2 from "./Heade2";
import Post2 from "./Post2";
import './App2.css';
import Sidemenu2 from "./Sidemenu2";
function App2(){
const com1="acadimiti tourahab bikom"
const com2="this is the hello world articl"
const com3="this is the body of post 3"
return(
    
    <div className="layout">
        <div >
        <Heade2/>
        </div>
        <div className="main">
            <Post2 com={com1}>
                <div>
                <h2>20</h2>
                <h3>ACADIMY AMIN</h3>
                
                
                </div>
            </Post2>

            <Post2 com={com2}>
                <div>
                    <h2>Heloo world</h2>
                </div>
            </Post2>
            <Post2 com={com3} style={{float:"left"}}>
                <h2>Post 3</h2>

            </Post2>

        </div>
        <div>
            <Sidemenu2></Sidemenu2>
        </div>


    </div>
    
);

}
export default App2;