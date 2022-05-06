import React, { FC } from 'react';
import classNames from 'classnames';
import { useGetUserList } from 'hooks/reactQuery';
import { Link } from 'react-router-dom';

import styles from './Userlist.module.scss';
import ButtonCustom from '../ButtonCustom';

export interface UserlistProps {
}

const titleItem = ["شناسه", "نام", "نام خانوادگی", "شماره همراه", "عملیات"];

const Userlist: FC<UserlistProps> = () => {
    const { data: userLists, isLoading } = useGetUserList();
    const substring = (text: string, maxlength: number) => text.length > maxlength ? text.substring(0, maxlength) + "..." : text;
    const bodyItem = () => {
        return (
            userLists?.map((item: any, index: number) => {
                return (
                    <div className={classNames({ [styles.itemBorder]: userLists.length - 1 == index ? false : true }, { [styles.itemBox]: true })} key={index} >
                        <span className={styles.fristItem}>{item.id}</span>
                        <span className={styles.fildFlex1}>
                            {substring(item.name, 10)}
                        </span>
                        <span className={styles.fildFlex1}>
                            {substring(item.lastname, 10)}
                        </span>
                        <span className={styles.fildFlex1}>
                            {item.phoneNumer}
                        </span>
                        <span className={styles.fildFlex3}>
                            <Link to={`/editUser/${item.id}`} >
                                <ButtonCustom
                                    title='ویرایش'
                                    size='small'
                                    mode='outlined'
                                />
                            </Link>
                        </span>
                    </div>
                )
            })
        )
    }
    return (
        <div className={styles.containerTable}>
            <div className={classNames({ [styles.itemBorder]: true }, { [styles.headerTable]: true })}>
                {titleItem.map((item: any, index: any) => {
                    return (
                        <span
                            key={index}
                            className={
                                classNames(
                                    { [styles.titleTable]: true },
                                    { [styles.fristItem]: index === 0 && true },
                                    { [styles.fildFlex1]: index < 4 && true },
                                    { [styles.fildFlex3]: index == 4 && true },
                                )}
                        >
                            {item}
                        </span>)
                })}
            </div>
            {bodyItem()}
        </div>
    );
};
export default Userlist;