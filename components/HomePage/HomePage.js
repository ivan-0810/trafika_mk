import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Container1 from './Container_1';
import Container_3 from './Container_3/Container_3';
import Carousel from '../Carousel';
import Sidebar from '../Sidebar';
import Banners from '../Banners';
import Home_sidebar_banners from './Home_sidebar_banners';
const HomePage = () => {
  const home = useSelector(state => state.home_page);
  const { clusters, top_news } = home;
  const menu = useSelector(state => state.menu);
  const [makedonija, setMakedonija] = useState([]);
  const [balkan, setBalkan] = useState([]);
  const [svet, setSvet] = useState([]);
  const [biznis, setBiznis] = useState([]);
  const [zabava, setZabava] = useState([]);
  const [zivot, setZivot] = useState([]);
  const [sport, setSport] = useState([]);
  const [techno, setTechno] = useState([]);
 
  useEffect(() => {
    const makedonija_flitered = clusters.filter(
      cluster => cluster.main_category === 'македонија'
    );
    const balkan_flitered  = clusters.filter(cluster => cluster.main_category === 'балкан');
    const svet_flitered  = clusters.filter(cluster => cluster.main_category === 'свет');
    const biznis_flitered  = clusters.filter(cluster => cluster.main_category === 'бизнис');
    const zabava_flitered  = clusters.filter(cluster => cluster.main_category === 'забава');
    const zivot_flitered  = clusters.filter(cluster => cluster.main_category === 'живот');
    const sport_flitered  = clusters.filter(cluster => cluster.main_category === 'спорт');
    const techno_flitered  = clusters.filter(cluster => cluster.main_category === 'техно');
    setMakedonija(makedonija_flitered);
    setBalkan(balkan_flitered);
    setSvet(svet_flitered);
    setBiznis(biznis_flitered);
    setZabava(zabava_flitered);
    setZivot(zivot_flitered);
    setSport(sport_flitered);
    setTechno(techno_flitered)
  }, [clusters])

  return (
    <div className="container big-container home-page">
      {menu && menu.is_loading && menu.is_loading && (
        <div className="spinner-wrapper rounded-circle">
          <div className="eclipse_spinner"></div>
        </div>
      )}

      <div className="row">
        <div className="col-lg-3  pr-sm-0 col-12">
          <Sidebar top_news={top_news} />
        </div>
        <div className="col-md-6  col-12">
          <Container1 top_news={top_news} />
          <div className="row ">
            <div className="col-12">
              <div
                className="banner_1"
                style={{ height: '100px', backgroundColor: 'gray' }}
              >
                <div className="banner banner-square">
                  <script type="text/javascript"></script>
                  <noscript>
                    <a
                      target="_blank"
                      href="http://adserver.mk/revive-adserver/www/delivery/ck.php?n=1ae9e48"
                    >
                      <img
                        border="0"
                        alt=""
                        src="http://adserver.mk/revive-adserver/www/delivery/avw.php?zoneid=247&amp;n=1ae9e48"
                      />
                    </a>
                  </noscript>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Home_sidebar_banners />
      </div>

      <Container_3
        cont_right={balkan}
        cont_left={makedonija}
        header_left="македонија"
        header_right="балkan"
        category_link_left="makedonija"
        category_link_right="balkan"
      />

      <Banners />
      <Container_3
        cont_right={svet}
        cont_left={biznis}
        header_left="свет"
        header_right="бизнис"
        category_link_left="svet"
        category_link_right="biznis"
      />

      <Banners />
      <Container_3
        cont_right={zabava}
        cont_left={zivot}
        header_left="забава"
        header_right="живот"
        category_link_left="zabava"
        category_link_right="zivot"
      />

      <Banners />
      <Container_3
        cont_right={techno}
        cont_left={sport}
        header_left="спорт"
        header_right="техно"
        category_link_left="sport"
        category_link_right="techno"
      />

      <Banners />
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
