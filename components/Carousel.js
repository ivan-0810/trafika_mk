import { useState, useEffect, Fragment } from 'react';
import ItemsCarousel from 'react-items-carousel';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { is_loading_true } from '../store/menu/action';
import { useWindowSize } from '../hooks/UseWindowSize';

const Carousel_Cont = ({ carousel_news, isCarousel_2, cards_num }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const windowSize = useWindowSize();
  const chevronWidth = 40;
  const dispatch = useDispatch();

  return (
    <>
      {carousel_news && (
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={1}
          gutter={0}
          leftChevron={<button>&#8249;</button>}
          rightChevron={<button>&#8250;</button>}
          outsideChevron
          chevronWidth={chevronWidth}
          alwaysShowChevrons={true}
          activePosition="center"
          classes={{
            wrapper: 'wrapper',
            itemsWrapper: 'itemsWrapper',
            itemsInnerWrapper: 'itemsInnerWrapper',
            itemWrapper: 'itemWrapper',
            rightChevronWrapper: 'chevron chevron_right',
            leftChevronWrapper: 'chevron chevron_left',
          }}
        >
          {carousel_news.map((news, index) => (
            <section key={index * 6432} className="img-wrapper">
              <div className="img-div">
                <Link href={news.article.link}>
                  <a className="" onClick={() => dispatch(is_loading_true())}>
                    <img src={`${news.article.photo_url}`} alt={news.article.title} />
                  </a>
                </Link>
              </div>
              <div className="text-wrapper">
                <div className="title">
                  <h2>{isCarousel_2 ? news.article.field_nadnaslov : news.article.title}</h2>
                </div>
              </div>
            </section>
          ))}
        </ItemsCarousel>
      )}
    </>
  );
};
export default Carousel_Cont;
