import React from "react";
import axios from "axios";
import { ProgressBar, GridTable, GridList } from "../../components";
import { ownerData_static } from "../../utils/static";
import "./style.css";
interface IProps {
  id: any;
}

export const Widget: React.FC<IProps> = ({ id }) => {
  const [apiData, setApiData] = React.useState<any>();
  const [apiStatus, setApiStatus] = React.useState<number>(0);
  const [screenWidth, setScreenWidth] = React.useState<number>(window.innerWidth);
  const wrapper: HTMLElement | null = document.getElementById(id);
  const ownerData: any = wrapper
    ? ((wrapper as HTMLDivElement).getAttribute("owner-data") as string)?.length > 0
      ? JSON.parse((wrapper as HTMLDivElement).getAttribute("owner-data") as string)
      : ""
    : "";

  async function getApiData() {
    const api: string = ownerData?.api;
    let apiData_;
    if (api && api?.length > 0) {
      setApiStatus((await axios.get(api).then(response => (apiData_ = response))).status);
      setApiData(apiData_);
    } else {
      const api_static: string = ownerData_static.api;
      setApiStatus((await axios.get(api_static).then(response => (apiData_ = response))).status);
      setApiData(apiData_);
    }
  }
  React.useEffect(() => {
    getApiData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  window.addEventListener("resize", (e: any) => setScreenWidth(e.target.innerWidth));
  return (
    <div className='box'>
      {ownerData === "" ? (
        screenWidth > 700 ? (
          <GridTable columns={ownerData_static.columns} data={apiData?.data?.data} />
        ) : (
          <GridList columns={ownerData_static.columns.slice(0, 2)} data={apiData?.data?.data} />
        )
      ) : apiStatus === 200 ? (
        screenWidth > 700 ? (
          <GridTable columns={ownerData?.columns} data={apiData?.data?.data} />
        ) : (
          <GridList columns={ownerData?.columns.slice(0, 2)} data={apiData?.data?.data} />
        )
      ) : (
        <ProgressBar />
      )}
    </div>
  );
};
