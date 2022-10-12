import { Routes, Route } from 'react-router-dom';
import { Warpper } from './styledComponent/common_cs';
import { Header, Footer } from './component';
import { Reset } from 'styled-reset';
import { Main, Join, Login, Mypage, MypageModify, Board, Ranking } from './page';

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
          </Routes>

        <Footer />
      </Warpper>
  );
}

export default App;
