import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import HomePage from '../components/HomePage/HomePage';
import axios from 'axios';
import { get_all_clusters, get_top_news } from '../store/home_page/action';
import { wrapper } from '../store/store';

const Home = () => {

  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    try {
      const res = await axios(`${process.env.TRAFIKA_POCETNA_URL}`);
      const clusters = await res.data.clusters;
      let top_news = [];

      clusters.map((cluster) => {
        cluster.articles.map((article, inx) =>{
          if(inx < 1) {
            let obj ={
              cluster_id: cluster.id,
              article
            }
            top_news.push(obj)
          }else {
            
            return;
          }
  
        });
      });
      store.dispatch(get_all_clusters(clusters));
      store.dispatch(get_top_news(top_news));
    } catch (error) {
      console.log(error);
    }
  }
);

export default Home;
