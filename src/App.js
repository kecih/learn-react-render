import './App.css';
import BlueButton from './Component/BlueButton';
import Conditional from './Component/Conditional';
import ControlledForm from './Component/ControlledForm';
import Counter from './Component/Counter';
import ListArray from './Component/ListArray';
import ListObject from './Component/ListObject';
import ListObjectConditional from './Component/ListObjectConditional';
import Rendering from './Component/Rendering';
import Table from './Component/Table';
import UncontrolledForm from './Component/UncontrolledForm';

function App() {
  // function info(){
  //   alert('This is an alert')
  // }

  const info = () => {
    alert('This is an alert');
  }
  return (
    <div>
    {/* <Rendering /> */}
    {/* <Conditional /> */}
    {/* <ListArray /> */}
    {/* <ListObject /> */}
    {/* <ListObjectConditional /> */}
    {/* <BlueButton onCustomClick={info} caption='Show Alert'/> */}
    {/* <Counter /> <br /> */}
    {/* <UncontrolledForm /> <br /> */}
    {/* <Table /> */}
    <ControlledForm />
    </div>
  );
}

export default App;
