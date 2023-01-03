import React from "react";
import { ownerData } from "../../utils";
interface IProps {}

export const ParentWidget: React.FC<IProps> = () => {
  React.useEffect(() => {
    const scriptRuntime = document.getElementById("script1") as any;
    const scriptChunk = document.getElementById("script2") as any;
    const scriptMain = document.getElementById("script3") as any;

    scriptRuntime.src = "http://localhost:3001/static/js/my-widget.js";
    scriptChunk.src = "http://localhost:3001/static/js/my-widget.2.js";
    scriptMain.src = "http://localhost:3001/static/js/my-widget.main.js";

    const container = document.getElementById("my-widget-container");
    (container as HTMLElement)?.appendChild(scriptRuntime);
    (container as HTMLElement)?.appendChild(scriptChunk);
    (container as HTMLElement)?.appendChild(scriptMain);
  }, []);

  return (
    <>
      <h1>Parent Website</h1>
      <div id='my-widget-container' owner-data={JSON.stringify(ownerData)}></div>
    </>
  );
};
