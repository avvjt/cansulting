"use client";
import Link from "next/link";
import { Rounded } from "@/components";
import dynamic from "next/dynamic";

function Tags({
	item,
	bgcolor,
	className,
}: {
	item: any;
	bgcolor: string;
	className: string;
}) {
	return (
		<div
			className="w-fit rounded-[50px] border border-[#21212199] cursor-pointer"
			key={item.id}>
			<Link
				className={`small-text font-NeueMontreal uppercase ${className}`}
				href={item.href}>
				<Rounded
					className="py-[2px]"
					backgroundColor={bgcolor}>
					<p className="z-10 px-[15px]">{item.title}</p>
				</Rounded>
			</Link>
		</div>
	);
}


export default dynamic (() => Promise.resolve(Tags), {ssr: false})
