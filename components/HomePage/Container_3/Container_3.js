import Cont_3_Left from './Cont_3_left';
import Cont_3_Right from './Cont_3_right';

const Container_3 = ({
  cont_left,
  cont_right,
  header_left,
  header_right,
  category_link_left,
  category_link_right,
}) => {
  return (
    <div className="container_3 row mx-0">
      <Cont_3_Left
        cont_left={cont_left}
        header={header_left}
        category_link_left={category_link_left}
      />

      <Cont_3_Right
        cont_right={cont_right}
        header={header_right}
        category_link_right={category_link_right}
      />
    </div>
  );
};

export default Container_3;
