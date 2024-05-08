function Person ({name, age, hobbies}) {
    const vote = age >= 18 ? "Please go vote!" : "You must be 18!"
    return (
        <div>
            <p>Learn some more information about this person</p>
            <ul>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <ul>Hobbies: {hobbies.map(h =>
                (<li>{h}</li>)
                )}
                </ul>
            </ul>
            <h3>{vote}</h3>
            
        </div>
    )
}