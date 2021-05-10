import Link from 'next/link';
import Img_wrapper from '../components/Img_wrapper';
import Sidebar from './Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { is_loading_true } from '../store/menu/action';

const Single_Page = ({ title, cards }) => {
  const dispatch = useDispatch()
  const sidebar = useSelector(state => state.sidebar);
  const menu = useSelector(state => state.menu);

  function createMarkup(body) {
    return { __html: body };
  }

  return (
    <div className="container big-container single-page">
      {menu && menu.is_loading && menu.is_loading && (
        <div className="spinner-wrapper rounded-circle">
          <div className="eclipse_spinner"></div>
        </div>
      )}
      <div className="row">
        <div className="col-12">
          <div className="header p-3 d-flex justify-content-center">
            <h2 className="text-center">{title}</h2>
          </div>
        </div>
        {cards && (
          <div className="col-md-9 col-12 main-content">
            <div className="block-region-content">
              <div className="row mx-0">
                <div className="col-lg-8 col-md-6 col-12 small-padding ">
                  <div className="big-cont">
                    <Img_wrapper
                      title={cards[0].title}
                      img={`${cards[0].field_naslovna_slika}`}
                      alt={cards[0].title}
                      link={cards[0].nid}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 px-0 ">
                  <div className="small-cont">
                    <div className="small-padding box">
                      <Img_wrapper
                        img={`${cards[1].field_naslovna_slika}`}
                        title={cards[1].title}
                        link={cards[1].nid}
                        alt={cards[1].title}
                      />
                    </div>
                    <div className="small-padding box">
                      <Img_wrapper
                        img={`${cards[2].field_naslovna_slika}`}
                        title={cards[2].title}
                        link={cards[2].nid}
                        alt={cards[2].title}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mx-0 mt-2">
                <div className="col-12 mt-2 px-0 ">
                  {cards &&
                    cards.map(
                      (card, index) =>
                        index > 3 && (
                          <div
                            key={index * 432}
                            className="row mx-0 kategorija-list-row"
                          >
                            <div className="col-md-3 px-0 ">
                              <Img_wrapper
                                img={`${card.field_naslovna_slika}`}
                                alt={cards[0].title}
                                link={cards[0].nid}
                              />
                            </div>
                            <div className="col-md-9 px-0 px-sm-3">
                              <div className="views-field views-field-title">
                                <h3 className="field-content">
                                  <Link href={`/node/${card.nid}`}>
                                    <a
                                      onClick={() =>
                                        dispatch(is_loading_true())
                                      }
                                    >
                                      {card.title}
                                    </a>
                                  </Link>
                                </h3>
                              </div>
                              <div className="">
                                <span className="field-content small-datum">
                                  {card.created}
                                </span>
                              </div>
                              <div className="views-field views-field-body">
                                <span className="field-content">
                                  <div
                                    className="main-content"
                                    dangerouslySetInnerHTML={createMarkup(card.body)}
                                  ></div>
                                </span>
                              </div>
                            </div>
                          </div>
                        )
                    )}
                </div>
                <div className="col-12 px-0">
                  <ul className="js-pager__items">
                    <li className="prev-list mr-2">
                      <a
                        href="/views/ajax?page=0"
                        title="Go to previous page"
                        rel="prev"
                      >
                        <span className="visually-hidden">Previous page</span>
                        <button className="btn-arrow">&#8249;</button>
                      </a>
                    </li>

                    <li className="next-list ml-2">
                      <a
                        href="/views/ajax?page=2"
                        title="Go to next page"
                        rel="next"
                      >
                        <span className="visually-hidden">Next page</span>
                        <button className="btn-arrow">&#8250;</button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="col-md-3">
          <Sidebar
            analizi_temi={sidebar.analizi_temi && sidebar.analizi_temi}
          />
        </div>
        <style jsx>{`
          .arrow-right {
            background-image: url(/images/icons/left-arrow.svg);
          }
          .arrow-left {
            background-image: url(/images/icons/left-arrow.svg);
          }
        `}</style>
      </div>
    </div>
  );
};

export default Single_Page;
