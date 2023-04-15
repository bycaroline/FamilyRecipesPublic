import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext'
import { RxPerson } from 'react-icons/rx'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import NavbarSignedIn from './NavbarSignedIn';

const style = {
    li: `text-white ml-12 text-lg hover:text-[#D7D7D7]`

}

const button = {
    buttonA: 'text-lg bg-[#8756EF] mt-10 text-white rounded-lg p-2 px-8  hover:shadow-lg'
}

function Account() {

    // logout
    const navigate = useNavigate()

    const { user, logout } = UserAuth();

    const handleLogout = async () => {
        try {
            await logout()
            navigate('/')
            console.log('logged out')
        }
        catch (e) {
            console.log(e.message)
        }
    }

    return (
        <div>
            {user ? <NavbarSignedIn /> : <Navbar />}



            <div className='w-full md:h-screen '>
                <div className=' w-[60%] m-auto flex justify-center flex-col '>
                    <div className='flex justify-center mt-20 md:mt-40'>
                        <RxPerson color='#D7D7D7' size='50' />
                    </div>
                    <div className='flex-col flex items-center'>


                        <p className='text-[#B5B5B5] mt-12 text-xl'>User email:</p>
                        <p className='text-white mt-2 text-xl mb-4'>{user && user.email} </p>
                        <button className={button.buttonA}
                            onClick={handleLogout}>Logout</button>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Account