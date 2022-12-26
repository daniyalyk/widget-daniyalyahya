import React from "react";
import "./App.css";

function App() {
  const ownerData: ApiData = {
    columns: [
      { label: "Name", key: "name", type: "string" },
      { label: "Date", key: "date", type: "date" },
      { label: "Category", key: "category", type: "string" },
      { label: "Amount", key: "amount", type: "number" },
      { label: "Created At", key: "created_at", type: "date" },
    ],
    api: "https://us-central1-fir-apps-services.cloudfunctions.net/transactions",
  };
  React.useEffect(() => {
    const scriptRuntime = document.getElementById("script1") as any;
    const scriptChunk = document.getElementById("script2") as any;
    const scriptMain = document.getElementById("script3") as any;

    // const scriptRuntime = document.createElement("script");
    // const scriptChunk = document.createElement("script");
    // const scriptMain = document.createElement("script");
    scriptRuntime.src = "http://localhost:3001/static/js/my-widget.js";
    scriptChunk.src = "http://localhost:3001/static/js/my-widget.2.js";
    scriptMain.src = "http://localhost:3001/static/js/my-widget.main.js";
    const container = document.getElementById("my-widget-container");
    (container as HTMLElement).appendChild(scriptRuntime);
    (container as HTMLElement).appendChild(scriptChunk);
    (container as HTMLElement).appendChild(scriptMain);

    return () => {};
  }, []);

  return (
    <div className='App'>
      <div className='App-header'>
        <h1>Parent Website</h1>
        <div id='my-widget-container' owner-data={JSON.stringify(ownerData)}></div>
      </div>
    </div>
  );
}

export default App;
