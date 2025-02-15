"use client";
import {
	Heroworkiz3,
	Aboutworkiz3,
	Chelenge3,
	Result3,
	Works3,
	Credit3,
	VideoWorkiz3,
} from "@/container";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";

import dynamic from "next/dynamic";
 function Work() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Curve backgroundColor="#f1f1f1">
				<Heroworkiz3 />
				<Aboutworkiz3 />
				<Chelenge3 />
				{/* <VideoWorkiz3 />
				<Result3 />
				<Credit3 /> */}
				<Works3/>
				<Ready />
			</Curve>
		</>
	);
}

export default dynamic (() => Promise.resolve(Work), {ssr: false})
