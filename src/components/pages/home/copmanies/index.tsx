import Image from "next/image";
import main from "../../../../assets/ui/companymain.svg";
import logo from "../../../../assets/ui/logo/companylogo.svg";


const Companies = () => {
  return (
    <>
       <div className="bg-[#FAFAFA]">
           <div>
                <div>
                       <div className="relative min-h-[102px] bg-cover	bg-no-repeat" style={{background:`url(${main.src})`,backgroundPosition: "50% 0%"}}></div>
                       <div className="container mx-auto">
                              <p className="text-center text-[#0b0b2c] leading-[1.111em] tracking-[0.1em] font-jakarta font-semibold text-lg">OUR STUDENTS WORK IN COMPANIES SUCH AS</p>
                              <div className="pt-11 grid  grid-cols-1 justify-center lg:grid-cols-5 gap-7">
                                   <div className="">
                                        <Image alt="logo" src={logo} />
                                    </div>
                                    <div className="">
                                        <Image alt="logo" src={logo} />
                                    </div> 
                                    <div className="">
                                        <Image alt="logo" src={logo} />
                                    </div> 
                                    <div className="">
                                        <Image alt="logo" src={logo} />
                                    </div>
                                    <div className="">
                                        <Image alt="logo" src={logo} />
                                    </div> 
                                    <div className="">
                                        <Image alt="logo" src={logo} />
                                    </div> 
                                    <div className="">
                                        <Image alt="logo" src={logo} />
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
