// import Image from 'next/image'
import {AiFillHome} from 'react-icons/ai'
import {IoIosSearch} from 'react-icons/io'
import { IconContext } from "react-icons";
function Header():React.ReactElement {
  
    return (
    <>
  <div className="bg-black-light rounded-xl h-16 w-[30%] text-xl  ">

<div className='header-list'>



<AiFillHome  />


<h3>Home</h3>
</div>
<div className='header-list'>
<IoIosSearch />
<h3>Search</h3>
</div>

  </div>
   </>
    )
  }
  export default Header