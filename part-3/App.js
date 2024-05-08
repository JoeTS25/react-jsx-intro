const App = () => (
    <div>
        <Person
            name = "Joe Johnson"
            age = {24}
            hobbies={["snowboarding", "skiing", "winter activities"]} />
        
        <Person
            name = "Stacey Jordan"
            age = {36}
            hobbies={["Video Games", "Swimming", "Art"]} />
        
        <Person
            name = "Benjamin Little"
            age = {15}
            hobbies={["Hanging out", "Anime", "Golf"]} />
    </div>
    
)

ReactDOM.render(<App />, document.getElementById("root"))