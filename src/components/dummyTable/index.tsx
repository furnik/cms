import React from "react";
import { useRecoilValue } from "recoil";
import { Divider, Table } from "antd";
import { tabsState } from "../../state/data";
import { useLocation } from "react-router";
import { getCurrentData } from "../../helpers/data";

const TableComponent: React.FC = () => {
  const tabs = useRecoilValue(tabsState);
  const { pathname } = useLocation();
  const currentTab = getCurrentData(tabs, pathname);
  return (
    <>
      <Divider orientation="center">{currentTab?.title}</Divider>
      <Table />
    </>
  );
};

export const element = <TableComponent />;
