import React from 'react'
import { Section, SectionHeader, SectionTitle, } from '../styledComponent/common_cs';
import { PagenationDiv, ActivateLink, BoardLink, Icon } from '../styledComponent/board_list_cs'
import { Article, ProductList, Product, Detail, Option } from '../styledComponent/store_cs';
import { Link } from 'react-router-dom';

// import { LeftIcon, RightIcon } from '../img/icon'

const Store = () => {
  return (
    <Section>
    <SectionHeader>
      <SectionTitle> Store </SectionTitle>
    </SectionHeader>
    <Article>
      <Option>
        <select>
          <option>all</option>
          <option>black</option>
          <option>color</option>
          <option>gradation</option>
        </select>

        <button>wish</button>
        <button>own</button>
      </Option>
      
      <ProductList>
        <Product>
          <div>
            <Link to=""><img src='/img/icon/star.png' /></Link>
          </div>
          <Detail>
            <img src={require('../img/card/black-7629052.png')}/>
            <h5>black-714390</h5>
            <span>100p</span>
            <div>
              <button>Buy</button>
              <button>Gift</button>
            </div>
          </Detail>
        </Product>

        <Product>
          <div>
            <Link to=""><img src='/img/icon/star.png' /></Link>
          </div>
          <Detail>
            <img src={require('../img/card/black-714390.png')}/>
            <h5>black-714390</h5>
            <span>100p</span>
            <div>
              <button>Buy</button>
              <button>Gift</button>
            </div>
          </Detail>
        </Product>
        
        <Product>
          <div>
            <Link to=""><img src='/img/icon/star.png' /></Link>
          </div>
          <Detail>
            <img src={require('../img/card/black-714390.png')}/>
            <h5>black-714390</h5>
            <span>100p</span>
            <div>
              <button>Buy</button>
              <button>Gift</button>
            </div>
          </Detail>
        </Product>
        
        <Product>
          <div>
            <Link to=""><img src='/img/icon/star.png' /></Link>
          </div>
          <Detail>
            <img src={require('../img/card/black-714390.png')}/>
            <h5>black-714390</h5>
            <span>100p</span>
            <div>
              <button>Buy</button>
              <button>Gift</button>
            </div>
          </Detail>
        </Product>
        
        <Product>
          <div>
            <Link to=""><img src='/img/icon/star.png' /></Link>
          </div>
          <Detail>
            <img src={require('../img/card/black-714390.png')}/>
            <h5>black-714390</h5>
            <span>100p</span>
            <div>
              <button>Buy</button>
              <button>Gift</button>
            </div>
          </Detail>
        </Product>
        
        <Product>
          <div>
            <Link to=""><img src='/img/icon/star.png' /></Link>
          </div>
          <Detail>
            <img src={require('../img/card/black-714390.png')}/>
            <h5>black-714390</h5>
            <span>100p</span>
            <div>
              <button>Buy</button>
              <button>Gift</button>
            </div>
          </Detail>
        </Product>
        
        <Product>
          <div>
            <Link to=""><img src='/img/icon/star.png' /></Link>
          </div>
          <Detail>
            <img src={require('../img/card/black-714390.png')}/>
            <h5>black-714390</h5>
            <span>100p</span>
            <div>
              <button>Buy</button>
              <button>Gift</button>
            </div>
          </Detail>
        </Product>
        
        <Product>
          <div>
            <Link to=""><img src='/img/icon/star.png' /></Link>
          </div>
          <Detail>
            <img src={require('../img/card/black-714390.png')}/>
            <h5>black-714390</h5>
            <span>100p</span>
            <div>
              <button>Buy</button>
              <button>Gift</button>
            </div>
          </Detail>
        </Product>
        
        <div></div>
      </ProductList>

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

    </Article>
</Section>
  )
}

export default Store;