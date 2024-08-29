
import { logo } from '../assets';
import { navLinks } from '../constants';
import Search from './ui/Search';
import Button from './ui/Button';
import MobileNavbar from './MobileNavbar';
import Cart from './ui/Cart';
import ThemeToggle from './ui/ThemeToggle';


const Navbar = () => {
  
  return (
    <nav className='w-full navbar'>

    <MobileNavbar />
      {/* web view */}
      <div className='flex items-center justify-between'>
        <img src={logo} alt="logo" className='size-[100px]'/>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1 space-x-10'>
          {navLinks.map((navLink,index) => (
            <li key={navLink.id} className={`cursor-pointer transition-all text-white hover:border-b-2 hover:border-primaryOrange`}>{navLink.title}</li>
          ))}
          <ThemeToggle />
          <Search />
          <Cart />
          
          <Button btnText='Login' variant='secondary' size='small'/>
        </ul>
      </div>
     
    
     

    </nav>
  )
}

export default Navbar



