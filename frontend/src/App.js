import './App.css';

import Navbar from './components/Navbar';
import Students from './components/Students';

function App() {
  return (
    <>
      <Navbar />

      <div className='container w-50 my-5'>
        <Students />
      </div>
    </>
  );
}

export default App;
