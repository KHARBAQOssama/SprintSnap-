import React from "react";
import Logo from "../components/common/Logo";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <section className="h-full overflow-x-scroll bg-landing bg-no-repeat bg-cover">
      <nav className="flex items-center px-12 justify-between py-2 border-b">
        <Logo className={"h-12"} />
        <Link
          to={"/dashboard"}
          className="border-blue-500 text-blue-500 border-2 py-2 px-3 rounded-2xl hover:text-white hover:bg-blue-500 transition-all"
        >
          Get Started
        </Link>
      </nav>
      <section className="p-12 flex items-center justify-between">
        <div className="flex-1 flex flex-col gap-6">
          <div className=" flex items-center gap-2 text-gray-600">
            <img src="/images/stars.png" alt="" />
            <p>
              Based on <span className="font-semibold">10,000+</span> reviews
            </p>
          </div>
          <h1 className="text-[4em] font-semibold">
            Seamless solution <br /> with our magic!
          </h1>
          <p className="max-w-[50ch]">
            UIFry is the project management platform that aims for teams to
            achieve an efficient dream management
          </p>
          <p className="max-w-[22ch] text-[#28A263] hover:underline border-l-2 border-[#28A263] ps-3 ">
            Start work efficiently with UIFry SaaS product
          </p>
          <div className="pt-2">
            <img src="/images/adds.png" alt="" />
          </div>
        </div>
        <div className="">
          <img src="/images/statics.png" alt="" />
        </div>
      </section>
      <section className="py-12 flex flex-col gap-12 pt-48">
        <h1 className="text-[2.5em] font-semibold px-12">
          Choose from over 10+
          <br /> cutting—edge products
        </h1>
        <img src="/images/services.png" className="w-full" alt="" />
      </section>
      <section className="p-12 flex items-center justify-between pt-28">
        <div>
          <h1 className="text-[2.5em] font-semibold">
            Here's what our <span className="text-blue-400">customer</span>
            <br />
            has to says
          </h1>
          <button className="border-2 border-black text-[#28A263] py-1 px-3 rounded-full mt-3">
            Read customer stories
          </button>
        </div>
        <div className="flex items-center gap-4">
          <img src="/images/icon.png" alt="" />
          <p className="max-w-[40ch] text-sm ">
            Lorem, ipsum dolor sit amet consectetur adi Velit minus praesentium,
            explicabo optio voluptatum{" "}
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center gap-8 p-12">
        <div className="flex gap-8">
          <div className="bg-gray-100 flex-1 rounded-3xl p-12 flex flex-col gap-3">
            <h1 className="text-2xl font-medium">
              Amazing tool! Saved me months
            </h1>
            <p className="text-gray-600">
              This is a placeholder for your testimonials and what your client
              has to say, put them here and make sure its 100% true and
              meaningful.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-300"></div>
              <div>
                <p>John Master</p>
                <p className="text-xs">Director, UiFry.com</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 flex-1 rounded-3xl p-12 flex flex-col gap-3">
            <h1 className="text-2xl font-medium">
              Amazing tool! Saved me months
            </h1>
            <p className="text-gray-600">
              This is a placeholder for your testimonials and what your client
              has to say, put them here and make sure its 100% true and
              meaningful.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-300"></div>
              <div>
                <p>John Master</p>
                <p className="text-xs">Director, UiFry.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="bg-gray-50 flex-1 rounded-3xl p-12 flex flex-col gap-3">
            <h1 className="text-2xl font-medium">
              Amazing tool! Saved me months
            </h1>
            <p className="text-gray-600">
              This is a placeholder for your testimonials and what your client
              has to say, put them here and make sure its 100% true and
              meaningful.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-300"></div>
              <div>
                <p>John Master</p>
                <p className="text-xs">Director, UiFry.com</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 flex-1 rounded-3xl p-12 flex flex-col gap-3">
            <h1 className="text-2xl font-medium">
              Amazing tool! Saved me months
            </h1>
            <p className="text-gray-600">
              This is a placeholder for your testimonials and what your client
              has to say, put them here and make sure its 100% true and
              meaningful.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-300"></div>
              <div>
                <p>John Master</p>
                <p className="text-xs">Director, UiFry.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-12 pt-48 flex flex-col">
        <h1 className="text-[2em] text-center font-medium">
          Most popular
          <br />
          integration apps{" "}
        </h1>
        <div className="p-12 flex flex-col items-center gap-12">
          <div className="w-max ps-24">
            <img src="/images/apps1.png" className="h-32" alt="" />
          </div>
          <div className="w-max pe-24">
            <img src="/images/apps2.png" className="h-32" alt="" />
          </div>
        </div>
      </section>
      <section className="p-24 flex flex-col gap-6 relative">
        <h1 className="max-w-[30vw] font-semibold text-[2.8em]">
          The best in the class product for you today!
        </h1>
        <p className="max-w-[43ch]">
          This is a placeholder for your testimonials and what your client has
          to say, put them here and make sure its 100% true and meaningful.
        </p>
        <p className="text-[#28A263] text-sm ps-3 border-l-2 border-[#28A263]">
          Start work efficiently with
          <br />
          UIFry SaaS product
        </p>
        <div className="absolute overflow-hidden right-0 top-80">
          <img
            src="/images/image.png"
            className="w-[70vw] rounded-3xl m-12 shadow-lg"
            alt=""
          />
        </div>
      </section>
    </section>
  );
};

export default LandingPage;
