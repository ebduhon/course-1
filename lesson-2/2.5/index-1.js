
function logRandom() {
    console.log(Math.random());
}

function Button() {
    
    // const [currentStateValue, functionToSetNewStateValue] = useState(initialStateValue)
    const [counter, setCounter] = useState(0);
    
    return <button onClick={() => setCounter(counter+1)}>{counter}</button>;
}

ReactDOM.render(
    <Button />,
    document.getElementById('mountNode'),
);