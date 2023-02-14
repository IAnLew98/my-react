import './QrAside.css';
import Pouch from '../img/pouch.jpg'
import { Link } from 'react-router-dom';
function QrAside(){
    return(
        <div id="qrWrap">
            <div id='qrAside'>
            <figure><Link>
                <img src={Pouch} alt='파우치이미지'/></Link>
                <figcaption>
                    <dl>
                        <dt id='pouchdt'>퍼퓸밤&퍼퓸 10ml 구매 시 파우치 증정</dt>
                        <dd id='pouchdd1'>2/1(수)부터~2/14(화) 까지<br/> 
                        퍼퓸밤 또는 퍼퓸 10ml 제품을 구매하시는 고객분들에게<br/>
                            특별한 파우치를 증정합니다.
                        </dd>
                        <dd id='pouchdd2'>*구매 수량과 관계 없이 주문 건당 세트 1매가 증정됩니다.<br/>
                        *조기 소진시 마감 될 수 있습니다.</dd>
                        <dd id='button1'><Link><button
                        type='button'>자세히 보기</button></Link></dd>
                        <dd id='button2'
                        type='button'><Link><button>장바구니에 담기</button></Link></dd>
                    </dl>
                </figcaption>
            </figure>
            </div>
        </div>
    )
}

export default QrAside;