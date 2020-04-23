import React from 'react';
import './Article.css'
import { CommentList } from '../CommentList/CommentList';

export function Article(props) {

	return (<div className="Article">
		<h1>{props.title}</h1>
        <img src={props.image} alt="Lorem Ipsum" />
        <p>{props.content}</p>
        <CommentList />   
	</div>);
}

