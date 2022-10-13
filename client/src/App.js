import { Routes, Route } from 'react-router-dom';
import { Warpper } from './styledComponent/common_cs';
import { Header, Footer } from './component';
import { Reset } from 'styled-reset';
import { Main, Join, Login, Mypage, Board, Ranking, Store } from './page';
import { GiftModal } from './component/modal';

function App() {

  return (
      <Warpper>
      <Reset />
        <Header /> 

          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/join' element={<Join/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/ranking' element={<Ranking/>} />

            <Route path='/mypage/*' element={<Mypage/>} />
            <Route path='/board/*' element={<Board/>} />
            <Route path='/store/*' element={<Store/>} />
            <Route path='/test' element={<div>test</div>} />
          </Routes>

        <Footer />
        
        <GiftModal />
      </Warpper>
  );
}

export default App;
