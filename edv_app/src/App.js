import './App.css';
import React from "react";

class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch("https://assessment.api.vweb.app/users")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return 
    <div>
			<h1> Pleses wait some time.... </h1> 
      </div> ;
		return (
		<div className = "App">
			<h1> Fetch data</h1> 
      { items.map((item) => (
      
				<li key = { item.id } >
					User_Id: { item.user_id }<br />
					Name: { item.name },
					</li>
          
				))
			}
		</div>
	);
}
}

export default App;
