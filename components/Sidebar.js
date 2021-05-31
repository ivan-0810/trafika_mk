import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { spinner_loading_true } from '../store/spinner/action';
import trafika_png from '../styles/assets/images/TRAFIKA.mk.png';
const Sidebar = ({ top_news }) => {
  const dispatch = useDispatch();
  const addDefaultSrc = (ev) => {
    ev.target.src = trafika_png
  }
  return (
    <div className="sidebar rwo-mx-0 flex-column">
      <div className="row mx-0 ">
        <div className="col-12 p-0 block-title-wrapper">
          <h3 className="block-title">Најнови Вести</h3>
        </div>
        <div className="col-12 analizi-temi px-0">
          {top_news &&
            top_news.map((news, index) => (
              <div key={index * 324} className="single-small-vest d-flex">
                <div className="views-field views-field-field-naslovna-slika">
                  <div className="field-content">
                    {' '}
                    <Link href={`/cluster/${news.cluster_id}`}>
                      <a onClick={() => dispatch(spinner_loading_true())}>
                        <img
                          onError={(e)=> e.target.src=`${trafika_png}`}
                          src={`${ news.article.photo_url}` }
                          alt={news.article.title}
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="text-contet ml-1">
                  <div className="views-field-field-nadnaslov">
                    <div className="field-content">
                      <p>{news.article.field_nadnaslov}</p>
                    </div>
                  </div>
                  <div className="views-field-title">
                    <span className="field-content">
                      <Link href={`/cluster/${news.cluster_id}`}>
                        <a onClick={() => dispatch(spinner_loading_true())}>
                          <h2>{news.article.title}</h2>
                        </a>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
