import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { is_loading_true } from '../store/menu/action'

const Container_Header = ({ header, padding, link }) => {
  const dispatch = useDispatch();
  return (
    <div className={`col-12 my-2 ${padding}`}>
      <div className="container_header">
        <Link href={`/category/${link}`}>
          <a onClick={() => dispatch(is_loading_true())}>
            <h2
              className="m-0 pl-4 py-2"
              
            >
              {header}
            </h2>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Container_Header;
