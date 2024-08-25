/*
 * @Author: diana
 * @Date: 2023-05-19 20:34:19
 * @LastEditTime: 2023-06-03 00:20:15
 */
// create创建path和组件的实例
// RouterProvider组件渲染传入实例
import { createBrowserRouter } from 'react-router-dom';

// 登录
import Login from '../components/Login';

// 用户主页及二级组件
import Home from '../pages/Home';
import Info from '../components/Info';
import Request from '../components/Request';
import Swap from '../components/Swap';
import Purchase from '../components/Purchase';

// 管理员主页及二级组件
import Admin from '../pages/Admin';
import PUser from '../components/AdminInfo/PUser';
import ACompany from '../components/AdminInfo/Company';
import Iprovider from '../components/AdminInfo/Iprovider';

// 第三方主页
import Provider from '../pages/IProvider';

// 生成实例
const router = createBrowserRouter([
    // 默认登录
    {
        path: '/',
        element: <Login/>,
    },
    // 用户
    {
        path: '/home',
        element:<Home/>,
        children: [
            {
                index:true,
                element: <Info />,
            },
            {
                path:'request',
                element: <Request />,
            },
            {
                path: 'swap',
                element: <Swap />,
            },
            {
                path: 'purchase',
                element: <Purchase />,
            }
        ]
    },
    // 管理员
    {
        path: '/admin',
        element:<Admin/>,
        children:[
            {
                index:true,
                element:<PUser/>
            },
            {
                path:'company',
                element:<ACompany/>
            },
            {
                path:'provider',
                element:<Iprovider/>
            },
        ]
    },
    // 第三方
    {
        path: '/provider',
        element:<Provider/>,
    },

])

export default router
