import Img_wrapper from '../Img_wrapper'
import Container_Header from '../Container_Header'

const Container_6 = ({ cards }) => {
 
  return (
    <div className="container_6 row">
      <Container_Header header="Life" padding="p-0" link="life" />
     {cards && 
      <div className="col-12 p-0">
      <div className="row mx-0">
        <div className="col-md-6 p-0 mb-1 mb-sm-0 small-padding big-cont">
          <Img_wrapper
            title={cards[0].title}
            img={cards[0].field_naslovna_slika}
            alt={cards[0].title}
            link={cards[0].nid}
          />
        </div>
        <div className="col-md-6 p-0 ">
        <div className="row mx-0 h-100">
        {cards.map((card, index) => (
          index > 0 && 
          <div
            key={index * 3234}
            className="col-md-6 col-12 cont_6_box p-0 small-padding"
          >
            <Img_wrapper img={card.field_naslovna_slika}
                  title={card.title}
                  link={card.nid}
                  alt={card.title} />
          </div>
        ))}
      </div>
        </div>
      </div>
    </div>
     }
    </div>
  );
};

export default Container_6;
