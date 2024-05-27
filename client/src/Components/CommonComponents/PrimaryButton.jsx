import React from 'react';

function PrimaryButton({ text, classes, onClick }) {
    return (
        <button
            className={`py-2 px-6 bg-transparent border-2 border-gray-800 text-black-500 font-normal rounded-full transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white ${classes}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default PrimaryButton;
