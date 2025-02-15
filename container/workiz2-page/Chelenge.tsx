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
        Strategic Business Planning
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
                  Vision, Mission, and Goal Setting.
                  </li>
                  <li>
                  Developing Short-Term and Long-Term Business Plans.

                  </li>
                  <li>Competitive Analysis and Market Positioning.</li>

                  <li>Business Diversification Strategies.</li>
                  <li>Scenario Planning and Contingency Development.</li>

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
        Financial Planning & Analysis
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
                  Budgeting and Forecasting Models.
                  </li>
                  <li>
                  Cost Control and Revenue Optimization.
                  </li>
                  <li>Break-Even and Profitability Analysis.</li>

                  <li>Cash Flow Management Strategies.</li>
                  <li>Financial KPI Monitoring and Reporting.</li>

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
        Operational Excellence Consulting
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
                  Workflow Optimization and Process Reengineering.
                  </li>
                  <li>
                  Lean Management and Efficiency Audits.
                  </li>
                  <li>Resource Allocation and Productivity Improvement.</li>

                  <li>Implementation of Standard Operating Procedures (SOPs).</li>
                  <li>Technology Integration for Operational Streamlining.</li>
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
        Business Model Innovation
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
                  Evaluating and Redesigning Business Models.
                  </li>
                  <li>
                  Exploring Subscription, Freemium, and Other Revenue Streams.
                  </li>
                  <li>Identifying New Market Segments.</li>

                  <li>Product and Service Offering Realignment.</li>
                  <li>Testing and Prototyping Innovative Models</li>
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
        Growth Strategy & Market Entry
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
                  Identifying New Markets and Geographies.
                  </li>
                  <li>
                  Designing Go-to-Market Strategies.
                  </li>
                  <li>Strategic Partnerships and Alliances.</li>

                  <li>Mergers and Acquisitions Support.</li>
                  <li>Expansion Feasibility Studies.</li>

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
        Crisis Management & Business Continuity
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
                  Risk Assessment and Mitigation Planning.
                  </li>
                  <li>
                  Business Impact Analysis for Crisis Preparedness.
                  </li>
                  <li>Developing Continuity and Recovery Frameworks.</li>

                  <li>Crisis Communication Strategy Development.</li>
                  <li>Post-Crisis Performance Review and Optimization.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

	  
    </section>
  );
}
