import { atom, selector } from "recoil";

import { storeJoinUsEmail } from "../firebase/FirebaseFunction";

// const helloWorldDefaultAtomState = atom({
//   key: "helloWorldDefaultAtomState",
//   default: "Show All",
// });

export const joinUsEmailAtom = atom({
    key: "joinUsEmailAtom",
    default: ""
})

export const joinUsEmailSelector = selector({
  key: "joinUsEmailSelector",
  get: async ({ get }) => {
    const joinUsEmailAtomState = get(joinUsEmailAtom);
    const response = await storeJoinUsEmail(joinUsEmailAtomState);
    console.log("response", response);
    return response.data;
  },
});
