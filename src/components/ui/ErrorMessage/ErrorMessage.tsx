import React, {FC} from 'react';

import styles from './ErrorMessage.module.scss';

export interface ErrorMessageProps {
    error?: string
}
const ErrorMessage : FC<ErrorMessageProps> = ({error, ...props}) => {
    return (
        <p className={styles.error}>{error}</p>
    );
};

export default ErrorMessage;