import Head from "next/head";
import Image from "next/image";
import buildspaceLogo from "../assets/buildspace-logo.png";
import { useState, useEffect } from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import UploadWidget from "../components/UploadWidget";
import Script from "next/script";
import Tabs from "../components/Tabs";

// core version + navigation, pagination modules:
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FeedbackAlert from "../components/feedbackAlert";

import logoImage from "../assets/captionlyLogo.png";

const footerNavigation = {
  main: [],
  social: [
    {
      name: "GitHub",
      href: "https://instagram.com/billellevrai",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

const carouselImages = [
  { name: "Obama", href:  "1Pgq9ZpIatI" },
  { name: "Ghandi", href: "D4jRahaUaIc" },
  { name: "Nature", href: "ufuk99QfQTg" },
  { name: "Basket", href:"u79wy47kvVs" },
];

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [successfulFeedback, setSuccessfulFeedback] = useState(false);

  const onUserChangedText = (event) => {
    // console.log(event.target.value);
    setUserInput(event.target.value);
  };

  const [apiOutput, setApiOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };

  const positiveFeedback = async (prompt, result) => {
    console.log("Thank you for your feedback");
    const formattedData = {
      prompt: `like chatgpt, Please write me in arabic a description for my Product to make it as  a facebook ad , use emoji , the product is :   ${prompt}`,
      completion: result,
    };
    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
    });
    callGenerateEndpoint();
  };
  return (
    <div className="bg-white">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <Script src="https://upload-widget.cloudinary.com/global/all.js" /> */}
        <script
          src="https://upload-widget.cloudinary.com/global/all.js"
          type="text/javascript"
        ></script>
        <link rel="shortcut icon" href="/faviconC.ico" />

        <title>Describe it</title>
      </Head>
      <main>
        {/* Hero section */}
        <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div>
              <div>
                <Image
                  src={logoImage}
                  width="200"
                  height="auto"
                  alt="Captionly"
                />
                {/* <img className="h-11 w-auto" src={logoImage} alt="Captionly " /> */}
              </div>
              <div className="mt-10 text-center sm:text-left">
                <div>
                  <div className="inline-flex space-x-4">
                    {/* <span className="rounded bg-rose-50 px-2.5 py-1 text-sm font-semibold text-rose-500">
                      What's new
                    </span> */}
                    <span className="inline-flex items-center space-x-1 text-sm font-medium text-indigo-600">
                      <a href="https://Instagram.com/billellevrai">
                      Founder
                      </a>
                      <ChevronRightIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center">
                  Describe-it
                  </h1>
                  <p className="mt-6 text-xl text-gray-500">
  مرحبا بكم في خدمة كتابة وصف المنتجات بالذكاء الاصطناعي 🤖
  هدفنا هو مساعدة العلامات التجارية في العرض الأفضل لمنتجاتهم 
  
  
                  </p>
                  <p className="mt-6 text-xl text-gray-500">
                  ______________________________________________________ اسم المنتج
                  </p>
                </div>
                {/* <UploadWidget /> */}
                {/* <Tabs /> */}
                <form
                  action="#"
                  className="mt-12 sm:flex sm:w-full sm:max-w-lg"
                >
                  <div className="min-w-0 flex-1">
                    <textarea
                      rows={4}
                      name="comment"
                      id="comment"
                      value={userInput}
                      placeholder="AirPods, Laptop, creme, parfum."
                      className="prompt-box block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-slate-200 text-indigo-600 "
                      onChange={onUserChangedText}
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <div className="prompt-buttons">
                      <div className="flex-1">
                        {isGenerating ? (
                          <span className="bg-indigo-500 animate-spin">
                            <svg
                              className="animate-spin h-5 w-5 mr-3 ..."
                              viewBox="0 0 24 24"
                            >
                              Test
                            </svg>
                          </span>
                        ) : (
                          <button
                            onClick={callGenerateEndpoint}
                            type="button"
                            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Generate
                          </button>
                        )}{" "}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <svg
                className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
            <div className="relative pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
              {apiOutput ? (
                <div className="output text-center">
                  <div className="output-header-container sm:mt-64">
                    <div className="output-header">
                      <h3 className="text-2xl font-medium leading-6 text-gray-900">
                      👇👇👇👇
                      </h3>
                    </div>
                  </div>
                  <div className="output-content w-[350px] mx-auto">
                    <p className="w-[350px] text-lg mt-5">{apiOutput}</p>
                    {/* {console.log("Logged Output: ", apiOutput)} */}
                  </div>
                  {/* AI Feedback Loop */}
                  <span className="isolate inline-flex rounded-md shadow-sm mt-5">
                    <button
                      type="button"
                      onClick={callGenerateEndpoint}
                      className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                      <span className="sr-only">Negative</span>
                      {/* <HandThumbDownIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      /> */}
                      <span className="text-5xl">🎉</span>
                    </button>
                    <button
                      type="button"
                      onClick={callGenerateEndpoint}
                      className="relative -ml-px inline-flex items-center  border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                      <span className="sr-only">Neutral</span>
                      {/* <HandThumbUpIcon className="h-5 w-5" aria-hidden="true" /> */}
                      <span className="text-5xl">😐</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => positiveFeedback(userInput, apiOutput)}
                      className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                      <span className="sr-only">Positive</span>
                      {/* <HandThumbUpIcon className="h-5 w-5" aria-hidden="true" /> */}
                      <span className="text-5xl">🔥</span>
                    </button>
                  </span>
                  {/* {successfulFeedback && (
                    <div className="mt-10 w-[350px] mx-auto">
                      <FeedbackAlert />
                    </div>
                  )} */}
                </div>
              ) : (
                <div className="">
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    spaceBetween={30}
                    centeredSlides={true}
                    slidesPerView={1}
                    autoplay={{
                      delay: 3500,
                    }}
                    loop={true}
                    breakpoints={{
                      // when window width is >= 320px
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                      },
                      // when window width is >= 480px
                      480: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                      },
                      // when window width is >= 640px
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                      },
                    }}
                  >
                    {carouselImages.map((item) => (
                      <SwiperSlide className="" key={item.href}>
                        <img
                          className="h-[30rem]"
                          key={item.href}
                          src={`https://source.unsplash.com/${item.href}/1920x2614`}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer section */}
      <footer className="mt-24 bg-gray-900 sm:mt-12">
        <div className="mx-auto max-w-md overflow-hidden py-12 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {footerNavigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a
                  href={item.href}
                  className="text-base text-gray-400 hover:text-gray-300"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            {footerNavigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; #Dzayer_2050
          </p>
          <div className="mt-5 text-gray-400">
            <a
              href="https://buildspace.so/builds/ai-writer"
              target="_blank"
              rel="noreferrer"
            >
              <div className="badge flex justify-center"></div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
