"use client";
import { useState } from "react";
import ModalLogin from "./ModalLogin";

import Link from "next/link";

function Navbar(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (): void => setIsModalOpen(true);
  const closeModal = (): void => setIsModalOpen(false);

  return (
    <nav className="h-[69px] flex justify-between items-center p-4 bg-black text-white">
      <div className="text-xl font-bold">
        <svg
          width="164"
          height="43"
          viewBox="0 0 164 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.55 23.8C9.18333 23.8 7.90833 23.575 6.725 23.125C5.55833 22.675 4.54167 22.0417 3.675 21.225C2.825 20.4083 2.15833 19.45 1.675 18.35C1.20833 17.25 0.975 16.05 0.975 14.75C0.975 13.45 1.20833 12.25 1.675 11.15C2.15833 10.05 2.83333 9.09167 3.7 8.275C4.56667 7.45833 5.58333 6.825 6.75 6.375C7.91667 5.925 9.18333 5.7 10.55 5.7C11.9333 5.7 13.2 5.925 14.35 6.375C15.5167 6.825 16.525 7.45833 17.375 8.275C18.2417 9.075 18.9167 10.025 19.4 11.125C19.8833 12.225 20.125 13.4333 20.125 14.75C20.125 16.05 19.8833 17.2583 19.4 18.375C18.9167 19.475 18.2417 20.4333 17.375 21.25C16.525 22.05 15.5167 22.675 14.35 23.125C13.2 23.575 11.9333 23.8 10.55 23.8ZM16.275 27.525C15.5917 27.525 14.9417 27.45 14.325 27.3C13.725 27.15 13.125 26.9083 12.525 26.575C11.9417 26.2417 11.325 25.7917 10.675 25.225C10.0417 24.6583 9.35 23.9583 8.6 23.125L12.85 22.05C13.3 22.6667 13.7167 23.1583 14.1 23.525C14.4833 23.8917 14.85 24.15 15.2 24.3C15.5667 24.45 15.95 24.525 16.35 24.525C17.4167 24.525 18.3667 24.0917 19.2 23.225L21 25.375C19.8167 26.8083 18.2417 27.525 16.275 27.525ZM10.55 20.35C11.3333 20.35 12.05 20.2167 12.7 19.95C13.3667 19.6833 13.95 19.3 14.45 18.8C14.95 18.3 15.3333 17.7083 15.6 17.025C15.8833 16.325 16.025 15.5667 16.025 14.75C16.025 13.9167 15.8833 13.1583 15.6 12.475C15.3333 11.7917 14.95 11.2 14.45 10.7C13.95 10.2 13.3667 9.81667 12.7 9.55C12.05 9.28333 11.3333 9.15 10.55 9.15C9.76667 9.15 9.04167 9.28333 8.375 9.55C7.70833 9.81667 7.125 10.2 6.625 10.7C6.14167 11.2 5.75833 11.7917 5.475 12.475C5.20833 13.1583 5.075 13.9167 5.075 14.75C5.075 15.5667 5.20833 16.325 5.475 17.025C5.75833 17.7083 6.14167 18.3 6.625 18.8C7.125 19.3 7.70833 19.6833 8.375 19.95C9.04167 20.2167 9.76667 20.35 10.55 20.35ZM34.6938 23.8C32.2104 23.8 30.2688 23.1083 28.8688 21.725C27.4688 20.3417 26.7688 18.3667 26.7688 15.8V6H30.8188V15.65C30.8188 17.3167 31.1604 18.5167 31.8438 19.25C32.5271 19.9833 33.4854 20.35 34.7188 20.35C35.9521 20.35 36.9104 19.9833 37.5938 19.25C38.2771 18.5167 38.6187 17.3167 38.6187 15.65V6H42.6188V15.8C42.6188 18.3667 41.9188 20.3417 40.5188 21.725C39.1188 23.1083 37.1771 23.8 34.6938 23.8ZM50.3709 23.5V6H54.4209V23.5H50.3709ZM70.699 23.8C69.349 23.8 68.0907 23.5833 66.924 23.15C65.774 22.7 64.774 22.0667 63.924 21.25C63.074 20.4333 62.4074 19.475 61.924 18.375C61.4574 17.275 61.224 16.0667 61.224 14.75C61.224 13.4333 61.4574 12.225 61.924 11.125C62.4074 10.025 63.074 9.06667 63.924 8.25C64.7907 7.43333 65.799 6.80833 66.949 6.375C68.099 5.925 69.3574 5.7 70.724 5.7C72.2407 5.7 73.6074 5.96667 74.824 6.5C76.0574 7.01667 77.0907 7.78333 77.924 8.8L75.324 11.2C74.724 10.5167 74.0574 10.0083 73.324 9.675C72.5907 9.325 71.7907 9.15 70.924 9.15C70.1074 9.15 69.3574 9.28333 68.674 9.55C67.9907 9.81667 67.399 10.2 66.899 10.7C66.399 11.2 66.0074 11.7917 65.724 12.475C65.4574 13.1583 65.324 13.9167 65.324 14.75C65.324 15.5833 65.4574 16.3417 65.724 17.025C66.0074 17.7083 66.399 18.3 66.899 18.8C67.399 19.3 67.9907 19.6833 68.674 19.95C69.3574 20.2167 70.1074 20.35 70.924 20.35C71.7907 20.35 72.5907 20.1833 73.324 19.85C74.0574 19.5 74.724 18.975 75.324 18.275L77.924 20.675C77.0907 21.6917 76.0574 22.4667 74.824 23C73.6074 23.5333 72.2324 23.8 70.699 23.8ZM88.034 19.5L87.809 14.825L96.184 6H100.684L93.134 14.125L90.884 16.525L88.034 19.5ZM84.409 23.5V6H88.434V23.5H84.409ZM96.384 23.5L90.159 15.875L92.809 13L101.109 23.5H96.384ZM106.665 23.5V6H115.215C117.415 6 119.065 6.41667 120.165 7.25C121.282 8.08333 121.84 9.18333 121.84 10.55C121.84 11.4667 121.615 12.2667 121.165 12.95C120.715 13.6167 120.098 14.1333 119.315 14.5C118.532 14.8667 117.632 15.05 116.615 15.05L117.09 14.025C118.19 14.025 119.165 14.2083 120.015 14.575C120.865 14.925 121.523 15.45 121.99 16.15C122.473 16.85 122.715 17.7083 122.715 18.725C122.715 20.225 122.123 21.4 120.94 22.25C119.757 23.0833 118.015 23.5 115.715 23.5H106.665ZM110.69 20.45H115.415C116.465 20.45 117.257 20.2833 117.79 19.95C118.34 19.6 118.615 19.05 118.615 18.3C118.615 17.5667 118.34 17.025 117.79 16.675C117.257 16.3083 116.465 16.125 115.415 16.125H110.39V13.175H114.715C115.698 13.175 116.448 13.0083 116.965 12.675C117.498 12.325 117.765 11.8 117.765 11.1C117.765 10.4167 117.498 9.90833 116.965 9.575C116.448 9.225 115.698 9.05 114.715 9.05H110.69V20.45ZM133.256 13.05H141.681V16.2H133.256V13.05ZM133.556 20.25H143.081V23.5H129.531V6H142.756V9.25H133.556V20.25ZM153.679 23.5V9.3H148.079V6H163.329V9.3H157.729V23.5H153.679Z"
            fill="white"
          />
          <path
            d="M53.6288 39.5V31.1H55.2368L58.8128 37.028H57.9608L61.4768 31.1H63.0728L63.0968 39.5H61.2728L61.2608 33.896H61.5968L58.7888 38.612H57.9128L55.0448 33.896H55.4528V39.5H53.6288ZM70.9697 39.644C70.3057 39.644 69.6897 39.536 69.1217 39.32C68.5617 39.104 68.0737 38.8 67.6577 38.408C67.2497 38.016 66.9297 37.556 66.6977 37.028C66.4737 36.5 66.3617 35.924 66.3617 35.3C66.3617 34.676 66.4737 34.1 66.6977 33.572C66.9297 33.044 67.2537 32.584 67.6697 32.192C68.0857 31.8 68.5737 31.496 69.1337 31.28C69.6937 31.064 70.3017 30.956 70.9577 30.956C71.6217 30.956 72.2297 31.064 72.7817 31.28C73.3417 31.496 73.8257 31.8 74.2337 32.192C74.6497 32.584 74.9737 33.044 75.2057 33.572C75.4377 34.092 75.5538 34.668 75.5538 35.3C75.5538 35.924 75.4377 36.504 75.2057 37.04C74.9737 37.568 74.6497 38.028 74.2337 38.42C73.8257 38.804 73.3417 39.104 72.7817 39.32C72.2297 39.536 71.6257 39.644 70.9697 39.644ZM70.9577 37.988C71.3337 37.988 71.6777 37.924 71.9897 37.796C72.3097 37.668 72.5897 37.484 72.8297 37.244C73.0697 37.004 73.2537 36.72 73.3817 36.392C73.5177 36.064 73.5857 35.7 73.5857 35.3C73.5857 34.9 73.5177 34.536 73.3817 34.208C73.2537 33.88 73.0697 33.596 72.8297 33.356C72.5977 33.116 72.3217 32.932 72.0017 32.804C71.6817 32.676 71.3337 32.612 70.9577 32.612C70.5817 32.612 70.2337 32.676 69.9137 32.804C69.6017 32.932 69.3257 33.116 69.0857 33.356C68.8457 33.596 68.6577 33.88 68.5217 34.208C68.3937 34.536 68.3297 34.9 68.3297 35.3C68.3297 35.692 68.3937 36.056 68.5217 36.392C68.6577 36.72 68.8417 37.004 69.0737 37.244C69.3137 37.484 69.5937 37.668 69.9137 37.796C70.2337 37.924 70.5817 37.988 70.9577 37.988ZM81.0652 39.5L77.4412 31.1H79.5412L82.7092 38.54H81.4732L84.6892 31.1H86.6212L82.9852 39.5H81.0652ZM89.1226 39.5V31.1H91.0666V39.5H89.1226ZM96.6481 34.484H100.692V35.996H96.6481V34.484ZM96.7921 37.94H101.364V39.5H94.8601V31.1H101.208V32.66H96.7921V37.94ZM107.471 39.644C106.799 39.644 106.155 39.556 105.539 39.38C104.923 39.196 104.427 38.96 104.051 38.672L104.711 37.208C105.071 37.464 105.495 37.676 105.983 37.844C106.479 38.004 106.979 38.084 107.483 38.084C107.867 38.084 108.175 38.048 108.407 37.976C108.647 37.896 108.823 37.788 108.935 37.652C109.047 37.516 109.103 37.36 109.103 37.184C109.103 36.96 109.015 36.784 108.839 36.656C108.663 36.52 108.431 36.412 108.143 36.332C107.855 36.244 107.535 36.164 107.183 36.092C106.839 36.012 106.491 35.916 106.139 35.804C105.795 35.692 105.479 35.548 105.191 35.372C104.903 35.196 104.667 34.964 104.483 34.676C104.307 34.388 104.219 34.02 104.219 33.572C104.219 33.092 104.347 32.656 104.603 32.264C104.867 31.864 105.259 31.548 105.779 31.316C106.307 31.076 106.967 30.956 107.759 30.956C108.287 30.956 108.807 31.02 109.319 31.148C109.831 31.268 110.283 31.452 110.675 31.7L110.075 33.176C109.683 32.952 109.291 32.788 108.899 32.684C108.507 32.572 108.123 32.516 107.747 32.516C107.371 32.516 107.063 32.56 106.823 32.648C106.583 32.736 106.411 32.852 106.307 32.996C106.203 33.132 106.151 33.292 106.151 33.476C106.151 33.692 106.239 33.868 106.415 34.004C106.591 34.132 106.823 34.236 107.111 34.316C107.399 34.396 107.715 34.476 108.059 34.556C108.411 34.636 108.759 34.728 109.103 34.832C109.455 34.936 109.775 35.076 110.063 35.252C110.351 35.428 110.583 35.66 110.759 35.948C110.943 36.236 111.035 36.6 111.035 37.04C111.035 37.512 110.903 37.944 110.639 38.336C110.375 38.728 109.979 39.044 109.451 39.284C108.931 39.524 108.271 39.644 107.471 39.644Z"
            fill="#F0B90B"
          />
          <g filter="url(#filter0_i_1940_7780)">
            <path d="M15 33.5H50V37.5H19.5L15 33.5Z" fill="#F0B90B" />
          </g>
          <g filter="url(#filter1_i_1940_7780)">
            <path d="M149 33.5H114V37.5H144.5L149 33.5Z" fill="#F0B90B" />
          </g>
          <circle cx="71" cy="35.5" r="1" fill="#F0B90B" />
          <defs>
            <filter
              id="filter0_i_1940_7780"
              x="15"
              y="33.5"
              width="35"
              height="5"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1940_7780"
              />
            </filter>
            <filter
              id="filter1_i_1940_7780"
              x="114"
              y="33.5"
              width="35"
              height="5"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_1940_7780"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="space-x-4 font-Inter font-semibold text-[14px] leading-[14px] text-[#F6F6F6] flex items-center justify-center">
        <Link href="#">Popular</Link>
        <Link href="#">Favorites</Link>
      </div>

      <button onClick={openModal} className="text-lg hover:underline">
        <svg
          width="26"
          height="27"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 0.5C10.4288 0.5 7.91543 1.26244 5.77759 2.6909C3.63975 4.11935 1.97351 6.14968 0.989572 8.52512C0.0056327 10.9006 -0.251811 13.5144 0.249797 16.0362C0.751405 18.5579 1.98953 20.8743 3.80762 22.6924C5.6257 24.5105 7.94208 25.7486 10.4638 26.2502C12.9856 26.7518 15.5995 26.4944 17.9749 25.5104C20.3503 24.5265 22.3807 22.8603 23.8091 20.7224C25.2376 18.5846 26 16.0712 26 13.5C25.9964 10.0533 24.6256 6.74882 22.1884 4.31163C19.7512 1.87445 16.4467 0.50364 13 0.5ZM6.26001 22.1875C6.98342 21.0561 7.98001 20.125 9.15791 19.4801C10.3358 18.8351 11.6571 18.4971 13 18.4971C14.3429 18.4971 15.6642 18.8351 16.8421 19.4801C18.02 20.125 19.0166 21.0561 19.74 22.1875C17.8129 23.6862 15.4413 24.4999 13 24.4999C10.5587 24.4999 8.18709 23.6862 6.26001 22.1875ZM9.00001 12.5C9.00001 11.7089 9.2346 10.9355 9.67413 10.2777C10.1137 9.61992 10.7384 9.10723 11.4693 8.80448C12.2002 8.50173 13.0044 8.42252 13.7804 8.57686C14.5563 8.7312 15.269 9.11216 15.8284 9.67157C16.3878 10.231 16.7688 10.9437 16.9231 11.7196C17.0775 12.4956 16.9983 13.2998 16.6955 14.0307C16.3928 14.7616 15.8801 15.3864 15.2223 15.8259C14.5645 16.2654 13.7911 16.5 13 16.5C11.9391 16.5 10.9217 16.0786 10.1716 15.3284C9.42143 14.5783 9.00001 13.5609 9.00001 12.5ZM21.22 20.8013C20.1047 19.1851 18.5365 17.9348 16.7125 17.2075C17.6923 16.4358 18.4072 15.378 18.7579 14.1811C19.1086 12.9843 19.0776 11.7079 18.6693 10.5294C18.2609 9.351 17.4955 8.32911 16.4794 7.60586C15.4634 6.88262 14.2472 6.49397 13 6.49397C11.7528 6.49397 10.5366 6.88262 9.52058 7.60586C8.50452 8.32911 7.73909 9.351 7.33074 10.5294C6.92238 11.7079 6.8914 12.9843 7.24209 14.1811C7.59279 15.378 8.30774 16.4358 9.28751 17.2075C7.46353 17.9348 5.89529 19.1851 4.78001 20.8013C3.37072 19.2165 2.4496 17.2581 2.12756 15.1619C1.80553 13.0657 2.09631 10.9211 2.9649 8.98637C3.83349 7.05163 5.24285 5.40922 7.02326 4.25692C8.80368 3.10462 10.8792 2.49156 13 2.49156C15.1208 2.49156 17.1963 3.10462 18.9768 4.25692C20.7572 5.40922 22.1665 7.05163 23.0351 8.98637C23.9037 10.9211 24.1945 13.0657 23.8724 15.1619C23.5504 17.2581 22.6293 19.2165 21.22 20.8013Z"
            fill="#F6F6F6"
          />
        </svg>
        {isModalOpen && <ModalLogin onClose={closeModal} />}
      </button>
    </nav>
  );
}

export default Navbar;
