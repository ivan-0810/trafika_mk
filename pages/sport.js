import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_Analizi_Temi } from '../store/sidebar/action'
import { isEmpty } from 'lodash'
import Single_Page from '../components/Single_Page';
import Layout_Single from '../components/Layout_Single';
import axios from 'axios';

const Sport = ({ data,sidebar_data }) => {
  const dispatch = useDispatch()
  const sidebar = useSelector(state => state.sidebar)
  useEffect(() => {
    if(isEmpty(sidebar)) {
      dispatch(get_Analizi_Temi(sidebar_data))
    }
   
  }, [])
  return (
    <Layout_Single>
      <Single_Page title="Спорт" cards={data} />
    </Layout_Single>
  );
};

export default Sport;

export const getServerSideProps = async context => {
  try {
    const res_sidebar =  await axios(`${process.env.VESNIK_POCETNA_URL}temi`)
    const sidebar_data =await res_sidebar.data
    const res = await axios(`${process.env.VESNIK_KATEGORIJA_URL}8?_format=json`)
    const data = await res.data;
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
