import React, { FC } from 'react';
import { Formik } from 'formik';

import { AdduserSchema, FormValues, initialValues } from 'locales/adduserFormInfo';
import { educationOption, Unioptions } from 'locales/data';
import { ButtonCustom, InputCustom, SelectBox } from 'components/ui';
import styles from "./Addlist.module.scss";
import { useCreateUserInfo, useUpdateUserInfo } from 'hooks/reactQuery';
import SweetAlert from 'components/common/SweetAlert';

export interface AddlistProps {
    title?: string,
    editValue?: any
}
const Addlist: FC<AddlistProps> = ({ title, editValue, ...props }) => {

    const updateUser = useUpdateUserInfo();
    const createUser = useCreateUserInfo();

    return (
        <div className={styles.container}>
            <p className={styles.headerText}>{title}</p>
            <Formik
                initialValues={editValue ? editValue : initialValues}
                validateOnBlur={false}
                onSubmit={(values: FormValues, { setSubmitting, resetForm }: any) => {
                    editValue ?
                        setTimeout(() => {
                            updateUser.mutate(values)
                            setSubmitting(false);
                            SweetAlert({
                                title: 'کاربر ویرایش شد',
                                icon: 'success',
                                confirmButtonText: "تایید",
                                width: 350,
                                padding: '.5em',
                                confirmButtonColor: "#4f0048"
                            });
                            resetForm();
                        }, 500)
                        :
                        setTimeout(() => {
                            createUser.mutate(values)
                            setSubmitting(false);
                            SweetAlert({
                                title: 'کاربر ثبت شد',
                                icon: 'success',
                                confirmButtonText: "تایید",
                                width: 350,
                                padding: '.5em',
                                confirmButtonColor: "#4f0048"
                            });
                            resetForm()
                        }, 500);
                }}
                validateOnMount={true}
                enableReinitialize={true}
                validationSchema={AdduserSchema}
                render={({ handleSubmit, handleBlur, handleChange, setFieldValue, errors, touched, values, validateForm, isSubmitting, isValid = false, dirty, resetForm, isValidating }) => (
                    <form
                        className={styles.form}
                        onSubmit={handleSubmit}>
                        <section className={styles.formContainer}>
                            <InputCustom
                                label='نام'
                                placeholder='نام را وارد کنید'
                                name='name'
                                type='text'
                                handleChange={handleChange}
                                error={errors.name}
                                touched={touched.name}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <InputCustom
                                label='نام پدر'
                                placeholder='نام پدر را وارد کنید'
                                name='fatherName'
                                type='text'
                                handleChange={handleChange}
                                error={errors.fatherName}
                                touched={touched.fatherName}
                                onBlur={handleBlur}
                                value={values.fatherName}
                            />
                            <SelectBox
                                itemList={educationOption}
                                htmlFor='grade'
                                name='grade'
                                handleChange={(value: any) => setFieldValue('grade', value.value)}
                                label="تحصیلات"
                                error={errors.grade}
                                touched={touched.grade}
                                onBlur={handleBlur}
                                value={values.grade}
                                placeHolder="لطفا تحصیلات را انتخاب کنید"

                            />
                            <InputCustom
                                label='نام خانوادگی'
                                placeholder='نام خانوادگی را وارد کنید'
                                name='lastname'
                                type='text'
                                handleChange={handleChange}
                                error={errors.lastname}
                                touched={touched.lastname}
                                onBlur={handleBlur}
                                value={values.lastname}
                            />
                            <InputCustom
                                label='شماره همراه'
                                placeholder='شماره همراه را وارد کنید'
                                name='phoneNumer'
                                type="text"
                                handleChange={handleChange}
                                error={errors.phoneNumer}
                                touched={touched.phoneNumer}
                                onBlur={handleBlur}
                                value={values.phoneNumer}
                            />
                            {values.grade == '2' ?
                                <SelectBox
                                    itemList={Unioptions}
                                    htmlFor='university'
                                    name='university'
                                    handleChange={(value: any) => setFieldValue('university', value.value)}
                                    label="دانشگاه"
                                    error={errors.university}
                                    touched={touched.university}
                                    value={values.university}
                                    placeHolder="لطفا دانشگاه را انتخاب کنید"
                                /> : <span className={styles.span} />
                            }
                        </section>
                        <div className={styles.btnContainer}>
                            <ButtonCustom
                                title='ثبت'
                                size='medium'
                                type='submit'
                            />
                        </div>
                    </form>
                )}>
            </Formik>
        </div>
    );
};

export default Addlist;