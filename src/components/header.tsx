import logo from '../assets/desktop/logo.svg'
import moon from '../assets/desktop/icon-moon.svg'
import sun from '../assets/desktop/icon-sun.svg'
import Image from 'next/image'
import Link from 'next/link'


export default function Header(){
    return(
        <header className="bg-[url('../assets/desktop/bg-pattern-header.svg')] bg-no-repeat bg-cover rounded-bl-[4.5em] flex justify-between items-center px-[10%] pt-8 pb-16 max-md:rounded-bl-none">
            <Link href='/'>
                <Image src={logo} alt='logo'/>
            </Link>
        </header>
    )
}