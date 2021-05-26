import Link from 'next/link';
import Img_wrapper from '../components/Img_wrapper';
import Sidebar from './Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { is_loading_true } from '../store/menu/action';
import Medium from '../components/Medium';

const Single_Page = ({ title, clusters }) => {
  const dispatch = useDispatch();
  const sidebar = useSelector(state => state.sidebar);
  const menu = useSelector(state => state.menu);

  // function createMarkup(body) {
  //   return { __html: body };
  // }

  return (
    <div className="container big-container category">
      {menu && menu.is_loading && menu.is_loading && (
        <div className="spinner-wrapper rounded-circle">
          <div className="eclipse_spinner"></div>
        </div>
      )}
      <div className="row">
        <div className="col-12">
          <div className="header">
            <h2 className="text-center">{title}</h2>
          </div>
        </div>
        <div className="col-md-9 col-12">
          {clusters &&
            clusters.map((cluster, index) => (
              <div key={index * 5} className="row mx-auto cluster mt-sm-2">
                <div className="col-4 pl-0 h-100">
                  <Img_wrapper
                    img={cluster.articles[0].photo_url}
                    alt={cluster.articles[0].title}
                    link={cluster.articles[0].link}
                  /> 
                </div>

                <div className="col-8 pl-0 d-flex flex-column justify-content-between">
                  {cluster.articles.map((article, inx) => (
                    <>
                      {inx === 0 ? (
                        <>
                          <h2 key={index * 45632}>
                            <Link href={article.link}>
                              <a onClick={() => dispatch(is_loading_true())}>
                                {article.title}
                              </a>
                            </Link>
                          </h2>
                          <span className="meduim">
                            {article.feed.name} - <b>ново</b>
                          </span>
                        </>
                      ) : (
                        inx < 4 && (
                          <div
                            key={index * 43232}
                            className="d-flex align-items-center podnaslov"
                          >
                            <Link href={article.link}>
                              <p>{article.title}</p>
                            </Link>

                            <Medium crta="-" text={article.feed.name} />
                          </div>
                        )
                      )}
                    </>
                  ))}

                  <div
                    key={index * 42390}
                    className="d-flex align-items-center mediumi"
                  >
                    {cluster.articles.map((article, inx_2) => (
                      <>
                        {inx_2 > 4 && inx_2 < 9 && (
                          <Link key={index * 4290} href={article.link}>
                            <a>
                              <Medium crta="|" text={article.feed.name} />
                            </a>
                          </Link>
                        )}
                      </>
                    ))}
                    <Link href={`/cluster/${cluster.id}`}>
                      <a>
                        <Medium
                          crta="|"
                          text={`сите ${cluster.articles_count} вести`}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* <div className="col-md-3">
          <Sidebar
            analizi_temi={sidebar.analizi_temi && sidebar.analizi_temi}
          />
        </div> */}
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
