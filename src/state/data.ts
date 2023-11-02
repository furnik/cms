import { atom } from "recoil";
import { TRoute } from "../types/route";
import { boolean } from "yargs";

export const tabsState = atom<Array<TRoute>>({
  key: "tabsState",
  default: [],
});

export const loadState = atom<boolean>({
  key: "loadState",
  default: false,
});
