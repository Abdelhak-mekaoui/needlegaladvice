'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function Example() {
  
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber1, setPhoneNumber1] = useState('');
  const [phoneNumber2, setPhoneNumber2] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');


  const validateForm = () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber1 ||
      !phoneNumber2 ||
      !address ||
      !city ||
      !state ||
      !zipcode
    ) {
      alert('Please fill out all fields before proceeding.');
      return false;
    }
    return true;
  };

  const loadNext = () => {
    if (validateForm()) {
      router.push('/contact3');
    }
  };
  const LoadPrev = () => {
    router.push('/contact')
  }
  return (
    <div className="flex flex-raw w-full items-center justify-around lg:justify-center bg-white lg:px-36 xl:gap-4 xl:px-40">
        <div>
            <img
             className='hidden lg:block'
             src="./form_img.png" alt="" />
        </div>
        <div className="border border-2 m-2 border-blue-600 rounded-2xl solid border border-xl solid bg-white px-2 w-full py-8 sm:py-12   lg:max-h-screen">
      <div className="mx-auto max-w-2xl text-center flex flex-raw gap-6 justify-center lg:gap-12">
        <div className="border solid rounded-full bg-green-400 px-4 py-4 flex items-center justify-center w-12 h-12 font-bold text-8  text-white">1</div>
        <div className="border solid rounded-full bg-green-400 px-4 py-4 flex items-center justify-center w-12 h-12 font-bold text-8  text-white">2</div>
        <div className="border-2 solid border-blue-600 rounded-full bg-white px-4 py-4 flex items-center justify-center w-12 h-12 font-bold text-8 text-blue-600">3</div>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
            Phone number 1
            </label>
            <div className="mt-2.5">
              <input
              onChange={(e) => setPhoneNumber1(e.target.value)}
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
            Phone number 2
            </label>
            <div className="mt-2.5">
              <input
              onChange={(e) => setPhoneNumber2(e.target.value)}
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>


          


          <div className="sm:col-span-2">
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Address
            </label>
            <div className="mt-2.5">
              <input
              onChange={(e) => setAddress(e.target.value)}
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label className="w-full max-w-xs">
                  <div className="label">
                      <span className="label-text">City</span>
                  </div>
                  <select onChange={(e) => setCity(e.target.value)} className=" block w-full select select-bordered">
                      <option disabled selected>Pick one</option>
                      <option>Yes</option>
                      <option>No</option>
                
                  </select>
              </label>
          </div>

          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              State
            </label>
            <div className="mt-2.5">
              <input
              onChange={(e) => setState(e.target.value)}
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Zipcode
            </label>
            <div className="mt-2.5">
              <input
              onChange={(e) => setZipcode(e.target.value)}
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        
          
        </div>
        <div className="mt-10 flex justify-center gap-4">
          <button onClick={()=>LoadPrev()}
            className="block w-[30%] rounded-2xl bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
          Previous
          </button>
          <button onClick={()=>loadNext()}
            className="block w-[30%] rounded-2xl bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Next
          </button>
        </div>
      </form>
      </div>
    </div>
  )
}
