export function PenTool(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      width={15}
      height={22}
      viewBox="0 0 15 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.142 1.357l6.482 10.607-3.536 5.303H4.196L.66 11.964 7.142 1.357zm0 0v8.94m-4.125 6.97h8.25v3.535h-8.25v-3.535zm5.304-4.125a1.667 1.667 0 11-2.357-2.357 1.667 1.667 0 012.357 2.357z"
        stroke="#4B5563"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
