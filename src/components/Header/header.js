import clsx from 'clsx';
import style from './header.module.scss';
import logo from '../images/logo_header.webp';
import { FaAngleDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';



const Header = () => {
    const [scroll, setScroll] = useState(false);
    window.addEventListener('scroll', () => {
        window.scrollY >= 200 ? setScroll(true) : setScroll(false)
    })
  return (
    <div className={scroll ? clsx(style.header, style.headerScroll) : style.header}>
        <div className={clsx(style.headerInner)}>
        <div>
            <a href='#'>
                <img src={logo} className={style.logo_img}/>
            </a>
        </div>
            <nav>
                <ul>
                    <li className={style.list_item}>
                        <a href='#' onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: 'smooth'
                            });
                        }}>home</a>
                    </li>
                    <li className={style.list_item}>
                        <a href='#' onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({
                                top: 900,
                                left: 0,
                                behavior: 'smooth'
                            });
                        }}>
                            dish
                        </a>
                    </li>
                    <li className={style.list_item}>
                        <a href='#'>chefs</a>
                    </li>
                    <li className={style.list_item}>
                        <a href='#'>blog</a>
                    </li>
                    <li className={style.list_item}>
                        <a href='#'>contact</a>
                    </li>
                    <li className={style.list_item}>
                        <a href='#'>pages<FaAngleDown/></a>
                        <ul className={style.sub_nav}>
                            <li>
                                <a href='#'>Generic</a>
                            </li>
                            <li>
                                <a href='#'>Elements</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  );
};

export default Header
