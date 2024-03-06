import React from 'react';
import Head from 'next/head';
import Navbar from '../Components/Navbar';
import AstroPayCard from '../Components/AstroPayCard';
import Footer from '../Components/Footer';

const AstroPayPage: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Head>
        <title>Your Website Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className='flex-grow'>
        {/* Add your main content here */}

        <div className='my-10 w-full sm:w-[400px] md:w-[600px] lg:w-[800px] mx-auto'>
          <AstroPayCard />
        </div>

      </main>
      

      <div>
          <Footer />
        </div>
    </div>
  );
};

export default AstroPayPage;