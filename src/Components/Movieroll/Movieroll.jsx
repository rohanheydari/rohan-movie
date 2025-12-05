import './Movieroll.css'
import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll'; // وارد کردن کتابخانه

import img1 from '../../dist/assest/Avatar-Purusha-2-2024-207x290.jpg'
import img2 from '../../dist/assest/Bheema-2024-207x290.jpg'
import img3 from '../../dist/assest/Captain-America-Brave-New-World-2025-207x290.jpg'
import img4 from '../../dist/assest/Daaku-Maharaaj-2025-207x290.jpg'
import img5 from '../../dist/assest/Dark-Nuns-2025-207x290.jpg'
import img6 from '../../dist/assest/Day-of-the-Fight-2023-207x290.jpg'
import img7 from '../../dist/assest/High-Rollers-2025-207x290 (1).jpg'
import img8 from '../../dist/assest/Island-Python-2025-207x290.jpg'
const localimages = [
  img1,img2,img3,img4,img5,img6,img7,img8
]
const Movieroll = () => {
  return ( 
    <>
      {/* <div className="container">
        <div className=" sliders row d-flex flex-nowrap">
          
          <div className=" slider  col-auto" style={{ flexBasis:'12.5%'}}>
            <div className="slider-container" dir='rtl'>
                <img src={img1} alt="" />
                <div className="overlay">
                  <div className="category">
                      <span>اکشن،ماجراجویی</span>
                  </div>
                  <div className="rate">
                    <i className='fa-brands fa-imdb'></i>
                    <span>4.5</span>
                  </div>
                </div>
            </div>
             <span className='sub-title'>فیلم آواتار</span>
          </div>
            <div className="slider  col-auto" style={{ flexBasis:'12.5%'}}>
              <div className="slider-container" dir='rtl'>
                <img src={img2} alt="" />
                <div className="overlay">
                  <div className="category">
                      <span>اکشن،ماجراجویی</span>
                  </div>
                  <div className="rate">
                    <i className='fa-brands fa-imdb'></i>
                    <span>4.5</span>
                  </div>
                </div>
                </div>
                 <span className='sub-title'>فیلم آواتار</span>
          </div>
            <div className="slider  col-auto" style={{ flexBasis:'12.5%'}}>
              <div className="slider-container" dir='rtl'>
                <img src={img3} alt="" />
                <div className="overlay">
                  <div className="category">
                      <span>اکشن،ماجراجویی</span>
                  </div>
                  <div className="rate">
                    <i className='fa-brands fa-imdb'></i>
                    <span>4.5</span>
                  </div>
                </div>
                </div>
                <span className='sub-title'>فیلم آواتار</span>
          </div>
            <div className="slider  col-auto" style={{ flexBasis:'12.5%'}}>
              <div className="slider-container" dir='rtl'>
                <img src={img4} alt="" />
                <div className="overlay">
                  <div className="category">
                      <span>اکشن،ماجراجویی</span>
                  </div>
                  <div className="rate">
                    <i className='fa-brands fa-imdb'></i>
                    <span>4.5</span>
                  </div>
                </div>
                </div>
              <span className='sub-title'>فیلم آواتار</span>
          </div>
            <div className="slider  col-auto" style={{ flexBasis:'12.5%'}}>
              <div className="slider-container" dir='rtl'>
                <img src={img5} alt="" />
                <div className="overlay">
                  <div className="category">
                      <span>اکشن،ماجراجویی</span>
                  </div>
                  <div className="rate">
                    <i className='fa-brands fa-imdb'></i>
                    <span>4.5</span>
                  </div>
                </div>
                </div>
              <span className='sub-title'>فیلم آواتار</span>
          </div>
            <div className="slider  col-auto" style={{ flexBasis:'12.5%'}}>
              <div className="slider-container" dir='rtl'>
                <img src={img6} alt="" />
                <div className="overlay">
                  <div className="category">
                      <span>اکشن،ماجراجویی</span>
                  </div>
                  <div className="rate">
                    <i className='fa-brands fa-imdb'></i>
                    <span>4.5</span>
                  </div>
                </div>
                </div>
              <span className='sub-title'>فیلم آواتار</span>
          </div>
            <div className="slider   col-auto" style={{ flexBasis:'12.5%'}}>
              <div className="slider-container" dir='rtl'>
                <img src={img7} alt="" />
                <div className="overlay">
                  <div className="category">
                      <span>اکشن،ماجراجویی</span>
                  </div>
                  <div className="rate">
                    <i className='fa-brands fa-imdb'></i>
                    <span>4.5</span>
                  </div>
                </div>
                </div>
              <span className='sub-title'>فیلم آواتار</span>
          </div>
            <div className="slider   col-auto" style={{ flexBasis:'12.5%'}}>
              <div className="slider-container" dir='rtl'>
                <img src={img8} alt="" />
                <div className="overlay">
                  <div className="category">
                      <span>اکشن،ماجراجویی</span>
                  </div>
                  <div className="rate">
                    <i className='fa-brands fa-imdb'></i>
                    <span>4.5</span>
                  </div>
                </div>
                </div>
                 <span className='sub-title'>فیلم آواتار</span>
          </div>
         
          
        </div>
      </div> */}
      <div className="container">
      <div className="content-wrapper">
         <ScrollContainer 
        className="drag-scroll-container"
        horizontal={true} 
        hideScrollbars={true}
        dir="rtl"
        >
                <div className="slider-container scroll-item" dir='rtl'>
                <img src={img8} alt="" />
                <div className="overlay">
                  <div className="category">
                      <span>اکشن،ماجراجویی</span>
                  </div>
                  <div className="rate">
                    <i className='fa-brands fa-imdb'></i>
                    <span>4.5</span>
                  </div>
                </div>
                </div>
                <div className="slider-container scroll-item" dir='rtl'>
                <img src={img7} alt="" />
                <div className="overlay">
                  <div className="category">
                      <span>اکشن،ماجراجویی</span>
                  </div>
                  <div className="rate">
                    <i className='fa-brands fa-imdb'></i>
                    <span>4.5</span>
                  </div>
                </div>
                </div>
                <div className="slider-container scroll-item" dir='rtl'>
                <img src={img6} alt="" />
                <div className="overlay">
                  <div className="category">
                      <span>اکشن،ماجراجویی</span>
                  </div>
                  <div className="rate">
                    <i className='fa-brands fa-imdb'></i>
                    <span>4.5</span>
                  </div>
                </div>
                </div>
                <div className="slider-container scroll-item" dir='rtl'>
                <img src={img5} alt="" />
                <div className="overlay">
                  <div className="category">
                      <span>اکشن،ماجراجویی</span>
                  </div>
                  <div className="rate">
                    <i className='fa-brands fa-imdb'></i>
                    <span>4.5</span>
                  </div>
                </div>
                </div>
                <div className="slider-container scroll-item" dir='rtl'>
                <img src={img4} alt="" />
                <div className="overlay">
                  <div className="category">
                      <span>اکشن،ماجراجویی</span>
                  </div>
                  <div className="rate">
                    <i className='fa-brands fa-imdb'></i>
                    <span>4.5</span>
                  </div>
                </div>
                </div>
                <div className="slider-container scroll-item" dir='rtl'>
                <img src={img3} alt="" />
                <div className="overlay">
                  <div className="category">
                      <span>اکشن،ماجراجویی</span>
                  </div>
                  <div className="rate">
                    <i className='fa-brands fa-imdb'></i>
                    <span>4.5</span>
                  </div>
                </div>
                </div>
                <div className="slider-container scroll-item" dir='rtl'>
                <img src={img2} alt="" />
                <div className="overlay">
                  <div className="category">
                      <span>اکشن،ماجراجویی</span>
                  </div>
                  <div className="rate">
                    <i className='fa-brands fa-imdb'></i>
                    <span>4.5</span>
                  </div>
                </div>
                </div>
                <div className="slider-container scroll-item" dir='rtl'>
                <img src={img1} alt="" />
                <div className="overlay">
                  <div className="category">
                      <span>اکشن،ماجراجویی</span>
                  </div>
                  <div className="rate">
                    <i className='fa-brands fa-imdb'></i>
                    <span>4.5</span>
                  </div>
                </div>
                </div>
                 
          
       
        </ScrollContainer>
      </div>
      </div>
    </>
   );
}
 
export default Movieroll;