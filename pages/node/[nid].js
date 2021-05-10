import { useEffect } from 'react';
import Layout_Single_Post from '../../components/Layout_single_Post';
import Single_Post from '../../components/Single_Post';
import axios from 'axios';
import { get_Analizi_Temi } from '../../store/sidebar/action';
import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { get_single_post } from '../../store/single_post/action';

const Single_PostPage = ({ data, sidebar_data }) => {
  const dispatch = useDispatch()
  const sidebar = useSelector(state => state.sidebar)
  useEffect(() => {
     if(data) {
      dispatch(get_single_post(data))
     }
     if(isEmpty(sidebar)) {
      dispatch(get_Analizi_Temi(sidebar_data))
    }
  }, [data,sidebar_data])
  return (
    <Layout_Single_Post>
      <Single_Post data={data} />
    </Layout_Single_Post>
  );
};

export default Single_PostPage;

export const getServerSideProps = async context => {
 

  try {

    const res_sidebar =  await axios(`${process.env.VESNIK_POCETNA_URL}temi`)
    const sidebar_data =await res_sidebar.data
    const res = await axios(
      `${process.env.VESNIK_EDINECNA_VEST_URL}${context.params.nid}`
    );
    const data =await res.data[0];
   
    return {
      props: {
        data,
        sidebar_data
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};
