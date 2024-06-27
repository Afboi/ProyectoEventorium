// DetailDescription component displays a description with a title
export function DetailDescription({ description }) {
  return (
    <div className="flex flex-col items-start gap-5 border-2 border-bg-main w-[95%] h-[38.3rem] rounded-3xl p-4 dark:bg-not-so-dark-blue ">
      {/* Title */}
      <h1 className="border-b-4 border-[#018B8A] dark:border-orange">
        Description
      </h1>

      {/* Description content */}
      <p className="max-w-xl line-clamp-[15]"> {description} </p>
    </div>
  );
}
