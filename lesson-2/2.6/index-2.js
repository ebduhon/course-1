
function Button() {
    // const [currentStateValue, functionToSetNewStateValue] = useState(initialStateValue)
    const [counter, setCounter] = useState(5);
    
    const handleClick = () => setCounter(counter*2);
    
    return (
        <button onClick={handleClick}>
            {counter}
        </button>
    );
}

function Display() {
    return (
        <div>...</div>  
    );
}

ReactDOM.render(
    <div>
        <Button />
        <Display />
    </div>, 
    document.getElementById('mountNode'),
);