// src/components/InputField.js
import React from "react";
import InputMask from "react-input-mask";

const InputField = ({ type = "text", mask, name, placeholder, value, onChange, disabled, required, error }) => {
    const commonProps = {
        name,
        placeholder,
        value,
        onChange,
        disabled,
        required,
        className: `w-full p-2 rounded bg-white/20 focus:bg-white/40 focus:outline-none placeholder-white placeholder-opacity-80 ${
            error ? "border border-red-500" : ""
        }`,
    };

    return (
        <div>
            {mask ? (
                <InputMask mask={mask} type={type} {...commonProps} />
            ) : (
                <input type={type} {...commonProps} />
            )}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default InputField;