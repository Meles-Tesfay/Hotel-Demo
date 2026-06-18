import React, { useEffect, useState } from 'react'
import Title from '../../components/Title'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const OwnerProfile = () => {
    const { axios, fetchUser } = useAppContext()
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [form, setForm] = useState({
        username: '', phone: '', bio: '',
        hotel: { name: '', address: '', contact: '', city: '', description: '' }
    })

    useEffect(() => {
        const load = async () => {
            try {
                const { data } = await axios.get('/api/owner/profile')
                if (data.success) {
                    setForm({
                        username: data.profile.username,
                        phone: data.profile.phone,
                        bio: data.profile.bio,
                        hotel: data.hotel || form.hotel,
                    })
                }
            } catch (error) {
                toast.error(error.response?.data?.message || error.message)
            } finally {
                setLoading(false)
            }
        }
        load()
    }, [])

    const handleSave = async (e) => {
        e.preventDefault()
        setSaving(true)
        try {
            const { data } = await axios.put('/api/owner/profile', form)
            if (data.success) {
                toast.success(data.message)
                fetchUser()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        } finally {
            setSaving(false)
        }
    }

    if (loading) return <p className="text-gray-500">Loading profile...</p>

    return (
        <form onSubmit={handleSave}>
            <Title align='left' font='outfit' title='Profile Settings'
                subTitle='Manage your owner profile and hotel information visible to guests and admins.' />

            <div className="max-w-xl space-y-4 mt-8">
                <div>
                    <label className="text-sm font-medium text-gray-700">Username</label>
                    <input value={form.username} onChange={e => setForm({ ...form, username: e.target.value })}
                        className="mt-1 w-full border rounded-lg px-4 py-2.5 outline-none focus:border-blue-500" />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="mt-1 w-full border rounded-lg px-4 py-2.5 outline-none focus:border-blue-500" />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700">About you</label>
                    <textarea value={form.bio} onChange={e => setForm({ ...form, bio: e.target.value })}
                        className="mt-1 w-full border rounded-lg px-4 py-2.5 h-24 resize-none outline-none focus:border-blue-500" />
                </div>

                <h3 className="font-semibold text-gray-900 pt-4 border-t">Hotel</h3>
                <div>
                    <label className="text-sm font-medium text-gray-700">Hotel name</label>
                    <input value={form.hotel.name} onChange={e => setForm({ ...form, hotel: { ...form.hotel, name: e.target.value } })}
                        className="mt-1 w-full border rounded-lg px-4 py-2.5 outline-none focus:border-blue-500" />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700">Address</label>
                    <input value={form.hotel.address} onChange={e => setForm({ ...form, hotel: { ...form.hotel, address: e.target.value } })}
                        className="mt-1 w-full border rounded-lg px-4 py-2.5 outline-none focus:border-blue-500" />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700">Contact</label>
                    <input value={form.hotel.contact} onChange={e => setForm({ ...form, hotel: { ...form.hotel, contact: e.target.value } })}
                        className="mt-1 w-full border rounded-lg px-4 py-2.5 outline-none focus:border-blue-500" />
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-700">Description</label>
                    <textarea value={form.hotel.description} onChange={e => setForm({ ...form, hotel: { ...form.hotel, description: e.target.value } })}
                        className="mt-1 w-full border rounded-lg px-4 py-2.5 h-28 resize-none outline-none focus:border-blue-500" />
                </div>

                <button type="submit" disabled={saving}
                    className="bg-primary text-white px-8 py-2.5 rounded-lg font-medium disabled:opacity-60">
                    {saving ? 'Saving...' : 'Save changes'}
                </button>
            </div>
        </form>
    )
}

export default OwnerProfile
