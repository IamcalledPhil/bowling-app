import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputScore } from "../actions/index";

export default  () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <section>
      <button onClick={() => dispatch(inputScore())}>Input score</button>
    </section>
  );
};