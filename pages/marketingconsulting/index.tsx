"use client";
import {
	Heroworkiz,
	Aboutworkiz,
	Chelenge,
	Result,
	Works,
	Credit,
	VideoWorkiz,
	Expectations
} from "@/container";
import { useEffect, useState } from "react";
import { Curve, Ready } from "@/components";

import dynamic from "next/dynamic";

 function Work() {

	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	
	return (
		<div>
			<Curve backgroundColor="#f1f1f1">
				<Heroworkiz />
				<Aboutworkiz />
				<Chelenge />
				{/* <VideoWorkiz /> */}
				{/* <Result /> */}
				{/* <Credit /> */}
				<Works />
				<Ready />
			</Curve>
		</div>
	);
}


export default dynamic (() => Promise.resolve(Work), {ssr: false})

