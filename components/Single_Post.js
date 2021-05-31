import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { spinner_loading_true } from '../store/spinner/action';


const Single_Post = ({ data }) => {

  const spinner = useSelector(state => state.spinner);
  const dispatch = useDispatch();

  return (
    <>
    <div className="container-fluid single-post">
      {spinner && spinner.is_loading && spinner.is_loading && (
        <div className="spinner-wrapper rounded-circle">
          <div className="eclipse_spinner"></div>
        </div>
      )}
      <div className="container px-0">
      <div className="row mx-0">
        <div className="col-12 px-0">
          <div className="top-content">
            <Link href="https://www.google.com/">
              <a>trafika.mk</a>
            </Link>
            <Link href="https://www.google.com/">
            <a
              className="close-btn"
              onClick={() => dispatch(spinner_loading_true())}
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
      <iframe src={data.link}></iframe>
    </div>
    </>
  );
};

export default Single_Post;
