const App = () => (
    <div>
    <FirstComponent />
    <NamedComponent name="Joe"/>
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))