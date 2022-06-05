import React from 'react'
import Grid from './Grid'

function NewArrivel() {
    const list={
        backgroundColor :"#a5d6a7",
        padding:"40px 0px"
     }
  return (
    <div className="newArrivelBase" style={list}>
        <Grid
            title={"New Arrivals"}
            bestSeller ={true}
            />
    </div>
  )
}

export default NewArrivel