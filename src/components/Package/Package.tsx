// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";

const Package = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Package"));
  scrollTop();

  return <div>Package</div>;
};

export default Package;
