import { Routes, Route } from 'react-router-dom';
import { Warpper } from './styledComponent/common_cs';
import { Header, Footer } from './component';
import { Reset } from 'styled-reset';
import { Main, Join, Login, Mypage, Board, Ranking, Store, Admin, GiftBox } from './page';
import { GiftModal } from './component/modal';
import axios from 'axios';

function App() {
  function name() {
    axios({url:"http://localhost:8000/12"}).then(e=>console.log(e))
  }
  name();
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
            <Route path='/admin/*' element={<Admin/>} />
            <Route path='/gift_box/*' element={<GiftBox/>} />
          </Routes>

        <Footer />
        
        {/* <GiftModal /> */}
      </Warpper>
  );
}

export default App;
