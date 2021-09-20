import React from 'react';
import { FaDotCircle, FaCheck, FaCaretDown } from 'react-icons/fa';

const IssueHeader = () => {
    return (
        <div className="issue_box_header">
            <div className="issue_box_header_overview">
              <div className="open">
                <FaDotCircle />
                <p>219 Open</p>
              </div>
              <div className="closed">
                <FaCheck className="gray" />
                <p>1690 Closed</p>
              </div>
            </div>
            <div className="issue_box_header_option">
              <div><p>Authors</p><FaCaretDown className="gray" /></div>
              <div><p>Labels</p><FaCaretDown className="gray" /></div>
              <div><p>Projects</p><FaCaretDown className="gray" /></div>
              <div><p>Milestones</p><FaCaretDown className="gray" /></div>
              <div><p>Assignee</p><FaCaretDown className="gray" /></div>
              <div><p>Sort</p><FaCaretDown className="gray" /></div>
            </div>
          </div>
    )
}

export default IssueHeader;
