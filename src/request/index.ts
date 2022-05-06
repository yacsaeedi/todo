import axios from "axios";
import { FormikValues } from "formik";

const instance = axios.create({
    baseURL: 'https://6249e521fd7e30c51c085463.mockapi.io/api',
    headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded'
    },
})

const getUserList = async () => {
    const { data } = await instance.get('/info')
    return data
}

const createUserInfo = async (body: any) => {
    console.log("body",body)
    const { data } = await instance.post('/info', body)
    return  data
}

const getUserInfo = async (id: any) => {
    const { data } = await instance.get(`/info/${id}`)
    return data
}

const updateUserInfo = async (body: any) => {
    const id = body.id
    const { data } = await instance.put(`/info/${id}`, body)
    return data
}

export {
    getUserList,
    createUserInfo,
    getUserInfo,
    updateUserInfo
};

