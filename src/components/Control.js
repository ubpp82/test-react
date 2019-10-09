import React, { Component } from 'react';

class Control extends Component {
  render() {
    return (
      <div className="Control">
        <a 
          href="/view" 
          onClick={function(e){
            e.preventDefault();
            this.props.changeMode('view');
          }.bind(this)}>view</a> | 
        <a 
          href="/write" 
          onClick={function(e){
            e.preventDefault();
            this.props.changeMode('write');
          }.bind(this)}>write</a> | 
        <a 
          href="/modify"
          onClick={function(e){
            e.preventDefault();
            this.props.changeMode('modify');
          }.bind(this)}>modify</a> | 
        <input 
          type="button" 
          value="delete"
          onClick={function(e){
            e.preventDefault();
            this.props.changeMode('delete');
          }.bind(this)}></input>
      </div>
    )
  }
}

export default Control;