import React from 'react';
class ArrayOfObjects extends React.Component{
    constructor(){
      super();
      this.state={
        data:[
          {"name":"1",Spelling:"One"},
          {"name":"2",Spelling:"Two"},
          {"name":"3",Spelling:"Three"},
          {"name":"4",Spelling:"Four"},
          {"name":"5",Spelling:"Five"}
        ]
      }
    }
    render(){
      return(
        <div>
          <table border="border-collapse: collapse;">
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
  export default ArrayOfObjects;