"use client";
import {
	Heroworkiz2,
	Aboutworkiz2,
	Chelenge2,
	Result2,
	Works2,
	Credit2,
	VideoWorkiz2,
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
				<Heroworkiz2 />
				<Aboutworkiz2 />
				<Chelenge2 />
				{/* <VideoWorkiz2 />
				<Result2 />
				<Credit2 /> */}
				<Works2 />
				<Ready />
			</Curve>
		</>
	);
}
export default dynamic (() => Promise.resolve(Work), {ssr: false})
