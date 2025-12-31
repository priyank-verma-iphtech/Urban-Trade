import React, { useState } from "react";
import cart from "../../assets/shopping-cart-03.svg";
import cardIcon from "../../assets/credit-card.png";
import visaIcon from "../../assets/visa.png";
import masterCardIcon from "../../assets/card.png";
import rupayIcon from "../../assets/payment.png";
import paypalIcon from "../../assets/paypal.png";
import { useLocation } from "react-router-dom";

const Purchase = () => {

  const { state } = useLocation();
  const { product } = state || {};

  const [cardImage,setCardImage]=useState(visaIcon)
  const [cardNumber, setCardNumber] = useState("");
  const [cvvNumber, setCvvNumber] = useState("");

  const items = [
    {
      image: product.thumbnail,
      name: product.title,
      price: product.price,
    },
  ];

  const total = items.reduce((sum, item) => sum + item.price, 0);
  const getNext10Years = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 10 }, (_, i) => currentYear + i);
  };


const formatCardNumber = (value) => {
  
  const digits = value.replace(/\D/g, "");
  return digits.replace(/(.{4})/g, "$1 ").trim();
};

const formatCvvNumber = (value) =>{

  const cvv= value.replace(/\D/g, "");
  return cvv;
};

  return (
    <div className="min-h-screen bg-[#edf0f8] flex justify-center items-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="p-8 bg-white">
          <div className="flex items-center gap-3">
            <img src={cart} className="h-8 w-8" />
            <h2 className="text-xl font-semibold">Card Summary</h2>
          </div>

          {items.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 h-20 items-center bg-[#e3e7ed] p-4 rounded-lg shadow-sm mt-12"
            >
              <img
                src={item.image}
                className="w-20 h-15 object-cover rounded-lg bg-white"
              />

              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-black mt-1">${item.price}</p>
              </div>
            </div>
          ))}
          <div className=" pt-4 mt-4">
            <div className="flex justify-between text-lg font-semibold text-gray-400">
              <span>Total</span>
              <span className="text-black">${total}</span>
            </div>
          </div>
          {/* You can add summary content here later */}
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 bg-[#e3e7ed]">
          <div className="flex items-center gap-3">
            <img src={cardIcon} className="h-8 w-8" />
            <h2 className="text-xl font-semibold">Payment Method</h2>
          </div>

        
          <div className="mt-6 h-12 bg-white px-5 py-4 rounded-lg shadow flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <input type="radio" className="h-4 w-4" />
              <span className="text-lg font-medium">Credit Card</span>
            </div>

            <div className="flex items-center gap-4">
              {[visaIcon, masterCardIcon, rupayIcon, paypalIcon].map((icon, idx) => (
                <img key={idx} src={icon} className="h-8 w-8 cursor-pointer" 
                   onClick={() => setCardImage(icon)}
                />
                  
                 
              ))}
            </div>
          </div>

          <div className="mt-8">
            <label className="text-xl font-semibold">Card Number</label>

            <div className="mt-2 h-12 bg-white px-5 py-4 rounded-xl shadow-md flex items-center justify-between  border-none focus:outline-none">
            <input
        type="text"
        value={cardNumber}
        onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
        placeholder="1234 5678 9012 3456"
        maxLength={19}
        className="w-full bg-transparent text-lg tracking-widest font-semibold 
                   outline-none border-none caret-black"
      />
              <img src={cardImage} className="h-8 w-8  " />
            </div>
          </div>

         
          <div className="mt-8">
            <label className="text-lg font-semibold">Expiration Date</label>

            <div className="flex gap-6 mt-3">
             
              <select className="bg-white px-3 py-2 rounded-lg shadow-sm outline-none border-2 border-transparent focus:border-blue-400">
                <option value="">Month</option>
                {[
                  "January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December",
                ].map((m, i) => (
                  <option key={i} value={i + 1}>{m}</option>
                ))}
              </select>

          
              <select className="bg-white px-3 py-2 rounded-lg shadow-sm outline-none border-2 border-transparent focus:border-blue-400">
                <option value="">Year</option>
                {getNext10Years().map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-8 ">
            <label className="text-lg font-semibold">CVV Code</label>
            <input
            type="text"
            value={cvvNumber}
            onChange={(e) => setCvvNumber(formatCvvNumber(e.target.value))}
            placeholder="123"
            maxLength={3}
              className="mt-2 bg-white px-4 py-2 ml-2 rounded-lg shadow-sm w-28 h-8 outline-none border-2 border-transparent focus:border-blue-400 placeholder-gray-500"
            />
          </div>

       
          <p className="text-gray-700 text-sm mt-8">
            By clicking the button, you agree to the{" "}
            <span className="text-blue-500 cursor-pointer">Terms</span> and{" "}
            <span className="text-blue-500 cursor-pointer">Conditions</span>.
          </p>
          <button
         onClick={() => window.location.href = "https://buy.stripe.com/test_9B6cN54MqbqFehtaVxgMw00"}
         className="mt-8 bg-blue-500 hover:bg-blue-600 transition text-white w-full py-3 rounded-xl text-lg font-semibold shadow-lg"
         >
  Pay Now
</button>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
