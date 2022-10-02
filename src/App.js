import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Event from './container/pages/Event';

function App() {
  return (
    <div className="App">
      <div>
        {/* react rouuting to event page */}
          <Router>
            {/* <Button /> */}
           <Routes>
           <Route path='' element={ <Header />} />
            <Route path='/event' element={<Event />} />

            </Routes> 
            </Router> 
      </div>

    </div>
  );
}

export default App;
