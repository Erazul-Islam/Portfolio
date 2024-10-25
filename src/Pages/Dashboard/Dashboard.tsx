import React from 'react';
import Cursor from '../../Components/Cursor/Cursor';
import { Avatar, Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useAppSelector } from '../../redux/hook';
import { RootState } from '../../redux/store';
import { Link, Outlet } from 'react-router-dom';
import { Content, Header } from 'antd/es/layout/layout';
import { UserOutlined } from '@ant-design/icons';
import { FaBlogger, FaHome } from "react-icons/fa";
import { FaRProject } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
const Dashboard = () => {

    const user = useAppSelector((state: RootState) => state.auth.user)

    return (
        <div>
            <Cursor />
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible>
                    <div className="logo" style={{ padding: '16px', textAlign: 'center' }}>
                        <Avatar size="large" icon={<UserOutlined />} />
                        <h2 style={{ color: 'white', marginTop: '8px' }}>{user?.name}</h2>
                    </div>
                    <Menu theme="dark" mode="inline" >
                        <Menu.Item key="blog" icon={<FaBlogger />}>
                            <Link to="/admin/dashboard/blog">Blog</Link>
                        </Menu.Item>
                    </Menu>
                    <Menu theme="dark" mode="inline" >
                        <Menu.Item key="project" icon={<FaRProject />}>
                            <Link to="/admin/dashboard/project">Project</Link>
                        </Menu.Item>
                    </Menu>
                    <Menu theme="dark" mode="inline" >
                        <Menu.Item key="skill" icon={<GiSkills />}>
                            <Link to="/admin/dashboard/project">skill</Link>
                        </Menu.Item>
                    </Menu>
                    <Menu theme="dark" mode="inline" >
                        <Menu.Item key="home" icon={<FaHome />}>
                            <Link to="/">Home</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ padding: 0 }}>
                        <div style={{ padding: '0 16px', fontSize: '24px', fontWeight: 'bold',color:'whitesmoke' }}>
                            Welcome {user?.name}
                        </div>
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280,backgroundColor:"Background" }}>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default Dashboard;