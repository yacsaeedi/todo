import { Addlist, Header } from 'components/ui';
import { useGetUserInfo } from 'hooks/reactQuery';
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from "./EditInfo.module.scss";

const EditUser = () => {
    const param = useParams();
    const { id  } = param;
    const { data: userInfo, isLoading } = useGetUserInfo(id)
    console.log("userInfo",userInfo);
    
    return (
        <div className={styles.wrapper}>
          <Header 
            title='ویرایش کاربران'
          />
         <Addlist title='ویرایش کاربر' editValue={userInfo} />
        </div>
    );
};

export default EditUser;
