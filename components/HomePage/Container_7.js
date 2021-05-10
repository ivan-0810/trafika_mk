import Carousel from '../Carousel'
import Container_Header from '../Container_Header'

const Container_7 = ({ cards, header, link }) => {

  return (
    <div className="container_7 col-12 px-0 row mx-0">
      <Container_Header header={header} padding="p-0" link={link} />
      <div className="col-12 p-0">
      <div className="carousel row mx-0" >
        <div className="col-12 p-0">
        <Carousel cards={cards} isCarousel_2={true} cards_num={5}/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Container_7;
