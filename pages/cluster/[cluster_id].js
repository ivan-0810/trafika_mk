import React from 'react';
import axios from 'axios';
import Layot from '../../components/Layout';
import Single_Cluster from '../../components/Single_Cluster';
const Cluster = ({ data, top_news }) => {

  return (
    <Layot>
      <Single_Cluster cluster={data} top_news={top_news} />
    </Layot>
  );
};

export default Cluster;

export const getServerSideProps = async context => {
  try {
    const res = await axios(
      `${process.env.TRAFIKA_POCETNA_URL}${context.params.cluster_id}`
    );
    const data = await res.data;
    const res_2 = await axios(`${process.env.TRAFIKA_POCETNA_URL}`);
    const clusters = await res_2.data.clusters;
    let top_news = [];
    clusters.map(cluster => {
      cluster.articles.map((article, inx) => {
        if (inx < 1) {
          let obj = {
            cluster_id: cluster.id,
            article,
          };
          top_news.push(obj);
        }
      });
    });
    return {
      props: {
        data,
        top_news,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};
