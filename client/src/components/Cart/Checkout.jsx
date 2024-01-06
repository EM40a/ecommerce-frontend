import React from 'react';
import {
  AmericanExpress,
  MasterCard,
  Paypal,
  Visa,
} from '../../assets/seller-icons';

const Checkout = () => {
  return (
    <div className="w-[280px]">
      <div className="bg-white border rounded-md px-4 py-6 mb-5">
        <p className="mb-3">Have a coupon?</p>
        <div className="flex">
          <input
            type="text"
            placeholder="Add coupon"
            className="p-2 border rounded-l-md outline-none w-full"
          />
          <button className="text-[#0D6EFD] border rounded-r-md hover:bg-[#0D6EFD] hover:text-white py-2 px-5">
            Apply
          </button>
        </div>
      </div>
      <div className="bg-white border rounded-md px-4 py-6">
        <div className="border-b pb-3 text-[#505050]">
          <div className="flex justify-between">
            Subtotal:<span className="text-[#505050]">$1403.97</span>
          </div>
          <div className="flex justify-between">
            Discount:<span className="text-[#FA3434]">- $60.00</span>
          </div>
          <div className="flex justify-between">
            Tax:<span className="text-[#00B517]">+ $14.00</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <div className="flex justify-between font-semibold">
            Total:<span className="text-xl font-semibold">$1357.97</span>
          </div>
          <button className="bg-[#00B517] rounded-lg text-white text-lg py-2 flex justify-center">
            Checkout
          </button>
          <div className="flex justify-center gap-2 mt-2">
            <AmericanExpress />
            <MasterCard />
            <Paypal />
            <Visa />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;