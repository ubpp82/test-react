import React, { Component } from 'react';

class BBB extends Component {
  render() {
    var list = this.props.list;
    var currunt_id = this.props.currunt_id;
    return (
      <nav>
        <ul>
          {list.map(function(list){
            if(list.id === currunt_id) {
              return (
                <li key={list.id}>{list.title}</li>
              )
            } else {
              return (
                <li key={list.id}>
                  <a 
                    href={'/content/'+list.id}
                    onClick={function(e){
                      e.preventDefault();
                      this.props.changePage(e.target.pathname.replace('/content/',''));
                    }.bind(this)}>{list.title}</a>
                </li>
              )
            }
          }.bind(this))}
        </ul>
      </nav>
    )
  }
}

export default BBB;