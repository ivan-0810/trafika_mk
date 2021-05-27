import React from 'react';
import Layout from '../../components/Layout';
import SinglePage from '../../components/Single_Page';
import axios from 'axios';

const Category = ({ clusters, title, top_news }) => {
  return (
    <Layout>
      <SinglePage clusters={clusters} title={title} top_news={top_news}/>
    </Layout>
  );
};

export default Category;

export const getServerSideProps = async context => {
  try {
    const res = await axios(`${process.env.TRAFIKA_POCETNA_URL}`);
    const clusters = await res.data.clusters;
    const filteredClusters = clusters.filter(
      cluster => cluster.main_category === context.params.slug
    );
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
        clusters: filteredClusters,
        title: context.params.slug,
        top_news
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};
