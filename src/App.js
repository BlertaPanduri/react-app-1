import React, { Component } from 'react';
import './App.css';
import Mailbox from './Mailbox/Mailbox.js';

class App extends Component() {
  render() {
    const message = ["React","Re: React", "Re: Re: React"]
  return (
    <div className="App">
      <Mailbox unreadMessages={message}/>
    </div>
  );
}
}

export default App;
