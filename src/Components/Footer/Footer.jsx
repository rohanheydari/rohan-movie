import './Footer.css'
import { useRef } from 'react';
const Footer = () => {
    const numbers = useRef()
    return ( 
        <>
            <footer className='container footer'>
                <div className="row">
                <div className="footer-left col-12 col-lg-3">
                        <div className="col-12 footer-insta">
                            <i className='fa fa-chevron-left'></i>
                            <div className='footer-insta__info'>
                                <span>صفحه اینستاگرام</span>
                                <i className='fa-brands fa-instagram'></i>
                            </div>
                        </div>
                        <div className="col-12 footer-tel">
                            <i className='fa fa-chevron-left'></i>
                            <div className='footer-tel__info'>
                                <span>صفحه تلگرام</span>
                                <i className='fa-brands fa-telegram'></i>
                            </div>
                        </div>
                </div>
                <div className="footer-right col-12 col-lg-9" dir='rtl'>
                    <div ref={numbers} className="numbers">
                    <div onClick={pressactive} className=' number active number-one'>1</div>
                    <div onClick={pressactive} className='number number-two'>2</div>
                    <div onClick={pressactive} className=' number number-three'>3</div>
                    <div onClick={pressactive} className='number number-four'>4</div>
                    <div onClick={pressactive} className='number number-five'>5</div>
                    <div onClick={pressactive} className='number number-unknown'>...</div>
                    <div onClick={pressactive} className='number number-infinit'>470</div>
                    </div>
                </div>
                </div>
            </footer>
        </>
     );
     function pressactive(e){
        let numberss = [...numbers.current.children]
        let index = numberss.indexOf(e.target)
        numberss.forEach(element => {
            element.classList.remove('active')
        });
        numberss[index].classList.add('active')
     }
}
 
export default Footer;