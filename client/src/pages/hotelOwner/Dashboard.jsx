import React, { useEffect, useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Dashboard = () => {

    const { currency, user, axios } = useAppContext();

    const [dashboardData, setDashboardData] = useState({
        bookings: [],
        hospitalityOrders: [],
        totalBookings: 0,
        totalRevenue: 0,
    });

    const fetchDashboardData = async () => {
        try {
            const { data } = await axios.get('/api/bookings/hotel');
            if (data.success) {
                setDashboardData(data.dashboardData);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (user) {
            fetchDashboardData();
        }
    }, [user]);

    // Combine room bookings + hospitality orders into one unified list
    const allActivity = [
        ...(dashboardData.bookings || []).map(b => ({
            type: 'Room',
            userName: b.user?.username || 'Unknown',
            itemName: b.room?.title || b.room?.roomType || 'Room',
            total: b.totalPrice,
            isPaid: b.isPaid,
        })),
        ...(dashboardData.hospitalityOrders || []).map(o => ({
            type: 'Service',
            userName: o.user?.username || 'Unknown',
            itemName: o.hospitality?.title || 'Hospitality',
            total: o.totalPrice,
            isPaid: o.isPaid,
        })),
    ];

    return (
        <div>
            <Title
                align='left'
                font='outfit'
                title='Dashboard'
                subTitle='Monitor your room listing, track bookings and analyze revenue — all in one place.'
            />

            <div className='flex gap-4 my-8'>

                {/* Total Bookings */}
                <div className='bg-primary/3 border border-primary/10 flex p-4 pr-8'>
                    <img src={assets.totalBookingIcon} alt="" className='max-sm:hidden h-10' />
                    <div className='flex flex-col sm:ml-4 font-medium'>
                        <p className='text-blue-500 text-lg'>Total Bookings</p>
                        <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
                    </div>
                </div>

                {/* Total Revenue */}
                <div className='bg-primary/3 border border-primary/10 flex p-4 pr-8'>
                    <img src={assets.totalRevenueIcon} alt="" className='max-sm:hidden h-10' />
                    <div className='flex flex-col sm:ml-4 font-medium'>
                        <p className='text-blue-500 text-lg'>Total Revenue</p>
                        <p className='text-neutral-400 text-base'>{currency}{dashboardData.totalRevenue}</p>
                    </div>
                </div>
            </div>

            {/* Recent Activity Table */}
            <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Activity</h2>

            <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>
                <table className='w-full'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='py-3 px-4 text-gray-800 font-medium'>User</th>
                            <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Item</th>
                            <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden text-center'>Type</th>
                            <th className='py-3 px-4 text-gray-800 font-medium text-center'>Amount</th>
                            <th className='py-3 px-4 text-gray-800 font-medium text-center'>Status</th>
                        </tr>
                    </thead>

                    <tbody className='text-sm'>
                        {allActivity.length === 0 ? (
                            <tr>
                                <td colSpan={5} className='py-8 text-center text-gray-400'>No activity yet.</td>
                            </tr>
                        ) : allActivity.map((item, index) => (
                            <tr key={index}>
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                                    {item.userName}
                                </td>
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                                    {item.itemName}
                                </td>
                                <td className='py-3 px-4 border-t border-gray-300 max-sm:hidden text-center'>
                                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.type === 'Room' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                                        {item.type}
                                    </span>
                                </td>
                                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>
                                    {currency}{item.total}
                                </td>
                                <td className='py-3 px-4 border-t border-gray-300'>
                                    <button className={`py-1 px-3 text-xs rounded-full mx-auto ${item.isPaid ? 'bg-green-200 text-green-600' : 'bg-amber-200 text-yellow-600'}`}>
                                        {item.isPaid ? 'Paid' : 'Pending'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
