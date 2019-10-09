import React, { Component } from 'react';
import AAA from './components/AAA'
import BBB from './components/BBB'
import CCC from './components/CCC'
import DDD from './components/DDD'
import EEE from './components/EEE'
import Control from './components/Control'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'view',
      currunt_content_id:1,
      subject:{title:'Test React!!!!!'},
      contents:[
        {id:1, title:'first', desc:'React makes it painless to create interactive UIs.'},
        {id:2, title:'second', desc:'Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'},
        {id:3, title:'third', desc:'Declarative views make your code more predictable and easier to debug.'}
      ]
    }
  }
  _getReadContent() {
    var i = 0;
    while(i < this.state.contents.length) {
      var data = this.state.contents[i];
      if(data.id === this.state.currunt_content_id) {
        return data;
        break;
      }
      i = i + 1;
    }
  }
  _changeModeComponent() {
    var _article = null;
    if(this.state.mode === "write") {
      _article = <DDD onSubmit={function(_title, _desc){
        this.max_content_id = this.max_content_id+1;
        var _contents = Array.from(this.state.contents);
        _contents.push({id:this.max_content_id, title:_title, desc:_desc});
        this.setState({
          contents:_contents,
          mode:'view',
          currunt_content_id:this.max_content_id
        });
      }.bind(this)}></DDD>
    } else if(this.state.mode === "modify") {
      _content = this._getReadContent();
      _article = <EEE data={_content} onSubmit={
        function(_id, _title, _desc){
          var _contents = Array.from(this.state.contents);
          var i = 0;
          while(i < _contents.length){
            if(_contents[i].id === _id) {
              _contents[i] = {id:_id, title:_title, desc:_desc};
              break;
            }
            i = i + 1;
          }
          this.setState({
            contents:_contents,
            mode:'view'
          });
        }.bind(this)}></EEE>
    } else {
      var _content = this._getReadContent();
      if(_content !== undefined) {
        _article = <CCC desc={_content.desc}></CCC>
      } else {
        _article = <CCC desc="No content!"></CCC>
      }
    }
    return _article;
  }
  render() {
    var _id = this.state.currunt_content_id;
    var _subject = this.state.subject;
    return (
      <div className="App">
        <AAA title={_subject.title}></AAA>
        <BBB list={this.state.contents} currunt_id={_id} changePage={function(id){
          this.setState({
            currunt_content_id:Number(id),
            mode:'view'
          })
        }.bind(this)}></BBB>
        <Control changeMode={function(mode) {
          if(mode === 'delete') {
            if(window.confirm('really?')) {
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while(i < _contents.length){
                if(_contents[i].id === this.state.currunt_content_id) {
                  _contents.splice(i, 1);
                  break;
                }
                i = i + 1;
              }
              this.setState({
                mode:'view',
                contents:_contents
              });
              alert('deleted!');
            }
          } else {
            this.setState({
              mode
            });
          }
        }.bind(this)}></Control>
        {this._changeModeComponent()}
      </div>
    );
  }
}

export default App;
