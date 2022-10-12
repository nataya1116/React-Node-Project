import { Routes, Route } from 'react-router-dom';
import { Warpper } from './styledComponent/common_cs';
import { Header, Footer } from './component';
import { Reset } from 'styled-reset';
import { Main, Join, Login, Mypage, MypageModify, Board } from './page';

function App() {

  return (
      <Warpper>
      <Reset />
        <Header /> 




          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/join' element={<Join/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/mypage' element={<Mypage/>} />
            <Route path='/mypage/modifiy' element={<MypageModify/>} />
            <Route path='/board/*' element={<Board/>} />
          </Routes>

        <Footer />
      </Warpper>
    // <div>
    //   <Header  isLogin={isLogin}/>
    // </div>
  );
}

export default App;
