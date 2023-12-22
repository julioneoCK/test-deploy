import { configureStore } from "@reduxjs/toolkit";
import { accessToken } from "./states";

export interface AppStore {
  accessToken: string;
}

export default configureStore<AppStore>({
  reducer: {
    accessToken,
  },
});
