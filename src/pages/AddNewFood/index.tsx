import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { Food, addNewFood } from "../../features/food/foodSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import st from "./style.module.css";

interface FormValues {
  name: string;
  price: number;
  desc: string;
  category: string;
  img: string;
}

function AddNewFood() {
  const { category } = useSelector((st: any) => st.food);

  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Fill the field")
      .matches(/[a-zA-Z]+$/, "Fill letters"),
    price: yup
      .number()
      .required("Fill the field")
      .positive("Must be a positive number")
      .integer("Must be an integer"),
    desc: yup
      .string()
      .required("Fill the field")
      .matches(/[a-zA-Z]+$/, "Fill letters"),
    img: yup.string().required("Fill the field").url("Enter a valid URL"),
    category: yup.string().required("Select at least one user"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema) as any,
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted with values:", data);
    const newFood: Food = {
      id: Date.now(),
      name: data.name,
      price: data.price,
      desc: data.desc,
      category: data.category,
      img: data.img,
    };
    dispatch(
      addNewFood({ ...newFood })
    );
    reset();
  };
  return (
    <div className={st.myForm}>
      <div className={st.forForm}>
        <h1>Add New Food</h1>
        <div className={st.form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input type="text" {...register("name")} placeholder="Name" />
              {errors.name && (
                <div className="error">{errors.name.message}</div>
              )}
            </div>
            <div>
              <input type="text" {...register("price")} placeholder="Price" />
              {errors.price && (
                <div className="error">{errors.price.message}</div>
              )}
            </div>
            <div>
              <input
                type="text"
                {...register("desc")}
                placeholder="Description"
              />
              {errors.desc && (
                <div className="error">{errors.desc.message}</div>
              )}
            </div>
            <div>
              <input type="text" {...register("img")} placeholder="Img URL" />
              {errors.img && <div className="error">{errors.img.message}</div>}
            </div>
            <div>
              <select {...register("category")}>
                <option value="" label="Ուտեստներ" />
                {category.map(
                  (elm: { name: string; icon: string }, i: number) => {
                    return (
                      <option key={i} value={elm.name}>
                        {elm.name}
                      </option>
                    );
                  }
                )}
              </select>
            </div>
            <button className={st.btnForSave}>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewFood;
