export const Technology = ({ name }: { name: string }) => {
  return (
    <span className="dark:hover: dark:bg-darkblue-50 dark:hover:bg-lightblue-500 hover:dark:text-darkblue-50 dark:text-lightblue-500 rounded-xs bg-blue-200 px-2 py-[1px] text-xs font-semibold text-blue-800 !no-underline hover:cursor-default hover:bg-blue-100 hover:text-blue-600">
      {name}
    </span>
  )
}
