import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux'
import { is_loading_true } from '../../../store/menu/action'

const Cont_3_Footer = ({ link, title}) => {
  const dispatch = useDispatch()
  return (
    <div className="row mx-0 mali-vesti">
      <div className="d-flex align-items-center pl-2">
        <span>
          <Link href={`/node/${link}`}>
            <a  onClick={() => dispatch(is_loading_true())}>{title}</a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Cont_3_Footer;
