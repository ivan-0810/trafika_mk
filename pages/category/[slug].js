import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import SinglePage from '../../components/Single_Page';
import axios from 'axios';


const Category = ({ clusters, title }) => {
   

    // const filteredClusters = clusters.filter(cluster => cluster.main_category === query.slug);

    // console.log(filteredClusters, 'filteredClusters');
    return (
      <Layout>
          <SinglePage  clusters={clusters} title={title}/>
      </Layout>

    );
  }
  
  export default Category;

  export const getServerSideProps = async context => {
 
 console.log(context);
  try {
    const res = await axios(`${process.env.TRAFIKA_POCETNA_URL}`);
    const clusters = await res.data.clusters;
    const filteredClusters = clusters.filter(cluster => cluster.main_category === context.params.slug);

    return {
      props: {
       clusters: filteredClusters,
       title: context.params.slug
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};