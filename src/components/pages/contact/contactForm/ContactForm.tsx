import React,{useEffect} from 'react';
import Image from "next/image"
import msgicon from "../../../../assets/ui/msgIcon.svg";
import {
     useSendContactMutation,
     useGetAllActiveCourseQuery,
   } from "../../../../feature/api/dashboardApi";
import { toast } from "react-toastify";
import { Spinner } from "flowbite-react";
import { useForm, Controller } from "react-hook-form";
import { InputErrorMessage } from "../../../utils/error/index";


const ContactForm = () => {
const {
     register,
     handleSubmit,
     setValue,
     control,
     reset,
     formState: { errors },
   } = useForm({
     defaultValues: {
       firstName: "",
       email: "",
       phone: "",
       message: "",
       subject:""
     },
   });
   const [sendContact, { error, data, isLoading, isSuccess, isError }] =
     useSendContactMutation();  
     
     
 const formHandler = (data: any) => {
      sendContact(data);
    };
    useEffect(() => {
      if (isError) {
        toast.error("Email send Errro");
        //   console.log(error);
      } else if (isSuccess) {
        toast.success("Email Send Successfully!");
        reset();
      }
    }, [isError, isSuccess]);   
  return (
    <div>
         <div className='container px-4 sm:px-6 mx-auto'>
              <div data-aos-delay="5000" data-aos="fade-down" className='shadow-2xl p-16 rounded-xl mt-16 lg:mx-52 border-[#D6DDDA] border-t-[0.5px]'>
                     <div className='flex flex-col lg:flex-row justify-center lg:justify-between gap-4 border-b-[1px] border-[#D6DDDA] pb-12'>
                            <div className='text-center lg:text-left order-1 '>
                                 <h1 className='font-jakarta text-[37px] font-bold '>Contact Us</h1>
                                 <p className='font-jakarta text-[#69697b]'>
                                     If you have any questions about Academy, please fill the form below. We will get back to you within 24 hours.
                                 </p>
                            </div>
                            <div className='lg:order-2 shadow-xl m-auto flex justify-center items-center w-[90px] h-[78px] rounded-full'>
                                  <Image src={msgicon}/>
                            </div>
                     </div>
                     <div className='pt-10'>
                          <form onSubmit={handleSubmit(formHandler)}>
                                    <div className='mb-5 md:mb-3 flex-col md:flex-row flex gap-2 md:gap-8'> 
                                            <div className='mb-2 w-full pb-3'>
                                                 <label className='font-jakarta font-semibold '>Full Name</label>
                                                 <input   {...register("firstName", { required: true })} type='text' className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' placeholder="What's your name?"/>
                                            </div>
                                            <div className='w-full'>
                                                 <label className='font-jakarta font-semibold'>Email</label>
                                                 <input   {...register("email", { required: true })} className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' type='email' placeholder='example@youremail.com'/>
                                            </div>
                                    </div>
                                    <div className='flex-col md:flex-row mb-5 flex md:gap-8'> 
                                            <div className='mb-5 w-full pb-3'>
                                                 <label className='font-jakarta font-semibold '>Phone Number</label>
                                                 <input   {...register("phone", { required: true })} type='number' className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' placeholder='+1(484) 34234 34223'/>
                                            </div>
                                            <div className='w-full'>
                                                 <label className='font-jakarta font-semibold'>Subject</label>
                                                 <input   {...register("subject", { required: true })} className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' type='password' placeholder='Enter password'/>
                                            </div>
                                    </div>
                                    <div>
                                           <div className='w-full'>
                                                 <label className='font-jakarta font-semibold'>Message</label>
                                                 <textarea   {...register("message", { required: true })} className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4'  placeholder='What can we help you with?Feel free to be as descriptive as possible.'/>
                                            </div>
                                    </div>
                                    <div className='pt-8'>
                                    <button disabled={isLoading} className="bg-[#3434ff] px-12 py-5 rounded uppercase text-white text-[18px] font-m font-jakarta cursor-pointer z-10 hover:-translate-y-3	 hover:!bg-[#20228b] transition-all">
                                      {isLoading ? (
                                          <div>
                                            <Spinner />
                                          </div>
                                        ) : (
                                          "Send Message"
                                        )}
                                    </button>
                                    </div>
                          </form>
                     </div>
              </div>
         </div>
    </div>
  )
}

export default ContactForm