import React from 'react'
import './css/whyus.css'
function WhyUs() {
    let Data = [
        {img:"https://cdn-prodapi.iffcobazar.in/pub/media/homepage_images/default/authentic-icon_1.png",title:"Authentic Products",subtitle:"Each product goes through multiple rounds of quality check"},
        {img:"https://cdn-prodapi.iffcobazar.in/pub/media/homepage_images/default/best-price-icon_2.png",title:"Best Prices",subtitle:"Unmatched prices for the highest quality products"},
        {img:"	https://cdn-prodapi.iffcobazar.in/pub/media/homepage_images/default/secure-icon_3.png",title:"Safe & Secure Experience",subtitle:"64bit of the user data and completely secure payments"},
        {img:"https://cdn-prodapi.iffcobazar.in/pub/media/homepage_images/default/delivery-icon_4.png",title:"Quick Delivery",subtitle:"Lightning-fast delivery across most PIN codes"},
        
    ]

  return (
    <div className='whyUsBase'>
        <div className="whyUsTitleHolder">
          <p className="whyUsTitle">Why Us?</p>
        </div>

        <div className="whyUsGrid">
            {Data.map((item,index)=>{
                return(
                    <div className="whyUsItemContainer">
                    <div className="whyUsImgContainer">
                      <img src={item.img} alt="" />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                  </div>
                )
            })}
        </div>

    </div>
  )
}

export default WhyUs