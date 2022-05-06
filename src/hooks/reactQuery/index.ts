import { FormikValues } from 'formik';
import { QueryClient, useQuery, useMutation,  } from 'react-query';

import * as request from "../../request";

const queryClient = new QueryClient();

 const useGetUserList = () => {
    return useQuery("userList", () => request.getUserList());
}

 const useCreateUserInfo = () => {
    return useMutation(request.createUserInfo, {
        onSuccess: (data : FormikValues) => {
            queryClient.setQueryData('userList', data);
        }
    })
}

 const useGetUserInfo = (id:any) => {
    return useQuery(["userInfo", id], () => request.getUserInfo(id));
}

 const useUpdateUserInfo = () => {
    return useMutation(request.updateUserInfo, {
        onSuccess: () => {
            window.location.href = "/";
        }
    })
}


export {
    useCreateUserInfo,
    useUpdateUserInfo,
    useGetUserList,
    useGetUserInfo,
}