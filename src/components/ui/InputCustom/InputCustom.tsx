import React, { FC } from 'react';

import ErrorMessage from '../ErrorMessage';
import styles from './InputCustom.module.scss';

export interface InputProps {
    placeholder?: string;
    label?: string;
    name?: string;
    error?: string;
    value?: any;
    handleChange?: any;
    type?: string;
    touched?: any;
    onBlur?: any
}
const InputCustom: FC<InputProps> = ({
    placeholder,
    label,
    name,
    type,
    value,
    error,
    touched,
    onBlur,
    handleChange = () => { },
    ...props
}) => {
    return (
        <label className={styles.container} htmlFor="firstName">
            <span className={styles.label}>{label}</span>
            <input
                className={styles.input}
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={handleChange}
                onBlur={onBlur}
                value={value}
            />
            <div className={styles.errorContainer}>
                {error && touched ? (<ErrorMessage error={error} />) : null}
            </div>
        </label>
    );
};

export default InputCustom;