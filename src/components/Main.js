import React from "react";
import Sidebar from "./Sidebar";
import Output from "./Output";
const Main = () => {
    return (

    <div>

  <div className="article">
    <h1>Components</h1>
    <ul>
    <li>Components are independent and reusable bits of code.</li>
    <li>They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render() function.<br></br></li>
    <li>Components come in two types, Class components and Function components, in this chapter you will learn about Class components.</li>
    </ul>
<h1>Class Components</h1>
<ul>
  <li>A class component requires you to extend from React.</li>
  <li>Component and create a render function which returns a React element.</li>
  <li></li>
</ul>
  <h3 className="one">A sample program to display array of objects to in a table with help of class Components.</h3>
  <h3>Program</h3>
  <div className="program">
  <table border="2px"><tr><td>
  <pre>{`
  class ArrayOfObjects extends React.Component{  
      constructor(){
        super();
        this.state={
          data:[
            {"name":"1",Spelling:"One "},
            {"name":"2",Spelling:"Two "},
            {"name":"3",Spelling:"Three"},
            {"name":"4",Spelling:"Four"},
            {"name":"5",Spelling:"Five"}
         ]
        }
      }
      render(){
        return(
          <div>
            <table border="2px">
              {
                this.state.data.map((item)=>
                <div>
                    <td>{item.name}</td>
                    <td>{item.Spelling}</td>
                </div>
                )
              }
            </table>
          </div>
        );
      }
    }
        
        `}</pre></td></tr></table>
        </div>
        <h3>Output</h3>
        <Output/>
  </div>
  
    <Sidebar />
    <br></br>
    </div>
    )
};

export default Main;
