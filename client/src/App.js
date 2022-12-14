import { Routes, Route } from 'react-router-dom';
import { Warpper } from './styledComponent/common_cs';
import { Header, Footer } from './component';
import { Reset } from 'styled-reset';
import { Main, Join, Login, Mypage, Board, Ranking, Store, Admin, GiftBox } from './page';
// import { GiftModal } from './component/modal';


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
            <Route path='/notice_board/*' element={<Board boardName="Notice Board"/>} />
            <Route path='/free_board/*' element={<Board boardName="Free Board"/>} />
            <Route path='/store/*' element={<Store/>} />
            <Route path='/admin/*' element={<Admin/>} />
            <Route path='/gift_box/*' element={<GiftBox/>} />
          </Routes>

        <Footer />
        
        {/* <GiftModal /> */}
      </Warpper>
  );
}

export default App;
