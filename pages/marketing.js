import { useEffect } from 'react'
import MarketingPage from '../components/Marketing'
import Layout_Single from '../components/Layout_Single'
import axios from 'axios'

const Marketing = () => {

  return (
    <Layout_Single>
      <MarketingPage title="Маркетинг"  />
    </Layout_Single>
  );
};

export default Marketing;
