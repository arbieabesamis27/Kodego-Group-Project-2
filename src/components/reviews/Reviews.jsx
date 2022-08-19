import React, { useState } from 'react'
import './Reviews.css'
import {FaStar} from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const colors = {
  orange: '#f5d10d',
  grey: '#181818'
}

const Reviews = () => {

  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = value => {
    setCurrentValue(value)
  };

  const handleMouseOver = value => {
    setHoverValue(value)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  };

  return (

    <div className='reviewContainer'>
          <h1 className='reviewTitle text-center'>Testimonials</h1>
        
        <div className='cards container'>
          <div className='row gap-5 py-3 my-5'>
          <Swiper
            slidesPerView={3}
            spaceBetween={50}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
          <SwiperSlide className='slide'>
            <div className='col cardBody p-3'>
              <div style={reviewStar.container}>
                <div style={reviewStar.stars}>
                    {stars.map((_, index) => {
                        return (
                          <FaStar key={index} color={colors.orange} />
                        )
                      })}
                  </div>
              </div>
              <h5 className='card-username py-3'>John Doe</h5>
              <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices magna at tristique lobortis. Aliquam vel ex ac ex malesuada viverra. Sed euismod nisl et pellentesque maximus. Nam at nisi eros.</p> 
            </div>
          </SwiperSlide>

          <SwiperSlide className='slide2'>
            <div className='col cardBody p-3'>
              <div style={reviewStar.container}>
                <div style={reviewStar.stars}>
                    {stars.map((_, index) => {
                        return (
                          <FaStar key={index} color={colors.orange} />
                        )
                      })}
                  </div>
                </div>
              <h5 className='card-username py-3'>Jane Doe</h5>
              <p className='card-text'>Sed eleifend, felis vel posuere lobortis, erat nisi malesuada sapien, in dictum velit lorem nec turpis. Suspendisse sodales neque eget euismod faucibus. Phasellus bibendum pellentesque pretium.</p> 
            </div>
          </SwiperSlide>

          <SwiperSlide className='slide3'>
            <div className='col cardBody p-3'>
              <div style={reviewStar.container}>
                <div style={reviewStar.stars}>
                    {stars.map((_, index) => {
                        return (
                          <FaStar key={index} color={colors.orange} />
                        )
                      })}
                  </div>
                </div>
              <h5 className='card-username py-3'>John Smith</h5>
              <p className='card-text'>Nunc ultricies erat arcu, vel laoreet dolor cursus vitae. Nullam quis pharetra sapien. Nam erat nulla, suscipit ac euismod a, pharetra non nulla. Curabitur bibendum sapien velit, et tempus nulla viverra fringilla.</p> 
            </div>
          </SwiperSlide>

        </Swiper>
      </div> 
    </div>




        {/* Button Review */}
        <div className='container d-block text-center pt-5 mt-5'>
          <button type='button' className='btn btnReview btn-warning' data-bs-toggle='modal' data-bs-target='#review'>Leave a Review</button>
        </div>

        {/* Modal */}
        <div className='modal fade text-center' id='review' aria-hidden='true'>
          <div className='modal-dialog'>
              <div className='modal-content'>
              <div className='modal-header'>
                  <h5 className='modal-title' id='reviewLabel'>Leave a Review</h5>
                  <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
              </div>

              <div className="modal-body">
                  <form>
                    <div style={styles.container}>
                          <div style={styles.stars}>
                              {stars.map((_, index) => {
                                  return (
                                    <FaStar 
                                      key = {index} 
                                      size = {32}
                                      style = {{
                                        marginRight: 10,
                                        cursor: 'pointer'
                                      }}
                                      color = {(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                      onClick = {() => handleClick(index + 1)}
                                      onMouseOver = {() => handleMouseOver(index + 1)}
                                      onMouseLeave = {handleMouseLeave}
                                    />
                                  )
                                })}
                            </div>
                          </div>
                    <textarea className='textbox' rows={10} placeholder='Your message'></textarea>
                    <div className='my-3'>
                      <input type='text' className='username p-1 mx-2' placeholder='Your name*' required/>
                      <input type='text' className='number p-1 mx-2' placeholder='Phone number*' required/>
                    </div>
                  </form>
              </div>

              <div className='modal-footer'>
                <button type="button" className="btn btn-warning">Submit Review</button>
              </div>
              </div>
          </div>
        </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem 0'
  }
}

const reviewStar = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start'
  }
}

export default Reviews