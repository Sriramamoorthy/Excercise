import React from 'react';
import Button from 'react-bootstrap/Button';

export default class AppContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      page: ""
    }
  }

  render(){
    return(
      <div>
        <h3>Trello is going to die</h3>
        <Button variant="primary">Primary</Button>
      </div>
    );
  }
}
