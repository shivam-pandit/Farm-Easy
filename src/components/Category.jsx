import React from 'react'
import { useNavigate } from "react-router";
import './css/Category.css'


function Category() {
    let navigate = useNavigate();
    let CategoryData = [
        {img:"https://cdn-prodapi.iffcobazar.in/pub/media/catalog/category/Nano.jpg",title:"Nano Urea"},
        {img:"https://cdn-prodapi.iffcobazar.in/pub/media/catalog/category/Nano.jpg",title:"Nano Urea"},
        {img:"https://cdn-prodapi.iffcobazar.in/pub/media/catalog/category/Nano.jpg",title:"Nano Urea"},
        {img:"https://cdn-prodapi.iffcobazar.in/pub/media/catalog/category/Nano.jpg",title:"Nano Urea"},
        {img:"https://cdn-prodapi.iffcobazar.in/pub/media/catalog/category/Nano.jpg",title:"Nano Urea"},
        {img:"https://cdn-prodapi.iffcobazar.in/pub/media/catalog/category/Nano.jpg",title:"Nano Urea"},
        {img:"https://cdn-prodapi.iffcobazar.in/pub/media/catalog/category/Nano.jpg",title:"Nano Urea"},
        {img:"https://cdn-prodapi.iffcobazar.in/pub/media/catalog/category/Nano.jpg",title:"Nano Urea"},
        {img:"https://cdn-prodapi.iffcobazar.in/pub/media/catalog/category/Nano.jpg",title:"Nano Urea"},
        {img:"https://cdn-prodapi.iffcobazar.in/pub/media/catalog/category/Nano.jpg",title:"Nano Urea"},
        {img:"https://cdn-prodapi.iffcobazar.in/pub/media/catalog/category/Nano.jpg",title:"Nano Urea"},
        {img:"https://cdn-prodapi.iffcobazar.in/pub/media/catalog/category/Nano.jpg",title:"Nano Urea"},
        {img:"https://cdn-prodapi.iffcobazar.in/pub/media/catalog/category/Nano.jpg",title:"Nano Urea"},
        {img:"https://cdn-prodapi.iffcobazar.in/pub/media/catalog/category/Nano.jpg",title:"Nano Urea"},
        {img:"https://cdn-prodapi.iffcobazar.in/pub/media/catalog/category/Nano.jpg",title:"Nano Urea"},
        {img:"https://cdn-prodapi.iffcobazar.in/pub/media/catalog/category/Nano.jpg",title:"Nano Urea"},
    ]

  return (
      
    <div className='categoryBase'>
        <div className="categoryTitleHolder">
          <p className="categoryTitle">Browse Products Across Our Popular Categories</p>
        </div>

        <div className="categoryGridWrapper">
            {CategoryData.map((item,index)=>{
                
                return(
                    <>
                    <div className="categoryItem" key={index}
                        onClick={()=>{
                            navigate("/item-list")
                        }}
                    >
                        <div className="imgContainerx">
                            <img src={item.img} alt="" className='categoryImg' />
                        </div>
                        <div className="bottomContainer">
                            <div className="categoryItemTitle">{item.title}</div>
                            {/* <img src="" alt="" /> */}
                            <i class="fa-solid fa-arrow-right categoryArrow"></i>
                        </div>
                    </div>
                    </>
                )
            })}
        </div>


    </div>
  )
}

export default Category