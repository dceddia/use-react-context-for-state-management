import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Color = React.createContext();

const FancyButton = props => (
  <Color.Consumer>
    {color => (
      <button className={`fancy-btn ${color}`} {...props}>
        Click Me
      </button>
    )}
  </Color.Consumer>
);

const App = () => (
  <div>
    <FancyButton />
    <Color.Provider value="red">
      <FancyButton />
    </Color.Provider>
    <Color.Provider value="green">
      <FancyButton />
    </Color.Provider>
    <Color.Provider value="blue">
      <FancyButton />
    </Color.Provider>
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
