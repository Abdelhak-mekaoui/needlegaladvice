
export default function Hero() {
    return (
      <div className="relative items-center isolate overflow-hidden  py-24 flex flex-col md:flex-row justify-around sm:py-12">
        <img
          src="./hero.jpg"
          alt="bg image"
          className="absolute inset-0 -z-10 w-full h-full object-cover object-right md:object-center"
        />


        <h1 className="text-white text-[2.2rem] font-extrabold">Accidents Auto</h1>

        <div>
            <div className="card w-96 bg-black shadow-xl">
            <div className="card-body items-center text-center flex gap-4">
                <h2 className="card-title text-white">Need Affordable Legal services?!</h2>
                <p className="text-white">Enter Zip Code</p>
                
                <div className="card-actions flex justify-center">
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-primary rounded-3xl w-36 ">Submit</button>
                </div>
            </div>
            </div>

        </div>
      </div>
    )
  }
  