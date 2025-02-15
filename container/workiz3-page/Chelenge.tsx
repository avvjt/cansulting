import Image from "next/image";
import {
  after,
  chelengeBg,
  showcase1,
  showcase2,
  showcase3,
  showcase4,
  showcase5,
  showcase6,
} from "@/public";
import { BackgroundImg } from "@/components";

export default function Chelenge() {
  return (
    <section className="w-full mt-16 pb-[100px] lg:pb-[80px] md:pb-[60px] sm:pb-[40px] xm:pb-[40px]">
     
      <div className="w-full padding-x padding-y">
        <BackgroundImg src={chelengeBg} />
      </div>

	  <div className="w-full flex flex-col my-[10rem]">
        <h2 className="text-4xl padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
        Workforce Planning & Talent Acquisition
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
                  Talent Needs Assessment.
                  </li>
                  <li>
                  Job Description Development.
                  </li>
                  <li>Recruitment Strategy & Candidate Sourcing.</li>

                  <li>Executive Search and Leadership Hiring.</li>
                  <li>Employer Branding for Attracting Top Talent.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto padding-x flex gap-[40px] sm:w-full xm:w-full sm:flex-col xm:flex-col">
        <div className="w-[49%] sm:w-full xm:w-full">
          <Image
            src={showcase1}
            className="w-full  object-cover rounded-[20px]"
            alt="chelengeBgImg"
          />
        </div>

		

        <div className="w-[49%] sm:w-full xm:w-full">
          <Image
            src={showcase2}
            className="w-full  object-cover rounded-[20px]"
            alt="chelengeBgImg"
          />
        </div>
      </div>

	  <div className="w-full flex flex-col my-[10rem]">
        <h2 className="text-4xl padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
        Employee Engagement & Retention Programs
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
                  Employee Feedback Surveys and Analysis.
                  </li>
                  <li>
                  Designing Rewards and Recognition Programs.
                  </li>
                  <li>Organizing Team-Building and Well-Being Initiatives.</li>

                  <li>Leadership Communication Enhancement.</li>
                  <li>Crafting Career Growth and Development Plans.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full padding-x padding-y">
        <BackgroundImg src={showcase3} />
      </div>

	  <div className="w-full flex flex-col my-[10rem]">
        <h2 className="text-4xl padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
        HR Policy Development & Compliance
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
                  Creation of Comprehensive HR Policies and Manuals.
                  </li>
                  <li>
                  Implementation of Workplace Harassment and Safety Guidelines.
                  </li>
                  <li>Compliance with Labor Laws and Regulations</li>

                  <li>Policy Audits and Updates for Legal Alignment.</li>
                  <li>Documentation for Onboarding and Exit Processes.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-[80%] mx-auto padding-x flex gap-[40px] sm:w-full xm:w-full sm:flex-col xm:flex-col">
        <div className="w-[49%] sm:w-full xm:w-full">
          <Image
            src={showcase4}
            className="w-full  object-cover rounded-[20px]"
            alt="chelengeBgImg"
          />
        </div>
        <div className="w-[49%] sm:w-full xm:w-full">
          <Image
            src={showcase5}
            className="w-full  object-cover rounded-[20px]"
            alt="chelengeBgImg"
          />
        </div>
      </div>

	  <div className="w-full flex flex-col my-[10rem]">
        <h2 className="text-4xl padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
        Organizational Design & Development
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
                  Defining Organizational Structure and Hierarchy.
                  </li>
                  <li>
                  Job Role Mapping and Workforce Optimization.
                  </li>
                  <li>Change Management and Transition Planning.</li>

                  <li>Culture Transformation Initiatives.</li>
                  <li>Mergers and Acquisitions Integration Support.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-full padding-x padding-y">
        <BackgroundImg src={showcase6} />
      </div>

	  <div className="w-full flex flex-col my-[10rem]">
        <h2 className="text-4xl padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
        Diversity, Equity, and Inclusion (DEI) Consulting
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
                  Assessing Workplace Diversity Metrics.
                  </li>
                  <li>
                  Designing Inclusive Hiring and Promotion Practices.
                  </li>
                  <li>Conducting DEI Workshops and Awareness Sessions.</li>

                  <li>Creating a Welcoming and Bias-Free Environment.</li>
                  <li>Monitoring and Reporting DEI Progress.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w-[80%] sm:w-full xm:w-full mx-auto padding-x flex gap-[20px]">
        <div className="w-full">
          <Image
            src={after}
            className="w-full object-cover rounded-[20px]"
            alt="chelengeBgImg"
          />
        </div>
      </div>

	  <div className="w-full flex flex-col my-[10rem]">
        <h2 className="text-4xl padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
        HR Technology Implementation
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
                  HRIS (Human Resource Information System) Setup and Integration.
                  </li>
                  <li>
                  Streamlining Payroll Management Systems.
                  </li>
                  <li>Automation of Attendance and Leave Management.</li>

                  <li>Performance Tracking and Analytics Software Implementation.</li>
                  <li>Training HR Teams on Technology Usage.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

	  
    </section>
  );
}
