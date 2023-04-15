import React from 'react'
import Navbar from './Navbar';
import NavbarSignedIn from './NavbarSignedIn';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext'
import { Link } from 'react-router-dom';

const button = {
    buttonA: 'text-lg bg-[#8756EF]  text-white rounded-lg p-3 px-8  hover:shadow-lg'
}

function Home() {

    //logout
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
                <div className='w-[80%] md:w-[60%] m-auto flex justify-center flex-col '>
                    <div className='text-center mt-20 md:mt-40'>
                        <h1>Family Recipes</h1>
                    </div>
                    <div className='flex-col flex items-center'>

                        <div>
                            <p className='text-[#D7D7D7] mt-6' ><Link to='/sign-up'>
                                You are logged in</Link></p>
                        </div>
                        <div className='flex flex-col md:flex-row items-center mt-16'>
                            <div className='m-4 flex items-center'>
                                <a href='/new-recipe' className={button.buttonA}>Create new recipe</a>
                            </div>
                            <div className='m-4 flex items-center'>
                                <a href='/all-recipes' className={button.buttonA}>Se all recipes</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home