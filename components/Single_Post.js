import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { is_loading_true } from '../store/menu/action';


const Single_Post = ({ data }) => {

  const menu = useSelector(state => state.menu);
  const dispatch = useDispatch();
 console.log(data, 'data');
  return (
    <>
    <div className="container-fluid single-post">
      {menu && menu.is_loading && menu.is_loading && (
        <div className="spinner-wrapper rounded-circle">
          <div className="eclipse_spinner"></div>
        </div>
      )}
      <div className="container px-0">
      <div className="row mx-0">
        <div className="col-12 px-0">
          <div className="top-content">
            <Link href="/">
              <a>trafika.mk</a>
            </Link>
            <Link href="/">
            <a
              className="close-btn"
              onClick={() => dispatch(is_loading_true())}
            >
              x
            </a>
          </Link>
          </div>
        
        </div>
      </div>
      </div>
     
    </div>
    <div className="container-fluid i-frame px-0">
      <iframe src="https://samozdravje.mk/mz-vchera-se-aplitsirani-6-940-vaktsini/"></iframe>
    </div>
    </>
  );
};

export default Single_Post;
