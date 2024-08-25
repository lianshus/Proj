/*
 * @Author: diana
 * @Date: 2023-05-16 18:22:29
 * @LastEditTime: 2023-06-03 00:32:00
 */
import React, { useRef, useState, useContext } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Card } from 'antd';
import Highlighter from 'react-highlight-words';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { TitleComponent } from 'echarts/components';
import { TooltipComponent } from 'echarts/components';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { MyContext } from '../../interact';
import { ethers } from 'ethers';
import AdminHeader from '../../components/AdminHeader';
import AdminNav from '../../components/AdminNav';
import { Outlet } from 'react-router-dom';
// 合约信息
// const contractAddress = "";
// const abi = [];
echarts.use([TitleComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer]);

const option = {
    tooltip: {
        trigger: 'axis',
    },
    xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: [820, 932, 901, 934, 1290, 1330],
            type: 'line',
            name: '数据1',
        },
        {
            data: [620, 732, 701, 734, 1090, 1130],
            type: 'line',
            name: '数据2',
        },
    ],
};

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Joe Black',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Jim Green',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
];

export default function Admin(ethereum) {

    const { contracts } = useContext(MyContext);
    return (
        <>
            <div className='bg-buttonnormal'>
                <AdminHeader />

                <div className='bg-adminbg h-32 w-full flex flex-row items-end justify-center'>
                    <h1 className='text-4xl text-white'>Welcome!My Dear Administor</h1>
                </div>
                <div className='bg-adminbg h-32 w-full flex flex-row items-start justify-center'>
                    <h1 className='text-2xl text-white'>Dear administrator, you can now go to manage users.</h1>
                </div>
                <div className='bg-adminbg h-16 w-full flex flex-row items-center justify-center'>
                    <div className='w-1/3 h-48 z-50 bg-white shadow  rounded-lg hover:-translate-y-2'>
                        <div className='ml-5 mt-7 flex flex-row'>
                            <svg className="arrow" width="50" height="50" viewBox="0 0 1024 1024">
                                <path d="M1022.517493 512.942488c0 281.360557-228.087085 509.452736-509.452737 509.452736s-509.452736-228.092179-509.452736-509.452736c0-281.365652 228.087085-509.452736 509.452736-509.452737s509.452736 228.087085 509.452737 509.452737" fill="#EF4084" p-id="5314"></path><path d="M470.82603 471.967204c53.013652-2.562547 103.169274-2.26197 152.535244-8.34993 32.258547-3.973731 48.168756-29.930348 48.000636-62.601553-0.163025-31.178507-16.312677-57.848358-46.548696-61.353393-50.812816-5.884179-102.328677-5.649831-153.987184-8.008597v140.313473zM226.365134 554.029851V470.540736h134.363065v-218.91184c9.068259-0.804935 15.548498-1.869692 22.028736-1.879881 81.446209-0.086607 162.892418-0.453413 244.333533 0.32605 19.333731 0.188498 39.064836 2.562547 57.873831 7.050826 61.210746 14.600915 96.373174 56.381134 99.674427 116.007482 3.413333 61.541891-24.652418 102.196219-86.250348 125.08593-1.528358 0.565493-2.832557 1.701572-7.05592 4.315065 5.069055 1.50798 8.227662 2.526886 11.437214 3.387861 56.090746 15.044139 88.354388 51.378308 95.889194 108.854766 7.050826 53.818587-19.797333 109.41007-71.053373 132.335443-33.236697 14.865831-70.900537 25.258667-107.086966 27.000995-82.103403 3.948259-164.522667 1.334766-246.814567 1.299104-3.209552 0-6.419104-0.886448-10.871721-1.543641v-147.221652h106.480716v65.719403c57.216637-2.664438 112.981333-1.467224 167.50806-9.134488 36.150766-5.084338 51.566806-37.582328 47.032677-76.1479-3.601831-30.643582-24.637134-50.374687-62.453811-50.924896-120.429532-1.757612-240.894726-1.569114-361.339543-2.119323-10.800398-0.050945-21.600796-0.010189-33.695204-0.010189z" fill="#FFFFFF" p-id="5315"></path>
                            </svg>
                            <p className='text-gray-400 mt-4 ml-4'>Carbon emission quotas</p>
                        </div>
                        <p className='text-gray-600 ml-4 mt-2'>
                            Carbon emission quotas will be distributed periodically (once a year), calculated periodically (every 3-4 months), and checked in real time.
                        </p>

                    </div>
                    <div className='w-1/3 h-48 z-50 bg-white border rounded-lg hover:-translate-y-2 ml-10'>
                        <div className='ml-5 mt-7 flex flex-row'>
                            <svg className="arrow" width="50" height="50" viewBox="0 0 1024 1024">
                                <path d="M356.352 625.152l27.648-14.848 106.496 59.904v-147.456l-21.504-10.752-106.496-61.952v121.344l-23.552 12.8-89.6-51.2-106.496 59.904V716.8l106.496 59.904L356.352 716.8v-91.648z m326.144-40.448l-21.504-12.8V450.048l-128 72.704v147.456l106.496-59.904 27.648 14.848V716.8l106.496 59.904 106.496-59.904v-123.904l-106.496-59.904-91.136 51.712z m0-384v98.304l113.152 61.952v111.104l10.752 6.144 74.752 42.496V309.248l-198.656-108.544z m-64 561.152L512 819.2l-106.496-57.344-16.896 10.752-70.144 38.4 194.048 106.496 194.048-106.496-70.656-38.4-17.408-10.752zM228.352 471.552V360.448l113.152-61.952V200.704L142.848 309.248v210.944l74.752-42.496 10.752-6.144zM384 413.696L512 486.4l21.504-12.8L640 413.696l-106.496-59.904v-14.848l85.504-49.152V168.448L512 106.496 405.504 168.448v121.344l85.504 49.152v14.848L384 413.696z" fill="#FF6A00" p-id="6451"></path>
                            </svg>
                            <p className='text-gray-400 mt-4 ml-4'>Punishment mechanisms:</p>
                        </div>
                        <p className='text-gray-600 ml-4 mt-2'>
                            If the usage exceeds the quota limit after calculation. The debt will be added to the usage for each subsequent calculation, and phased measures will be taken.
                        </p>
                    </div>
                </div>
                <AdminNav />
                <Outlet />
            </div>
        </>
    )
}

