export function AppIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      width={96}
      height={97}
      viewBox="0 0 96 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_2751)">
        <rect y={0.5} width={96} height={96} rx={20} fill="#4D342C" />
        <path
          d="M0 16.5C0 7.663 7.163.5 16 .5h64c8.837 0 16 7.163 16 16v40c0 22.091-17.909 40-40 40H16c-8.837 0-16-7.163-16-16v-64z"
          fill="#6D4637"
        />
        <g opacity={0.5} filter="url(#filter0_f_1_2751)">
          <ellipse
            cx={72.3115}
            cy={79.3115}
            rx={9.4199}
            ry={39.1039}
            transform="rotate(45 72.311 79.311)"
            fill="#000"
          />
        </g>
        <g filter="url(#filter1_i_1_2751)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M44 96.5v-26h26v12c0 7.732-6.268 14-14 14h1c21.54 0 39-17.46 39-39v-1c0 7.732-6.268 14-14 14H70v-26h26-26v26H44v26zm26-26V81.43c.038-6.019 4.91-10.89 10.929-10.929H70z"
            fill="url(#paint0_linear_1_2751)"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 36.2c11.4 1.81 20.3 7.242 24 11.098 3.7-3.856 12.6-9.288 24-11.098v5.7c-9.9 1.34-16.7 5.466-24 11.3-7.3-5.834-14.1-9.96-24-11.3v-5.7z"
          fill="#fff"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 47.443c11.4 1.811 20.3 7.344 24 11.2v5.7-5.7c3.7-3.856 12.6-9.389 24-11.2v5.7c-9.9 1.342-16.7 5.466-24 11.3-7.3-5.834-14.1-9.958-24-11.3v.194-5.894z"
          fill="#fff"
        />
        <path
          d="M48 33.5l.99.99a4.6 4.6 0 010 6.505l-.99.99-.99-.99a4.6 4.6 0 010-6.505l.99-.99z"
          fill="#fff"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1_2751"
          x={15.8634}
          y={22.8633}
          width={112.896}
          height={112.896}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation={14} result="effect1_foregroundBlur_1_2751" />
        </filter>
        <filter
          id="filter1_i_1_2751"
          x={44}
          y={44.5}
          width={53}
          height={53}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={1} dy={1} />
          <feGaussianBlur stdDeviation={0.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.921569 0 0 0 0 0.996078 0 0 0 0 0.964706 0 0 0 0.8 0" />
          <feBlend in2="shape" result="effect1_innerShadow_1_2751" />
        </filter>
        <linearGradient
          id="paint0_linear_1_2751"
          x1={75.5}
          y1={75.5}
          x2={86.5}
          y2={86.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ECE9E8" />
          <stop offset={1} stopColor="#8C7B74" />
        </linearGradient>
        <clipPath id="clip0_1_2751">
          <rect y={0.5} width={96} height={96} rx={20} fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}
