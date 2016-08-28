import React from 'react';
import ReactDom from 'react-dom';
import Demo from '../js/components/index';


ReactDom.render(
	<Demo name={{top:'Header',middle:{article:'Article',left:'navBar',right:'Content'},bottom:'footer'}} />,
	document.getElementById('page')	
)


