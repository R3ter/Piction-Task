import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useHandlePageSubmit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePageSubmit = (value, action, nextPage) => {
    dispatch(action(value));
    navigate(nextPage);
  };

  return handlePageSubmit;
};

export default useHandlePageSubmit;
