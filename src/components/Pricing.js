import React,{useState} from 'react'
import {tick} from '../constants'

const Pricing = () => {

    const [price, setPrice] = useState(true);
    const [focus, setFocus] = useState(1);
    const styless={
      backgroundColor: 'rgb(255, 255, 255)',
    transform: 'translateY(-50%)',
    borderRadius:'6px',
    width:'8rem',
    height:'35px'
    }
   


  return (
    <div className="w-[85%]  mx-auto     ">
      <div>
        <div className="flex  justify-center">
          <div className="features_text1 font-bold flex justify-center bg-gray-100 rounded-full p-2 w-52 text-center">
          Pricing and plans 💰
          </div>
        </div>

        <p className="features_text2 flex justify-center text-center leading-tight">
        Find the best plan for  <br className="mobile_br_1" />your needs
          
        </p>

        <div className="mt-5" >
        <div className="mt-[200px] flex items-center justify-center">
          <div className="font-bold items-center  p-2 h-10 rounded-xl text-center -mt-20 bg-gray-300" >
            <button
              className="m-3"
              onClick={() => {
                setPrice(true);
                setFocus(1)
              }}
              style={{...styless,backgroundColor:focus===1&&'white'}}
              

            >
              Monthly
            </button>
            <button
              className="m-3 "
              onClick={() => {
                setPrice(false);
                setFocus(2)
              }}
              style={{...styless,backgroundColor:focus===2&&'white'}}

 
            >
              Annually
            </button>
          </div>
        </div>
      </div>

        


        <div className='pricing_main'>
            {/* 111111 */}
            <div className=" pricing_parts">
            <div className=" m-3 flex-col ">
          <div className="  p-8  bg-white rounded-xl h-[686px]">
            <div className="font-bold items-center bg-gray-200 rounded-full p-2 w-[90px] text-center">
              Free
            </div>
            <p className="mt-4 font-semibold text-gray-500">
              So you can see how incredible our tool is.
            </p>
            <div className="flex">
              <p style={{ fontSize: "56px" }} className="mt-4 font-extrabold">
                $0
              </p>
              <p className="mt-14 text-gray-500 font-semibold">/mo</p>
            </div>

            <p className="text-gray-800 font-semibold">Free for ever</p>

            <div className="flex justify-center  py-10">
              <button className="bg-slate-800 w-[345px]  text-white font-extrabold py-4 px-6 rounded-xl transition-transform   hover:shadow-md hover:scale-110">
                Get Started
              </button>
            </div>
            <p style={{ fontSize: "12px" }} className="text-center -mt-8 font-semibold">
              No credit card needed
            </p>
            <p style={{ fontSize: "16px" }} className="mt-8 font-semibold">
              What's included:
            </p>
            <div className="mx-5 font-semibold">
              <div className="mt-4 flex ">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A cool feature</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A basic feature</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A top feature with limitations</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">An incredible feature so useful</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A top feature</p>
              </div>
            </div>
          </div>
        </div>



            </div>
            <div className="pricing_parts">
                {/* 22222222222222 */}
            <div className=" m-3 flex-col ">
          <div className="  p-8  bg-white rounded-xl h-[686px]">
            <div className="font-bold items-center bg-orange-200 rounded-full p-2 w-[100px] text-center">
              Starter
            </div>
            <p className="mt-4 text-gray-500 font-semibold">
              So you can see how incredible our tool is.
            </p>

            {price===true?(<><div className="flex">
              <p style={{ fontSize: "56px" }} className="mt-4 font-extrabold">
                $19
              </p>
              <p className="mt-14 text-gray-500 font-semibold">/mo</p>
            </div>
            <p className="text-gray-800 font-semibold">Billed monthly</p></> ):(<><div className="flex">
            <p style={{ fontSize: "56px" }} className="mt-4 font-extrabold">
              $15
            </p>
            <p className="mt-14 text-gray-500 font-semibold">/mo</p>
          </div>
          <p className="text-gray-800 font-semibold">Billed $180 yearly</p></>)}
            

              




            <div className="flex justify-center  py-10">
              <button className="bg-slate-800 w-[345px] text-white font-bold py-4 px-6 rounded-xl transition-transform   hover:shadow-md hover:scale-110">
                Get Started
              </button>
            </div>
            <p style={{ fontSize: "12px" }} className="text-center -mt-8 font-semibold">
              7 days free trial no credit card needed
            </p>
            <p style={{ fontSize: "16px" }} className="mt-8 font-semibold">
              All Free features, plus:
            </p>
            <div className="mx-5 font-semibold">
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A cool feature</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A basic feature</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A top feature with limitations</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">An incredible feature so useful</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A top feature</p>
              </div>
            </div>
          </div>
        </div>


            </div>
            <div className=" pricing_parts">
{/* 3333333333333333333333 */}

            <div className=" m-3 flex-col ">
          <div className="  p-8  bg-white rounded-xl">
            <div className="font-bold items-center bg-rose-200 rounded-full p-2 w-[80px] text-center">
              Pro
            </div>
            <p className="mt-4 text-gray-500 font-semibold">
              So you can see how incredible our tool is.
            </p>




            {price===true?(<><div className="flex">
              <p style={{ fontSize: "56px" }} className="mt-4 font-extrabold">
                $49
              </p>
              <p className="mt-14 text-gray-500 font-semibold">/mo</p>
            </div>
            <p className="text-gray-800 font-semibold">Billed monthly</p></> ):(<><div className="flex">
            <p style={{ fontSize: "56px" }} className="mt-4 font-extrabold">
              $45
            </p>
            <p className="mt-14 text-gray-500 font-semibold">/mo</p>
          </div>
          <p className="text-gray-800 font-semibold">Billed $540 yearly</p></>)}





            <div className="flex justify-center  py-10">
              <button className="bg-slate-800 w-[345px] text-white font-bold py-4 px-6 rounded-xl transition-transform   hover:shadow-md hover:scale-110">
                Get Started
              </button>
            </div>
            <p style={{ fontSize: "12px" }} className="text-center -mt-8 font-semibold">
              7 days free trial no credit card needed
            </p>
            <p style={{ fontSize: "16px" }} className="mt-8 font-semibold">
              All Starter features, plus:
            </p>
            <div className="mx-5 font-semibold">
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A cool feature</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A basic feature</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A top feature with limitations</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">An incredible feature so useful</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">A premium feature</p>
              </div>
              <div className="mt-4 flex">
                <img alt="aa" className="w-6 h-6" src={tick} />
                <p className="mx-3">You need this feature</p>
              </div>
            </div>
          </div>
        </div>
            </div>
        </div>
      </div>
      </div>
  )
}

export default Pricing