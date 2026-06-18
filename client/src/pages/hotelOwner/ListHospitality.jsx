import React, { useEffect, useState } from 'react'
import Title from '../../components/Title'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const ListHospitality = () => {
    const [items, setItems] = useState([])
    const { axios, user, currency } = useAppContext()

    const fetchItems = async () => {
        try {
            const { data } = await axios.get('/api/hospitalities/owner')
            if (data.success) setItems(data.hospitalities)
            else toast.error(data.message)
        } catch (error) {
            toast.error(error.message)
        }
    }

    const toggleAvailability = async (hospitalityId) => {
        try {
            const { data } = await axios.post('/api/hospitalities/toggle-availability', { hospitalityId })
            if (data.success) {
                toast.success(data.message)
                fetchItems()
            } else toast.error(data.message)
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (user) fetchItems()
    }, [user])

    return (
        <div>
            <Title
                align='left'
                font='outfit'
                title='Hospitality Listings'
                subTitle='Manage dining and services shown on the public Hospitality page and home page.'
            />

            <p className='text-gray-500 mt-8'>All items</p>

            <div className='w-full max-w-4xl border border-gray-300 rounded-lg max-h-96 overflow-y-auto mt-3'>
                <table className='w-full text-left'>
                    <thead className='bg-gray-50 sticky top-0'>
                        <tr>
                            <th className='py-3 px-4 font-medium text-gray-800'>Title</th>
                            <th className='py-3 px-4 font-medium text-gray-800 max-sm:hidden'>Category</th>
                            <th className='py-3 px-4 font-medium text-gray-800'>Price</th>
                            <th className='py-3 px-4 font-medium text-gray-800 text-center'>Visible</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm'>
                        {items.length === 0 ? (
                            <tr>
                                <td colSpan={4} className='py-8 text-center text-gray-400'>
                                    No hospitality items yet. Add one from the sidebar.
                                </td>
                            </tr>
                        ) : items.map((item) => (
                            <tr key={item._id}>
                                <td className='py-3 px-4 border-t border-gray-200 text-gray-700'>{item.title}</td>
                                <td className='py-3 px-4 border-t border-gray-200 text-gray-700 max-sm:hidden'>{item.category}</td>
                                <td className='py-3 px-4 border-t border-gray-200 text-gray-700'>{currency}{item.price}</td>
                                <td className='py-3 px-4 border-t border-gray-200 text-center'>
                                    <label className='relative inline-flex items-center cursor-pointer'>
                                        <input
                                            type="checkbox"
                                            className='sr-only peer'
                                            checked={item.isAvailable}
                                            onChange={() => toggleAvailability(item._id)}
                                        />
                                        <div className='w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors' />
                                        <span className='absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5' />
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListHospitality
