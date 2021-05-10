import Link from 'next/link';
import Container_Header from '../Container_Header';
import Img_wrapper from '../Img_wrapper'
import { useDispatch } from 'react-redux';
import { is_loading_true } from '../../store/menu/action';
const Container_2 = ({ cards }) => {
  const dispatch = useDispatch();
  return (
    <div className="container_2 row">
      <Container_Header header="Македонија" padding="px-0" link="makedonija" />

      {cards &&
        cards.map(
          (card, index) =>
            index < 9 && (
              <div key={index * 124} className="col-sm-4 small-padding">
               <Img_wrapper
                title={card.title}
                img={card.field_naslovna_slika}
                link={card.nid}
                nadnaslov={card.field_nadnaslov}
              />
              </div>
            )
        )}
    </div>
  );
};

export default Container_2;
