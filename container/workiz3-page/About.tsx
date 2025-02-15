import { welcome } from "@/public";
import { BackgroundImg } from "@/components";

export default function About() {
  return (
    <section className="w-full padding-y">
      <div className="w-full flex flex-col">
        <h2 className="text-4xl padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
        Employee Onboarding & Offboarding
        </h2>
        <div className="w-full border-t border-[#21212155] pt-[20px]">
          <div className="w-full flex sm:flex-col xm:flex-col justify-between gap-[15px] padding-x">
            <div className="w-1/2 sm:w-full xm:w-full">
              <h3 className="text-2xl font-medium text-secondry font-NeueMontreal">
                Description:
              </h3>
            </div>
            <div className="w-1/2 sm:w-full xm:w-full flex justify-between gap-[10px] sm:flex-col xm:flex-col">
              <div>
                <ul className="list-disc pl-5 font-NeueMontreal text-secondry">
                  <li>
                  Designing Comprehensive Onboarding Processes.
                  </li>
                  <li>
                  Setting Up Buddy Programs for New Hires.
                  </li>
                  <li>Exit Interviews and Feedback Collection.</li>

                  <li>Knowledge Transfer and Handover Planning.</li>
                  <li>Offboarding Documentation and Compliance Checks.</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full padding-x pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[40px] xm:pt-[40px]">
        <BackgroundImg src={welcome} />
      </div>
	 
    </section>
  );
}
