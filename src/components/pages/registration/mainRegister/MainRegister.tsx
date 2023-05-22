import React, { useState,useEffect } from 'react';
import {
  useForm,
  SubmitHandler,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import {FiCheck} from "react-icons/fi"
import Link from "next/link"

//component
import Step from './fromStep/Step'
import Step2 from './fromStep/Step2';
import Step3 from './fromStep/Step3';
import Success from "./fromStep/Success"


export type InitialFormDataCourse = {
  title: string,
  shortDescription: string,
  category: string,
  language:string,
  durationInMinutes: number,
  price: number,
  level: string,
  featured?: boolean,
  numberOfLectures: number,
  discountPrice: number,
  isDiscount?: boolean,
  description: string,
  courseImage:string,
  videoUrl:string,
  tags:string[],
  msgtoreviewer:string
}

const InitialFormDataCourse = {
  title: "",
  shortDescription: "",
  category: "",
  language: "",
  durationInMinutes: 0,
  price: 0,
  level: "",
  featured: false,
  numberOfLectures: 0,
  discountPrice: 0,
  isDiscount: false,
  description: "",
  courseImage:"",
  videoUrl:"",
  msgtoreviewer:"",
  tags:[]
}

const CourseCreationMain = () => {
  const [formData, setFormData] = useState<InitialFormDataCourse>(InitialFormDataCourse);
  
  // console.log("form data", formData);
  const [step,setStep] = useState(1);

  const onNext = () => {
      setStep(step + 1)
      console.log(step)
  }

  const onPrev = () => {
    setStep(step - 1);
  }

  
  return (
    <div className='bg-white  lg:p-5 md:p-5 rounded-xl'>
         <div>
             <h1 className='capitalize text-[#6132fd] font-jakarta font-bold text-center text-3xl pb-2'>create new account</h1>
         </div>
         <div className='course_creation sm:p-3 xsm:p-[2px] pt-8 md:bg-[red] ' style={{background:"#fff"}}>
            { step === 5 ? <Success />: (
                 <div className="mx-4 p-4">
                   <div className="flex items-center">
                       <div className={`flex items-center ${step === 2 && "text-teal-600" } relative`}>
                           <div className={`rounded-full flex items-center justify-center transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${(step === 2 || step === 3 || step === 4 || step === 5) && "text-white border-[#6132fd] bg-[#6132fd]"}  ${step === 1 && "border-[#6132fd] bg-[white]"}`}>
                               {(step === 2 || step === 3 || step === 4 || step === 5) ? <FiCheck /> : "1" }
                           </div>
                           <div className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-jakarta font-semibold text-[#485470] uppercase ${(step === 2 || step === 3  || step === 4 || step === 5) && "!text-[#6132fd]"} ${step === 1 && "!text-[#6132fd]"}`}>Basic Information</div>
                       </div>
                       <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${(step === 2 || step === 3 || step === 4 || step === 5) && "border-[#6132fd]"}`}></div>
                       <div className={`flex items-center ${step === 2 && "text-teal-600" } relative`}>
                          <div  className={`rounded-full flex items-center justify-center transition duration-500 ease-in-out h-12 ${(step === 3  || step === 4 || step === 5) && "text-white border-[#6132fd] bg-[#6132fd]"} w-12 py-3 border-2 ${(step === 2) && "border-[#6132fd] bg-[white]"}`} >
                              {(step === 3 || step === 4 || step === 5 || step === 5) ? <FiCheck /> : "2" }
                           </div>
                           <div className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs text-[#485470] font-semibold font-jakarta uppercase ${( step === 2  || step === 3  || step === 4 || step === 5) && "!text-[#6132fd]"}`}>Academic</div>
                       </div>
                       <div className={`flex-auto border-t-2 transition duration-500 ease-in-out  ${(step === 3 || step === 4 || step === 5) && "border-[#6132fd]"}`}></div>
                       <div className=" flex items-center text-gray-500 relative">
                           <div  className={`rounded-full ${(step === 4 || step === 5) && "text-white border-[#6132fd] bg-[#6132fd]"} flex items-center justify-center transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${step === 3 && "border-[#6132fd] bg-[white]"}`}>
                               {step === 4 || step === 5  ? <FiCheck /> : "3" }
                           </div>
                           <div className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-semibold font-jakarta uppercase ${(step === 3   || step === 4 || step === 5) && "text-[#6132fd]"}`}>Other Information</div>
                       </div>
                       <div className={`flex-auto border-t-2 transition duration-500 ease-in-out  ${(step === 4 || step === 5) && "border-[#6132fd]"}`}></div>
                       <div className="flex items-center text-gray-500 relative">
                           <div  className={`rounded-full flex items-center justify-center transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${step === 4 && "border-[#6132fd] bg-[white]"}`}>
                               {step === 2 ? <FiCheck /> : "4" }
                           </div>
                           <div className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-semibold font-jakarta uppercase ${step === 4 && "text-[#6132fd]"}`}>Done</div>
                       </div>
                   </div>
               </div>
         )}
         <div className='pt-8 px-14'>
         {
           step === 1 ? <Step onNext={onNext} /> : 
           step === 2 ? <Step2 onNext={onNext}/> : 
           step === 3 && <Step3  onNext={onNext}/>             
         }
        </div>

            <div className='flex justify-center items-center py-5'>
                 <p className='font-jakarta font-medium'>Already have an account ? <Link href="signin"><span className='cursor-pointer text-[#6132fd]'>Sign In</span></Link></p>
            </div>
         </div>
    </div>
  )
}

export default CourseCreationMain


