import Img1 from '../img/jenny.jpg'
import Img2 from '../img/green.jpg'
import './Home.css';
import { Link } from "react-router-dom";
function Home(){
    return(
        <div id="home">
        
        <article id="1">
        <img src={Img1} alt="상세이미지1"/>
        </article>
        
        <article id="2">
        <img src={Img2} alt="상세이미지2"/>
        </article>
        <div id="main">
        <h2>PERFUME BALM</h2>
        <p>
          <button>
        <Link to="/Shop">
        신제품 보기</Link>
        </button>
        </p>

        </div>
        <footer id='infomation'>
            <p>주-아이아이컴바인드 | 사업자등록번호: 119-86-38589 | 대표자: 김한국 | 서울특별시 마포구 어울마당로5길 41 |
                 대표번호: 1644-1246 | 이메일: <a href="mailto:cs@tamburins.com">cs@tamburins.com</a>
                개인정보 보호 책임자: 정태호 | 호스팅 서비스 사업자: Aws | 통신판매업신고: 제 2014-서울마포-1050 호 |  
        <a href="http://www.ftc.go.kr/www/bizCommList.do?key=232" target="_blank" > 사업자정보확인  </a>|
        <a href="https://www.tamburins.com/legals/terms-and-conditions.php" >이용약관</a></p>
        <br />
            <p>고객님의 안전한 현금자산 거래를 위하여 하나은행과 
                채무지급보증계약을 체결하여 
                보장해드리고 있습니다. <span>서비스 가입사실 확인</span> </p>
                <small>	&copy;탬버린즈</small>
        </footer>
        </div>
    )
}

export default Home;