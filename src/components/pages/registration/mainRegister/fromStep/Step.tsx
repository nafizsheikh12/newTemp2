import React from 'react'

const Step = (props:any) => {
    const {onNext} = props
  return (
    <div>
        <div>
            <form>
                 <div>
                    <div className=" font-bold  mt-1 ">
                           <div className="">
                             <p className="font-bold"> Title:</p>
                           </div>
                           <div className="pt-1 flex items-center justify-between">
                               <div>
                                 <input
                                   type="radio"
                                   id="Mr"
                                   value="Mr"
                                 />
                                   <label htmlFor="Mr">Mr</label>
                               </div>
                               <div className="xl:mx-2 lg:mx-2 md:mx-2 sm:mx-2 xsm:mx-2">
                                 <input
                                   type="radio"
                                   id="Mrs"
                                   value="Mrs"
                                 />{" "}
                                 <label htmlFor="Mrs">Mrs</label>
                               </div>
                                <div className="xl:mx-2 lg:mx-2 md:mx-2 sm:mx-2 xsm:mx-2">
                                  <input
                                    type="radio"
                                    id="Ms"
                                    value="Ms"
                                  />{" "}
                                  <label htmlFor="Ms">Ms</label>
                                </div>
                                 <div>
                                   <input
                                     type="radio"
                                     id="Dr"
                                     value="Dr"
                                   />{" "}
                                   <label htmlFor="Dr">Dr</label>
                                 </div>
                           </div>
                   </div>
               </div>
               <div className='py-4 pt-8 mb-5'> 
                     <label className='font-jakarta font-semibold'>Full Name</label>
                     <div className='flex gap-5 justify-between pt-2'>
                          <div className='w-[50%]'>
                               <input type='text' placeholder='Enter first name' className='w-full px-3 border-[#CED4DA] rounded-md py-4'/>
                          </div>
                          <div className='w-[50%]'>
                               <input type='text' placeholder='Enter last name' className='w-full px-3 border-[#CED4DA] rounded-md py-4'/>
                          </div>
                     </div>
               </div>
               <div className='mb-5'> 
                     <div className='mb-5 pb-3'>
                          <label className='font-jakarta font-semibold '>Email</label>
                          <input type='email' className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' placeholder='Enter email'/>
                     </div>
                     <div>
                          <label className='font-jakarta font-semibold'>Password</label>
                          <input className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' type='password' placeholder='Enter password'/>
                     </div>
               </div>
               <div className='flex flex-col'>
                    <label  className='font-jakarta font-semibold'>Birth Date</label>
                    <input className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' type='date'/>
               </div>
               <div className='flex gap-5 justify-between mt-5'>
                   <div className='w-[50%]'>
                         <label className='font-jakarta font-semibold'>Contry</label>
                         <input type='text' className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' placeholder='Enter Country'/>
                   </div>
                   <div className='w-[50%]'>
                        <label className='font-jakarta font-semibold'>State</label>
                        <input className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' type='text' placeholder='Enter State'/>
                   </div>
                </div>
                <div className='my-5'>
                    <label className='font-jakarta font-semibold'>User Type</label>
                    <select className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4'>
                         <option>Instructor-led</option>
                    </select>
                </div>

                <div className='w-full'>
                          <button onClick={onNext} className='bg-[#6132fd] font-jakarta font-medium w-full capitalize text-white px-5 py-3 rounded-md'>Next Step</button>
                </div>   
          </form> 
      </div>
   </div> 
  )
}

export default Step