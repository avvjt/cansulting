"use client";
import {
	Heroworkiz4,
	Aboutworkiz4,
	Chelenge4,
	Result4,
	Works4,
	Credit4,
	VideoWorkiz4,
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
				<Heroworkiz4 />
				<Aboutworkiz4 />
				<Chelenge4 />
				{/* <VideoWorkiz4 />
				<Result4 />
				<Credit4 /> */}
				<Works4 />
				<Ready />
			</Curve>
		</>
	);
}


export default dynamic (() => Promise.resolve(Work), {ssr: false})
