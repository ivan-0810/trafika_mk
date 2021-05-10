import { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { is_loading_true } from '../store/menu/action';
import { useWindowSize } from '../hooks/UseWindowSize';

const Carousel_Cont = ({ cards, isCarousel_2, cards_num }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const windowSize = useWindowSize();
  const chevronWidth = 40;
  const dispatch = useDispatch();

  return (
    <>
      {cards && (
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={
            windowSize.width <= 576
              ? 1
              : windowSize.width <= 768
              ? 3
              : cards_num
          }
          gutter={windowSize.width <= 576 ? 0 : 4}
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
          {cards.map((card, index) => (
            <section key={index * 6432} className="img-wrapper">
              <Link href={`/node/${card.nid}`}>
                <a className="" onClick={() => dispatch(is_loading_true())}>
                  <img
                    src={`https://api.vesnik.com${card.field_naslovna_slika}`}
                    alt={card.title}
                  />
                </a>
              </Link>
              <div className="text-wrapper">
                <div className="title">
                  <h2>{isCarousel_2 ? card.field_nadnaslov : card.title}</h2>
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
