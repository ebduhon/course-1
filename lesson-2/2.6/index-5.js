
function Button() {
    // const [currentStateValue, functionToSetNewStateValue] = useState(initialStateValue)
    const [counter, setCounter] = useState(5);
    
    const handleClick = () => setCounter(counter*2);
    
    return (
        <button onClick={handleClick}>
            +1
        </button>
    );
}

function Display() {
    return (
        <div>...</div>  
    );
}

function App() {
    return (
        <div>
            <Button />
            <Display />
        </div>
    );
}

ReactDOM.render(
    <App />, 
    document.getElementById('mountNode'),
);