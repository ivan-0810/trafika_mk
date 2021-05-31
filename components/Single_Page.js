import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import Img_wrapper from '../components/Img_wrapper';
import Sidebar from './Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import Medium from '../components/Medium';
import Paginator from '../components/Paginator';
import { spinner_loading_false } from '../store/spinner/action'

const Single_Page = ({ title, clusters, top_news }) => {
  const dispatch = useDispatch();
  const [articles, setArticles] = useState();
  const spinner = useSelector(state => state.spinner);

  useEffect(() => {
    if (clusters.length > 10) {
      let arr = clusters.slice(0, 10);
      setArticles(arr);
    } else {
      setArticles(clusters);
    }
    dispatch(spinner_loading_false());
  }, [clusters]);

  return (
    <div className="container big-container category">
      {spinner && spinner.is_loading && spinner.is_loading && (
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
        <div className="col-md-7 col-12">
          {articles &&
            articles.map((cluster, index) => (
              <div key={index * 243} className="row mx-auto cluster mt-sm-2">
                <div className="col-4 pl-0 h-100">
                  <Img_wrapper
                    img={cluster.articles[0].photo_url}
                    alt={cluster.articles[0].title}
                    link={cluster.articles[0].id}
                  />
                </div>

                <div className="col-8 pl-0 d-flex flex-column justify-content-between">
                  {cluster.articles.map((article, inx) => (
                    <Fragment key={inx * 1632}>
                      {inx === 0 ? (
                        <Fragment>
                          <h2>
                            <Link href={`/post/${article.id}`}>
                              <a
                                target="_blank"
                            
                              >
                                {article.title}
                              </a>
                            </Link>
                          </h2>
                          <span className="meduim">
                            {article.feed.name} - <b>ново</b>
                          </span>
                        </Fragment>
                      ) : (
                        inx < 4 && (
                          <div
                            key={inx * 1232}
                            className="d-flex align-items-center podnaslov"
                          >
                            <Link href={`/post/${article.id}`}>
                              <a target="_blank">
                                <p>{article.title}</p>
                              </a>
                            </Link>

                            <Medium crta="-" text={article.feed.name} />
                          </div>
                        )
                      )}
                    </Fragment>
                  ))}

                  <div
                    key={index * 432240}
                    className="d-flex align-items-center mediumi"
                  >
                    {cluster.articles.map((article, inx_2) => (
                      <Fragment key={inx_2 * 8290}>
                        {inx_2 > 4 && inx_2 < 9 && (
                          <Link href={`/post/${article.id}`}>
                            <a target="_blank">
                              <Medium crta="|" text={article.feed.name} />
                            </a>
                          </Link>
                        )}
                      </Fragment>
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
        <div className="col-md-4 col-12">
          <Sidebar top_news={top_news} />
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <Paginator articles={clusters} setArticles={setArticles} />
        </div>
      </div>
    </div>
  );
};

export default Single_Page;
