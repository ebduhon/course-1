
function Button(props) {
    return (
        <button onClick={props.onClickFnProp}>
            +1
        </button>
    );
}

function Display(props) {
    return (
        <div>{props.messageProp}</div>  
    );
}

function App() {
    
    const [counter, setCounter] = useState(5);
    const incrementCounter = () => setCounter(counter+1);
    
    return (
        <div>
            <Button onClickFnProp={incrementCounter}/>
            <Display messageProp={counter}/>
        </div>
    );
}

ReactDOM.render(
    <App />, 
    document.getElementById('mountNode'),
);