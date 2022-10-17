import React from 'react'
import { HeaderWap, Icon } from '../../styledComponent/header_cs';
import { Link } from 'react-router-dom';
// import { BoardIcon, GameIcon, JoinIcon, FirstIcon, StoreIcon } from '../../img/icon';
import { useSelector } from 'react-redux';


const Header = () => {
//   const nav = useNavigate();
  const isLogin = useSelector(state=>state.loginReducer.isLogin);
  const userId = useSelector(state=>state.loginReducer.id);
  return (
    <HeaderWap>
        <Link to="/"><Icon src='/img/icon/game-console.png' /></Link>

        <div>
            <Link to="/store"><Icon src='/img/icon/store.png' /></Link>
            <Link to="/board"><Icon src='/img/icon/board.png' /></Link>
            <Link to="/ranking"><Icon src='/img/icon/first-prize.png' /></Link>
            {
              isLogin ?
              <Link to="/mypage">{userId}님</Link> :
              <Link to="/login"><Icon src='/img/icon/join.png' /></Link>
            }
        </div>
        
    </HeaderWap>
    // <div>헤더</div>
  )
}

export default Header