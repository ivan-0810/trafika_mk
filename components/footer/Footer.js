import React from 'react';
import Link from 'next/link';
const Footer = () => {
  const getYear = () => {
    const d = new Date();
    const n = d.getFullYear();

    return n;
  };
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="footer-logo" />
        <div className="col-12">
          <section className="d-flex justify-content-center social-contant">
      
            <i className="icon facebook-white-icon item"></i>
           
            <i className="icon instagram-white-icon item"></i>
            <Link href="/izvori ">
              <a className="item">Извори</a>
            </Link>
            <Link href="/kontakt">
              <a className="item">Контакт</a>
            </Link>
            <Link href="/marketing">
              <a className="item">маркетинг</a>
            </Link>
          </section>
        </div>
        <div className="col-12 mx-auto">
          <p className="text-center">
            <Link href="https://trafika.mk">
              <a>Trafika.mk</a>
            </Link>{' '}
            е агрегатор на најнови вести од 150 македонски веб сајтови. <br />
            Пренесува и објавува наслови и линкови до вестите на сајтовите и
            нема одговорност за нивна содржина.
          </p>
        </div>
        <div className="col-12 d-flex mx-auto">
          <span className="mx-auto">Copyright © {getYear()} MaxMedia Group</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
