import {useState , useEffect} from 'react'

export const usePageY_Offset = () => {

  const [page_y_offest, setPage_y_offset] = useState();
  useEffect(() => {

    function handleScroll() {
        let pageYOffset = window.pageYOffset;
        setPage_y_offset(pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return page_y_offest;
}