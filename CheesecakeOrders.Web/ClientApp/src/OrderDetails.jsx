import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';


const OrderDetails = () => {

    
    const [order, setOrder] = useState();
    const {id} = useParams();

    useEffect(() => {
        const getOrder = async () => {
            const { data } = await axios.get(`/api/home/getbyid?id=${id}`);
            setOrder(data);
        }

        getOrder();
    }, []);

    return(
        <div className="d-flex align-items-center justify-content-center" style={{ height: "80vh" }}>
            <div className="card text-center shadow p-3 mb-5 bg-body rounded" style={{ width: "30rem", backgroundColor: "#f8f9fa" }}>
                <div className="card-body">
                    <h3 className="card-title fw-bold">{order.person}</h3>
                    <p className="card-text fs-5">{order.email}</p>
                    <p className="card-text fs-5">{order.baseFlavor}</p>
                    <p className="card-text fs-5">{order.toppings || 'N/A'}</p>
                    <p className="card-text fs-5">{order.specialRequests || 'N/A'}</p>
                    <p className="card-text fs-5">{order.quantity}</p>
                    <p className="card-text fs-5">{dayjs(order.deliveryDate).format('MM/DD/YYYY')}</p>
                    <p className="card-text fs-5">{`$${order.total?.toFixed(2)}`}</p>
                </div>
                <Link to='/viewOrders'>
                    <button className='btn btn-primary w-100'>Back to Orders</button>
                </Link>
            </div>
        </div>
    )



}

export default OrderDetails;

