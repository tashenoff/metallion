import React, { useContext } from 'react';
import { TranslationContext } from '../TranslationContext';

const Contact = () => {
    const { polyglot } = useContext(TranslationContext);

    return (
     
            <p className='text-white'>{polyglot.t('address')}</p>
     
    );
};

export default Contact;