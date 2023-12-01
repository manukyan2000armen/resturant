import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Food } from "../food/foodSlice";

export type Set = {
  id: number;
  name: string;
  img: string;
  foods: Food[];
};
const foods: string[] = [
  "Ծիածան",
  "Կեսար",
  "Թաբուլե",
  "Հունական",
  "Սպագետի",
  "Բրինձ",
  "Հնդկաձավար",
  "Տիրամիսու",
  "Բրաունի",
  "Չիզքեյք",
];

const initialState: { arr: Set[]; obj: Set } = {
  arr: [
    {
      id: 1,
      name: "Set 1",
      img: "/img/bgsett.png",
      foods: [
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
      ],
    },
    {
      id: 2,
      name: "Set 2",
      img: "/img/bgsett.png",

      foods: [
        {
          id: 1,
          name: "Սպագետի",
          price: 1350,
          desc: "Սպագետտի Բոլոնեզ սոուսով",
          img: "/img/spageti.png",
          category: "Խավարտ",
        },
        {
          id: 2,
          name: "Բրինձ",
          price: 500,
          desc: "Բրինձ 330գ",
          img: "/img/brindz.png",
          category: "Խավարտ",
        },
        {
          id: 3,
          name: "Կեսար",
          price: 900,
          desc: "Աղցան «Կեսար» 210գ",
          img: "/img/kesar.png",
          category: "Նախուտեստ",
        },
      ],
    },
    {
      id: 3,
      name: "Set 3",
      img: "/img/bgsett.png",
      foods: [
        {
          id: 1,
          name: "Տիրամիսու",
          price: 500,
          desc: "Թխվածք «Տիրամիսու»",
          img: "/img/tiramisu.png",
          category: "Աղանդեր",
        },
        {
          id: 2,
          name: "Բրաունի",
          price: 500,
          desc: "Թխվածք «Բրաունի»",
          img: "/img/brauni.jpg",
          category: "Աղանդեր",
        },
        {
          id: 3,
          name: "Միկադո",
          price: 600,
          desc: "«Շոկոլադե Միկադո»",
          img: "/img/mikado.png",
          category: "Աղանդեր",
        },
      ],
    },
  ],
  obj: {} as Set,
};

const setSlice = createSlice({
  name: "my set",
  initialState,
  reducers: {
    addNewSet: (state, action) => {
      console.log(action.payload);
      const { name, foods } = action.payload;
      const newSet: Set = {
        id: Date.now(),
        name,
        foods,
        img: "/img/bgsett.png",
      };
      state.arr.push(newSet);
    },
    findSetById: (state, action) => {
      let prod = state.arr.find((elm) => elm.id == action.payload);
      if (prod) {
        state.obj = prod;
      }
    },
  },
});

export const { addNewSet, findSetById } = setSlice.actions;
export default setSlice.reducer;
