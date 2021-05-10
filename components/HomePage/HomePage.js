import { useSelector } from 'react-redux';
import Container1 from './Container_1';
import Container2 from './Container_2';
import Container_3 from './Container_3/Container_3';
import Carousel from '../Carousel';
import Container_4 from './Container_4';
import Container_5 from './Container_5';
import Container_6 from './Container_6';
import Container_7 from './Container_7';
import Container_8 from './Container_8';
import Sidebar from '../Sidebar';

const HomePage = () => {
  const home = useSelector(state => state.home_page);
  const sidebar = useSelector(state => state.sidebar);
  const menu = useSelector(state => state.menu);

  return (
    <div className="container big-container home-page">
      {menu && menu.is_loading && menu.is_loading && (
        <div className="spinner-wrapper rounded-circle">
          <div className="eclipse_spinner"></div>
        </div>
      )}

      <div className="row">
        <div className="col-lg-9  col-12">
          {home.container_1 && <Container1 cards={home.container_1} />}
          <div className="row small-padding">
            <div className="col-12 px-0">
              <div
                className="banner_1 my-2"
                style={{ height: '180px', backgroundColor: 'gray' }}
              >
                banner
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3  pr-sm-0 col-12">
          {sidebar.analizi_temi && (
            <Sidebar analizi_temi={sidebar.analizi_temi} />
          )}
        </div>
        </div>
        {home.container_3_right && home.container_3_left && (
          <Container_3
            cont_right={home.container_3_right}
            cont_left={home.container_3_left}
            header_left="балкан"
            header_right="свет"
            link_left="balkan"
            link_right="svet"
          />
        )}
        <div className="row small-padding my-2 mx-0">
          <div className="col-12 px-0">
            <div className="row mx-0">
              <div className="col-4">
                <div
                  className="banner_2 my-2"
                  style={{ height: '180px', backgroundColor: 'gray' }}
                >
                  baneri
                </div>
              </div>
              <div className="col-4 px-0">
                <div
                  className="banner_2 my-2"
                  style={{ height: '180px', backgroundColor: 'gray' }}
                >
                  baneri
                </div>
              </div>
              <div className="col-4">
                <div
                  className="banner_2 my-2"
                  style={{ height: '180px', backgroundColor: 'gray' }}
                >
                  baneri
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {home.carousel_2 && (
          <Container_7 cards={home.carousel_2} header="cult" link="cult" />
        )}
        {home.container_8 && (
          <Container_8 cards={home.container_8} header="спорт" link="sport" />
        )} */}
    </div>
  );
};

export default HomePage;
