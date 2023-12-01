import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Food } from "../../features/food/foodSlice";
import { findSetById, Set } from "../../features/set/setSlice";
import st from "./style.module.css";

function SeeSet() {
  const params = useParams();
  const dispatch = useDispatch();
  const { obj } = useSelector((st: any) => st.set);
  console.log(obj);

  useEffect(() => {
    if (params.id) {
      dispatch(findSetById(+params.id));
    }
  }, []);
  return (
    <>
      <div className={st.headerDiv}>
        <h1>{obj.name}</h1>
        <div className={st.headerSetDiv}>
          {obj.foods?.map((elm: any) => {
            return (
              <div className={st.foodsDiv} key={elm.id}>
                <div className={st.foodsCard}>
                  <img src={elm.img} alt="Food Img" />
                  <h3>{elm.name}</h3>
                  <p>{elm.desc}</p>
                  <p>{elm.price} դր․</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SeeSet;
