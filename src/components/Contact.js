import React, { useContext } from 'react';
import { TranslationContext } from '../TranslationContext';

const Contact = () => {
    const { polyglot } = useContext(TranslationContext);

    return (
        <div className='w-full py-5 my-5 border-b border-white/10'>
            <p className='text-white'>{polyglot.t('address')}</p>
        </div>
    );
};

export default Contact;