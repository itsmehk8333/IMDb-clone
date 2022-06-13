import logo from './logo.svg';
import Homepage from './Pages/Homepage';
import Navbar from './Pages/Navbar';
import { Route, Routes } from 'react-router-dom';
import Singlepage from './Pages/Singlepage';
import { SeachMovie } from './SearchRedux/Action';
import Searchpage from './Pages/Searchpage';
import SearchedSinglePage from './Pages/SearchSinglePage';
import Wishlist from './Pages/Wishlist';


function App() {
  return (
    <div className="App">
     <Navbar />
<Routes>
<Route path='/' element={<Homepage />}></Route>
<Route path='/:id' element={<Singlepage />}></Route>
<Route path='/SearchMovie' element={<Searchpage />}></Route>
<Route path='/SearchMovie/:id' element={<SearchedSinglePage />} ></Route>
<Route path='/SearchMovie/:id' element={<SearchedSinglePage />} ></Route>
<Route path='/Wishlist' element={<Wishlist />} ></Route>

</Routes>
    </div>
  );
}

export default App;
