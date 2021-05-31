import { useState } from 'react';

const Paginator = ({setArticles, articles }) => {
  const [indexOfFirstCluster, setIndexOfFirstCluster] = useState(0);
  const [indexOfLastCluster, setIndexOfLastCluster] = useState(9);

  const paginatePrev = () => {
    if (indexOfFirstCluster === 0) {
      let arr = articles.slice(0, 10);
      setArticles(arr);
    } else {
      setIndexOfFirstCluster(prevState => prevState - 10);
      setIndexOfLastCluster(prevState => prevState - 10);
      let arr = articles.slice(indexOfFirstCluster, indexOfLastCluster);
      setArticles(arr);
    }
    return;
  };

  const paginateNext = () => {
    const last_clusters_of_arr = articles.length - indexOfLastCluster;
    if (last_clusters_of_arr < 10) {
      let arr = articles.slice(indexOfLastCluster);
      setArticles(arr);
    } else {
      setIndexOfFirstCluster(prevState => prevState + 10);
      setIndexOfLastCluster(prevState => prevState + 10);
      let arr = articles.slice(indexOfFirstCluster, indexOfLastCluster);
      setArticles(arr);
    }
    return;
  };

  return (
    <ul className="js-pager__items">
      <li className="prev-list mr-2">
        <button className="btn-arrow" onClick={paginatePrev}>
          &#8249;
        </button>
      </li>

      <li className="next-list ml-2">
        <button className="btn-arrow" onClick={paginateNext}>
          &#8250;
        </button>
      </li>
    </ul>
  );
};

export default Paginator;
