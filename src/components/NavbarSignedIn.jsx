import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'



const style = {
    li: `text-white mx-4 md:mx-0 md:ml-12 text-lg hover:text-[#D7D7D7]`

}

const button = {
    buttonB: 'text-lg text-white border-2 border-[#D56AF0] rounded-lg p-2 px-3 hover:text-[#D7D7D7] hover:border-[#8A5F95] '
}


function NavbarSignedIn() {

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
        <div >
            {user && <div>
                <div>
                    <div className='flex hidden md:inline-flex flex-row w-[100%]'>
                        <div className='ml-20 mt-2 flex w-[100%] justify-between items-center flex-row w-full h-full'>
                            <ul className='md:flex'>
                                <div><Link to='/home'>
                                    <img className='w-[35px] h-[30px]' src={require('../Assets/icon.png')} />
                                </Link>
                                </div>

                                <li className={style.li}><Link to='/home'>
                                    Home
                                </Link></li>
                                <li className={style.li}><Link to='/account'>
                                    My account
                                </Link></li>
                                <li className={style.li}><Link to='/new-recipe'>
                                    Create recipe
                                </Link></li>
                                <li className={style.li}><Link to='/all-recipes'>
                                    Recipes
                                </Link></li>
                            </ul>

                        </div>

                        <div className='mr-10 flex w-[10%]  flex-row w-full h-full'>
                            <a onClick={handleLogout} className={button.buttonB} href="/">Logout</a>

                        </div>

                    </div>

                </div>

                {/* //navbarsignedin mini */}

                <div className='md:hidden flex flex-col  '>
                    <div className='flex flex-row  justify-between'>
                        <div>
                            <Link to='/home'>
                                <img className='w-[35px] h-[30px] ml-2' src={require('../Assets/icon.png')} />
                            </Link>
                        </div>
                        <div className='flex items-center'>

                            <a onClick={handleLogout} className={button.buttonB} href="/">Logout</a>

                        </div>
                    </div>

                    <div >
                        <ul className='flex flex-row mt-4'>
                            <li className={style.li}><Link to='/account'>
                                Account
                            </Link></li>
                            <li className={style.li}><Link to='/new-recipe'>
                                New recipe
                            </Link></li>
                            <li className={style.li}><Link to='/all-recipes'>
                                Recipes
                            </Link></li>
                        </ul>
                    </div>
                </div >


            </div>}

        </div >

    )
}

export default NavbarSignedIn