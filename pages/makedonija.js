import { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { get_Analizi_Temi } from '../store/sidebar/action'
import { isEmpty } from 'lodash'
import Single_Page from '../components/Single_Page'
import Layout_Single from '../components/Layout_Single'
import axios from 'axios'

const Makedonija = ({ sidebar_data, data }) => {

  const dispatch = useDispatch()
  const sidebar = useSelector(state => state.sidebar)
  useEffect(() => {
    if(isEmpty(sidebar)) {
      dispatch(get_Analizi_Temi(sidebar_data))
    }

  }, [])
  return (
    <Layout_Single>
      <Single_Page title="Македонија"  cards={data} />
    </Layout_Single>
  );
};

export default Makedonija;

export const getServerSideProps = async () => {
  try {
    const res_sidebar =  await axios(`${process.env.VESNIK_POCETNA_URL}temi`)
    const sidebar_data =await res_sidebar.data
    const res = await axios(`${process.env.VESNIK_KATEGORIJA_URL}1?_format=json`)
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

