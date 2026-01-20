import { Skeleton } from "@/components/ui/skeleton";

function ExamQuestionSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-4 w-[100px]" />
      {/* border-2 border-solid border-gray-200/50 */}

      <div className="rounded-8px space-y-6 bg-white p-4">
        <Skeleton className="h-3 w-[300px] md:w-[500px]" />

        <div className="space-y-3">
          <div className="flex content-center items-center gap-2">
            <Skeleton className="size-3 rounded-full" />
            <Skeleton className="h-3 w-[200px] md:w-[300px]" />
          </div>
          <div className="flex content-center items-center gap-2">
            <Skeleton className="size-3 rounded-full" />
            <Skeleton className="h-3 w-[200px] md:w-[300px]" />
          </div>
          <div className="flex content-center items-center gap-2">
            <Skeleton className="size-3 rounded-full" />
            <Skeleton className="h-3 w-[200px] md:w-[300px]" />
          </div>
          <div className="flex content-center items-center gap-2">
            <Skeleton className="size-3 rounded-full" />
            <Skeleton className="h-3 w-[200px] md:w-[300px]" />
          </div>
        </div>
      </div>

      <div className="rounded-8px space-y-6 bg-white p-4">
        <Skeleton className="h-3 w-[300px] md:w-[500px]" />

        <div className="space-y-3">
          <Skeleton className="h-8 w-[200px] md:w-[300px]" />
        </div>
      </div>

      <div className="rounded-8px space-y-6 bg-white p-4">
        <Skeleton className="h-3 w-[300px] md:w-[500px]" />

        <div className="space-y-3">
          <div className="flex content-center items-center gap-2">
            <Skeleton className="size-3 rounded-full" />
            <Skeleton className="h-3 w-[200px] md:w-[300px]" />
          </div>
          <div className="flex content-center items-center gap-2">
            <Skeleton className="size-3 rounded-full" />
            <Skeleton className="h-3 w-[200px] md:w-[300px]" />
          </div>
          <div className="flex content-center items-center gap-2">
            <Skeleton className="size-3 rounded-full" />
            <Skeleton className="h-3 w-[200px] md:w-[300px]" />
          </div>
          <div className="flex content-center items-center gap-2">
            <Skeleton className="size-3 rounded-full" />
            <Skeleton className="h-3 w-[200px] md:w-[300px]" />
          </div>
        </div>
      </div>

      <div className="rounded-8px space-y-6 bg-white p-4">
        <Skeleton className="h-3 w-[300px] md:w-[500px]" />

        <div className="space-y-3">
          <Skeleton className="h-8 w-[200px] md:w-[300px]" />
        </div>
      </div>
    </div>
  );
}

export { ExamQuestionSkeleton };
