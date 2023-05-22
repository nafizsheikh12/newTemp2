import React from 'react'

const Step2 = (props:any) => {
  const {onNext} = props
  return (
    <div>
        <div>
             <form>
                  <div>
                         <div className="">
                                    <p className="font-bold mb-2">Highest Level of Education Completed</p>
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
                    <div className='flex gap-5 justify-between mt-5'>
                          <div className='w-[50%]'>
                                <label className='font-jakarta font-semibold'>Field of Study</label>
                                <input type='text' className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' placeholder='Enter field of study'/>
                          </div>
                          <div className='w-[50%]'>
                               <label className='font-jakarta font-semibold'>Degrees or Certifications</label>
                               <input className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' type='text' placeholder='Enter Degrees or Certification'/>
                          </div>
                    </div>
                    <div className='flex gap-5 justify-between mt-5'>
                          <div className='w-[50%]'>
                                <label className='font-jakarta font-semibold'>Field of Study</label>
                                <input type='text' className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' placeholder='Enter field of study'/>
                          </div>
                          <div className='w-[50%]'>
                               <label className='font-jakarta font-semibold'>Degrees or Certifications</label>
                               <input className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' type='text' placeholder='Enter Degrees or Certification'/>
                          </div>
                    </div>
                    <div className='flex gap-5 justify-between mt-5'>
                          <div className='w-[50%]'>
                                <label className='font-jakarta font-semibold'>Current Job Title</label>
                                <input type='text' className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' placeholder='Enter current job title'/>
                          </div>
                          <div className='w-[50%]'>
                               <label className='font-jakarta font-semibold'>Industry or Sector</label>
                               <input className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' type='text' placeholder='Enter industry or sector'/>
                          </div>
                    </div>
                    <div className='flex gap-5 justify-between mt-5'>
                          <div className='w-[50%]'>
                                <label className='font-jakarta font-semibold'>Years of Experience</label>
                                <input type='text' className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' placeholder='Enter company name'/>
                          </div>
                          <div className='w-[50%]'>
                               <label className='font-jakarta font-semibold'>Company Name</label>
                               <input className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' type='text' placeholder='Enter Degrees or Certification'/>
                          </div>
                    </div>
                    <div className='flex gap-5 justify-between mt-5'>
                          <div className='w-[50%]'>
                                <label className='font-jakarta font-semibold'>Learning Interests</label>
                                <input type='text' className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' placeholder='Enter learning experience'/>
                          </div>
                          <div className='w-[50%]'>
                               <label className='font-jakarta font-semibold'>Career Goals</label>
                               <input className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' type='text' placeholder='Enter career goals'/>
                          </div>
                    </div>
                    <div className='mb-5 mt-5'>
                          <label className='font-jakarta font-semibold'>Preferred Course Topics</label>
                          <input className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' type='text' placeholder='Enter preferred course topics'/>
                    </div>
                    <div className='w-full'>
                          <button onClick={onNext} className='bg-[#6132fd] font-jakarta font-medium w-full capitalize text-white px-5 py-3 rounded-md'>Next Step</button>
                    </div>
             </form>
        </div>
    </div>
  )
}

export default Step2