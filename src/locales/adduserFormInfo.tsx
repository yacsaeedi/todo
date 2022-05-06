import * as Yup from 'yup';

export interface FormValues {
  name?: string,
  lastname: string,
  fatherName: string,
  phoneNumer: string,
  grade: string,
  university: string
}
export interface addModalValue {
  title: string;
  text: string;
  icon: string;
  confirmButtonText: string;
}
export const initialValues: FormValues = {
  name: '',
  lastname: '',
  fatherName: '',
  phoneNumer: '',
  grade: '',
  university: ''
};
export const AdduserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'باید از دو حرف بیشتر باشد')
    .max(50, 'باید از پنجاه حرف کمتر باشد')
    .required('لطفا نام را وارد کنید'),
  lastname: Yup.string()
    .min(2, 'باید از دو حرف بیشتر باشد')
    .max(50, 'باید از پنجاه حرف کمتر باشد')
    .required('لطفا نام خانوادگی را وارد کنید'),
  fatherName: Yup.string().required('لطفا نام پدر را وارد کنید'),
  phoneNumer: Yup.string().matches(/^[0-9]{11}$/, 'لطفا 11 رقم باشد').required('لطفا شماره همراه را وارد کنید'),
  grade: Yup.string().required('لطفا تحصیلات را انتخاب کنید'),
  university: Yup.string()
    .min(1, 'Too Short!')
    .max(50, 'Too Long!')
    .when("grade", {
      is: '2',
      then: Yup.string().required('لطفا دانشگاه را انتخاب کنید'),
    }),

});
