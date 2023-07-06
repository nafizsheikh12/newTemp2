import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import company6 from "../../../../assets/ui/coca-cola.svg";
import main from "../../../../assets/ui/companymain.svg";
import company1 from "../../../../assets/ui/envato.svg";
import company4 from "../../../../assets/ui/google.svg";
import company5 from "../../../../assets/ui/linkedin.svg";
import { default as company2 } from "../../../../assets/ui/microsoft.svg";
import company3 from "../../../../assets/ui/netflix.svg";

const Companies = () => {
  const app = useRef<any>(null);
  const anim = useRef<any>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      anim.current,
      {
        translateX: 0,
      },
      {
        marginTop: "-90px",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: app.current,
          start: "bottom bottom",
          end: " top",
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <>
      <div className="mt-[-34px]" ref={app}>
        <div ref={anim}>
          <div>
            <div
              className="relative min-h-[102px] !bg-cover	bg-no-repeat"
              style={{
                background: `url(${main.src})`,
                backgroundPosition: "50% 0%",
              }}
            ></div>
            <div className="bg-[#FAFAFA] pb-9 test">
              <div className="container mx-auto">
                <p className="text-center  mb-4 text-[#0b0b2c] leading-[1.111em] tracking-[0.1em] font-jakarta px-3 font-semibold text-lg">
                  OUR STUDENTS WORK IN COMPANIES SUCH AS
                </p>
                <div className="pt-6 grid  grid-cols-1 justify-center text-center lg:grid-cols-6 gap-9">
                  <div className="">
                    <Image
                      alt="logo"
                      src={company1}
                      width={150}
                      height={70}
                      className="grayscale"
                    />
                  </div>
                  <div>
                    <Image
                      className="grayscale"
                      alt="logo"
                      src={company2}
                      width={150}
                      height={70}
                    />
                  </div>
                  <div>
                    <Image
                      className="grayscale"
                      alt="logo"
                      src={company3}
                      width={150}
                      height={70}
                    />
                  </div>
                  <div>
                    <Image
                      className="grayscale"
                      alt="logo"
                      src={company4}
                      width={150}
                      height={70}
                    />
                  </div>
                  <div>
                    <Image
                      className="grayscale"
                      alt="logo"
                      src={company5}
                      width={150}
                      height={70}
                    />
                  </div>
                  <div>
                    <Image
                      className="grayscale"
                      alt="logo"
                      src={company6}
                      width={150}
                      height={70}
                    />
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
