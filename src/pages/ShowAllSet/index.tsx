import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import st from "./style.module.scss";

function ShowAllSet() {
  const { arr } = useSelector((st: any) => st.set);
console.log(arr);

  return (
    <div className={st.setsDiv}>
      <h1>All Sets</h1>
      <div className={st.divForSet}>
        {arr.map((elm: any) => {
          return (
            <div className={st.myCard} key={elm.id}>
              <img src={elm.img} alt="Food Img"/>
              <h2>{elm.name}</h2>
              <button>
                <Link to={"/see-set/" + elm.id}>See Details</Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowAllSet;
