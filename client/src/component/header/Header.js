import React from 'react'
import { HeaderWap, Icon } from '../../styledComponent/header_cs';
import { Link } from 'react-router-dom';
import { BoardIcon, HomeIcon, JoinIcon } from '../../img/icon';
import { useSelector } from 'react-redux';


const Header = () => {
//   const nav = useNavigate();
  const isLogin = useSelector(state=>state.userReducer.isLogin);
  const userId = useSelector(state=>state.userReducer.id);
  return (
    <HeaderWap>
        <Link to="/"><Icon src={HomeIcon} /></Link>

        <div>
            <Link to="/board"><Icon src={BoardIcon} /></Link>
            {/* <Link to="#"><Icon src={FirstIcon} /></Link> */}
            {
              isLogin ?
              <Link to="/mypage">{userId}님</Link> :
              <Link to="/login"><Icon src={JoinIcon} /></Link>
            }
        </div>
        
    </HeaderWap>
    // <div>헤더</div>
  )
}

export default Header