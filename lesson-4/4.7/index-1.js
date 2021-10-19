
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
    state = { userName: '' };
    
    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(response.data);
        this.setState({ userName: '' });
    };
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="GitHub username" value={this.state.userName} onChange={event => this.setState({ userName: event.target.value })} required/>
                <button>Add card</button>
            </form>
        );
    }
}

class App extends React.Component {
    
    state = {
        profiles: [],
    };
    
    addNewProfile = (profileData) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData],
        }))
    };
    
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Form onSubmit={this.addNewProfile}/>
                <CardList profiles={this.state.profiles}/>
            </div>
        );
    }
    
}

ReactDOM.render(
    <App title="The GitHub Cards App" />,
    mountNode
);

