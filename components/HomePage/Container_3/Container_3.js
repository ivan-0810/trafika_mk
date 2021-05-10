import { isEmpty } from 'lodash';
import Cont_3_Left from './Cont_3_left'
import Cont_3_Right from './Cont_3_right'

const Container_3 = ({
  cont_left,
  cont_right,
  header_left,
  header_right,
  link_left,
  link_right,
}) => {
  return (
    <div className="container_3 row">
      {!isEmpty(cont_left) && 
       <Cont_3_Left
       cont_left={cont_left}
       header={header_left}
       link={link_left}
     />
      }
     {!isEmpty(cont_right) && 
      <Cont_3_Right
      cont_right={cont_right}
      header={header_right}
      link={link_right}
    />
     }
     
    </div>
  );
};

export default Container_3;
