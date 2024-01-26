
import { MdEmail } from "react-icons/md";
import ServiceCard from "./ServiceCard";


const data = [
    {
        icon: MdEmail ,
        title: 'workers Compensation',
        description: 'injury at work'
    },
    {
        icon: MdEmail ,
        title: 'Personal Injury',
        description: 'Car, Truck, Motorcycle Accidents'
    },
    {
        icon: MdEmail ,
        title: 'DUI/DWI and',
        description: 'Drunk Driving'
    },
    {
        icon: MdEmail ,
        title: 'Bankruptcy',
        description: 'General'
    },
    {
        icon: MdEmail ,
        title: 'Accidents (Auto)',
        description: 'I was injured'
    },
    {
        icon: MdEmail ,
        title: 'SSDI',
        description: 'Social Security Disability Insurance'
    }
]






export default function Services() {
    return (
      <div className="bg-[#f1f1f1] relative isolate overflow-hidden  py-24 flex justify-center sm:py-12">
    
       
        <div className="mx-auto max-w-7xl px-6 lg:px-4 ">
          <div className="mx-auto max-w-2xl">
          <h2 className="text-center font-bold leading-7 text-[#2d5391] text-[1rem] pb-4">Experts in Legal Advice <br /><br /><span className="font-light pt-4 text-[1.5rem]">Learn More About Our</span><br /><span className="text-[1.6rem]">Services</span></h2>


            <div className="mt-2 gap-4 items-center grid grid-cols-1 md:grid-cols-3">
                {data?.map((menu) => (
                    <ServiceCard menu={menu} />
                ))}
            </div>
          </div>
          
        </div>
      </div>
    )
  }
  