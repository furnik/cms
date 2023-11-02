import { useRecoilState } from "recoil";
import { tabsState, loadState } from "../state/data";
import { sortTabs } from "../helpers/sort";
import * as tabs from "../data/tabs.json";
import { parseJson } from "../helpers/parse";
import { useEffect } from "react";

export const useParseData = () => {
  const [, setLoading] = useRecoilState(loadState);
  const [, setData] = useRecoilState(tabsState);

  const getParseData = () => {
    setLoading(true);

    const parsedTabs = parseJson(tabs);
    const sortedTabs = sortTabs(parsedTabs);
    setData(sortedTabs);

    setLoading(false);
  };

  useEffect(() => {
    getParseData();
  }, []);
};
