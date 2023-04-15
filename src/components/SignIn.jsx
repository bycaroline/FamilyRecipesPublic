import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { UserAuth } from '../Context/AuthContext';
import NavbarSignedIn from './NavbarSignedIn';
import { Navigate } from 'react-router-dom';
import Navbar from './Navbar';

const button = {
    buttonA: 'text-lg bg-[#8756EF] mt-10 text-white rounded-lg p-2 px-8  hover:shadow-lg'
}

const style = {
    li: `text-white ml-12 text-lg hover:text-[#D7D7D7]`

}




function SignIn() {

    const { signIn } = UserAuth()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const [isLogged, setIsLogged] = useState(false)


    //login
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signIn(email, password)
            navigate('/account')
            setIsLogged(true)
        }
        catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }



    return (
        <div>
            <Navbar />


            <div className='md:w-full md:h-screen '>
                <div className=' md:w-[60%] m-auto flex justify-center flex-col '>
                    <div className='text-center mt-20 md:mt-40'>
                        <h1>Family Recipes</h1>
                    </div>
                    <div className='flex-col flex items-center'>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div >
                                    <input className='p-2 rounded-lg mt-10 w-[300px]'
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        type="email"
                                        placeholder='Email address' />
                                </div>
                                <input className='p-2 rounded-lg mt-2 w-[300px]'
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    type="password"
                                    placeholder='Password' />
                                <div className=' flex justify-center'>
                                    <button className={button.buttonA}>Sign in</button>
                                </div>
                            </form>

                        </div>
                        <div>
                            <p className='text-[#D7D7D7] mt-8' ><Link to='/sign-up'>
                                Do not have an account yet? Go to Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SignIn