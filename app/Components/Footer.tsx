import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          © 2015 RanExchanger.co.in - All Rights Reserved
        </div>
        <div className="text-sm">
          Powered by V.M.R
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="/terms" className="text-white hover:underline">
                TERMS & PRIVACY POLICY
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:underline">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;