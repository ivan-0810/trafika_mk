import { Fragment } from 'react';
import Link from 'next/link';
import Container_Header from '../../Container_Header';
import Img_wrapper from '../../Img_wrapper';
import Medium from '../../Medium';
import { useDispatch } from 'react-redux';
import { spinner_loading_true } from '../../../store/spinner/action'

const Cont_3_Right = ({ cont_right, header, category_link_right }) => {
  const dispatch = useDispatch();
  return (
    <div className="col-lg-6 col-12 px-0">
      <div className="row">
        <Container_Header
          header={header}
          padding=""
          link={category_link_right}
        />
        <div className="col-12 mt-2 pr-0 ">
          {cont_right &&
            cont_right.map((cluster, index) => (
              <Fragment key={index * 5}>
                {index < 4 && (
                  <div className="row mx-auto cluster mt-sm-2">
                    <div className="col-4 pl-0 h-100">
                      <Img_wrapper
                        img={cluster.articles[0].photo_url}
                        alt={cluster.articles[0].title}
                        link={cluster.articles[0].id}
                      />
                    </div>

                    <div className="col-8 pl-0 d-flex flex-column justify-content-between">
                      {cluster.articles.map((article, inx) => (
                        <Fragment key={inx * 45632}>
                          {inx === 0 ? (
                            <Fragment>
                              <h2>
                                <Link href={`/post/${article.id}`}>
                                  <a
                                  target="_blank"
                                    onClick={() => dispatch(spinner_loading_true())}
                                  >
                                    {article.title}
                                  </a>
                                </Link>
                              </h2>
                              <span className="meduim">
                                {article.feed.name} - <b>????????</b>
                              </span>
                            </Fragment>
                          ) : (
                            inx < 4 && (
                              <div
                                key={index * 43232}
                                className="d-flex align-items-center podnaslov"
                              >
                                <Link href={`/post/${article.id}`}>
                                  <a target="_blank"> <p>{article.title}</p></a>
                                 
                                </Link>

                                <Medium crta="-" text={article.feed.name} />
                              </div>
                            )
                          )}
                        </Fragment>
                      ))}

                      <div
                        key={index * 42390}
                        className="d-flex align-items-center mediumi"
                      >
                        {cluster.articles.map((article, inx_2) => (
                          <Fragment key={inx_2 * 4290}>
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
                              text={`???????? ${cluster.articles_count} ??????????`}
                            />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cont_3_Right;
