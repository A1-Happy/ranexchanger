import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const RatesPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div>
          <h1 className="px-8 pt-10 text-4xl font-bold mb-8 text-green-600 text-center">BUY-SELL RATES FOR ALL E-CURRENCIES</h1>
          <div className='mb-10 px-8'>
            <hr />
          </div>


          {/* This is INR */}
          <div className="px-8 mb-10">

            <div>
              <h2 className="text-2xl font-bold mb-4 text-green-600 text-center">INR STOCK RATES</h2>
            </div>
            <p className="mb-8 text-center">Here you can view our percentage based charges for INR deposits & withdrawals to E-wallets.</p>

            <div className="grid grid-cols-3 gap-8">
              {/* AstroPay Card */}
              <div>
                <Image src="/1.webp" alt="AstroPay Card" className="mb-4" />
                <p className="font-bold">AstroPay INR</p>
                <p className="text-sm">In % basis</p>
                <p className="font-bold mt-4">YOUR BUY RATES</p>
                <ul className="list-disc list-inside text-sm">
                  <li>₹500-9999 @5% + 100</li>
                  <li>₹10k & above @5%</li>
                </ul>
                <p className="font-bold mt-4">YOUR SELL RATES</p>
                <ul className="list-disc list-inside text-sm">
                  <li>You can sell from 1000 INR</li>
                  <li>Charges from 2.5% to 5%</li>
                </ul>
              </div>

              {/* Neteller */}
              <div>
                <Image src="/2.webp" alt="Neteller" className="mb-4" />
                <p className="font-bold">Neteller INR (₹)</p>
                <p className="text-sm">In % basis</p>
                <p className="font-bold mt-4">YOUR BUY RATES</p>
                <ul className="list-disc list-inside text-sm">
                  <li>₹ Availability depends!</li>
                  <li>₹ 10k-49999 @6-8% Only</li>
                  <li>₹ 50k & above @5-7% Only</li>
                </ul>
                <p className="font-bold mt-4">YOUR SELL RATES</p>
                <ul className="list-disc list-inside text-sm">
                  <li>₹ Availability depends!</li>
                  <li>₹ 10k-49999 @0-5%</li>
                  <li>₹ 50k & above @0-3% Only</li>
                </ul>
              </div>

              {/* Skrill Moneybookers */}
              <div>
                <Image src="/3.webp" alt="Skrill Moneybookers" className="mb-4" />
                <p className="font-bold">Skrill INR (₹)</p>
                <p className="text-sm">In % basis</p>
                <p className="font-bold mt-4">YOUR BUY RATES</p>
                <ul className="list-disc list-inside text-sm">
                  <li>₹ Availability depends!</li>
                  <li>₹10k-49999 @6-8% Only</li>
                  <li>₹50k & above @5-7% Only</li>
                </ul>
                <p className="font-bold mt-4">YOUR SELL RATES</p>
                <ul className="list-disc list-inside text-sm">
                  <li>₹ Availability depends!</li>
                  <li>₹10k-49999 @0-5% only</li>
                  <li>₹50k & above @0-3% Only</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='mb-10'>
            <hr />
          </div>





          {/* This is USD */}
          <div className='px-8 '>
            <h2 className="text-2xl font-bold mb-4 text-green-600 text-center">USD STOCK RATES</h2>
            <p className="mb-8 text-center">Here you can see our $1 USD Buy (Deposit) & Sell (Withdrawal) rates for all E-Currencies</p>

            <div className="grid grid-cols-2 gap-8">
              {/* Perfect Money USD */}
              <div>
                <Image src="/2.webp" alt="Neteller" className="mb-4" />
                <p className="font-bold">Perfect Money USD</p>
                <p className="text-sm">cost per $1</p>
                <p className="font-bold mt-4">YOUR BUY RATES</p>
                <ul className="list-disc list-inside text-sm">
                  <li>$10-$99 @ Rs.90/usd</li>
                  <li>$100-$499 @ Rs.89/usd</li>
                  <li>$500-$5000 @ Rs.88/usd</li>
                </ul>
                <p className="font-bold mt-4">YOUR SELL RATES</p>
                <ul className="list-disc list-inside text-sm">
                  <li>$10-$99 @ Rs. 82/usd</li>
                  <li>$100-$499 @ Rs. 83/usd</li>
                  <li>$500-5000 @ Rs. 84/usd</li>
                </ul>
              </div>

              {/* Payeer USD */}
              <div className='mb-10'>
                <Image src="/2.webp" alt="Neteller" className="mb-4" />
                <p className="font-bold">Payeer USD</p>
                <p className="text-sm">cost per $1</p>
                <p className="font-bold mt-4">YOUR BUY RATES</p>
                <ul className="list-disc list-inside text-sm">
                  <li>$10-$99 @ Rs.94/usd</li>
                  <li>$100-$499 @ Rs.93/usd</li>
                  <li>$500-$5000 @ Rs.92/usd</li>
                </ul>
                <p className="font-bold mt-4">YOUR SELL RATES</p>
                <ul className="list-disc list-inside text-sm">
                  <li>$10-$99 @ Rs. 82/usd</li>
                  <li>$100-$499 @ Rs. 83/usd</li>
                  <li>$500-5000 @ Rs. 84/usd</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        

        {/* Crypto trading */}
        <div className="flex gap-10 px-10 py-10 mb-20 bg-gray-100 w-full">
          <div>
            <h1 className='text-center text-3xl mb-4 text-green-600 mb-10'>
            Buy-Sell Astropay Perfect Money Neteller Skrilll USDT IMPS UPI Bank in INR
            </h1>
            <p className='text-lg  mb-6'>Please Note Cryptocurreny rates are always fluctuate in minutes, Kindly contact us in our whatsapp number below to check & buy Instantly.
            </p>
            <Button className="bg-green-500 hover:bg-green-600">WHATSAPP +91 9790111711</Button>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default RatesPage;