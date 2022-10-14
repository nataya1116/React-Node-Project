import React from 'react'
import { Background, Gift, Icon, ActiveLi, Btn } from '../../styledComponent/modal_cs';

const GiftModal = () => {
  return (
    <Background>
          <Gift>
            <div><h5>선물하기</h5><Icon src='img/icon/cross.png'/></div>

            <div>
              <input placeholder='아이디 또는 닉네임으로 검색하세요'></input>
              <button><Icon src='img/icon/search.png'/></button>
            </div>

            <div>
              <div>
                <ul>
                  <li>아이디(닉네임)</li>
                  <ActiveLi >아이디(닉네임)</ActiveLi>
                  <li>아이디(닉네임)</li>
                  <li>아이디(닉네임)</li>
                  <li>아이디(닉네임)</li>
                  <li>아이디(닉네임)</li>
                  <li>아이디(닉네임)</li>
                  <li>아이디(닉네임)</li>
                  <li>아이디(닉네임)</li>
                  <li>아이디(닉네임)</li>
                  <li>아이디(닉네임)</li>
                  <li>아이디(닉네임)</li>
                  <li>아이디(닉네임)</li>
                  <li>아이디(닉네임)</li>
                  <li>아이디(닉네임)</li>
                  <li>아이디(닉네임)</li>
                  <li>아이디(닉네임)</li>
                </ul>
              </div>
            </div>

            <div>
              <span>100p</span><Btn>Gift</Btn>
            </div>

          </Gift>
    </Background>
  )
}

export default GiftModal;