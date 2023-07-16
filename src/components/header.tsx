import logo from '../assets/desktop/logo.svg'
import moon from '../assets/desktop/icon-moon.svg'
import sun from '../assets/desktop/icon-sun.svg'
import Image from 'next/image'


export default function Header(){
    return(
        <header className="bg-[url('../assets/desktop/bg-pattern-header.svg')] bg-no-repeat bg-cover rounded-bl-[4.5em] flex justify-between items-center px-[10%] pt-8 pb-16 max-md:rounded-bl-none">
            <Image src={logo} alt='logo'/>

            <div className='flex justify-between items-center gap-2'>
            <Image src={sun} alt='sun'/>

            <button className=""></button>

            <Image src={moon} alt='moon'/>
            </div>
        </header>
    )
}