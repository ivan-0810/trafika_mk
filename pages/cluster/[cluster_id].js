import React from 'react';
import axios from 'axios';
import Layot from '../../components/Layout';
import SinglePage from '../../components/Single_Page';

const Cluster = ({ data }) => {
  console.log(data, 'data from cluster');
  return (
    <Layot>
      <SinglePage cluster={data} />
    </Layot>
  );
};

export default Cluster;

export const getServerSideProps = async context => {
  try {
    const link = `${process.env.TRAFIKA_POCETNA_URL}${context.params.cluster_id}`;
    const res = await axios(link);
    const data = await res.data;
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};
