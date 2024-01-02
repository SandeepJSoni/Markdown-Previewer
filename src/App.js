import React from 'react';
import { marked } from 'marked';
import './App.css';
// let marked = require("marked");

// Set options
marked.use({
  breaks: true,
  gfm: true,
});




class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      markval: "Test required default markdown\n\n# H1 Heading\n## H2 Sub Heading\n\nNormal text\n**bold**\nBack ticks : `<h1></h1>` inline code.\n\n\n```//code block this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n\n```\n_italic_\n\n[MarkedDown docs](https://cdnjs.com/libraries/marked)\n\n>Also Block Quotes!\n\n lists...\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n\n.",
    };

  this.getMarkDown = this.getMarkDown.bind(this);
  this.clear = this.clear.bind(this);

}

clear(e) {
  this.setState({
    markval: '',
  } )

}

// Get Markdown responsively
getMarkDown(e) {
  this.setState({
    markval: e.target.value,
  })
}


render(){
  return (
<div className="App">
  <div className='container darkbg'>
    <div className="row">
      <div className="col-xs-12">
        <h1 className="text-center">
          Markdown Previewer
        </h1>
      </div>

      <div className="col-xs-5 col-md-5">
        <h2 className="text-center">Editor</h2>
        
      </div>
      {/* <div className="col-xs-2 col-md-2"></div> */}
      <div className="col-xs-7 col-md-7">
        <h2 className="text-center">Previewer</h2>
      </div>


      <div className="col-xs-5 col-md-5">
        {/* <h2>tempta codice </h2> */}   {/* try this code  */}
        <textarea id="editor" 
                  value={this.state.markval} 
                  onChange={this.getMarkDown}
                  >
        </textarea>
        <button class="btn" onClick={this.clear}><i class="fa fa-trash"></i> Clear</button>
      </div>
     
      {/* <div className="col-xs-2 col-md-2"></div> */}
      <div className="col-xs-7 col-md-7 ">
        {/* <h2>fecit opus</h2> */}  {/* did it work  */}

        <div id="preview" className="output markeddown-content" dangerouslySetInnerHTML={{ __html: marked(this.state.markval) }} >
        </div>

      </div>
    </div>
  </div>
</div>
      
  );}
}

export default App;
