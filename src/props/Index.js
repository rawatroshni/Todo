
import FirstComponent from './FirstComponent.js';

function Index(props) {
  // console.log(props);
  const data = "Shashank sharma is in app.js";
  return (
    <div className="App">
      Index Component
      <FirstComponent data={data} name={props.data} />
    </div>
  );

}

export default Index;
