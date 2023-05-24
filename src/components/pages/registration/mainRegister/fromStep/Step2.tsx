import React from 'react';
import { useForm } from "react-hook-form";
import { InputErrorMessage } from "../../../../utils/error/index";
import { Dispatch, SetStateAction } from "react";
import {InitialFormData} from "../MainRegister";

export type StepProps = {
      setFormData: Dispatch<SetStateAction<InitialFormData>>;
      formData: InitialFormData;
};

type RegistrationFirstStepFromData = {
      currentJob: string;
      knowFrom: string;
      highestStudy: string;
    }

const Step2 = (props:any) => {
      const {onNext, setFormData, formData} = props

      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<RegistrationFirstStepFromData>({
        defaultValues: {
            currentJob: formData.currentJob,
            knowFrom: formData.knowFrom,
            highestStudy: formData.highestStudy,
        },
        // resolver: zodResolver(registrationFirstStepFromSchema)
      });
  
      const submitSecondStep = (data: RegistrationFirstStepFromData) => {
        setFormData((prev:any) => ({ ...prev, ...data }));
        onNext();
      };
  return (
    <div>
        <div>
             <form onSubmit={handleSubmit(submitSecondStep)}>
                   <div className='mb-5 mt-5'>
                         <label className='font-jakarta font-semibold'>What Is Your Current Job?</label>
                         <input  {...register("currentJob", { required: true })} className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' type='text' placeholder='What Is Your Current Job'/>
                         {errors.currentJob && <InputErrorMessage message={"What Is Your Current Job?"} />}
                   </div>
                  <div>
                                 <div className="">
                                    <p className="font-bold mb-2">Highest Level of Education</p>
                                  </div>
                                  <select  {...register("highestStudy", { required: true })} className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4'>
                                  <option value={""}>Highest level of education</option>
                                  {
                                    ["Some high school",
                                    "High school diploma or GED",
                                    "Bachelor's degree ",
                                    "Some graduate coursework",
                                    "Graduate degree"
                                    ].map((val:any,id:any) => (
                                          <option key={id}>
                                                {val}
                                          </option>
                                    ))
                                  }
                                </select>
                                {errors.highestStudy && <InputErrorMessage message={"Select Highest level of education"} />}
                    </div>
                    <div className='mb-5 mt-5'>
                          <label className='font-jakarta font-semibold'>how Did You Hear About Us?</label>
                           <select  {...register("knowFrom", { required: true })} className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4'>
                                  <option value={""}>How Did You Hear About Us</option>
                                  {
                                    ["Twitter","Facebook","Linkedin","Others"].map((val:any,id:any) => (
                                          <option key={id}>
                                                {val}
                                          </option>
                                    ))
                                  }
                           </select>
                    </div>
                    <div className='w-full'>
                          <button type='submit' className='bg-[#6132fd] font-jakarta font-medium w-full capitalize text-white px-5 py-3 rounded-md'>Next Step</button>
                    </div>
             </form>
        </div>
    </div>
  )
}

export default Step2