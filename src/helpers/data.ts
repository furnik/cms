import { TRoute } from "../types/route";

export const getCurrentData = (tabs: Array<TRoute>, pathname: string) => {
  return tabs.find((tab) => "/" + tab.id === pathname);
};
