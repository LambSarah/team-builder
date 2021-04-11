import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Form from './Components/Form';
import './App.css';

const App = () => {
  const [memberList, setMemberList] = useState([]);

  const [member, setMember] = useState({
    name: '',
    email: '',
    role: '',
  });

  const handleChange = event => {
    setMember({
      ...member,
      [event.target.name]: event.target.value,
    });
  };

  const members = [];

  const handleSubmit = event => {
    event.preventDefault();
    members.push(member);
    setMemberList(members);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form">Add Member</Link>
            </li>
          </ul>
        </nav>
        <div className="fellowMembers">
          {memberList.map(person => {
            return (
              <div className="memberInfo">
                <li> Name : {member.name}</li> <li> Email: {member.email}</li>
                <li> Role : {member.role}</li>
              </div>
            );
          })}
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/form" component={Form} />
          </Switch>
          <Form
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            member={member}
            memberList={memberList}
          />
        </div>
      </div>
    </Router>
  );
};

export default App;
