import './Shop.css';
import Circle1 from '../img/category_viewall.webp'
import Circle2 from '../img/category_bestseller.webp'
import Circle3 from '../img/ctgry_balm.webp'
import Circle4 from '../img/ctgry_perfume.webp'
import Circle5 from '../img/category_shwry.webp'
import Circle6 from '../img/category_OAcandle.webp'
import Circle7 from '../img/ctgry_shellX.webp'
import Circle8 from '../img/category_tube-hand.webp'
import Circle9 from '../img/category_handbody.webp'
import productList from '../productList.json';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart,removeFromCart} from '../redux/CartSlice';
import {fetchAllProducts} from '../redux/ProductList'
import { FcLike,FcLikePlaceholder} from "react-icons/fc";
import { Link } from 'react-router-dom';

function Shop(){
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const {cart,products} = state
    useEffect(() => {
        dispatch(fetchAllProducts('./productList.json/products'))
      },[dispatch])
    return(
        <div id='shop'>
            <div id='productList'>
                <ul>
                    <li>
                        <a href='#'>
                        <span className='circle'><img src={Circle1} /></span>
                        <span className='title'>전체보기</span>   
                         </a>               
                    </li>
                    <li>
                        <a href='#'>
                        <span className='circle'><img src={Circle2} /></span>
                        <span className='title'>베스트셀러</span>   
                         </a>               
                    </li>
                    <li>
                        <a href='#'>
                        <span className='circle'><img src={Circle3} /></span>
                        <span className='title'>퍼퓸 밤</span>   
                         </a>               
                    </li>
                    <li>
                        <a href='#'>
                        <span className='circle'><img src={Circle4} /></span>
                        <span className='title'>퍼퓸</span>   
                         </a>               
                    </li>
                    <li>
                        <a href='#'>
                        <span className='circle'><img src={Circle5} /></span>
                        <span className='title'>샤워리바디</span>   
                         </a>               
                    </li>
                    <li>
                        <a href='#'>
                        <span className='circle'><img src={Circle6} /></span>
                        <span className='title'>올팩티브 캔들</span>   
                         </a>               
                    </li>
                    <li>
                        <a href='#'>
                        <span className='circle'><img src={Circle7} /></span>
                        <span className='title'>퍼퓸 핸드</span>   
                         </a>               
                    </li>
                    <li>
                        <a href='#'>
                        <span className='circle'><img src={Circle8} /></span>
                        <span className='title'>튜브 핸드</span>   
                         </a>               
                    </li>
                    <li>
                        <a href='#'>
                        <span className='circle'><img src={Circle9} /></span>
                        <span className='title'>핸드앤바디</span>   
                         </a>               
                    </li>

                </ul>
            </div>       
                <ul id='nav2'>
                        <li id='best20'>베스트셀러 20</li>
                        <li id='simple'><Link>간략보기</Link></li>
                    </ul>
            <div id='products'>
                <div>
  
                </div>
            {products.data?.map((product) => {
                return(
                <figure id='product' key={product.id}>
                    <a href='#'> <img src={product.imageUrl} alt={product.name} /></a>
                    <figcaption>
                        <a href='#'>
                        <span id='productDetail'>{product.detail}</span>
                        <dl>
                            <dt id='productName'>{product.name}</dt>
                            <dd id='productPrice'>{product.price}원</dd>
                            <dd id='productContents'>{product.contents}</dd>                          
                        </dl>
                        </a>
                            <p>
                { !cart.cartProductIds.includes(product.id) && (<button type="button"
                  onClick = {
                    () => {dispatch(addToCart(product.id))}
                  }><FcLikePlaceholder/></button>)}
               {cart.cartProductIds.includes(product.id)  && (<button type="button"
                  onClick={
                    () => {dispatch(removeFromCart(product.id))}
                  }><FcLike/></button>)}
              </p>
                        
                    </figcaption>
                    
                </figure>)  })}
            </div>


        </div>
    )
}

export default Shop;