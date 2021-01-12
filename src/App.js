//import logo from './logo.svg';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilPhoto from './Component/Profile/ProfilPhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Adress';
function App() {
  return (
    <div className="App">
      <ProfilPhoto/>
      <FullName/>
      <Adress/>
    </div>
  );
}

export default App;
