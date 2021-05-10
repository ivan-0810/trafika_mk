import React from 'react';
import Layout_Single from '../components/Layout_Single';
import axios from 'axios';
import ImpresumPage from '../components/Impresum'

const Impresum = ({ data }) => {
    return (
        <Layout_Single>
        <ImpresumPage data={data} />
      </Layout_Single>
    );
  }
  
  export default Impresum;

  export const getServerSideProps = async (context) => {

    try {

     const res = await axios(`${process.env.VESNIK_API_URL}views/rest_api?display_id=single_article&filters[nid]=5747`);
    const data = await res.data[0];
     
        return {
         props: {
             data,
         }
       }
    } catch (error) {
        return {
           props: {}
        }
    }
  }