import axios from "axios";
export const getWidgetData = (api: string) => {
  axios.get(api);
  // : axios.get("https://us-central1-fir-apps-services.cloudfunctions.net/transactions")
};
