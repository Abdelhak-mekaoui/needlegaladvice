'use client'
import { useRouter } from 'next/navigation'

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactFormSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phoneNumber1: Yup.string().required('Required'),
  phoneNumber2: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  zipcode: Yup.string().required('Required'),
});



export default function Example() {
  const router = useRouter()

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber1: '',
    phoneNumber2: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
    router.push('/');
  };

  return (
    <div className="imin-h-screen flex flex-raw w-full items-center justify-around lg:justify-center bg-white lg:px-36 xl:gap-4 xl:px-40">
        <div>
            <img
             className='hidden lg:block'
             src="./form_img.png" alt="" />
        </div>
        <div className="border-2 m-2 border-blue-600 rounded-2xl solid border-xl bg-white px-2 w-full py-8 sm:py-12   lg:max-h-screen">

      <div className="mx-auto max-w-2xl text-center flex flex-raw gap-6 justify-center lg:gap-12  ">
        <div className="border solid rounded-full bg-green-400 px-4 py-4 flex items-center justify-center w-12 h-12 font-bold text-8  text-white">1</div>
        <div className="border solid rounded-full bg-green-400 px-4 py-4 flex items-center justify-center w-12 h-12 font-bold text-8  text-white">2</div>
        <div className="border solid rounded-full bg-green-400 px-4 py-4 flex items-center justify-center w-12 h-12 font-bold text-8  text-white">3</div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactFormSchema}
        onSubmit={handleSubmit}
      >
      <Form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <Field
                type="text"
                name="firstName"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage name="firstName" component="div" className="text-red-500" />
            </div>
          </div>
          <div>
            <label  className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <Field
                type="text"
                name="lastName"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
                            <ErrorMessage name="lastName" component="div" className="text-red-500" />

            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <Field
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
          </div>
          
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
            Phone number 1
            </label>
            <div className="mt-2.5">
              <Field
                type="text"
                name="phoneNumber1"
                id="phoneNumber1"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
                            <ErrorMessage name="phoneNumber1" component="div" className="text-red-500" />

            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
            Phone number 2
            </label>
            <div className="mt-2.5">
              <Field
                type="text"
                name="phoneNumber2"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            <ErrorMessage name="phoneNumber2" component="div" className="text-red-500" /> 
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Address
            </label>
            <div className="mt-2.5">
              <Field
                type="text"
                name="address"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
        <ErrorMessage name="address" component="div" className="text-red-500" /> 

            </div>
          </div>
          <div className='sm:col-span-2'>
            <label className="w-full max-w-xs">
                  <div className="label">
                      <span className="label-text">City</span>
                  </div>
                  <Field  as="select" name="city" className=" block w-full select select-bordered">
                      <option disabled selected>Pick one</option>
                      <option>Yes</option>
                      <option>No</option>
                
                  </Field>
                  <ErrorMessage name="city" component="div" className="text-red-500" />

              </label>
          </div>

          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              State
            </label>
            <div className="mt-2.5">
              <Field
                type="text"
                name="state"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
                  <ErrorMessage name="state" component="div" className="text-red-500" />

            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Zipcode
            </label>
            <div className="mt-2.5">
              <Field
                type="text"
                name="zipcode"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
                  <ErrorMessage name="zipcode" component="div" className="text-red-500" />

            </div>
          </div>
        
          
        </div>
        <div className="mt-10 flex justify-center">
          <button type="submit"
            className="block w-[30%] rounded-2xl bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
          Next
          </button>
        </div>
      </Form></Formik>
      </div>
    </div>
  )
}
