import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import Img_wrapper from '../Img_wrapper';
import { is_loading_true } from '../../store/menu/action';
import Carousel from '../Carousel';

const Container_1 = ({ top_news }) => {
  const [carousel_news, setCarouselNews] = useState()
  useEffect(() => {
    let arr = top_news.slice(4);
    setCarouselNews(arr)

  }, [top_news])

  return (
    <>
      {top_news && (
        <div className="container_1 row ">
          <div className="col-12 homepage-carousel">
            <h3>топ вести</h3>
            <Carousel carousel_news={carousel_news} />
          </div>

          <div className="col-12 px-0">
            <div className="row mx-0 mt-3 homepage-boxes">
              {top_news.map(
                (news, index) =>
                  index < 4 && (
                    <div key={index * 124} className={`col-md-6 col-12 ${index % 2 !== 0 ? 'pl-0' : ''}`}>
                      <Img_wrapper
                        title={news.article.title}
                        img={news.article.photo_url}
                        link={news.article.link}
                       
                      />
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Container_1;
