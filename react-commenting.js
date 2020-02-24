// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. creating a state object to store your data 
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. creating a method to update your user input 
    this.setState({ userInput: e.target.value})
  }

  render(){
    // 3.
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. */}
          onChange={ this.robot }
          {/* 5. */}
          value={ userInput }
        />

        <div>
          {/* 6. */}
          <GoodRobot
            {/* 7. */}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. creating a div to wrap up data
      <div>
        <h3>Good Robot</h3>
        {/* 9. displaying the users text*/}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. ending the component
export default GoodRobot
