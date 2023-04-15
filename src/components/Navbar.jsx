import React, { useState } from 'react'
import { Link } from 'react-router-dom'




const style = {
    li: `text-white mx-4 md:mx-0 md:ml-12 text-lg hover:text-[#D7D7D7]`

}

const button = {
    buttonB: 'text-lg text-white border-2 border-[#D56AF0] rounded-lg p-2 px-3 hover:text-[#D7D7D7] hover:border-[#8A5F95] '
}

function Navbar() {
    const [nav, setNav] = useState(false)





    return (
        <div>
            <div className='hidden md:inline-flex flex flex-row w-full md:w-[100%]'>
                <div className='ml-20 mt-2 flex  w-full md:w-[100%] justify-between items-center flex-row w-full h-full'>
                    <ul className='md:flex'>
                        <div><Link to='/'>
                            <img className='w-[35px] h-[30px]' src={require('../Assets/icon.png')} />
                        </Link>
                        </div>

                        <li className={style.li}><Link to='/'>
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

                <div className='mr-28 flex w-[20%] justify-between  items-center flex-row w-full h-full'>
                    <ul className='md:flex '>
                        <li className={style.li}><Link to='/account'>
                            Sign in
                        </Link></li>
                    </ul>

                    <a className={button.buttonB} href="/sign-up">Sign up</a>



                </div>


            </div>


            {/* // Navbar mini */}
            <div className='md:hidden flex flex-col  '>
                <div className='flex flex-row  justify-between'>
                    <div>
                        <Link to='/'>
                            <img className='w-[35px] h-[30px] ml-2' src={require('../Assets/icon.png')} />
                        </Link>
                    </div>
                    <div className='flex items-center'>

                        <Link to='/'>
                            <p className={style.li}>Sign in</p>
                        </Link>


                        <a className={button.buttonB} href="/sign-up">Sign up</a>

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





        </div >
    )
}

export default Navbar