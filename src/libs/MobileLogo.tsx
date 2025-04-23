export function MobileLogo(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      width={24}
      height={18}
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2.396c5.7.936 10.15 3.745 12 5.739 1.85-1.994 6.3-4.803 12-5.739v2.947c-4.95.694-8.35 2.827-12 5.843C8.35 8.17 4.95 6.036 0 5.343V2.396z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8.21c5.7.936 10.15 3.796 12 5.79v2.948V14c1.85-1.994 6.3-4.855 12-5.792v2.948c-4.95.693-8.35 2.826-12 5.843-3.65-3.017-7.05-5.15-12-5.843v.1V8.21z"
        fill="#fff"
      />
      <path
        d="M12 1l.495.512a2.436 2.436 0 010 3.364L12 5.388l-.495-.512a2.436 2.436 0 010-3.364L12 1z"
        fill="#fff"
      />
    </svg>
  );
}
