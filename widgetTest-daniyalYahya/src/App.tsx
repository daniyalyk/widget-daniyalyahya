import React from "react";
import "./App.css";
import { Widget } from "./components";
interface IProps {
  id: any;
}
export const App: React.FC<IProps> = ({ id }) => {
  return (
    <div className='App'>
      <Widget id={id} />
    </div>
  );
};

export default App;
