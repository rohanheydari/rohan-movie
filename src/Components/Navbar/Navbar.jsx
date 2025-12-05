import './Navbar.css'
const Navbar = () => {
    return ( 
        <>     
            <nav className=" navbar container">

                <div className="nav-left">
                    <form action="#">
                    <button type='button' className="btn btn-search  search-bgcolor">
                        <i  className="fa fa-search btn-search-icon"></i>
                    </button>
                    <input className="search-bgcolor search-input" placeholder="کلمه مورد نظر" type="text" dir="rtl"/>
                    </form>
                </div>
               
                <div className="nav-right">
                    <ul >
                        <li className='nav-right__item' ><a   href="#">ارتباط با ما</a></li>
                        <li className='nav-right__item' ><a   href="#">انیمه</a></li>
                        <li className='nav-right__item' ><a   href="#">دوبله فارسی</a></li>
                        <li className='nav-right__item' ><a   href="#">انیمیشن</a></li>
                        <li className='nav-right__item' ><a   href="#"><i className='fa fa-caret-down'></i>سریال</a></li>
                        <li className='nav-right__item' ><a   href="#">فیلم ایرانی</a></li>
                        <li className='nav-right__item'  ><a   href="#"><i className='fa fa-caret-down'></i>فیلم خارجی</a></li>
                        <li ><a   href="#">روهان مووی <i className='fa fa-film logo'></i></a></li>
                    </ul>
                     
                
                </div>
                
            </nav>
        </>
     );
}
 
export default Navbar;
