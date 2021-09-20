import React from 'react';
import { FaExclamationCircle, FaCommentAlt } from 'react-icons/fa';

 const Issue = (props) => {
     console.log("issueeee", props);
    return (
        <div className="issue">
            <div className="box">
                <div className="box_body_title">
                    <FaExclamationCircle className="green"  />
                
                    <div className="body"><p>{props.issue.body}</p></div>
                    {
                        props.issue.title === "feature" ? 
                        <div className="feature"><p>{props.issue.title}</p></div>:
                        <div className="bug"><p>{props.issue.title}</p></div>
                    }
                </div>
                <div className="detail"><p># {props.issue.number} opened {props.issue.timestamps} hours ago by {props.issue.name}</p></div>              
            </div>
            { props.issue.message && <div className="message"><FaCommentAlt  /><p>1</p></div>}
        </div>
    )
}

export default Issue;
