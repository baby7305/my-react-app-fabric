import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <DefaultButton>
          I am a button.
        </DefaultButton>
        <DefaultButton
          text='See Button'
          primary={true}
          href='#/components/button'
        />
      </div>
    );
  }
}

export default App;
