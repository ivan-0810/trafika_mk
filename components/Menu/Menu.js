import { useState } from 'react';
import Link from 'next/link';
import MyModal from '../Modal';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { spinner_loading_true } from '../../store/spinner/action';
import { isEmpty} from 'lodash';
import { useWindowSize } from '../../hooks/UseWindowSize';
import { useRouter } from 'next/router';
import { menu_titles } from '../../constants/Menu_Items';
import logo from '../../styles/assets/images/Trafika_Logo_Plavo.svg';

const Menu = () => {

  const [modalShow, setModalShow] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const windowSize = useWindowSize();
  const router = useRouter();
  const { asPath, query} = router;
  let single_title = asPath.slice(1);

  const submitInput = () => {
    if (!isEmpty(inputVal)) {
      setInputVal('');
      setModalShow(false);
    }
  };
  const handleSearch = e => {
    setInputVal(e.target.value);
    if (e.key === 'Enter') {
      setInputVal('');
      setModalShow(false);
    }
  };
  const handleSpinner = slug => {
    if (query.slug !== slug) {
      dispatch(spinner_loading_true());
    }
  };

  return (
    <>
      <MyModal
        inputVal={inputVal}
        modalShow={modalShow}
        handleSearch={handleSearch}
        setModalShow={setModalShow}
        submitInput={submitInput}
      />
      <div className="container-fluid menu_2">
        <div className="big-container">
          <div className="row mx-0 align-items-center menu-titles">
            <div className="col-12 px-0 ">
              <div className="d-flex flex-lg-row align-items-lg-center flex-column align-items-start justify-content-center">
                <Link href="/">
                  <a
                    className="logo-link"
                    onClick={() => dispatch(spinner_loading_true())}
                  >
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
                <ul
                  className={` mb-0 ${
                    showMenu && windowSize.height < 570
                      ? 'show-ul view-mobile-x'
                      : showMenu
                      ? 'show-ul'
                      : ''
                  }`}
                >
                  {menu_titles.map((item, index) =>
                    index === menu_titles.length - 1 ? (
                      <li  key={index * 4343}   className={`nav-link d-flex align-items-center`}>
                        {' '}
                        <i
                          className="icon loupe-icon mr-3"
                          onClick={() => setModalShow(true)}
                        ></i>
                      </li>
                    ) : (
                      <li
                        key={index * 432}
                        className={`nav-link d-flex align-items-center ${
                          single_title === item.slug ? 'border-b-red' : ''
                        }`}
                      >
                        <Link href={`/category/${item.title}`}>
                          <a onClick={handleSpinner(`/${item.title}`)}>
                            {item.title}
                          </a>
                        </Link>
                      </li>
                    )
                  )}
                </ul>
                <div
                  className="sandwich"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
