import Grid from "./Grid";


let BestSeller=()=>{

    const list={
        backgroundColor :"#e0e0e0",
        padding:"40px 0px"
     }
    return(
        <div className="bestSellerBase" style={list}>
            <Grid
            title={"Best Seller"}
            bestSeller ={true}
            />
        </div>
    )
}

export default BestSeller;