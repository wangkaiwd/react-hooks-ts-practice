import React, { useState } from 'react';
import './App.scss';
import { Link } from 'react-router-dom';
import routerConfig from '@/config/routerConfig';
import ProLayout, { MenuDataItem } from '@ant-design/pro-layout';
import { Card } from 'antd';

const App: React.FC = (props) => {
  const [selectedKeys, setSelectedKeys] = useState([window.location.pathname]);
  const [title, setTitle] = useState(() => {
    const target = routerConfig.find(item => item.path === selectedKeys[0]);
    return target ? target.name : undefined;
  });
  const onClick = (menuItemProps: MenuDataItem) => {
    setSelectedKeys([menuItemProps.path]);
    setTitle(menuItemProps.name);
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
      <Card bordered={false} hoverable={true} title={title}>
        {props.children}
      </Card>
    </ProLayout>
  );
};
export default App;
