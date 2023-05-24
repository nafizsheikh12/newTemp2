import Image from "next/image";
import main from "../../../../assets/ui/companymain.svg";
import logo from "../../../../assets/ui/logo/companylogo.svg";
import company1 from "../../../../assets/ui/company1.svg";
import company2 from "../../../../assets/ui/company2.svg";
import company3 from "../../../../assets/ui/company2.svg";

const Companies = () => {
  return (
    <>
       <div className="mt-[-34px] px-4 sm:px-6">
           <div>
                <div>
                       <div className="relative min-h-[102px] !bg-cover	bg-no-repeat" style={{background:`url(${main.src})`,backgroundPosition: "50% 0%"}}></div>
                         <div className="bg-[#FAFAFA] pb-9">
                          <div className="container mx-auto">
                                 <p  data-aos-delay="5000" data-aos="fade-down" className="text-center  mb-4 text-[#0b0b2c] leading-[1.111em] tracking-[0.1em] font-jakarta font-semibold text-lg">OUR STUDENTS WORK IN COMPANIES SUCH AS</p>
                                 <div className="pt-6 grid  grid-cols-1 justify-center text-center lg:grid-cols-5 gap-7">
                                      <div  data-aos-delay="5000" data-aos="fade-down" className="">
                                           <Image alt="logo" src={logo} />
                                       </div>
                                       <div  data-aos-delay="5000" data-aos="fade-down" className="">
                                           <Image alt="logo" src={company1} />
                                       </div> 
                                       <div  data-aos-delay="5000" data-aos="fade-down" className="">
                                           <Image alt="logo" src={company2} />
                                       </div> 
                                       <div  data-aos-delay="5000" data-aos="fade-down" className="">
                                           <Image alt="logo" src={logo} />
                                       </div>
                                       <div  data-aos-delay="5000" data-aos="fade-down" className="">
                                           <Image alt="logo" src={company3} />
                                       </div>   
                                 </div>
                          </div>
                        </div> 
                </div>
           </div>
       </div>
    </>
  );
};

export default Companies;
