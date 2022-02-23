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
                       <ul>
                       <li>Категории</li>
                       </ul>
                       <li>Главная</li>
                       <li>Цветы</li>
                       <li>Новогодние</li>
                       <li>Летние товары</li>
                       <li>Разное</li>
                       <li>Доставка</li>
                       <li>Контакты</li>
                   </ul>
               </nav>

            </div>
        </>
    )
  }
  export default Header