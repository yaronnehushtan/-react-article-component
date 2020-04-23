import React from 'react';
import { Comment } from '../Comment/Comment';

export function CommentList () {

	return (<div className="CommentList ">
		<h2>Comments:</h2>
        <Comment  author={"yaron"} date={"1/1/20"} content={"I don't like this article"} />
        <Comment  author={"yossi"} date={"5/2/20"} content={"Very good article!"} />
        <Comment  author={"moshe"} date={"15/3/20"} content={"Very intresting"} />
	</div>);
}