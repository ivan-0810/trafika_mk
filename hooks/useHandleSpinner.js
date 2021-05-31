import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { spinner_loading_true } from '../store/spinner/action';
export const useHandleSpinner = slug => {
  const router = useRouter();
  const { pathname } = router;
  const dispatch = useDispatch();
  if (pathname !== slug.toLowerCase()) {
    dispatch(spinner_loading_true());
  }
  return;
};
