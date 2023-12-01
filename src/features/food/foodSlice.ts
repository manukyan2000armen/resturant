import { createSlice } from "@reduxjs/toolkit";

export type Food = {
  id: number;
  name: string;
  price: number;
  desc: string;
  img: string;
  category: string;
};

const initialState: {
  arr: Food[];
  obj: Food;
  category: { name: string; icon: string , id:number }[];
} = {
  arr: [
    {
      id: 1,
      name: "Ծիածան",
      price: 800,
      desc: "Աղցան «Ծիածան» 380-400գ",
      img: "/img/ciacan.png",
      category: "Նախուտեստ",
    },
    {
      id: 2,
      name: "Կեսար",
      price: 900,
      desc: "Աղցան «Կեսար» 210գ",
      img: "/img/kesar.png",
      category: "Նախուտեստ",
    },
    {
      id: 3,
      name: "Սպագետի",
      price: 1350,
      desc: "Սպագետտի Բոլոնեզ սոուսով",
      img: "/img/spageti.png",
      category: "Խավարտ",
    },
    {
      id: 4,
      name: "Բրինձ",
      price: 500,
      desc: "Բրինձ 330գ",
      img: "/img/brindz.png",
      category: "Խավարտ",
    },
    {
      id: 5,
      name: "Տիրամիսու",
      price: 500,
      desc: "Թխվածք «Տիրամիսու»",
      img: "/img/tiramisu.png",
      category: "Աղանդեր",
    },
    {
      id: 6,
      name: "Բրաունի",
      price: 500,
      desc: "Թխվածք «Բրաունի»",
      img: "/img/brauni.jpg",
      category: "Աղանդեր",
    },
    {
      id: 7,
      name: "Միկադո",
      price: 600,
      desc: "«Շոկոլադե Միկադո»",
      img: "/img/mikado.png",
      category: "Աղանդեր",
    },
  ],
  obj: {} as Food,
  category: [
    { name: "Նախուտեստ", icon: "" , id:1 },
    { name: "Խավարտ", icon: "" , id:2 },
    { name: "Աղանդեր", icon: "" , id:3},
  ],
};

const foodSlice = createSlice({
  name: "my food",
  initialState,
  reducers: {
    addNewFood: (state, action) => {
      console.log(action.payload);
      state.arr.push(action.payload);
    },
  },
});

export const { addNewFood } = foodSlice.actions;
export default foodSlice.reducer;
