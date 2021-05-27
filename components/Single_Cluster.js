import Link from 'next/link';
import Img_wrapper from '../components/Img_wrapper';
import Sidebar from './Sidebar';
import { useSelector, useDispatch } from 'react-redux';

const Single_Cluster = ({ top_news, cluster }) => {


  const flipDates = date => {
    const dates = date.substring(0, 10).split('-');
    let fliped = `${dates[2]}-${dates[1]}-${dates[0]}`;

    return fliped;
  };
  return (
    <div className="container big-container single-cluster">

      <div className="row justify-content-around">
        {/* <div className="col-12">
          <div className="header p-3 d-flex justify-content-center">
            <h2 className="text-center">{title}</h2>
          </div>
        </div> */}
        {cluster && (
          <div className="col-md-7 col-12 main-content">
            <div className="block-region-content">
              <div className="row mx-0 mt-2">
                <div className="col-12 mt-2 px-0 ">
                  {cluster &&
                    cluster.articles.map((article, index) => (
                      <div
                        key={index * 432}
                        className="row mx-0 kategorija-list-row"
                      >
                        <div className="col-md-4 px-0 ">
                          <Img_wrapper
                            img={`${article.photo_url}`}
                            alt={article.title}
                            link={article.id}
                          />
                        </div>
                        <div className="col-md-8 px-0 px-sm-3">
                          <div>
                            <h3>
                              <Link href={`/post/${article.id}`}>
                                <a
                                  target="_blank"
                                
                                >
                                  {article.title}
                                </a>
                              </Link>
                            </h3>
                          </div>
                          <div className="">
                            <span className="small-datum">
                              {flipDates(article.time_published)}
                            </span>
                          </div>
                          <div className="views-field views-field-body">
                            <span className="field-content">
                              <p>{article.text_content}</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
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
        <div className="col-md-4 col-12">
          <Sidebar top_news={top_news} />
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

export default Single_Cluster;
