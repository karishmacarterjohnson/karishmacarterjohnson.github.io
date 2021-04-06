import React from 'react';
import ReactDOM from 'react-dom';
import './markdownstyles.css';
import marked from 'marked';


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
    );
  }
}


ReactDOM.render(<Markdown/>, document.getElementById('container'))




class Header extends HTMLElement {


  connectedCallback() {
    this.innerHTML = `
      <style>
      nav {
          background: #fff;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        .nav-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
        }
        .nav-toggle {
          font-size: 1.5rem;
          color: #49a6e9;
          background: transparent;
          border-color: transparent;
          transition: all 0.3s linear;;
          cursor: pointer;
        }
        .nav-toggle:hover {
          color: hsl(205, 86%, 17%);
          transform: rotate(90deg);
        }
        .logo {
          height: 40px;
        }
        .links a {
          color: hsl(209, 34%, 30%);
          font-size: 1rem;
          text-transform: capitalize;
          letter-spacing: 0.25rem;
          display: block;
          padding: 0.5rem 1rem;
          transition: all 0.3s linear;
        }
        .links a:hover {
          background: hsl(205, 86%, 81%);
          color: #49a6e9;
          padding-left: 1.5rem;
        }
        .social-icons {
          display: none;
        }
        .links {
          height: 0;
          overflow: hidden;
          transition: all 0.3s linear;
        }
        .show-links {
          height: 10rem;
        }
        @media screen and (min-width: 800px) {
          .nav-center {
            max-width: 1170px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
          }
          .nav-header {
            padding: 0;
          }
          .nav-toggle {
            display: none;
          }
          .links {
            height: auto;
            display: flex;
          }
          .links a {
            padding: 0;
            margin: 0 0.5rem;
          }
          .links a:hover {
            padding: 0;
            background: transparent;
          }
          .social-icons {
            display: flex;
          }
          .social-icons a {
            margin: 0 0.5rem;
            color: #49a6e9;
            transition: all 0.3s linear;
          }
          .social-icons a:hover {
            color: hsl(205, 90%, 76%);
          }
        }
      </style>
      <header>
        <nav>
        <div class="nav-center">
        <!-- nav header -->
        <div class="nav-header">
          <!--
            <img src="/public/kcj.svg" class="logo" alt="Karishma Johnson" />
            <button class="nav-toggle">
                <i class="fas fa-bars"></i>
            </button>
            -->
        </div>
        <!-- links -->
        <ul class="links">
            <li>
                <a href="https://karishmacarterjohnson.github.io">home</a>
            </li>
            <li>
                <a href="https://karishmacarterjohnson.github.io/about/about.html">about</a>
            </li>
            <li>
                <a href="https://karishmacarterjohnson.github.io/projects/projects.html">projects</a>
            </li>
            
        </ul>
        <!-- social media -->
        <ul class="social-icons">
            <li>
                <a href="https://github.com/karishmacarterjohnson">
                    <i class="fab fa-github"></i>
                </a>
            </li>
          
            <li>
                <a href="https://www.linkedin.com/in/karishmacarterjohnson/">
                    <i class="fab fa-linkedin"></i>
                </a>
            </li>

            <li>
                <a href="mailto:karishmacjohnson@gmail.com?subject=Just Saw Your Portfolio">
                    <i class="fa fa-envelope"></i>
                </a>
            </li>
        </ul>
    </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);

