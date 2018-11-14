import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Color = React.createContext();

const FancyButton = props => (
  <Color.Consumer>
    {color => {
      if (typeof color === 'undefined') {
        throw Error(
          'FancyButton requires a Color Provider'
        );
      }
      return (
        <button className={`fancy-btn ${color}`} {...props}>
          Click Me
        </button>
      );
    }}
  </Color.Consumer>
);

const App = () => (
  <div>
    <Color.Provider value="red">
      <FancyButton />
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
