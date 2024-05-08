function Tweet ({username, name, date, message}) {
    return (
        <div className="tweet">
            <h3>{name}</h3>
            <h3 className="username">{username}</h3>
            <h3 className="date">{date}</h3>
            <p>{message}</p>
        </div>
    )
}