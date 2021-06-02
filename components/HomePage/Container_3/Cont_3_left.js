import { Fragment } from 'react';
import Link from 'next/link';
import Img_wrapper from '../../Img_wrapper';
import Container_Header from '../../Container_Header';
import { useDispatch } from 'react-redux';
import { spinner_loading_true } from '../../../store/spinner/action'
import Medium from '../../Medium';

const Cont_3_Left = ({ cont_left, header, category_link_left }) => {
  const dispatch = useDispatch();

  return (
    <div className="col-lg-6 col-12 mb-5 mb-sm-0 px-0 px-md-3">
      <div className="row">
        <Container_Header
          header={header}
          padding=""
          link={category_link_left}
        />

        <div className="col-12 mt-2 pr-0 ">
          {cont_left &&
            cont_left.map((cluster, index) => (
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
                        <Fragment key={inx * 83632}>
                          {inx === 0 ? (
                            <Fragment>
                              <h2>
                                <Link href={`/post/${article.id}`}>
                                  <a
                                    onClick={() => dispatch(spinner_loading_true())}
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
                                key={inx * 6232}
                                className="podnaslov"
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
                        key={index * 42390}
                        className="d-flex align-items-center mediumi"
                      >
                        {cluster.articles.map((article, inx_2) => (
                          <Fragment key={inx_2 * 42230}>
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
                )}
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cont_3_Left;
