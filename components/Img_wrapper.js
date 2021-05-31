import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { spinner_loading_true } from '../store/spinner/action';

const Img_wrapper = ({ img, title, alt, link, nadnaslov }) => {
  const dispatch = useDispatch();
  return (
    <div className="img-wrapper">
      <div className="img-div">
        <Link href={`/post/${link}`}>
          <a target="_blank" onClick={() => dispatch(spinner_loading_true())}>
            <img src={img} alt={title} />
          </a>
        </Link>
        {nadnaslov && nadnaslov !== "" && (
          <div className="nadnaslov">
            <h4 className="px-2">{nadnaslov}</h4>
          </div>
        )}
      </div>
      <div className="text-wrapper">
        {title && (
          <div className="title">
            <h2>{title}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Img_wrapper;
