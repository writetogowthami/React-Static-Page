import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <header className="App-header App-alignC">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to Pace</h1>
            </header>
        <div class="articl">
                <section class="space">
                    <h1 class="heading2"><a href="http://www.filtercopy.com"> FilterCopy </a></h1>
                    <p> 04-02-2018 </p>
                    <p> Lorem ipsum dolor sit amet </p>
                    <h1 class="heading2 topSpace"><a href="http://www.thisisinsider.com">Insider</a></h1>
                    <p> 03-01-2018 </p>
                    <p> Lorem ipsum dolor sit amet </p>
                    <h1 class="heading2 topSpace"><a href="http://www.tastemade.com">Tastemade</a></h1>
                    <p> 02-01-2018 </p>
                    <p> Lorem ipsum dolor sit amet </p>
                </section>
        </div>
          <aside className="asid">
              <h2 className="heading2 rightAlign"> My Favourite Websites </h2>
              <nav id="sidenav">
                  <a href="https://medium.com" target="_blank">Medium</a>
                  <a href="https://www.webpagefx.com/blog/web-design" target="_blank">WebpageFX</a>
                  <a href="https://css-tricks.com" target="_blank">CSS Tricks</a>
                  <a href="http://eloquentjavascript.net" target="_blank">Eloquent Javascript</a>
                  <a href="https://www.paulirish.com" target="_blank">Paul Irish</a>
              </nav>
          </aside>
          <footer><span>Copyright &copy; pace.edu</span></footer>
      </div>
    );
  }
}

export default App;
