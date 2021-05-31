import React from 'react';
import Link from 'next/link';
import { is_loading_true } from '../store/menu/action';
import { useSelector, useDispatch } from 'react-redux';

const Marketing = ({ title }) => {
  const dispatch = useDispatch();
  const menu = useSelector(state => state.menu);
  return (
    <div className="contianer big-container marketing mx-auto">
      {menu && menu.is_loading && menu.is_loading && (
        <div className="spinner-wrapper rounded-circle">
          <div className="eclipse_spinner"></div>
        </div>
      )}
      <div className="row mx-auto">
        <div className="col-12 d-flex justify-content-center">
          <div className="header p-3 d-flex align-items-center">
            <h2 className="text-center">{title}</h2>
          </div>
        </div>
      </div>
      <div className="row p-lg-5 p-md-3">
        <div className="col-md-3 col-12">
          <Link href="/marketing">
            <a className="d-flex flex-column align-items-center">
             
                <img
                  src="https://vesnik.com/themes/custom/vecer/img/pdf.svg"
                  alt="pdf image"
                  width="80px"
                  height="100px"
                />
           
              <p>Позиции на цени* на банери</p>
            </a>
          </Link>
        </div>
        <div className="col-md-3 col-12">
          <Link href="mailto:home@vesnik.com">
            <a className="d-flex flex-column align-items-center">
        
                <img
                  src="https://vesnik.com/themes/custom/vecer/img/gmail.svg"
                  alt="pdf image"
                  width="80px"
                  height="100px"
                />
           

              <p>home@vesnik.com</p>
            </a>
          </Link>
        </div>
        <div className="col-md-3 col-12">
          <Link href="/marketing">
            <a className="d-flex flex-column align-items-center">
           
                <img
                  src="https://vesnik.com/themes/custom/vecer/img/friends/ga.png"
                  alt="pdf image"
                  width="200px"
                  height="100px"
                />
            

              <p>Погледни статистика</p>
            </a>
          </Link>
        </div>
        <div className="col-md-3 col-12">
          <Link href="/marketing">
            <a className="d-flex flex-column align-items-center">
              
                <img
                  src="https://vesnik.com/themes/custom/vecer/img/friends/similarweb.png"
                  alt="pdf image"
                  width="200px"
                  height="100px"
                />
     

              <p>Читаност и посетеност</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
