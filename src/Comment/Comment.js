import React from 'react';
import './Comment.css'

export function Comment (props) {

	return (<div className="Comment">
		<h3>{props.author} <span>{props.date}</span></h3>
        <p>{props.content}</p>
	</div>);
}