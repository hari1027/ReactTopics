import React from 'react';
export class Form extends React.Component{
    render(){
        return <form>
            <label for="uname" >Uname :</label>
            <input type="text" name="uname"/><br></br>
            <label for="pwd" >password :</label>
            <input type="text" name="pwd"/><br></br>
            <input type="button" value="submit"/>
        </form>
    }
}