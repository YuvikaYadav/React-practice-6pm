const MyComponent = (props) =>
{
    let count = 0
    console.log("props:",props)
    console.log("color:",props.color)
    const increment = () =>
    {
        count = count+1
        console.log("Count:",count)
    }

    return <div>
              <h1>Functional Component</h1>
               Hello React!!!<br/>
               Color:<label style={{backgroundColor: props.color}}>{props.color}</label>
               <br/>
               -------------------------------------
               <br/>
               <div>
                Count : {count} 
                <button onClick={increment}>Increment</button>
               </div>
            </div>
}
export default MyComponent 