


import './App.css'
import Daisynav from './Daisynav';
import LineCharts from './LineCharts';
import Navbar from './Navbar';
import Phones from './Phones';
import Price from './price';

function App() {


  return (
    <>
      <Navbar/>
      {/* <Daisynav />  */}
      <h1 className='text-4xl'>Vite + React</h1>
      <Price/>
      <LineCharts></LineCharts>
      <Phones></Phones>




    </>
  )
}

export default App
