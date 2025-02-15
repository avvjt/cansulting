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
        Digital Marketing
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
                  Digital Marketing Plan Development.
                  </li>
                  <li>
                  Search Engine Optimization (SEO).

                  </li>
                  <li>Pay-Per-Click (PPC) Campaign Management.</li>

                  <li>Social Media Strategy and Content Calendar.</li>
                  <li>Email Marketing and Automation Setup.</li>
                  <li>Conversion Rate Optimization (CRO).</li>
                  <li>Affiliate Marketing Programs.</li>
                  <li>Performance Analysis & Campaign Optimization.</li>
                  <li>Display and Banner Advertising.Retargeting Campaigns.</li>
                  <li>Native Advertising Integration.</li>
                  <li>Landing Page Optimization for Conversions.</li>
                  <li>Facebook, Instagram, and LinkedIn Ads Strategy.</li>
                  <li>YouTube Advertising and Video Campaigns.</li>
                  <li>A/B Testing for Ad Performance.</li>

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
        Website Development
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
                  Website Strategy and Planning
                  </li>
                  <li>
                  Website Design and Development
                  </li>
                  <li>E-Commerce Solutions.</li>

                  <li>Content Management Systems (CMS)</li>
                  <li>SEO-Optimized Websites.</li>
                  <li>Website Audits and Redesign.</li>
                  <li>Landing Page Development.</li>
                  <li>API Integration.</li>
                  <li>Multi-Language and Localization Support.</li>
                  <li>Custom Web Applications.</li>
                  <li>Compliance and Security.</li>

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
        Social Media Marketing
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
                  Content Strategy Development
                  </li>
                  <li>
                    Storytelling and Brand Narratives
                  </li>
                  <li>Social Media Strategy & Management</li>

                  <li>Content creation</li>
                  <li>Influencer Marketing & Collaborations</li>
                  <li>Community Engagement and Management</li>
                  <li>Crisis Management </li>
                  <li>UGC and Viral Content </li>
                  <li>Meme marketing</li>

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
        Customer Journey Mapping
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
                  Customer Touchpoint Analysis.
                  </li>
                  <li>
                  Persona Development Based on Behavior.
                  </li>
                  <li>Mapping Pre-Purchase, Purchase, and Post-Purchase Journeys.</li>

                  <li>Identifying Friction Points in Customer Experience.</li>
                  <li>Designing Omnichannel Strategies for Engagement.</li>
                  <li>Integrating Feedback Mechanisms.</li>
                  <li>Optimizing Digital and Physical Touchpoints.</li>
                  <li>Automation of Key Engagement Processes.</li>
                  <li>Personalization of Marketing Communications.</li>
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
        Marketing Automation & Technology
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
                  CRM Integration and Management.
                  </li>
                  <li>
                  Email Automation and Drip Campaigns.

                  </li>
                  <li>Marketing Funnel Design and Implementation.</li>

                  <li>Lead Scoring and Nurturing Frameworks.</li>
                  <li>Analytics Dashboard Development.</li>
                  <li>Social Media Automation Setup.</li>
                  <li>Sales and Marketing Alignment Strategies.</li>
                  <li>Workflow Automation for Repetitive Tasks.</li>
                  <li>Data Synchronization Across Platforms.</li>

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
        Video Production
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
                  Concept Development
                  </li>
                  <li>
                  Pre-Production Planning
                  </li>
                  <li>Video Production (Shooting)</li>

                  <li>Motion Graphics & Animation</li>
                  <li>Post-Production Editing</li>
                  <li>Brand Video Creation</li>
                  <li>Social Media Video Content</li>
                  <li>Corporate Video Production</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

	  
    </section>
  );
}
