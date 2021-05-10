import Img_wrapper from '../Img_wrapper'
import Container_Header from '../Container_Header'

const Container_5 = ({ cards }) => {
  return (
    <div className="container_5 row">
       <Container_Header header="ваш избор" padding="p-0" link="vash-izbor" />
      {cards && (
        <>
          <div className="col-12 p-0 small-padding mb-1 mb-sm-0 big-cont">
            <Img_wrapper
              title={cards[0].title}
              img={cards[0].field_naslovna_slika}
              alt={cards[0].title}
              link={cards[0].nid}
              nadnaslov={cards[0].field_nadnaslov}
            />
          </div>
          <div className="col-12 p-0">
            <div className="row mx-0">
              {cards.map((card, index) => (
                index > 0 && 
                <div
                  key={index * 324}
                  className="col-md-3 col-12 cont_5_box p-0 mb-1 mb-sm-0 small-padding"
                >
                  <Img_wrapper
                    img={card.field_naslovna_slika}
                    title={card.title}
                    link={card.nid}
                    alt={card.title}
                    nadnaslov={cards.field_nadnaslov}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Container_5;
