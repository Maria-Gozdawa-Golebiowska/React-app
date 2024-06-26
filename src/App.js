import Home from './components/Home/Home';
import Container from './components/Container/Container'
import NavBar from './components/NavBar/NavBar.js'
import About from './components/About/About';
import Favourite from './components/Favorite/Favorite.js';
import { Routes, Route } from 'react-router-dom';
import NotFound from "./components/NotFound/NotFound";
import List from './components/List/List.js';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favourite />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/list/:listId" element={<List />} /> 
      </Routes>
      </Container>
 </main>
  );
}

export default App;