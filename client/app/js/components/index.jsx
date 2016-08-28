import React,{ Component,PropTypes } from 'react';

require('./index.css');


console.log(PropTypes);
export default class Main extends Component{
	static propTypes= {}
	static deafultProps ={}
	constructor(props){
		super(props);
	}
	componentDidMount (){
		alert(7);
	}

	render (){
		let {name:{top,middle:{article,left,right},bottom}} = this.props;
		return (
			<section>
				<header>{top}</header>
				<div id='main'>
					<article>{article}</article>
					<nav>{left}</nav>
					<aside>{right}</aside>
				</div>
				<footer>{bottom}</footer>
			</section>
			)
	}
}


