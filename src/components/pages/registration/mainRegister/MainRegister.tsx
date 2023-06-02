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


export type InitialFormData = {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  state: string;
  country: string;
  currentJob: string;
  studentType: string;
  highestStudy: string;
  knowFrom: string;
  agree?: boolean;
};

const initialFormData = {
  title: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  state: "",
  country: "",
  currentJob: "",
  studentType: "",
  highestStudy: "",
  knowFrom: "",
  agree: false,
};


const CourseCreationMain = () => {
  const [formData, setFormData] = useState<InitialFormData>(initialFormData);
  
  // console.log("form data", formData);
  const [step,setStep] = useState(1);

  const onNext = () => {
      setStep(step + 1)
  }

  const onPrev = () => {
    setStep(step - 1);
  }

  
  return (
    <div className='bg-white  lg:p-5 md:p-5 rounded-xl'>
         <div>
             <h1 className='capitalize text-[#6132fd] font-jakarta font-bold text-center text-3xl pb-2 pt-4'>create new account</h1>
         </div>
         <div className='course_creation sm:p-3 xsm:p-[2px] pt-8 md:bg-[red] ' style={{background:"#fff"}}>
            { step === 5 ? <Success />: (
                 <div className="mx-2 md:mx-4 p-4">
                   <div className="flex items-center">
                       <div className={`flex items-center ${step === 2 && "text-teal-600" } relative`}>
                           <div className={`rounded-full flex items-center justify-center transition duration-500 ease-in-out h-8 w-8 sm:h-12 sm:w-12 py-3 border-2 ${(step === 2 || step === 3 || step === 4 || step === 5) && "text-white border-[#6132fd] bg-[#6132fd]"}  ${step === 1 && "border-[#6132fd] bg-[white]"}`}>
                               {(step === 2 || step === 3 || step === 4 || step === 5) ? <FiCheck /> : "1" }
                           </div>
                           <div className={`pl-2 absolute top-0 -ml-10 text-center mt-16 w-28 sm:w-32 text-xs font-jakarta font-semibold text-[#485470] uppercase ${(step === 2 || step === 3  || step === 4 || step === 5) && "!text-[#6132fd]"} ${step === 1 && "!text-[#6132fd]"}`}>Basic Information</div>
                       </div>
                       <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${(step === 2 || step === 3 || step === 4 || step === 5) && "border-[#6132fd]"}`}></div>
                       <div className={`flex items-center ${step === 2 && "text-teal-600" } relative`}>
                          <div  className={`rounded-full flex items-center justify-center transition duration-500 ease-in-out h-8 sm:h-12 ${(step === 3  || step === 4 || step === 5) && "text-white border-[#6132fd] bg-[#6132fd]"} w-8 sm:w-12 py-3 border-2 ${(step === 2) && "border-[#6132fd] bg-[white]"}`} >
                              {(step === 3 || step === 4 || step === 5 || step === 5) ? <FiCheck /> : "2" }
                           </div>
                           <div className={`absolute top-0 -ml-10 text-center mt-16 w-28 sm:w-32 text-xs text-[#485470] font-semibold font-jakarta uppercase ${( step === 2  || step === 3  || step === 4 || step === 5) && "!text-[#6132fd]"}`}>Academic</div>
                       </div>
                       <div className={`flex-auto border-t-2 transition duration-500 ease-in-out  ${(step === 3 || step === 4 || step === 5) && "border-[#6132fd]"}`}></div>
                       <div className=" flex items-center text-gray-500 relative">
                           <div  className={`rounded-full ${(step === 4 || step === 5) && "text-white border-[#6132fd] bg-[#6132fd]"} flex items-center justify-center transition duration-500 ease-in-out sm:h-12 sm:w-12 w-8 h-8 py-3 border-2 ${step === 3 && "border-[#6132fd] bg-[white]"}`}>
                               {step === 4 || step === 5  ? <FiCheck /> : "3" }
                           </div>
                           <div className={`absolute top-0 -ml-10 text-center mt-16 w-28 sm:w-32 text-xs font-semibold font-jakarta uppercase ${(step === 3   || step === 4 || step === 5) && "text-[#6132fd]"}`}>Other Information</div>
                       </div>
                       <div className={`flex-auto border-t-2 transition duration-500 ease-in-out  ${(step === 4 || step === 5) && "border-[#6132fd]"}`}></div>
                       <div className="flex items-center text-gray-500 relative">
                           <div  className={`rounded-full flex items-center justify-center transition duration-500 ease-in-out sm:h-12 w-8 h-8 sm:w-12 py-3 border-2 ${step === 4 && "border-[#6132fd] bg-[white]"}`}>
                               {step === 2 ? <FiCheck /> : "4" }
                           </div>
                           <div className={`absolute top-0 -ml-10 text-center mt-16 sm:w-32 w-28 text-xs font-semibold font-jakarta uppercase ${step === 4 && "text-[#6132fd]"}`}>Done</div>
                       </div>
                   </div>
               </div>
         )}
         <div className='pt-8 px-4 md:px-14 mt-5'>
         {
           step === 1 ? <Step onNext={onNext}  setFormData={setFormData} formData={formData}/> : 
           step === 2 ? <Step2 onNext={onNext}  setFormData={setFormData} formData={formData}/> : 
           step === 3 && <Step3 setStep={setStep} step={step}  onNext={onNext} setFormData={setFormData} formData={formData}/>             
         }
         {
            step === 4 && <Success /> 
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


