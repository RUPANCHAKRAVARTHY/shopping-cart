import React from 'react'
import Rating from '@material-ui/lab/Rating';
import IconButton from '@material-ui/core/IconButton';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

export default function Card({ Data, handleCart, handledec, handleinc }) {
    return (
        <>
            <div className="col-md-6 col-lg-4 col-xl-3 maincard">
                <div className="card">
                    <div className="card-body">
                        {/* <div className="badge rounded-pill bg-danger">{Data.discount} off</div>  */}
                        <div className="productimgcontainer"><img src={Data.imgurl} className=" productimage" width='200' height='200' alt="product" /></div>
                        <h5 className="card-title title">{Data.title}</h5>
                        <p className="review"><Rating name="half-rating-read" defaultValue={Data.reviewStars} precision={0.5} readOnly /><span className="number">({Data.totalReviews})</span></p>
                        <p className="price"><span className="finalprice">Rs. {Data.finalPrice}</span><span className="originalprice">{Data.originalPrice}</span></p>
                        <div className="numberofitems">
                            <IconButton className="decreasebtn" aria-label="decrease item" onClick={() => handledec(Data.id)}><RemoveRoundedIcon style={{ color: '#e94560' }} /></IconButton>
                            <span className="count">{Data.count}</span>
                            <IconButton className="increasebtn" aria-label="increase item" onClick={() => handleinc(Data.id)}><AddRoundedIcon style={{ color: '#e94560' }} /></IconButton>
                        </div>
                        <div className="cartadd"><button className="btn btn-outline-danger" onClick={() => handleCart(Data.id)} disabled={Data.isAddedtoCart ? true : false}>Add to cart</button></div>
                    </div>
                </div>
            </div>

        </>
    )
}