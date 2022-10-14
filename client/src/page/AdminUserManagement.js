import React from 'react'
import { Th, Btn, SearchDiv, PagenationDiv, ActivateLink, BoardLink, Icon } from '../styledComponent/board_list_cs';
import { Tr, } from '../styledComponent/admin_cs';

const AdminUserManager = () => {
  return (
    <>
    <table>
        <Tr>
            <Th>아이디</Th>
            <Th>닉네임</Th>
            <Th>가입일</Th>
            <Th>최종로그인</Th>
            <Th>등급</Th>
            <Th>상태</Th>
            <Th>활동정지</Th>
            <Th>승인</Th>
        </Tr>

        <Tr>
            <td>aaaaaaaaaaaa</td>
            <td>닉네임이다</td>
            <td>2022/09/08 03:31:17</td>
            <td>2022/09/08 03:31:17</td>
            <td>유저</td>
            <td>활동가능</td>
            <td>100일</td>
            <td>승인</td>
        </Tr>

        <Tr>
            <td>아이디</td>
            <td>닉네임</td>
            <td>2022/09/08 03:31:17</td>
            <td>2022/09/08 03:31:17</td>
            <td>유저</td>
            <td>활동가능</td>
            <td>126일</td>
            <td>승인</td>
        </Tr>

        <Tr>
            <td>아이디</td>
            <td>닉네임</td>
            <td>2022/09/08 03:31:17</td>
            <td>2022/09/08 03:31:17</td>
            <td>유저</td>
            <td>활동가능</td>
            <td>126일</td>
            <td>승인</td>
        </Tr>

        <Tr>
            <td>아이디</td>
            <td>닉네임</td>
            <td>2022/09/08 03:31:17</td>
            <td>2022/09/08 03:31:17</td>
            <td>유저</td>
            <td>활동가능</td>
            <td>126일</td>
            <td>승인</td>
        </Tr>

        <Tr>
            <td>아이디</td>
            <td>닉네임</td>
            <td>2022/09/08 03:31:17</td>
            <td>2022/09/08 03:31:17</td>
            <td>유저</td>
            <td>활동가능</td>
            <td>126일</td>
            <td>승인</td>
        </Tr>

        <Tr>
            <td>아이디</td>
            <td>닉네임</td>
            <td>2022/09/08 03:31:17</td>
            <td>2022/09/08 03:31:17</td>
            <td>유저</td>
            <td>활동가능</td>
            <td>126일</td>
            <td>승인</td>
        </Tr>

        <Tr>
            <td>아이디</td>
            <td>닉네임</td>
            <td>2022/09/08 03:31:17</td>
            <td>2022/09/08 03:31:17</td>
            <td>유저</td>
            <td>활동가능</td>
            <td>126일</td>
            <td>승인</td>
        </Tr>

        <Tr>
            <td>아이디</td>
            <td>닉네임</td>
            <td>2022/09/08 03:31:17</td>
            <td>2022/09/08 03:31:17</td>
            <td>유저</td>
            <td>활동가능</td>
            <td>126일</td>
            <td>승인</td>
        </Tr>

        <Tr>
            <td>아이디</td>
            <td>닉네임</td>
            <td>2022/09/08 03:31:17</td>
            <td>2022/09/08 03:31:17</td>
            <td>유저</td>
            <td>활동가능</td>
            <td>126일</td>
            <td>승인</td>
        </Tr>

        <Tr>
            <td>아이디</td>
            <td>닉네임</td>
            <td>2022/09/08 03:31:17</td>
            <td>2022/09/08 03:31:17</td>
            <td>유저</td>
            <td>활동가능</td>
            <td>126일</td>
            <td>승인</td>
        </Tr>            
    </table>

    <SearchDiv>
        <select>
            <option value="title" >제목</option>
            <option value="content" >내용</option>
            <option value="userId" >작성자</option>
        </select>
        <input/>
            <Btn>검색</Btn>
    </SearchDiv>
    
    <PagenationDiv>
        <BoardLink> <Icon src={process.env.PUBLIC_URL+'/img/icon/icon-left.png'}/> </BoardLink>
        <ActivateLink> 1 </ActivateLink>
        <BoardLink> 2 </BoardLink>
        <BoardLink> 3 </BoardLink>
        <BoardLink> 4 </BoardLink>
        <BoardLink> 5 </BoardLink>
        <BoardLink> 6 </BoardLink>
        <BoardLink> 7 </BoardLink>
        <BoardLink> 8 </BoardLink>
        <BoardLink> 9 </BoardLink>
        <BoardLink> 10 </BoardLink>
        <BoardLink> <Icon src={process.env.PUBLIC_URL+'/img/icon/icon-right.png'} /> </BoardLink>
    </PagenationDiv>
    </>
  )
}

export default AdminUserManager