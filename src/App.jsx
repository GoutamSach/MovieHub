import { useEffect } from "react";
import "./App.css";
import { apiData } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import {
  getApiConfigForHomeSlice,
  stateForgetApiConfigForHomeSlice,
} from "./utils/homeSlice";

function App() {
  // useEffect(() => {
  //   apiTest();
  // }, []);
  // const dispatch = useDispatch();
  // const selector = useSelector(stateForgetApiConfigForHomeSlice);

  // const apiTest = () => {
  //   apiData("/movie/popular").then((res) => {
  //     console.log(res);
  //     dispatch(getApiConfigForHomeSlice(res));
  //   });
  // };

  return (
    <>
      <div className=" "></div>
    </>
  );
}

export default App;
