
import FirstComponent from './FirstComponent.js';

function Index() {
  const data = "Shashank sharma is in app.js";
  return (
    <div className="App">
      Index Component
      <FirstComponent data={data} />
    </div>
  );
}

export default Index;
