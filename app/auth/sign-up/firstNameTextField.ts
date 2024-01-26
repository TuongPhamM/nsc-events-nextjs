// Textfield with error message for first name
import React, { useState } from 'react';
import TextField from "@mui/material/TextField";

const FirstNameField = () => {
    const [firstName, setFirstName] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    const handleBlur = () => {
        if (firstName.length === 0) {
            setError(true);
            setErrorMessage('First name is required');
        } else if (firstName.length < 2) {
            setError(true);
            setErrorMessage('First name must be at least 2 characters long');
        }
         else if (firstName.length < 20) {
            setError(true);
            setErrorMessage('First name must be less than 20 characters');
        } else {
            setError(false);
            setErrorMessage('');
        }
    };

};

