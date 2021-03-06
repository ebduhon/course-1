
// TEST Data
const testData = [
	{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  	{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

/** Mix of JavaScript and React **/
const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card {...profile}/>)} 
    </div>
    
);

class Card extends React.Component {
    render() {
        
        const profile = this.props;
        
        return (
            <div className="github-profile" style={{ margin: '1rem' }}>
                <img src={profile.avatar_url} />
                <div className="info" style={{ display: 'inline-block', marginLeft: 10 }}>
                    <div className="name" style={{ fontSize: '125%' }}>{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        )
    }
}

class Form extends React.Component {
    render() {
        return (
            <form action="">
                <input type="text" placeholder="GitHub username" />
                <button>Add card</button>
            </form>
        )
    }
}

class App extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            profiles: testData,
        };
        
    }
    
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Form />
                <CardList profiles={this.state.profiles}/>
            </div>
        );
    }
    
}

ReactDOM.render(
    <App title="The GitHub Cards App" />,
    mountNode
);

