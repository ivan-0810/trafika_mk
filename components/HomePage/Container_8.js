import Img_wrapper from '../Img_wrapper'
import Link from 'next/link';
import imgSport from '../../styles/assets/images/maxbet-logo.webp'
import Container_Header from '../Container_Header'
import { is_loading_true } from '../../store/menu/action'
import { useDispatch } from 'react-redux'

const Container_8 = ({ cards, header, link }) => {
  const dispatch = useDispatch()
  return (
    <div className="container_8 row mx-0">
      {cards && (
        <>
        <Container_Header header={header} padding="p-0" link={link} />
          <div className="col-lg-6 col-12 big-cont">
            <Img_wrapper
              title={cards[0].title}
              img={cards[0].field_naslovna_slika}
              alt={cards[0].title}
              link={cards[0].nid}
              nadnaslov={cards[0].field_nadnaslov}
            />
          </div>
          <div className="col-lg-6 col-12 p-0 middle-cont">
            <div className="row mx-0 h-100">
              <div className="col-lg-6 col-12 px-0">
                <div className="row mx-0 h-100">
                  {cards.map(
                    (card, index) =>
                      index > 0 &&
                      index < 3 && (
                        <div
                          key={index * 34}
                          className="col-12 cont-small_box mb-sm-0"
                        >
                          <Img_wrapper
                            img={card.field_naslovna_slika}
                            title={card.title}
                            link={card.nid}
                            alt={card.title}
                            nadnaslov={card.field_nadnaslov}
                          />
                        </div>
                      )
                  )}
                </div>
              </div>
              <div className="col-lg-6 col-12 sport-wrapper px-0">
                <div className="row h-100 sport-col">
                  <div className={`col-lg-12 px-0`}>
                    {cards.map(
                      (card, index) =>
                        index >= 3 && (
                          <div
                            key={index * 432}
                            className="row mx-0 mali-vesti"
                          >
                            <div className="d-flex align-items-center pl-2">
                              <span>
                                <Link href={`/node/${card.nid}`}>
                                  <a  onClick={() => dispatch(is_loading_true())}>{card.title}</a>
                                </Link>
                              </span>
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Container_8;
