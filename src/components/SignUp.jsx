import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext';
import Navbar from './Navbar';

const button = {
    buttonA: 'text-lg bg-[#8756EF] mt-10 text-white rounded-lg p-2 px-8  hover:shadow-lg'
}

function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { createUser } = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUser(email, password)
            navigate('/account')
        }
        catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }




    return (
        <div>
            <Navbar />
            <div className='w-full md:h-screen '>
                <div className=' w-[60%] m-auto flex justify-center flex-col '>
                    <div className='text-center mt-20 md:mt-40'>
                        <h1>Sign up</h1>
                    </div>
                    <div className='flex-col flex items-center'>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input className='p-2 rounded-lg mt-10 w-[300px]'
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        type="email"
                                        placeholder='Email address' />
                                </div>
                                <div>
                                    <input className='p-2 rounded-lg mt-2 w-[300px]'
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        type="password"
                                        placeholder='Password' />
                                </div>
                                <div className=' flex justify-center'>
                                    <button className={button.buttonA}>Sign up</button>
                                </div>
                            </form>
                        </div>
                        <div>
                            <p className='text-[#D7D7D7] mt-8 text-center' ><Link to='/'>
                                Already have an account? Go to Sign in</Link></p>
                        </div>
                    </div>
                </div>
            </div >
        </div>

    )
}

export default SignUp