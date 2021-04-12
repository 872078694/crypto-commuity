import { atom, selector } from "recoil";
import { helloLeeker } from "../firebase/FirebaseFunction";

// const helloWorldDefaultAtomState = atom({
//   key: "helloWorldDefaultAtomState",
//   default: "Show All",
// });

export const helloWorldSelector = selector({
  key: "helloWorldSelector",
  get: async ({ get }) => {
    const response = await helloLeeker();
    console.log("response", response);
    return response.data;
  },
});
