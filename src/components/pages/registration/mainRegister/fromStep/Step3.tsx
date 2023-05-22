import React from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const Step3 = (props:any) => {
  const {onNext} = props;
  return (
    <div>
        <div>
             <form>
                    <div className='mb-5 mt-5'>
                          <label className='font-jakarta font-semibold'>Preferred Language</label>
                          <input className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' type='text' placeholder='Enter preferred language'/>
                    </div>
                    <div className='mb-5 mt-5'>
                          <label className='font-jakarta font-semibold'>Phone Number</label>
                          <input className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' type='text' placeholder='Enter phone number'/>
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
                                <Checkbox id="remember" className="border-[#6132fd] bg-white  focus:outline-none"/>
                                <Label htmlFor="remember" className="ml-2">
                                    I agree with all the terms and conditions of the site.
                                </Label>
                              </div>
                    </div>
                    <div className='w-full'>
                          <button onClick={onNext} className='bg-[#6132fd] font-jakarta font-medium w-full capitalize text-white px-5 py-3 rounded-md'>Submit</button>
                    </div>          
             </form>
        </div>
    </div>
  )
}

export default Step3