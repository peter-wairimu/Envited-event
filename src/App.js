import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Event from './container/pages/Event';
import AddEevent from './container/Add_events/AddEevent';

function App() {
  return (
    <div className="App">
      <div>

        {/* react rouuting to event page */}
        
          <Router>
           <Routes>
           <Route path='/' element={ <Header />} />
            <Route path='/add_event' element={<AddEevent />} />
            <Route path='/event' element={<Event />} />
            <Route path='/home' element={<Header />} />

            </Routes> 
            </Router> 
      </div>

    </div>
  );
}

export default App;
