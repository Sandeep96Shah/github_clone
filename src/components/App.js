import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Issue from './Issue';
import IssueHeader from './IssueHeader';
import Search from './Search';
import { getIssuesHelper } from '../actions';
import {issues} from '../data';

const App = (props) => {
console.log("issue", issues);
  return (
    <div className="App">
      <Header />
      <Search />
      <div className="issue_container">
        <div className="issue_box">
          <IssueHeader />
          {
            issues.map((issue) => <Issue key={issue.id} issue={issue} />)
          }
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state){
  return{
    issues:state.issues,
  }
}

export default connect(mapStateToProps)(App);
