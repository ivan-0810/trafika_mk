import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Menu from './Menu/Menu';
import { is_loading_false } from '../store/menu/action';

const Layout = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(is_loading_false());
  }, []);
  return (
    <div className="content-wrapper p-0">
      <Head>
      <meta name="description" content="..trafika" />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <meta property="og:locale" content="mk_MK" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="trafika -mk" />
        <meta property="og:description" content="..trafika" />
        <meta property="og:image" content="https://trafika.mk/" />
        <meta property="og:url" content="https://trafika.mk/" />
        <meta property="og:site_name" content="Весник" />
        <title>Trafika.mk</title>
        <link rel="shortcut icon" href="/vesnik-favicon.svg" />
        <link rel="icon" href="/vesnik-favicon.svg"/>
      </Head>
      <Menu />

      <main className="main-content">{props.children}</main>
    </div>
  );
};

export default Layout;
