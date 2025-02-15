import { welcome } from "@/public";
import { BackgroundImg } from "@/components";

export default function About() {
  return (
    <section className="w-full padding-y">
      <div className="w-full flex flex-col">
        <h2 className="text-4xl padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
        Financial Planning & Forecasting
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
                  Long-term and short-term financial strategy development.
                  </li>
                  <li>
                  Revenue and expense forecasting models.
                  </li>
                  <li>Scenario analysis for market or business changes.</li>

                  <li>Strategic investment and divestment planning.</li>
                  <li>Budget alignment with organizational objective</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full padding-x pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[40px] xm:pt-[40px]">
        <BackgroundImg src={welcome} />
      </div>
	  <div className="w-full flex flex-col mt-[7rem]">
        <h2 className="text-4xl padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
        Cash Flow Management
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
                  Monitoring and optimizing cash inflows and outflows.
                  </li>
                  <li>
                  Accounts receivable and payable management.
                  </li>
                  <li>Implementing cash flow tracking tools and dashboards.</li>

                  <li>Identifying and addressing cash flow gaps.</li>
                  <li>Developing liquidity management strategies.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
