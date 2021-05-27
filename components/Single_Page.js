import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import Img_wrapper from '../components/Img_wrapper';
import Sidebar from './Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { is_loading_true } from '../store/menu/action';
import Medium from '../components/Medium';

const Single_Page = ({ title, clusters, top_news }) => {
  const dispatch = useDispatch();
  const [actualClusters, setActualClusters] = useState();
  const [indexOfFirstCluster, setIndexOfFirstCluster] = useState(0)
  const [indexOfLastCluster, setIndexOfLastCluster] = useState(9)
  const menu = useSelector(state => state.menu);

  useEffect(() => {
    let arr = clusters.slice(0,10)
    setActualClusters(arr);
  }, []);

  // Change page
  const paginatePrev = () => {
      if(indexOfFirstCluster === 0) {
        let arr = clusters.slice(0,10)
        setActualClusters(arr);
      }else {
        setIndexOfFirstCluster(prevState => prevState - 10);
        setIndexOfLastCluster(prevState => prevState - 10);
        let arr = clusters.slice(indexOfFirstCluster,indexOfLastCluster)
        setActualClusters(arr)
      }
      return;
  };

  const paginateNext = () => {
    const last_clusters_of_arr = clusters.length - indexOfLastCluster;
    if(last_clusters_of_arr < 10) {
      let arr = clusters.slice(indexOfLastCluster)
      setActualClusters(arr)
    }else {
      setIndexOfFirstCluster(prevState => prevState + 10);
      setIndexOfLastCluster(prevState => prevState + 10);
      let arr = clusters.slice(indexOfFirstCluster,indexOfLastCluster)
      setActualClusters(arr)
    }
   return;
  }

  return (
    <div className="container big-container category">
      {menu && menu.is_loading && menu.is_loading && (
        <div className="spinner-wrapper rounded-circle">
          <div className="eclipse_spinner"></div>
        </div>
      )}
      <div className="row justify-content-around">
        <div className="col-12">
          <div className="header">
            <h2 className="text-center">{title}</h2>
          </div>
        </div>
        <div className="col-md-7 col-12">
          {actualClusters &&
            actualClusters.map((cluster, index) => (
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
                              <a target="_blank" onClick={() => dispatch(is_loading_true())}>
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
        <div className="col-7 px-0">
          <ul className="js-pager__items">
            <li className="prev-list mr-2">
        
              <button className="btn-arrow" onClick={paginatePrev}>&#8249;</button>
            </li>

            <li className="next-list ml-2">
          
              <button className="btn-arrow" onClick={paginateNext}>&#8250;</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Single_Page;
