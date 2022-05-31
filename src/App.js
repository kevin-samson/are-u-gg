import React,{useState} from "react";
import Model from "./Model";
function App() {
  const [show, setShow] = useState(1);
  return (
   <div className="bg-gray-900 h-screen">
     {show?<Model setShow={setShow}/>:<img src="https://c.tenor.com/Z6AXqVP-FaEAAAAd/dwayne-johnson-dwayne-the-rock-johnson.gif" className="w-screen h-screen"></img>}
   </div>
  );
}

export default App;
