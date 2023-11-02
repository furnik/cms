import React from "react";
import { Divider, List } from "antd";
import { useRecoilValue } from "recoil";
import { tabsState } from "../../state/data";
import { useLocation } from "react-router";
import { getCurrentData } from "../../helpers/data";

const ListComponent: React.FC = () => {
  const tabs = useRecoilValue(tabsState);
  const { pathname } = useLocation();
  const currentTab = getCurrentData(tabs, pathname);
  return (
    <>
      <Divider orientation="center">{currentTab?.title}</Divider>
      <List />
    </>
  );
};

export const element = <ListComponent />;
