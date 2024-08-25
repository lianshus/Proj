/*
 * @Author: diana
 * @Date: 2023-05-25 00:34:36
 * @LastEditTime: 2023-06-03 00:22:24
 */
import React, { useState, useEffect, useContext } from 'react';
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { ethers } from 'ethers';
import { useDispatch } from 'react-redux';

import { MyContext } from '../../interact';

import Header from '../../components/Header';
import Provider from '../IProvider';
import Admin from '../Admin';


// 所有角色登录后的主页
function Home() {
    const currentAccount = useSelector(state => state.currentAccount);

    const [isMember, setIsMember] = useState();
    const [isCompany, setIsCompany] = useState();

    const { contracts } = useContext(MyContext);

    // 判断user类型，
    const whichType = async () => {
        try {
            const member = await contracts[2].isMember(currentAccount);
            const company = await contracts[3].isMember(currentAccount);
            setIsMember(member);
            setIsCompany(company);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        whichType()
    }, [])

    return (
        <div className="flex flex-col w-full bg-gradient-to-l from-indigo-200">
            {/* 导航栏 固定 */}
            <Header currentAccount={currentAccount} isCompany={isCompany} />
            <Outlet />
        </div>
    )
}
export default Home;