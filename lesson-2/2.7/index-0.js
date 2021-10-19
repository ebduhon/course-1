
function Button(props) {
    return (
        <button onClick={() => props.onClickFnProp(props.increment)}>
            +{props.increment}
        </button>
    );
}

function Display(props) {
    return (
        <div>{props.messageProp}</div>  
    );
}

function App() {
    
    const [counter, setCounter] = useState(0);
    const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
    
    return (
        <div>
            <Button onClickFnProp={incrementCounter} increment={1}/>
            <Button onClickFnProp={incrementCounter} increment={5}/>
            <Button onClickFnProp={incrementCounter} increment={10}/>
            <Button onClickFnProp={incrementCounter} increment={100}/>
            <Display messageProp={counter}/>
        </div>
    );
}

ReactDOM.render(
    <App />, 
    document.getElementById('mountNode'),
);