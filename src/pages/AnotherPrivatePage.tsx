import { useEffect } from "react";
import { AppStore } from "../redux/store";
import { useSelector } from "react-redux";
import { reproduceSensibleDataFetching } from "./private.service";

const AnotherPrivatePage = () => {
  const accessToken = useSelector((state: AppStore) => state.accessToken);
  useEffect(() => {
    const getPrivateData = async () => {
      const serverResponse = await reproduceSensibleDataFetching(accessToken);
      console.log(serverResponse);
    };

    getPrivateData();
  }, [accessToken]);
  return <div>PrivatePage</div>;
};
export default AnotherPrivatePage;
