import { Route, Routes } from 'react-router';
import './App.css';
import HomeView from './views/HomeView';
import NewsDetails from './components/NewsDetails';

function App() {
  return (
    <Routes >
      <Route index element={<HomeView />} />
      <Route path="news-details/:id" element={<NewsDetails />} />
    </Routes>
    // <HomeView />

  );
}

export default App;
