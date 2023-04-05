import './App.css';
import Navbar from './component/Navbar';
import TextFrom from './component/TextFrom';

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <div className="container my-3">
        <TextFrom heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
