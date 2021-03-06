import Single_Post from '../../components/Single_Post';
import { useRouter } from 'next/router';
import axios from 'axios';

const Single_PostPage = ({ data }) => {
 
  return <Single_Post data={data} />;
};

export default Single_PostPage;

export const getServerSideProps = async context => {

  try {
    const res = await axios(
      `${process.env.TRAFIKA_SINGLE_LINK}${context.params.link}`
    );
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
