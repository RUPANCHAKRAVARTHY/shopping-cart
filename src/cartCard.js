import Card from '@material-ui/core/Card';
import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

export default function CartCard({ data, handlecartclose }) {
    return (
        <>
            < div className='row' >
                <div className="col-12">
                    <Card className="cartcard">
                        <div className="closeIcon" ><CloseIcon style={{ color: '#b10037' }} onClick={() => handlecartclose(data.id)} className="closeiconx" /></div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-3">
                                    <img src={data.imgurl} alt="object" className="cartimg" width="20" height="20" />
                                </div>
                                <div className="col-9">
                                    <div className='row'>
                                        <h6 className="carttitle">{data.title}</h6>
                                    </div>
                                </div>
                                <div className='row pricerow'>
                                    <div className='col-12'>
                                        <span>{data.count} x {data.finalPrice} =</span> <span className="cartprice" >Rs.{parseInt(data.count) * parseFloat(data.finalPrice)}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Card>
                </div>
            </div >

        </>
    )
}