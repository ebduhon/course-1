
function Button(props) {
    //const handleClick = () => setCounter(counter*2);
    return (
        <button onClick={() => {}}>
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
    
    return (
        <div>
            <Button />
            <Display messageProp={counter}/>
        </div>
    );
}

ReactDOM.render(
    <App />, 
    document.getElementById('mountNode'),
);