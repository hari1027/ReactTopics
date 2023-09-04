import React from 'react';
// export class Helloprops extends React.Component{
//     render(){
//         return  <div>
//             <h1>Hello {this.props.name}{this.props.id}</h1> 
//             {this.props.children}
//         </div>
//     }
// }

export class Helloprops extends React.Component{
    constructor(){
        super()
        this.state={
            cname:"this is using state"
        }
    }
    render(){
        return  <div>
            <h1>Hello {this.state.cname}</h1> 
            
        </div>
    }
}



