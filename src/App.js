import './App.css';
import Row from '../src/Components/Row';
import requests from './requests';
//import Nav from './Components/Nav';
import Banner from './Components/Banner';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Banner/>
      {/* <Nav /> */}
      <Row title="TRENDING" fetchUrl = {requests.fetchTrending} isLargeRow/>
      <Row title="UPCOMMING" fetchUrl = {requests.fetchUpcoming}/>
      <Row title="TV SERIES" fetchUrl = {requests.fetchTvSeries}/>  
      <Row title="POPULAR IN SEPTEMBER" fetchUrl = {requests.popularSeptemberMovie}/>
    </div>
  );
}

export default App;
