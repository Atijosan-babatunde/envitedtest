import { lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import pageLoader from './components/common/pageLoader';

const HomePage = pageLoader(lazy(() => import('./pages/Home')));
const CreateEventPage = pageLoader(
  lazy(() => import('./pages/CreateEventPage')),
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreateEventPage />} />
        <Route path='/event' element={<CreateEventPage />} />
        <Route path='*' element={<div>page not found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
