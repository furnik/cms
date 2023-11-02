import React from "react";
import { useRecoilValue } from "recoil";
import { Progress, Space, Divider } from "antd";
import { tabsState } from "../../state/data";
import { useLocation } from "react-router";
import { getCurrentData } from "../../helpers/data";

const Chart: React.FC = () => {
  const tabs = useRecoilValue(tabsState);
  const { pathname } = useLocation();
  const currentTab = getCurrentData(tabs, pathname);
  return (
    <>
      <Divider orientation="center">{currentTab?.title}</Divider>
      <Space wrap style={{ justifyContent: "center" }}>
        <Progress type="circle" percent={75} />
        <Progress type="circle" percent={70} status="exception" />
        <Progress type="circle" percent={100} />
      </Space>
    </>
  );
};

export const element = <Chart />;
