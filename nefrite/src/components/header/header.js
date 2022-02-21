import  styles from './header.module.css'
import whats from '../../img/whats.png'
const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.container_content}>
                     <img src={whats}/>
                        <button className={styles.btn}>  +8 800 849 480 33</button>
                </div>
               <tr/>

            </div>
        </>
    )
  }
  export default Header