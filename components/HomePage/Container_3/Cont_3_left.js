import Link from 'next/link';
import Img_wrapper from '../../Img_wrapper';
import Cont_3_Footer from './Cont_3_Footer';
import Container_Header from '../../Container_Header';
import { useDispatch } from 'react-redux';
import { is_loading_true } from '../../../store/menu/action';
import Medium from '../../Medium';

const Cont_3_Left = ({ cont_left, header, link }) => {
  const dispatch = useDispatch();
  const mediumi = ['Медиум', 'Медиум', 'Медиум', 'Медиум', 'Медиум', 'Медиум'];
  return (
    <div className="col-md-6 col-12 mb-5 mb-sm-0">
      <div className="row">
        <Container_Header header={header} padding="" link={link} />
        <div className="big-cont col-12">
          <div className="row mx-0 h-100">
            <div className="col-md-6 col-12 px-0">
              {' '}
              {cont_left && (
                <Img_wrapper
                  title={cont_left[0].title}
                  img={cont_left[0].field_naslovna_slika}
                  alt={cont_left[0].title}
                  link={cont_left[0].nid}
                  nadnaslov={cont_left[0].field_nadnaslov}
                />
              )}
            </div>
            <div className="col-md-6 col-12 px-0">
              {' '}
              {cont_left && (
                <Img_wrapper
                  title={cont_left[0].title}
                  img={cont_left[0].field_naslovna_slika}
                  alt={cont_left[0].title}
                  link={cont_left[0].nid}
                  nadnaslov={cont_left[0].field_nadnaslov}
                />
              )}
            </div>
          </div>
        </div>

        <div className="col-12 mt-2 pr-0 ">
          {cont_left &&
            cont_left.map((card, index) => (
              <div
                key={index * 4324}
                className="row mx-auto sredni-vesti mt-sm-2"
              >
                <div className="col-4 pl-0">
                  <Img_wrapper
                    img={card.field_naslovna_slika}
                    alt={card.title}
                    link={cont_left[0].nid}
                  />
                </div>
                <div className="col-8 pl-0">
                  <h2>
                    <Link href={`/node/${card.nid}`}>
                      <a onClick={() => dispatch(is_loading_true())}>
                        {card.title}
                      </a>
                    </Link>
                  </h2>
                  <span className="meduim">
                    Медиум - <b>ново</b>
                  </span>
                  <div>
                    <div className="d-flex align-items-center podnaslov mt-2">
                      <p>
                        Наслов пгогоел да видиме како изгледа со повеке текст во
                        параграафот
                      </p>
                      <Medium crta="-" text="Медиум" />
                    </div>
                    <div className="d-flex podnaslov">
                      <p>
                        Наслов пгогоел да видиме како изгледа со повеке текст во
                        параграафот
                      </p>
                      <Medium crta="-" text="Медиум" />
                    </div>
                    <div className="d-flex podnaslov">
                      <p>
                        Наслов пгогоел да видиме како изгледа со повеке текст во
                        параграафот
                      </p>
                      <Medium crta="-" text="Медиум" />
                    </div>
                    <div className="d-flex align-items-center mediumi">
                      <Medium crta="|" text="Медиум" />
                      {mediumi.map((medium, index) =>
                        index < 3 ? (
                          <Medium key={index * 743} crta="|" text={medium} />
                        ) : (
                          index === 3 && (
                            <Medium
                              key={index * 743}
                              crta="|"
                              text="сите 150 вести"
                            />
                          )
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cont_3_Left;
