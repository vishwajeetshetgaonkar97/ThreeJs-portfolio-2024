import { useEffect, useRef } from "react";


const Loader = ({setIsLoading}) => {

  useEffect(() => {
   
    return () => {
      console.log("unmount")
     setIsLoading(false)
    }; // Clean up on component unmount
  }, []);


  return (
   <></>
  );
};

export default Loader;
