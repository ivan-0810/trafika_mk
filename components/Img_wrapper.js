import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { is_loading_true } from '../store/menu/action';

const Img_wrapper = ({ img, title, alt, link, nadnaslov }) => {
  const dispatch = useDispatch();
  return (
    <div className="img-wrapper">
      <Link href={`/node/${link}`}>
        <a className="" onClick={() => dispatch(is_loading_true())}>
          <img src={`https://api.vesnik.com${img}`} alt={title} />
        </a>
      </Link>

      <div className="text-wrapper">
        {title && (
          <div className="title">
            <h2>{title}</h2>
          </div>
        )}
        {nadnaslov && (
          <div className="nadnaslov">
            <h4 className="">{nadnaslov}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Img_wrapper;
