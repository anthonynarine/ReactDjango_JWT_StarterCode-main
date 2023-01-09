import React from 'react';

const CommentMapper = ({data}) => {
    return ( 
        <ul>
            {data.map(el => <li>hi</li>)}
        </ul>
      );
}
 
export default CommentMapper;