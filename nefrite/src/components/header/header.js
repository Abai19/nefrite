import  styles from './header.module.css'
import whats from '../../img/whats.png'
import logo from '../../img/logo.png'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.container_content}>
                     <img src={whats}/>
                        <button className={styles.btn}>  +8 800 849 480 33</button>
                </div>
               <tr/>
               <div className={styles.containerSearch}>
               <img src={logo} className={styles.logoBlock}/>
               <div className={styles.searchBlock}>
                    
                    <input className={styles.searchInput} placeholder="Поиск" />
                    <button className={styles.searchIcon}>
                    <FontAwesomeIcon icon={faSearch} class={styles.searchIconFa}/>
                        </button> 
                    
                        <button className={styles.shoppingCartBtn}>    <FontAwesomeIcon icon={faCartShopping} 
                        className={styles.shoppingIconFa} />
                        0
                        </button>
                </div>
               
               </div>
               <nav className={styles.menuBlock}>
                   <ul className={styles.menuUl}>
                       <li class="parent"><a> Главная</a>
                           
                        </li>
                       <li><a>Цветы</a>
                       
                       <ul className={styles.submenu}>
                            <li><a href="#">Декоративные </a></li>
                            <li><a href="#">Ритуальные </a></li>
                            <li><a href="#">Праздничные </a></li>
                            <li><a href="#">Дерево </a></li>
                            <li><a href="#">Листья </a></li>
                            </ul>
                       </li>
                       <li><a>Новогодние</a>


                       <ul className={styles.submenu}>
                            <li><a href="#">Ёлки</a></li>
                            <li><a href="#">Игрушки</a></li>
                            <li><a href="#">Водопад </a></li>
                            <li><a href="#">Дождик </a></li>
                            <li><a href="#">Хвойные ветки </a></li>
                            </ul>
                       </li>
                       <li><a>Летние товары</a>

                       <ul className={styles.submenu}>
                            <li><a href="#">Бассейн </a></li>
                            <li><a href="#">Болоны</a></li>
                            <li><a href="#">Очки</a></li>
                            <li><a href="#">Шапки</a></li>
                            </ul>
                       </li>

                       <li><a>Разное</a>

<ul className={styles.submenu}>
     <li><a href="#">Электро самокат</a></li>
     <li><a href="#">Самокат</a></li>
     <li><a href="#">Героскутер</a></li>

     <li><a href="#">Мячи</a></li>
     <li><a href="#">Ролики</a></li>
     <li><a href="#">Скейтборд </a></li>
     </ul>
</li>
                     
                       <li><a>Доставка</a>
                   
                       </li>
                       <li><a>Контакты</a>  
                       </li>
                   </ul>
               </nav>

            </div>
        </>
    )
  }
  export default Header