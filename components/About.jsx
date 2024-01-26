import { MdEmail } from "react-icons/md";

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: MdEmail,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: MdEmail,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: MdEmail,
  },
]

export default function About() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none sm:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-left font-light  leading-7 text-[#2d5391] text-[1.2rem] pb-4">I was Injured in <span className="text-[1.6rem]">an Auto Accident</span></h2>
              
              <p className="mt-6 text-lg leading-8 text-[#414042]">
              f you have been injured in an automobile accident, contact us immediately to get the compensation you deserve.<br></br>
              <br></br>
                If you or a loved one have been injured in an accident, contacting an attorney immediately can help you avoid financial losses. Speaking to an insurance company before consulting a lawyer, could cost you the compensation you deserve for your pain and suffering.
              </p>
              
            </div>
          </div>
          <img
            src="./auto-accident.jpg"
            alt="About image"
            className="w-[30rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[25rem] md:-ml-4 lg:-ml-0"
            width={500}
            
          />
        </div>
      </div>
    </div>
  )
}
