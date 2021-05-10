import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import Img_wrapper from '../Img_wrapper';
import { is_loading_true } from '../../store/menu/action';
const Container_1 = ({ cards }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (cards) {
      let newCards = cards.slice(0, 5);
      setData(newCards);
      setCount(prevState => prevState + 5);
    }
  }, [cards]);

  useEffect(() => {
    const tiemout = setTimeout(() => {
      let cardsLength = cards.length;

      if (cardsLength - count < 5 && cardsLength - count === 0) {
        let newCards = cards.slice(0, 5);
        setData(newCards);
        setCount(0);
      } else if (cardsLength - count < 5 && cardsLength - count === 4) {
        let newCards = cards.slice(count);
        setData(newCards);
        setCount(0);
      } else if (cardsLength - count < 5 && cardsLength - count === 3) {
        let newCards = cards.slice(count);
        setData(newCards);
        setCount(0);
      } else if (cardsLength - count < 5 && cardsLength - count === 2) {
        let newCards = cards.slice(count,);
        setData(newCards);
        setCount(0);
      } else if (cardsLength - count < 5 && cardsLength - count === 1) {
        let newCards = cards.slice(count);
        setData(newCards);
        setCount(0);
      } else {
        let newCards = cards.slice(count, count + 5);
        setData(newCards);
        setCount(prevState => prevState + 5);
      }
    }, 4000);
    return () => {
      clearTimeout(tiemout);
    };
  }, [count]);

  return (
    <>
      {data && (
        <div className="container_1 row mt-2">
          <div className="col-sm-6 col-12 p-0">
            <div className="big-cont small-padding">
              <Img_wrapper
                title={data[0].title}
                img={data[0].field_naslovna_slika}
                link={data[0].nid}
                nadnaslov="Медиум-додадено сега"
              />
            </div>
          </div>
          <div className="col-sm-6 col-12 p-0">
            <div className="big-cont">
              <div className="box small-padding">
              <Img_wrapper
                title={data[1].title}
                img={data[1].field_naslovna_slika}
                alt={data[1].title}
                link={data[1].nid}
                nadnaslov="Медиум-додадено сега"
              />
              </div>
              <div className="box  small-padding">
              <Img_wrapper
                title={data[1].title}
                img={data[1].field_naslovna_slika}
                alt={data[1].title}
                link={data[1].nid}
                nadnaslov="Медиум-додадено сега"
              />
              </div>
            </div>
          </div>
          <div className="row mx-0">
            <div className="col-sm-4 col-12 p-0">
              <div className="small-cont">
                <div className="small-padding box">
                  <Img_wrapper
                   img={data[2].field_naslovna_slika}
                    title={data[2].title}
                    link={data[2].nid}
                    alt={data[2].title}
                    nadnaslov="Медиум-додадено сега"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-12 p-0">
              <div className="small-cont">
                <div className="small-padding box">
                  <Img_wrapper
                    img={data[3].field_naslovna_slika}
                    title={data[3].title}
                    link={data[3].nid}
                    alt={data[3].title}
                    nadnaslov="Медиум-додадено сега"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-12 p-0">
              <div className="small-cont">
                <div className="small-padding box">
                  <Img_wrapper
                    img={data[4].field_naslovna_slika}
                    title={data[4].title}
                    link={data[4].nid}
                    alt={data[4].title}
                    nadnaslov={data[4].field_nadnaslov}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Container_1;
