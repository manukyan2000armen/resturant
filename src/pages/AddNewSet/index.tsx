import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Food } from "../../features/food/foodSlice";
import { addNewSet } from "../../features/set/setSlice";
import st from "./style.module.scss";
import Swal from "sweetalert2";

function AddNewSet() {
  const { arr } = useSelector((st: any) => st.food);
  const { category } = useSelector((st: any) => st.food);
  const [foods, setFoods] = useState([...arr]);
  const dispatch = useDispatch();
  console.log(arr);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [setName, setSetName] = useState<string>("");

  const handleCheckboxChange = (foodId: string) => {
    if (selectedItems.includes(foodId)) {
      setSelectedItems((elm) => elm.filter((item) => item !== foodId));
    } else {
      setSelectedItems((elm) => [...elm, foodId]);
    }
  };

  const saveClick = () => {
    if (selectedItems.length < 2) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Նվազագույնը 2 ուտելիք!",
      });

      return;
    }
    let x: Food[] = [];
    selectedItems.forEach((id) => {
      const a = arr.find((elm: Food) => elm.id == +id);
      if (a) {
        x.push(a);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Ավելացվել է ցանկին",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
    console.log(x);
    dispatch(addNewSet({ name: setName, foods: x }));
    setSelectedItems([]);
    setSetName("");
  };

  return (
    <div className={st.setFoods}>
      <h1>Add New Set</h1>
      <div className={st.divForSave}>
        <div className={st.inpAndSave}>
          <input
            type="text"
            placeholder="Enter Set name"
            value={setName}
            onChange={(e) => setSetName(e.target.value)}
          />
          <button onClick={saveClick}>Save</button>
        </div>
        <div className={st.forRadio}>
          <h3>Ամբողջը</h3>
          <input
            type="radio"
            name="radio"
            value={""}
            onChange={() =>
              setFoods([...arr.filter((el: Food) => el.category.includes(""))])
            }
          />{" "}
          {category.map((elm: Food) => (
            <div key={elm.id}>
              <h3>{elm.name}</h3>
              <input
                type="radio"
                name="radio"
                value={elm.name}
                onChange={() =>
                  setFoods([
                    ...arr.filter((el: Food) => el.category.includes(elm.name)),
                  ])
                }
              />
            </div>
          ))}
        </div>
      </div>
      <div className={st.header}>
        {foods.map((elm: Food) => {
          return (
            <div className={st.foodsDiv1} key={elm.id}>
              <div className={st.foodsCard1}>
                <img src={elm.img} alt="Food Img" />
                <h3>{elm.name}</h3>
                <p>{elm.desc}</p>
                <p>{elm.price} դր․</p>
                <h5>{elm.category}</h5>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(elm.id.toString())}
                  onChange={() => handleCheckboxChange(elm.id.toString())}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddNewSet;
