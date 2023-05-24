import React from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { InputErrorMessage } from "../../../../utils/error/index";
import { Dispatch, SetStateAction } from "react";
import {InitialFormData} from "../MainRegister";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../../../../../feature/api/authApi";
import { useEffect } from "react";
import ButtonLoader from "../../../../utils/loaders/ButtonLoader";

export type StepProps = {
      setFormData: Dispatch<SetStateAction<InitialFormData>>;
      formData: InitialFormData;
};

type RegistrationFirstStepFromData = {
     phone:string;
     agree:boolean;
    }


const Step3 = (props:any) => {
    const {onNext, setFormData, formData,step,setStep} = props

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<RegistrationFirstStepFromData>({
      defaultValues: {
        phone: formData.phone,
        agree: formData.agree
      },
      // resolver: zodResolver(registrationFirstStepFromSchema)
    });
    const [registration, { error, data, isLoading, isSuccess, isError }] =
    useRegisterMutation();


    const submitThirdStep = (data: RegistrationFirstStepFromData) => {
      const userData = { ...formData, ...data };
      delete userData.agree;
      setFormData((prev:any) => ({ ...prev, ...data }));
      registration(userData);
    };

    useEffect(() => {
      if (isError) {
         toast.error((error as any).data.message);
        // toast.error((error as any).data.error[Object.keys((error as any).data.error)[0]]);
  
        console.log("error", error);
      } else if (isSuccess) {
        toast.success(
          "Registration successful. You will get next instructions via a email soon."
        );
        setStep(step + 1)
       }
    }, [isError, isSuccess]);
  return (
    <div>
        <div>
             <form  onSubmit={handleSubmit(submitThirdStep)}>
                    <div className='mb-5 mt-5'>
                          <label className='font-jakarta font-semibold'>Preferred Language</label>
                          <input className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' type='text' placeholder='Enter preferred language'/>
                    </div>
                    <div className='mb-5 mt-5'>
                          <label className='font-jakarta font-semibold'>Phone Number</label>
                          <input   {...register("phone", { required: true })} className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' type='text' placeholder='Enter phone number'/>
                          {errors.phone && <InputErrorMessage message={"Enter phone number"} />}
                    </div>
                    <div>
                                 <div className="">
                                    <p className="font-bold mb-2">Email Subscription (newsletters, course updates, promotional offers etc.)</p>
                                  </div>
                                  <div className="pt-1 flex items-center gap-12">
                                      <div>
                                        <input
                                          type="radio"
                                          id="yes"
                                          value="Yes"
                                        />
                                          <label htmlFor="yes">Yes</label>
                                      </div>
                                      <div className="xl:mx-2 lg:mx-2 md:mx-2 sm:mx-2 xsm:mx-2">
                                         <input
                                           type="radio"
                                           id="no"
                                           value="no"
                                         />{" "}
                                         <label htmlFor="no">No</label>
                                       </div>
                                  </div>   
                    </div>
                    <div className="flex items-center py-4 w-full justify-between mb-3">
                              <div className="gap-2">
                                <Checkbox   {...register("agree", { required: true })} id="remember" className="border-[#6132fd] bg-white  focus:outline-none"/>
                                <Label htmlFor="remember" className="ml-2">
                                    I agree with all the terms and conditions of the site.
                                </Label>
                                {errors.agree && <InputErrorMessage message={"Are u agree?"} />}
                              </div>
                    </div>
                    <div className='w-full'>
                          <button  type='submit' disabled={isLoading} className='flex gap-2 justify-center bg-[#6132fd] font-jakarta font-medium w-full capitalize text-white px-5 py-3 rounded-md'>
                              {
                                    isLoading ? <ButtonLoader /> : "Submit"                            
                              }
                          </button>
                    </div>          
             </form>
        </div>
    </div>
  )
}

export default Step3