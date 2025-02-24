import React from "react";
import { Star } from "lucide-react";
import SocialLinks from "./SocialLinks";
import Link from "next/link";
const FooterV2 = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-white p-8 overflow-hidden rounded-2xl border ">
            <div
                className="relative w-full p-8 bg-black text-white rounded-3xl min-h-screen pt-10" >
                <SocialLinks />

                <div onClick={() => window.scrollTo(-10, -10)} className="top-0 right-0 absolute p-3 bg-white text-black rounded-2xl m-1">
                    <p>Sh*t I've gone too far, send me back up</p>
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto">
                    {/* Navigation */}
                    <nav className="flex justify-between items-start mb-20">
                        <div className="ml-10 mt-10">
                            <h1 className="text-4xl mb-4">
                                Do you like
                                <br />
                                what you see?
                            </h1>
                            <button className="bg-[#71edbc] text-black px-6 py-2 rounded-full flex items-center gap-2">
                                <Link href="/contact">
                                Start a project
                                </Link>
                                <span className="transform rotate-45">↑</span>
                            </button>
                            <div className="flex items-center gap-2 mt-4">
                                <span className="text-lg">5.0</span>
                                <span className="text-sm text-gray-400">
                                    from 69 reviews
                                </span>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            fill="#71edbc"
                                            color="#71edbc"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-20">
                            <div>
                                <h2 className="text-gray-500 mb-4 mt-8">Quick Links</h2>
                                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/influidity"
                      className="hover:text-primary transition-colors"
                    >
                        About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/consulting"
                      className="hover:text-primary transition-colors"
                    >
                      Consulting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/growthstory"
                      className="hover:text-primary transition-colors"
                    >
                      Growth Stories
                    </Link>
                  </li>
                  
                </ul>
                            </div>

                            <div>
                                <h2 className="text-gray-500 mb-4 mt-8">Explore</h2>
                                <ul className="space-y-2">
                  <li>
                  <Link
                      href="/"
                      className="hover:text-primary transition-colors"
                    >
                      Home
                    </Link>
                    </li>
                    <li>
                    <Link
                      href="/influidity"
                      className="hover:text-primary transition-colors"
                    >
                      Influidity
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/consulting"
                      className="hover:text-primary transition-colors"
                    >
                      Consulting
                    </Link>
                  </li>
                  <li>
                  <Link
                      href="/growthstory"
                      className="hover:text-primary transition-colors"
                    >
                      Growth Story
                    </Link>
                    </li>
                  <li>
                    <Link
                      href="/career"
                      className="hover:text-primary transition-colors"
                    >
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-primary transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
                            </div>

                            <div>
                                <h2 className="text-gray-500 mb-4 mt-8">
                                    Get in touch
                                </h2>
                                <ul className="space-y-2">
                                    <li>01942 894 596</li>
                                    <li>hello@madebyshape.co.uk</li>
                                    <li className="mt-4">
                                        MadeByShape
                                        <br />
                                        1 Gibfield Park Avenue
                                        <br />
                                        Atherton Manchester
                                        <br />
                                        M46 0SU
                                    </li>
                                    <li className="mt-4">
                                        ///topped.little.pirate
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    {/* Bottom Text */}
                    <div className="text-8xl font-light mt-[8rem]">
                        Crafting since 2010
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center mt-20 text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                            <span>Shape.</span>
                            <span>© MadeByShape Ltd 2024</span>
                            <span>Company Reg Number 10529058</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span>Web Design Manchester</span>
                            <span>All Rights Reserved</span>
                            <span>Privacy Policy (you really care?)</span>
                        </div>
                    </div>
                </div>

                {/* "Send me back up" Button */}
                <div className="fixed top-4 right-4 bg-white text-black px-4 py-2 rounded-full">
                    Sh*t I've gone too far, send me back up ⚡
                </div>
            </div>
        </div>
    );
};

export default FooterV2;
