import React from 'react';
import Head from 'next/head';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from "@/components/ui/button"
import ContactForm from './Components/ContactForm';

const Home: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Head>
        <title>AstroPay Voucher - Perfect Money Tether USDT BTC & More Cryptos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='fixed w-full'>
        <Navbar />
      </div>
      <main className='flex-grow flex items-center justify-center flex-col'><div className='text-center my-20 min-h-screen flex justify-center items-center'>
        <div className='px-20'>
          <h1 className='text-4xl font-bold  mb-8'>
            AstroPay Voucher - Perfect Money -Tether USDT -BTC - & More Cryptos
          </h1>
          <p className='text-xl  mb-12'>
            Buy & Sell Instantly through WhatsApp
          </p>
          <Button className='bg-green-500 hover:bg-green-600  font-bold py-4 px-8 rounded-full'>
            WHATSAPP +91 9790111711
          </Button>
        </div>
      </div>

        <div className='flex my-20'>
          <div className=' mx-20 flex-1'>
            <Image src="/1.webp" alt="" />

          </div>

          <div className='mx-20 flex-1'>
            <h1 className='text-4xl font-bold  mb-8'>
              WELCOME TO RANEXCHANGER
            </h1>
            <p className='text-xl  mb-12'>
              A Digital Currency Exchanger, Servicing Since February 2015.
            </p>
            <p className='text-xl  mb-12'>
              RanExchanger is a Digital Currency Exchange portal. Here, you can Buy & Sell digital currencies like Neteller INR, Skrill INR, AstroPay INR Cards, PerfectMoney USD & Payeer USD. We accept localized payment options like NEFT, RTGS, IMPS, UPI, GPAY, PAYTM, PHONEPE etc. for all your exchange needs.
            </p>
          </div>
        </div>

        <h1 className='text-4xl font-bold text-green-600 bg-gray-100 w-full text-center py-10'>
          Trusted & Oldest Ecurrency Exchanger in India
        </h1>

        <div className="flex gap-10 px-10 mb-40 bg-gray-100 pb-10">
          <div>
            <h1 className='text-2xl font-bold  mb-4'>
              How we&apos;re Trusted ?
            </h1>
            <p className='text-lg  mb-6'>
              We&apos;re online and trusted since February, 2015
              We&apos;re Paytm registered merchant as RanExchanger
              Our official Bank is also in the name of RanExchanger
              AstroPay authorized reseller, you can check with Astropay
              Our site is secured with SSL certificate from Godaddy.
              You can check our business reviews from google below
            </p>
            <Button className="bg-green-500 hover:bg-green-600">OUR GOOGLE REVIEWS</Button>
          </div>


          <div>
            <h1 className='text-2xl font-bold  mb-4'>
              Why choose Us ?
            </h1>
            <p className='text-lg  mb-6'>We had done with 10,000+ satisfied clients since 2015
              Instant buy-sell process almost fulfilled within 15 minutes.
              We work on customer&apos;s satisfaction to keep going..
              Lowest Fee when compared to competing exchangers
              We providing professional services without bargains
              We&apos;re against fraudsters, money laundering peoples            </p>
            <Link href={"/rates"}>
              <Button className="bg-green-500 hover:bg-green-600">VIEW OUR RATES</Button></Link></div>


          <div>
            <h1 className='text-2xl font-bold  mb-4'>
              How to Contact Us?
            </h1>
            <p className='text-lg  mb-6'>
              You can contact us 24x7 through below WhatsApp no +919790111711
              You can also connect us through below Telegram no +918220723580
              You can also email us for any orders or non commercial queries to this below mail id ranexchanger@gmail.com
              You can also Live chat with us from bottom right corner .      </p>

            <Button className="bg-green-500 hover:bg-green-600">CHAT NOW IN WHATSAPP</Button> </div>
        </div>


        {/* Google reviews */}
        <div className="flex gap-10 mx-10 mb-20">
          <div>
            <h1 className='text-center text-3xl font-bold  mb-4'>
              Google Reviews
            </h1>
            <p className='text-lg  mb-6'>
              We&apos;re online and trusted since February ,2015
              We&apos;re Paytm registered merchant as RanExchanger
              Our official Bank is also in the name of RanExchanger
              AstroPay authorized reseller, you can check with Astropay
              Our site is secured with SSL certificate from Godaddy.
              You can check our business reviews from google below
            </p>
            <Button className="bg-green-500 hover:bg-green-600">OUR GOOGLE REVIEWS</Button>
          </div>
        </div>

        {/* Crypto trading */}
        <div className="flex gap-10 px-10 py-10 mb-20 bg-gray-100 w-full">
          <div>
            <h1 className='text-center text-3xl mb-4 text-green-600 mb-10'>
            TO BUY SELL CRYPTO&apos;S LIKE USDT, BTC, etc.
            </h1>
            <p className='text-lg  mb-6'>
            Please Note Cryptocurreny rates are always fluctuate in minutes, Kindly contact us in our whatsapp number below to check & buy Instantly. 
            </p>
            <Button className="bg-green-500 hover:bg-green-600">+91 9790111711</Button>
          </div>
        </div>


        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>



      </main>
      <Footer />
    </div>
  );
};

export default Home;