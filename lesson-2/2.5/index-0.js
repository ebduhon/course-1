
function logRandom() {
    console.log(Math.random());
}

function Button() {
    
    // const [currentStateValue, functionToSetNewStateValue] = useState(initialStateValue)
    const [counter, setCounter] = useState(0);
    
    return <button onClick={logRandom}>{counter}</button>;
}

ReactDOM.render(
    <Button />,
    document.getElementById('mountNode'),
);