import React from 'react';
import Routing_Master from './Routing_Master';
import {browserHistory} from 'react-router';


class Master extends React.Component{
	render(){
			return(
				<div>
					<Routing_Master/>
					{this.props.children}
				</div>
			);
			
			
	
	}
	
}
export default Master; 
