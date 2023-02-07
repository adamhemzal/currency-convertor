import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader = () => {
  return(
    <p className="flex items-center justify-center">
      <AiOutlineLoading3Quarters className="animate-spin mr-3"/> 
      Loading...
    </p>
  )
};
export default Loader;