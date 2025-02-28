import { background } from "@/public";
import { achiveItems } from "@/constants";
import { BackgroundImg } from "@/components";
import { TextMask } from "@/animation";
import TrustedPartners from "./TrustedPartner";

export default function Archive() {
	return (
	  <section className="w-full rounded-t-[20px]">
		<div style={{ backgroundColor: '#f1f1f1' }}>
		  <TrustedPartners />
		</div>
	  </section>
	);
  }
