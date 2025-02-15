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
        Budgeting & Cost Optimization
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
                  Department-wise and project-specific budget creation.
                  </li>
                  <li>
                  Expense analysis and cost-reduction strategies.
                  </li>
                  <li>Variance analysis and corrective action plans.</li>

                  <li>Developing and monitoring budget adherence processes.</li>
                  <li>Expense trend identification to avoid overspending.</li>
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
        Financial Reporting & Analysis
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
                  Preparation of profit and loss statements, balance sheets, and cash flow reports.
                  </li>
                  <li>
                  Real-time dashboard creation for financial insights.
                  </li>
                  <li>KPI tracking for operational and financial health.</li>
                  <li>Break-even analysis and profitability assessment.</li>
                  <li>Providing strategic insights based on financial data.</li>

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
        Tax Planning & Compliance
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
                  Structuring tax-efficient strategies to reduce liabilities.
                  </li>
                  <li>
                  Ensuring compliance with local and international tax regulations.
                  </li>
                  <li>Filing income tax, GST, VAT, or other statutory returns.</li>

                  <li>Representing the business in audits or disputes.</li>
                  <li>Maintaining up-to-date documentation for tax compliance.</li>
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
        Strategic Financial Advisory
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
                  Aligning financial strategies with long-term business objectives.
                  </li>
                  <li>
                  Advising on major business decisions like expansions or diversification.
                  </li>
                  <li>Providing financial insights to support leadership decisions.</li>

                  <li>Designing sustainability and growth-oriented strategies.</li>
                  <li>Acting as a financial sounding board for the CEO and leadership team.</li>
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
        Capital Structure & Fundraising Support
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
                  Assessing and restructuring the company’s capital structure.
                  </li>
                  <li>
                  Preparing investor pitch decks and detailed financial models.
                  </li>
                  <li>Identifying and approaching potential investors or lenders.</li>

                  <li>Negotiating loan or equity terms for funding.</li>
                  <li>Structuring repayment and exit strategies for investors.</li>
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
        Risk Management & Internal Controls
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
                  Analyzing product/service profitability metrics.
                  </li>
                  <li>
                  Identifying low-performing areas and optimizing resources.
                  </li>
                  <li>Implementing cost-reduction strategies across departments.</li>

                  <li>Developing pricing strategies to maximize margins.</li>
                  <li>Strategic allocation of resources to profitable ventures.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

	  
    </section>
  );
}
