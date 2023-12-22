import { useEffect } from "react";
import { AppStore } from "../redux/store";
import { useSelector } from "react-redux";
import { reproduceSensibleDataFetching } from "./private.service";
import { Link } from "react-router-dom";

const PrivatePage = () => {
  const accessToken = useSelector((state: AppStore) => state.accessToken);
  useEffect(() => {
    const getPrivateData = async () => {
      const serverResponse = await reproduceSensibleDataFetching(accessToken);
      console.log(serverResponse);
    };

    getPrivateData();
  }, [accessToken]);
  return (
    <div>
      PrivatePage
      <Link to={"/profile"}>Go to profile</Link>
    </div>
  );
};
export default PrivatePage;
