'use client'
import { useState } from 'react'
import Datepicker from "tailwind-datepicker-react"
import { useRouter } from 'next/router'
import Link from 'next/link'

const options = {
	title: "Incident date",
	autoHide: true,
	todayBtn: true,
	clearBtn: true,
	clearBtnText: "Clear",
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	theme: {
		background: "bg-[#fff]",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "text-1 font-light",
		disabledText: "",
		input: "",
		inputIcon: "",
		selected: "",
	},
	icons: {
		prev: () => <span>{'<'}</span>,
		next: () => <span>{'>'}</span>,
	},
	datepickerClassNames: "h-36",
	defaultDate: new Date("2022-01-01"),
	language: "en",
	disabledDates: [],
	weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
	inputNameProp: "date",
	inputIdProp: "date",
	inputPlaceholderProp: "Select Date",
	inputDateFormatProp: {
		day: "numeric",
		month: "long",
		year: "numeric"
	}
}

export default function Example() {
  // const router = useRouter();
  const [show, setShow] = useState(false)
	const handleChange = (selectedDate) => {
		console.log(selectedDate)
	}
	const handleClose = (state) => {
		setShow(state)
	}

  // const LoadNext = () => {
  //   router.push('/contact2')
  // }

  return (
    <div className="flex flex-raw w-full items-center justify-around bg-white lg:px-36 xl:gap-4 xl:px-40">
        <div className="flex items-center justify-center">
            <img
             className='hidden lg:block'
             src="./form_img.png" alt="" />
        </div>

        <div className="border border-2 m-2 border-blue-600 rounded-2xl solid border border-xl solid bg-white px-2 w-full py-8 sm:py-12   lg:max-h-screen">
      <div className="mx-auto max-w-2xl text-center flex flex-raw gap-6 justify-center lg:gap-12">
        <div className="border solid rounded-full bg-green-400 px-4 py-4 flex items-center justify-center w-12 h-12 font-bold text-8  text-white">1</div>
        <div className="border-2 solid border-blue-600 rounded-full bg-white px-4 py-4 flex items-center justify-center w-12 h-12 font-bold text-8 text-blue-600">2</div>
        <div className="border-2 solid border-blue-600 rounded-full bg-white px-4 py-4 flex items-center justify-center w-12 h-12 font-bold text-8 text-blue-600">3</div>
      </div>

      <form action="#" method="POST" className="mx-auto  mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label className="w-full max-w-xs">
                  <div className="label">
                      <span className="label-text">Where you injured ?*</span>
                  </div>
                  <select className=" block w-full select select-bordered">
                      <option disabled selected>Pick one</option>
                      <option>Yes</option>
                      <option>No</option>
                
                  </select>
              </label>
          </div>

          <div>
            <label className="w-full max-w-xs">
                  <div className="label">
                      <span className="label-text">Incident Date*</span>
                  </div>
                  <input type="text" placeholder="Incident date" className="input input-bordered w-full max-w-xs" />
              </label>
          </div>
         
          
            <div>
            <label className="w-full max-w-xs">
                  <div className="label">
                      <span className="label-text">Was It your fault ?*</span>
                  </div>
                  <select className=" block w-full select select-bordered">
                      <option disabled selected>Pick one</option>
                      <option>Yes</option>
                      <option>No</option>
                
                  </select>
              </label>
          </div>
          <div>
            <label className="w-full max-w-xs">
                  <div className="label">
                      <span className="label-text">Received Medical Treatment *</span>
                  </div>
                  <select className=" block w-full select select-bordered">
                      <option disabled selected>Pick one</option>
                      <option>Yes</option>
                      <option>No</option>
                
                  </select>
              </label>
          </div>
          <div>
            <label className="w-full max-w-xs">
                  <div className="label">
                      <span className="label-text">Do you have attorney ? *</span>
                  </div>
                  <select className=" block w-full select select-bordered">
                      <option disabled selected>Pick one</option>
                      <option>Yes</option>
                      <option>No</option>
                
                  </select>
              </label>
          </div>
            <div className="sm:col-span-2">
            <label htmlFor="message" className="label-text ">
            Case Notes *
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        

          
      
          
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/contact2"
            className="block w-[30%] rounded-2xl bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
          Next
          </Link>
        </div>
      </form>
    </div>
    </div>
  )
}
