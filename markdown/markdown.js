marked.setOptions({
    breaks: true
  });
  
  class Markdown extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        val:"# React Markdown Previewer! \n## with subheading... \n### and sub-subheading: \nHere's code, `<div></div>`, between 2 backticks.\n```\n// this is multi-line code:\n function functionName(var1, var2) {\n  if (var1 == '```' && var2 == '```') {\n    return multiLineCode;\n  }\n}\n```\nYou can also make text **bold** or _italic_ or **_both!_** or ~~cross stuff out~~.\nThere's also [links](https://karishmacarterjohnson.github.io), and\n> Block Quotes!\n- And lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And embedded images:\n![React Logo](https://karishmacarterjohnson.github.io/kcj.svg)",
      }
    }
    handleChange(event){
      this.setState({val: event.target.value})
    }
    render(){
      return(
        <div>
        <div id = "editor-container">
        <textarea id = "editor" 
          defaultValue = {this.state.val}
          onChange = {this.handleChange.bind(this)} 
          >
           
          </textarea>
          </div> 
          <div id = "preview-box">
             <div id = "preview" dangerouslySetInnerHTML = {{__html: marked(this.state.val)}}/>
        </div>
          </div>
      )
    }
  }
  
  
  ReactDOM.render(<Markdown/>, document.getElementById('contain'))
  
////////// 
/////nav//
//////////

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
