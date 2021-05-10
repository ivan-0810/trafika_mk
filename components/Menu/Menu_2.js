import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { is_loading_true } from '../../store/menu/action'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import logo from '../../styles/assets/images/vesnik-logo-menu.svg'
import { useWindowSize } from '../../hooks/UseWindowSize';
import { menu_titles } from '../../constants/Menu_Items'
const Menu_2 = () => {
  const [showMenu, setShowMenu] = useState(false);
  const windowSize = useWindowSize()
  const router = useRouter()
  const dispatch = useDispatch();
  const {asPath} = router;
   let single_title = asPath.slice(1)


  return (
    <div className="container-fluid menu_2">
      <div className="big-container">
      <div className="row align-items-center menu-titles">
        <div className="col-12 px-0 ">
          <div className="d-flex flex-lg-row align-items-lg-center flex-column align-items-start justify-content-center">
            <Link href="/">
              <a className="logo-link" onClick={() => dispatch(is_loading_true())}>
                <div className="main-logo d-flex justify-content-center align-items-center">
                <Image
                  src={logo}
                  alt="vesnik logo"
                  height={50}
                  width={150}
                />  
                </div>
            </a>
            </Link>
            <ul className={` mb-0 ${showMenu&& windowSize.height<570 ? 'show-ul view-mobile-x' : showMenu ? 'show-ul' : ''}`}>
              {menu_titles.map((item, index) => (
                <li
                  key={index * 432}
                  className={`nav-link d-flex align-items-center ${single_title === item.slug ? 'border-b-red' : ''}`}
                >
                  <Link href={`/${item.slug}`}>
                    <a onClick={() => dispatch(is_loading_true())}>{item.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="sandwich" onClick={() => setShowMenu(!showMenu)}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Menu_2;
