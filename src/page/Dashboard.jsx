import { Outlet } from 'react-router-dom';
import Sidebar from '../components/core/Dashbaord/Sidebar';

const Dashboard = () => {
  return (
    <div className='min-h-full'>
      <div className=' flex min-h-[calc(100vh-3.5rem)] bg-white'>
        <Sidebar/>
        <div className='h-[calc(100vh-3.5rem)] overflow-auto w-full bg-slate-950 rounded-tl-xl bg-cover bg-center relative'
           style={{
            backgroundImage: `url('https://res.cloudinary.com/ddlepk8lb/image/upload/v1727266851/earthsus2_ptoyuy.jpg')`,
          }}>
            <div className='h-[100%] w-11/12 mx-auto max-w-[1000px] py-10'>
                <Outlet/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Dashboard