const App = () => (
    <div>
        <Tweet 
            name = "Bobby Crosby"
            username = "Bobby123"
            date = {new Date().toDateString()}
            message= "Hello World" />

        <Tweet 
            name = "Sarah Long"
            username = "LongSong455"
            date = {new Date().toDateString()}
            message= "Hey Guys!!!" />

        <Tweet 
            name = "Jim Burnes"
            username = "jimsburner78"
            date = {new Date().toDateString()}
            message= "Just signed up" />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))