import { useState, useEffect } from 'react';
import Link from 'next/link';
import Img_wrapper from '../components/Img_wrapper';
import Sidebar from './Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import Paginator from '../components/Paginator';

const Single_Cluster = ({ top_news, cluster }) => {
  const [articles, setArticles] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (cluster.articles.length > 10) {
      let arr = cluster.articles.slice(0, 10);
      setArticles(arr);
    } else {
      setArticles(cluster.articles);
    }
  }, []);


  const flipDates = date => {
    const dates = date.substring(0, 10).split('-');
    let fliped = `${dates[2]}-${dates[1]}-${dates[0]}`;

    return fliped;
  };
  console.log(articles, 'articles');

  return (
    <div className="container big-container single-cluster">
      <div className="row">
        {articles && (
          <div className="col-md-7 col-12 main-content">
            <div className="block-region-content">
              <div className="row mx-0 mt-2">
                <div className="col-12 mt-2 px-0 ">
                  {articles.map((article, index) => (
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
                              <a target="_blank">{article.title}</a>
                            </Link>
                          </h3>
                        </div>
                        <div className="">
                          <span className="small-datum">
                            {flipDates(article.time_published)}
                          </span>
                        </div>
                        <div className="">
                          <p>{article.text_content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="col-12 pl-0">
                  <Paginator
                    articles={cluster.articles}
                    setArticles={setArticles}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="col-md-4 col-12">
          <Sidebar top_news={top_news} />
        </div>
      </div>
    </div>
  );
};

export default Single_Cluster;
