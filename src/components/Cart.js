import './Cart.css';
import productList from '../productList.json';
import { useSelector,useDispatch } from 'react-redux';
import {removeFromCart,clearAllItems} from '../redux/CartSlice'
import { Link } from "react-router-dom";




function Cart(){
const {cartProductIds} = useSelector(state => state.cart);
const cartProductData = productList.products.filter( product => cartProductIds.includes(product.id));
const dispatch = useDispatch();
    return(
      <div id='cart'>
        <div id='cartwrap'>
          <h3>쇼핑백({cartProductIds.length})</h3>
        <div className='boxCart'>
        
          {cartProductData.map((product)=>{
            return (
            <figure key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <figcaption>
              <dl>
                <dt>{product.name}</dt>
                <dd>{product.detail}</dd>
                <dd id='cartContents'>{product.contents}</dd>
                <dd id='cartProduct'>{product.price}원</dd>
                <dd id='removeCart'>
                  <button 
                    type="button"
                    onClick = {() => dispatch(removeFromCart(product.id))}  >삭제</button>
                  </dd>
              </dl>
            </figcaption>
          </figure>
            )
          })}
          
        </div>
        </div>
        <div id='footwrap1'>
      <footer id='clearALlItems'>
        <p id='gotoshop'>
         <button
          type='button'><Link to="/Shop">쇼핑 계속하기</Link></button>
        </p>
        <p id='clearcart'>
          <button 
            type="button"
            onClick={() => dispatch(clearAllItems())}>쇼핑백 비우기</button>
        </p>
        {cartProductData.length < 1 && (<div id='ment'>
          <p >
           장바구니에 담긴 상품이 없습니다

          </p>
        </div>)}
      </footer>
      </div>


     </div>

)}


export default Cart;
