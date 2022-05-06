import React, { useEffect } from 'react';

import styles from "./Users.module.scss";
import Header from 'components/ui/Header';
import { Addlist, Userlist } from 'components/ui';

const Users = () => {
  function unZip<Type>(arr1: Type[]) {
    let num: Array<number> = [];
    let text: Array<string> = [];
    arr1.map((item: any, index) => {
      item.map((item: any, index: any) => {
        typeof (item) == 'string' ? text.push(item) : num.push(item);
      })
    })
    // return console.log("numberArray", num, "textArray", text);
    return { num, text }
  }
  const { num, text } = unZip<any>([[1, 'a'], [2, 'b'], [3, 'c'], ['z', 4]]);
  useEffect(() => {
    console.log("hhh", unZip<any>([[1, 'a'], [2, 'b'], [3, 'c'], ['z', 4]]));
  })

  return (
    <div className={styles.wrapper}>
      <Header
        title='لیست کاربران'
      />
      <Addlist title='ایجاد کاربر' />
      <Userlist />
    </div>
  );
};
export default Users;

