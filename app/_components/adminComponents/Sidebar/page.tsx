'use client'
import { usePathname } from 'next/navigation'
import "./style.css";
import authFunction from '@/app/_network/auth';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const Sidebar = ()=>{
    const pathname = usePathname()

    const logout = async ()=>{
        const res = await authFunction.logout()
        if(res.status == 200) {
            Cookies.remove('token')
            toast('Logout success, redirecting . . .', { className: 'success-toast' });
            setTimeout(() => {
                window.location.href = '/auth/login';
            }, 2000); 
        } else {
            toast('Logout failed. Try again later.', { className: 'error-toast' });
        }

    }
    return (
        <div className="sidebar">
            <div className="navigation">
                <a href="/admin/users" className={`navi-item ${pathname == '/admin/users' ? 'text-[#8576FF]' : ''}`}>Users</a>
                <a href="/admin/items" className={`navi-item ${pathname == '/admin/items' ? 'text-[#8576FF]' : ''}`}>Items</a>
                <a href="/admin/transactions" className={`navi-item ${pathname == '/admin/transactions' ? 'text-[#8576FF]' : ''}`}>Transaction</a>
                <a href="/admin/roles" className={`navi-item ${pathname == '/admin/roles' ? 'text-[#8576FF]' : ''}`}>Roles</a>
            </div>
            <div onClick={logout} className="logout">
                Logout
            </div>
        </div>
    )
}

export default Sidebar