import React from "react"

class MyComponentClass extends React.Component
{
    counter = 0
    state = {
        count : 0,
        // contactNumber : 9131851894,
        // list = [
        //     {}
        // ]
    } 
    constructor(props)
    {
        super(props)
        console.log("Constructor of MyComponentClass")
    }    

    static getDerivedStateFromProps()
    {
        console.log("getDerivedStateFromProps")
    }

    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log("getSnapshotBeforeUpdate")
        console.log("prevProps:",prevProps)
        console.log("this.props:",this.props)
        console.log("prevState:",prevState)
        console.log("this.state:",this.state)
        return true
    }


    componentDidUpdate()
    {
        console.log("ComponentDidUpdate")
    }

    shouldComponentUpdate()
    {
        console.log("shouldComponentUpdate")
        return true 
    }

    increment = () =>
    {
        //this.state.count = this.state.count+1
        this.setState({count: this.state.count+1})
        console.log("Count:",this.state.count)
    }
 
    incrementCounter = () =>
    {
        this.counter +=1
    }

    render()
    { 
        console.log("render")
        console.log("class props:",this.props)
        return <div>
                   <h1>Class Component</h1>
                   Hello React from class!!!
                   <br/>
                   color: <label style={{backgroundColor:this.props.color}}>
                    {this.props.color}
                    </label>
                    <br/>
                    <button onClick={this.props.onClick}>Click here!</button>
                   -------------------------------------
                   <br/>
                   <div>
                      Count : {this.state.count} 
                   <button onClick={this.increment}>Increment</button>
                   </div>
                   <div>
                      Count : {this.counter} 
                   <button onClick={this.incrementCounter}>Increment Counter</button>
                   </div>
                </div>
    }
    componentDidMount()
    {
        console.log("Component Did Mount")
    }

    componentWillUnmount()
    {
        console.log("componentWillUnmount")
    }
}
export default MyComponentClass
