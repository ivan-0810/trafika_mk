import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { is_loading_true } from '../store/menu/action';
const Sidebar = ({ analizi_temi }) => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar rwo-mx-0 flex-column">
      <div className="col-12 p-0 sidebar-banner">
        banner
      </div>
      <div className="row mx-0 ">
        <div className="col-12 p-0 block-title-wrapper">
          <h3 className="block-title">Најнови Вести</h3>
        </div>
        <div className="col-12 analizi-temi px-0">
          {analizi_temi &&
            analizi_temi.map((card, index) => (
              <div key={index * 324} className="single-small-vest d-flex">

                  <div className="views-field views-field-field-naslovna-slika">
                    <div className="field-content">
                      {' '}
                      <Link href={`/node/${card.nid}`}>
                        <a onClick={() => dispatch(is_loading_true())}>
                          <img
                         
                            src={`https://api.vesnik.com${card.field_naslovna_slika}`}
                            alt={card.title}
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
          
                  <div className="text-contet ml-1">
                  <div className="views-field-field-nadnaslov">
                    <div className="field-content">
                      <p>{card.field_nadnaslov}</p>
                    </div>
                  </div>
                  <div className="views-field-title">
                    <span className="field-content">
                      <Link href={`/node/${card.nid}`}>
                        <a onClick={() => dispatch(is_loading_true())}>
                          <h2>{card.title}</h2>
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
