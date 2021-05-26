import Link from 'next/link';
import Container_Header from '../../Container_Header';
import Img_wrapper from '../../Img_wrapper';
import Medium from '../../Medium';
import { useDispatch } from 'react-redux';
import { is_loading_true } from '../../../store/menu/action';

const Cont_3_Right = ({ cont_right, header, category_link_right }) => {
  
  const dispatch = useDispatch();
  return (
    <div className="col-md-6 col-12 px-0">
      <div className="row">
        <Container_Header header={header} padding="" link={category_link_right} />
        <div className="col-12 mt-2 pr-0 ">
          {cont_right &&
            cont_right.map((cluster, index) => (
              <>
                {index < 4 && (
                  <div
                    key={index * 5}
                    className="row mx-auto cluster mt-sm-2"
                  >
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
                                  <a
                                    onClick={() => dispatch(is_loading_true())}
                                  >
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
                              <div key={index * 43232} className="d-flex align-items-center podnaslov">
                                <Link href={article.link}>
                                  <p>{article.title}</p>
                                </Link>

                                <Medium crta="-" text={article.feed.name} />
                              </div>
                            )
                          )}
                        </>
                      ))}

                      <div key={index * 42390} className="d-flex align-items-center mediumi">
                        {cluster.articles.map((article, inx_2) => (
                          <>
                            {inx_2 > 4 && inx_2 < 9 && (
                              <Link key={index * 4290} href={article.link} >
                                <a>
                                  <Medium crta="|" text={article.feed.name} />
                                </a>
                              </Link>
                            )}
                            
                          </>
                        ))}
                        <Link href={`/${category_link_right}`}>
                              <a>
                                <Medium crta="|" text={`сите ${cluster.articles_count} вести`} />
                              </a>
                            </Link>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cont_3_Right;
