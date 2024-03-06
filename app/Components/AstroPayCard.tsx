import React from 'react';

const AstroPayCard: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-4xl text-green-600 font-bold mb-10">Buy AstroPay Voucher in India</h2>
      <div>
        <p className="mb-4">
          AstroPay Voucher is a prepaid virtual card, accepted at hundreds of online stores
          integrated with AstroPay.
        </p>
        <p className="mb-4">
          Astropay Voucher allows online payments without a bank account or credit card. ...
          Make them one big card and it will be ready to use or transfer.
        </p>
        <p className="mb-4">
          And keep in mind, AstroPay is only a Virtual Voucher like other E-Vouchers or Gift
          cards. It doesn't work like credit/debit or any bank cards.
        </p>
        <p className="mb-4 font-bold">*Instant Steps to buy AstroPay*</p>
        <ol className="list-decimal list-inside mb-4">
          <li>
            First you need to have an account in AstroPay app or website.
            Note: (Your AstroPay account Kyc/limits doesn't apply or affect you in any matter to
            buy through our service, you may buy any higher value as single or multiple number of
            cards as soon as just registered in AstroPay App or website.
          </li>
          <li>Tell us your required INR value in Voucher & share your AstroPay registered mobile number.</li>
          <li>
            We'll tell you how much it cost you to pay including our charges (0% to 5%),
            then make payment in any of our banking details which we provide you.
          </li>
          <li>
            Once you made successful payment, we'll confirm and generate your
            AstroPay Voucher Instantly on your AstroPay App/Account itself. That's all. Now, your
            Voucher is ready to use ..
          </li>
        </ol>
      </div>
    </div>
  );
};

export default AstroPayCard;