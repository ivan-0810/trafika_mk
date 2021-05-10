import { useEffect } from 'react'
import MarketingPage from '../components/Marketing'
import Layout from '../components/Layout'
import axios from 'axios'

const Marketing = () => {

  return (
    <Layout>
      <MarketingPage title="Маркетинг"  />
    </Layout>
  );
};

export default Marketing;
