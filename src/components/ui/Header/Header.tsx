import React, {FC} from 'react';

import styles from './Header.module.scss';

export interface HeaderProps {
    title?: string
}
const Header : FC<HeaderProps> = ({title, ...props}) => {
    return (
        <header className={styles.container}>
            <p className={styles.title}>{title}</p>
        </header>
    );
};

export default Header;