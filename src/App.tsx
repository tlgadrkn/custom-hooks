import './App.css';

import { Link } from 'react-router-dom';

import { useDocumentTitle } from './hooks';

function App() {
  useDocumentTitle('Home');
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Link to={'/about'}>Go to about</Link>
    </div>
  );
}

export default App;
