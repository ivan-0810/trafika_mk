import React, { useRef, useEffect, useState, createElement } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { is_loading_true } from '../store/menu/action';
import { split, splice } from 'lodash';
import logo from '../styles/assets/images/vesnik-logo.svg';

const Single_Post = ({ data }) => {
  const myRef = useRef();
  const sidebar = useSelector(state => state.sidebar);
  const menu = useSelector(state => state.menu);
  const dispatch = useDispatch();

 

  function createMarkup() {
    return { __html: data.body };
  }

  return (
    <div className="container single-post">
      {menu && menu.is_loading && menu.is_loading && (
        <div className="spinner-wrapper rounded-circle">
          <div className="eclipse_spinner"></div>
        </div>
      )}
      <div className="row">
        <div className="col-12">
          <div className="top-content bg-white py-4 pr-5">
            <h1>{data && data.title && data.title}</h1>
          </div>
          <Link href="/">
            <a
              className="close-btn"
              onClick={() => dispatch(is_loading_true())}
            >
              x
            </a>
          </Link>
        </div>
        <div className="col-md-7 col-12 date py-2">
          <div className="d-flex align-items-center">
            <span>
              {data && data.post_date && split(data.post_date, '-')[0]}
            </span>
          </div>
        </div>
        <div className="col-md-5 col-12 px-sm-0 py-2 div-icons">
          <div className="d-flex align-items-center">
            <Link href="https://www.facebook.com/VesnikCom/">
              <a>
                <i className="icon facebook-blue-icon"></i>
              </a>
            </Link>
            <Link href="https://www.facebook.com/VesnikCom/">
              <a>
                <i className="icon twitter-blue-icon ml-2"></i>
              </a>
            </Link>
          </div>
        </div>

        <div className="col-md-8 col-12 main-content py-3">
          <div className="img-div">
            {/* <img
              src={
                data.field_naslovna_slika
                  ? `https://api.vesnik.com${data.field_naslovna_slika}`
                  : logo
              }
              alt={data.title}
            /> */}
          </div>
          <div className="text px-sm-3 mt-3">
            <div
              id="inside_text"
              className="inside-text"
              ref={myRef}
              dangerouslySetInnerHTML={createMarkup()}
            ></div>
          </div>
    

          <span className="copyright mt-5 ml-3">
            &copy; vesnik.com, правата за текстот се на редакцијата
          </span>
        </div>
        <div className="col-md-4 col-12">
          <Sidebar
            analizi_temi={sidebar.analizi_temi && sidebar.analizi_temi}
          />{' '}
        </div>
      </div>
    </div>
  );
};

export default Single_Post;
