import React from "react";
import { Layout, Flex, Button, Spin } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { tabsState, loadState } from "../../state/data";

export const MainLayout: React.FC = () => {
  const tabs = useRecoilValue(tabsState);
  const loading = useRecoilValue(loadState);

  if (loading) {
    return <Spin />;
  }

  return (
    <Layout>
      <Layout.Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {tabs.map((tab) => (
          <Button type="link" key={tab.id}>
            <Link to={tab.id}>{tab.title}</Link>
          </Button>
        ))}
      </Layout.Header>
      <Layout.Content
        style={{
          padding: "20px",
          minHeight: `calc(100vh - 64px)`,
          maxWidth: 1280,
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Flex gap="middle" vertical>
          <Outlet />
        </Flex>
      </Layout.Content>
    </Layout>
  );
};
