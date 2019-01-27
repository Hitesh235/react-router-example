
import React from 'react';

import {browserHistory} from 'react-router';


class Routing_Master extends React.Component{
	
	handleRoute_1 = () => {
		browserHistory.push('route_1');
	}
	
	handleRoute_2 = () => {
		browserHistory.push('route_2');
	}
	
	handleRoute_3 = () =>{
		browserHistory.push('route_3');	
	}
	
	render(){
		
			return(
				<div>
						<button onClick={this.handleRoute_1}>click to Route 1</button>
					
						<button onClick={this.handleRoute_2}>click to Route 2</button>
					
						<button onClick={this.handleRoute_3}>click to Route 3</button>
					
				</div>
			);
			
			
	
	}
	
}
export default Routing_Master; 
