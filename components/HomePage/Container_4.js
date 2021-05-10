import Img_wrapper from '../Img_wrapper'
import Container_Header from '../Container_Header'

const Container_4 = ({ cards }) => {

  return (
    <div className="container_4 row">
       <Container_Header header="star" padding="p-0" link="star" />
      {cards && (
        <div className="row mx-0 w-100">
          <div className="col-sm-6 col-12 p-0 small-padding">
            <div className="big-cont">
              <Img_wrapper
                title={cards[0].title}
                img={cards[0].field_naslovna_slika}
                alt={cards[0].title}
                link={cards[0].nid}
                nadnaslov={cards[0].field_nadnaslov}
              />
            </div>
          </div>
          <div className="col-sm-6 col-12 p-0 small-padding">
            <div className="big-cont">
              <Img_wrapper
                title={cards[1].title}
                img={cards[1].field_naslovna_slika}
                alt={cards[1].title}
                link={cards[1].nid}
                nadnaslov={cards[1].field_nadnaslov}
              />
            </div>
          </div>
          <div className="row mx-0">
            <div className="col-sm-4 col-12 p-0">
              <div className="small-cont">
                <div className="small-padding box">
                  <Img_wrapper
                    img={cards[2].field_naslovna_slika}
                    title={cards[2].title}
                    link={cards[2].nid}
                    alt={cards[2].title}
                    nadnaslov={cards[2].field_nadnaslov}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-12 p-0">
              <div className="small-cont">
                <div className="small-padding box">
                  <Img_wrapper
                    img={cards[3].field_naslovna_slika}
                    title={cards[3].title}
                    link={cards[3].nid}
                    alt={cards[3].title}
                    nadnaslov={cards[3].field_nadnaslov}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-12 p-0">
              <div className="small-cont">
                <div className="small-padding box">
                  <Img_wrapper
                    img={cards[4].field_naslovna_slika}
                    title={cards[4].title}
                    link={cards[4].nid}
                    alt={cards[4].title}
                    nadnaslov={cards[4].field_nadnaslov}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Container_4;
