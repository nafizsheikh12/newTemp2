import React,{useState} from 'react';
import avatar from "../../../../assets/ui/avatar.jpg";
import Image from "next/image";

const Academy = () => {
     const [borderClass, setborderClass] = useState("");
     const [para, setpara] = useState("“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta massa, eget natoque tincidunt quis. Suspendisse vitae vestibulum scelerisque egestas. Volutpat, adipiscing a elit platea amet et.”     ");
     const [num, setnum] = useState(1)

     
     const handleClick = (id:any) => {
          if(id == 1){
               setborderClass("mr-auto")
               setnum(1)
               setpara("hello ipsum dolor sit amet, consectetur adipiscing elit. Porta massa, eget natoque tincidunt quis. Suspendisse vitae vestibulum scelerisque egestas. Volutpat, adipiscing a elit platea amet et.”")
          }
          if(id == 2){
               setborderClass("m-auto")
               setnum(2)
               setpara("“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta massa, eget natoque tincidunt quis. Suspendisse vitae vestibulum scelerisque egestas. Volutpat, adipiscing a elit platea amet et.”")
          }
          if(id == 3){
               setborderClass("ml-auto")
               setnum(3)
               setpara("“Lorem ipsum dolorsdfsdf sit amet, consectetur adipiscing elit. Porta massa, eget natoque tincidunt quis. Suspendisse vitae vestibulum scelerisque egestas. Volutpat, adipiscing a elit platea amet et.”")
          }
          console.log(id)
     }
  return (
    <div className='pb-12'>
         <div className='container mx-auto'>
              <div className='text-center'>
                   <h1 className='font-jakarta font-bold text-[36px] capitalize py-14'>Why student love <span className='text text-[#3434ff]'>academy</span></h1>
              </div>
              <div>
                   <div className='pb-16'>
                        <p className='text-[#69697B] leading-[1.583em] text-[20px] text-center'>{para}</p>

                   </div>
                   <div className=''>
                      <div className="w-full transition-all bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                 <div className={`bg-[#6132fd] h-1.5 rounded-full dark:bg-blue-500 ${borderClass}`} style={{width: "33%"}}></div>
                      </div>
                       <div className='grid grid-cols-3 pt-8'>
                            <div className='flex items-center justify-center cursor-pointer  gap-3' onClick={() => handleClick(1)}>
                                  <div className='w-[67px] h-[67px]'>
                                      <Image src={avatar} className="rounded-full w-[80px]" />
                                  </div>
                                  <div>
                                       <h2 className={`font-jakarta font-semibold text-lg ${num === 1? "text-[#6132fd]" : "" }`}>Cristiano Robin</h2>
                                      <p className='font-jakarta text-[#69697B]'>Sec maker</p>
                                  </div>
                            </div>
                            <div className='flex items-center justify-center cursor-pointer  gap-3' onClick={() => handleClick(2)}>
                                  <div className='w-[67px] h-[67px]'>
                                      <Image src={avatar} className="rounded-full w-[80px]" />
                                  </div>
                                  <div>
                                       <h2 className={`font-jakarta font-semibold text-lg ${num === 2? "text-[#6132fd]" : "" }`}>Cristiano Robin</h2>
                                      <p className='font-jakarta text-[#69697B]'>Sec maker</p>
                                  </div>
                            </div>
                            <div className='flex items-center justify-center cursor-pointer  gap-3' onClick={() => handleClick(3)}>
                                  <div className='w-[67px] h-[67px]'>
                                      <Image src={avatar} className="rounded-full w-[80px]" />
                                  </div>
                                  <div>
                                       <h2  className={`font-jakarta font-semibold text-lg ${num === 3? "text-[#6132fd]" : "" }`}>Cristiano Robin</h2>
                                      <p className='font-jakarta text-[#69697B]'>Sec maker</p>
                                  </div>
                            </div>
                       </div>
                   </div>
                   <div className='flex justify-center py-6 pt-16'>
                              <button 
                                 className="bg-[#3434ff] text-[#ffffff] border-2 py-4 uppercase px-8 rounded-lg font-semibold mt-5 text-[16px]"
                               >
                                         View courses
                               </button>
                   </div>
              </div>
         </div>
    </div>
  )
}

export default Academy