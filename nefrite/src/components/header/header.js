import styles from './header.module.css'
import React, {useState} from 'react'
import whats from '../../img/whats.png'
import logo from '../../img/logo.png'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {MenuOutlined, Close} from "@material-ui/icons";
import {Link} from 'react-router-dom'

const Header = () => {
    const  [active,setActive]= useState(false)
    const showMenu= ()=> {
        setActive(!active)
    }
    return (
        <>
             <div>
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
               <div className={styles.header}>
                   <div className={styles.menuIcon}>
                   <MenuOutlined onClick={showMenu} className={styles.menu}/>
                   </div>
              
               <nav className={active ? `${styles.slider} ${styles.active}`: styles.slider}>
                 
                   <ul>
                   <div className={styles.closed}>
                       <Close onClick={showMenu} className={styles.close}/>
                   </div>
                   <li>
                       <Link to='/'>
                            Главная
                       </Link>
                   </li>
                   <li>
                       <Link to='/'>
                            Цветы
                       </Link>
                   </li>
                   <li>
                       <Link to='/'>
                            Новогодние
                       </Link>
                   </li>
                   <li>
                       <Link to='/'>
                            Летние товары
                       </Link>
                   </li>
                   <li>
                       <Link to='/'>
                            Разное
                       </Link>
                   </li>
                   <li>
                       <Link to='/'>
                            Доставка
                       </Link>
                   </li>
                   <li>
                       <Link to='/'>
                            Контакты
                       </Link>
                   </li>
                   </ul>
               </nav>
               </div>
             </div> 
            </>
    )
  }
  export default Header