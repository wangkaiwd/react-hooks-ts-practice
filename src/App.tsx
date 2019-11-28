import React, { useState } from 'react';
import './App.scss';
import { Link } from 'react-router-dom';
import routerConfig from '@/config/routerConfig';
import ProLayout, { MenuDataItem, PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card } from 'antd';

const App: React.FC = (props) => {
  const [selectedKeys, setSelectedKeys] = useState([window.location.pathname]);
  const onClick = (menuItemProps: MenuDataItem) => {
    setSelectedKeys([menuItemProps.path]);
  };
  return (
    <ProLayout
      disableContentMargin={false}
      menuDataRender={() => routerConfig}
      menuItemRender={(menuItemProps, defaultDom) => {
        return <Link to={menuItemProps.path} onClick={() => onClick(menuItemProps)}>
          {defaultDom}
        </Link>;
      }}
      menuProps={{ selectedKeys }}
    >
      <Card bordered={false}>
        {props.children}
      </Card>
    </ProLayout>
  );
};
export default App;
