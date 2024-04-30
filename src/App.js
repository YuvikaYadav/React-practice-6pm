import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyComponent from './MyComponent';
import MyComponentClass from './MyComponentClass';
// {
//   const myFunction = () =>
//   {
//     console.log("this is my function!!!")
//   }

//   const classComponent = <MyComponentClass color="purple" size="small" onClick={()=>
//     {
//       console.log("this is executed in App.js")
//     }}/> 

//   myFunction() 
  
//   const buttonHandler = () =>
//   {
//     console.log("Button is clicked !!")
//   }
//   let firstVariable = 5
//   console.log("firstVariable:"+firstVariable)
//   firstVariable = 7
//   console.log("firstVariable:"+firstVariable)
  
//   const el1 = <h1>This is a sample JSX code snippet</h1>
//     console.log("el1:",el1)

//  // return React.createElement(
//   // "div",
//   //null, 
//   //"Hello riya!",
//     // React.createElement("p",null, "This is my paragraph!!"),
//     //React.createElement("ul",null,
//     // React.createElement("li",null,"This is list item 1"),
//     //React.createElement("li",null,"THis is list item 2"),
//     //React.createElement("li",null,"THis is list item 3"),
//    // )
//   //)

//   const unmountFunction = () =>
//   {
//     classComponent = "Class Component Unmounted Now!"
//   }

  // return <div>
  //       <p>This is my paragraph!!</p>
  //       <ul>
  //         <li>This is list item 1</li>
  //         <li>This is list item 2</li>
  //         <li>This is list item 3</li>
  //         <li>This is list item 4</li>
  //       </ul>
  //       <MyComponent color="pink" size="medium" onClick={()=>
  //       {
  //         console.log("this is executed in App.js")
  //       }} />
  //       <br/>
  //       {classComponent}
  //       <br/>
  //   <button>Unmount Class Component</button>
  // </div>

  
class App extends React.Component
{
  
  state = {classComponent: <MyComponentClass color="purple" size="small" onClick={()=>
    {
      console.log("this is executed in App.js")
    }}/> } 

  unmountFunction = () =>
           {
            this.setState({classComponent: "Class Component Unmounted Now!"}) 
            console.log("testiing git commit")
           }

  render()
  {
  return <div>
           <p>This is my paragraph!!</p>
           <ul>
             <li>This is list item 1</li>
             <li>This is list item 2</li>
             <li>This is list item 3</li>
             <li>This is list item 4</li>
           </ul>
           <MyComponent color="pink" size="medium" onClick={()=>
            {
              console.log("this is executed in App.js")
            }} />
            <br/>
            {this.state.classComponent}
            <br/>
        <button onClick={this.unmountFunction}>Unmount Class Component</button>
      </div>
  }
}
export default App; 
