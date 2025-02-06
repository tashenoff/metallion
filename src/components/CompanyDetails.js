import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faBuilding, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { TranslationContext } from '../TranslationContext';

const CompanyDetails = () => {
  const { polyglot } = useContext(TranslationContext);

  const company = {
    name: 'AIVA.KZ LLP',
    address: '010000, office 786 Tole bi street6 Nura district, Astana city, Republic of Kazakhstan',
    bin: '231240017378',
    contact: {
      phone: '+7 778 978 0220',
      email: 'aiva.kz01@mail.ru',
    },
    bankDetails: [
      {
        iban: 'KZ92601A871032872271',
        kbe: '17',
        bankName: 'Halyk Bank of Kazakhstan JSC',
        swift: 'HSBKKZKX',
        currency: 'KZT',
      },
      {
        iban: 'KZ61601A321012487191',
        kbe: '17',
        bankName: 'Halyk Bank of Kazakhstan JSC',
        swift: 'HSBKKZKX',
        currency: 'USD',
      },
    ],
  };

  return (
    <div
      style={{
        backgroundImage: "url(/images/111.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
      className="relative p-6 text-white shadow-xl rounded-lg container mx-auto my-20"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Company and Bank Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-8">
          {/* Company Info Column */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold">{polyglot.t('companyName')}:</h3>
              <p className="text-sm text-gray-300">{company.name}</p>
            </div>
    
            <div className="mb-6">
              <h3 className="text-2xl font-semibold">{polyglot.t('address')}:</h3>
              <p className="text-sm text-gray-300">{company.address}</p>
            </div>
    
            <div className="mb-6">
              <h3 className="text-2xl font-semibold">{polyglot.t('bin')}:</h3>
              <p className="text-sm text-gray-300">{company.bin}</p>
            </div>
    
            <div className="mb-6">
              <h3 className="text-2xl font-semibold">{polyglot.t('contacts')}:</h3>
              <p className="text-sm text-gray-300 flex items-center">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="mr-2 my-5 text-lg text-blue-500 bg-white rounded-lg p-2"
                />{' '}
                {company.contact.phone}
              </p>
              <p className="text-sm text-gray-300 flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 text-lg text-blue-500 bg-white rounded-lg p-2"
                />{' '}
                {company.contact.email}
              </p>
            </div>
          </div>
    
          {/* Bank Details Column */}
          <div>
            <h3 className="text-2xl font-semibold  mb-4">{polyglot.t('bankDetails')}</h3>
            {company.bankDetails.map((bank, index) => (
              <div key={index} className="mb-4 p-4 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold  flex items-center">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="mr-2 text-[14px] text-green-500"
                  />{' '}
                  <span className="text-[14px]">{bank.bankName}</span>
                </h4>
                <div className="flex justify-between mt-2">
                  <div className="text-gray-400 text-sm">IBAN:</div>
                  <div className="text-gray-200 font-medium text-sm">{bank.iban}</div>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="text-gray-400 text-sm">KBE:</div>
                  <div className="text-gray-200 font-medium text-sm">{bank.kbe}</div>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="text-gray-400 text-sm">SWIFT:</div>
                  <div className="text-gray-200 font-medium text-sm">{bank.swift}</div>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="text-gray-400 text-sm">{polyglot.t('currency')}:</div>
                  <div className="text-gray-200 font-medium text-sm">{bank.currency}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
