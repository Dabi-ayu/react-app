import { ThreeDots } from 'react-loader-spinner';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello miriam</h1>
       <ThreeDots 
height="80" 
width="80" 
radius="9"
color="red" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
      </header>
    </div>
  );
}

export default App;
