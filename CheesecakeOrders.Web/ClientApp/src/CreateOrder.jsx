import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';

const baseFlavors = ['Choose...', 'Classic', 'Chocolate', 'Red Velvet', 'Brownie'];

const toppings = [
    "Chocolate Chips",
    "Caramel Drizzle",
    "Whipped Cream",
    "Pecans",
    "Almonds",
    "Toasted Coconut",
    "Graham Cracker Crumble",
    "Cookie Dough",
    "Mint Chocolate Chips",
    "Caramelized Bananas",
    "Rainbow Sprinkles",
    "Powdered Sugar",
    "White Chocolate Shavings",
    "Peanut Butter Drizzle",
    "Dark Chocolate Drizzle"
];

const CreateOrder = () => {

    const [person, setPerson] = useState('');
    const [email, setEmail] = useState('');
    const [base, setBase] = useState(baseFlavors[0]);
    const [selectedToppings, setSelectedToppings] = useState([]);
    const [specialRequests, setSpecialRequests] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [deliveryDate, setDeliveryDate] = useState('');

    const navigate = useNavigate();
    const isFormValid = !!person && !!email && base !== baseFlavors[0] && +quantity > 0 && !!deliveryDate;


    const onSubmitClick = async () => {

        await axios.post('/api/home/add', { person, email, base, toppings: selectedToppings.join(', '), specialRequests, quantity, deliveryDate, total: computeTotal()});
        navigate('/success');

    }

    const onToppingsChange = (topping) => {
        if (selectedToppings.includes(topping)) {
          setSelectedToppings(selectedToppings.filter((t) => t !== topping));
        } else {
          setSelectedToppings([...selectedToppings, topping]);
        }
      }

    const computeTotal = () => {

        return ((49.99 + (selectedToppings.length * 3.95)) * quantity);

    }



    return (
        <>
            <h1 className="text-center my-4">Cheesecake Factory Order Form</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input value={person} onChange={e => setPerson(e.target.value)} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Cheesecake Base Flavor ($49.99)</label>
                        <select onChange={e => setBase(e.target.value)} value={base} className="form-select">
                            {baseFlavors.map((f) => <option key={f}>{f}</option>)}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Toppings (each topping adds an additional $3.95)</label>
                        {toppings.map(t => {
                            return <div key={t} className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={selectedToppings.includes(t)}
                                    onChange={() => onToppingsChange(t)}
                                />
                                <label className="form-check-label">{t}</label>
                            </div>
                        })}

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Special Requests</label>
                        <textarea onChange={e => setSpecialRequests(e.target.value)} value={specialRequests} className="form-control" rows={3} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input value={quantity} onChange={e => setQuantity(e.target.value)} type="number" className="form-control" min={1} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Delivery Date</label>
                        <input value={deliveryDate} onChange={e => setDeliveryDate(e.target.value)} type="date" className="form-control" />
                    </div>
                    <button type="submit" onClick={onSubmitClick} disabled={!isFormValid} className="btn btn-primary">
                        Submit!
                    </button>
                </div>
                <div className="col-md-6 position-sticky">
                    <h2 className="mb-4">Live Preview</h2>
                    <div className="card">
                        <img src="/cheesecake.jpg" className="card-img-top" alt="Cheesecake" />
                        <div className="card-body">
                            <h5 className="card-title"> {person}{(!!person ? "'s" : " ")} Custom Cheesecake</h5>
                            <p className="card-text">Base: {base}</p>
                            <p className="card-text">Toppings: {selectedToppings.join(',')}</p>
                            <p className="card-text">Special Requests: {specialRequests}</p>
                            <p className="card-text">Quantity: {quantity}</p>
                            <p className="card-text">Delivery Date: {dayjs(deliveryDate).format("MM/DD/YYYY")}</p>
                            <p className="card-text fw-bold">Total: {computeTotal()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}

export default CreateOrder;
