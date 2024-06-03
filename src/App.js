import './App.css';
import FirstComponent from './FirstComponent.js';

function App() {
  const data = "Shashank sharma is in app.js";
  return (
    <div className="App">
      App Component
      <FirstComponent data={data} />
    </div>
  );
}

export default App;
