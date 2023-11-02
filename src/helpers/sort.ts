import { TRoute } from "../types/route";

export const sortTabs = (tabs: Array<TRoute>) => {
  return tabs.sort(
    (firstOperand, secondOperand) => firstOperand.order - secondOperand.order
  );
};
