import { Skeleton, SkeletonText } from "@/components/Skeleton";

export default function Loading() {
  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Skeleton */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="space-y-8">
              <Skeleton className="h-4 w-52" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-3/4" />
              <SkeletonText lines={3} className="max-w-lg" />
              <div className="flex gap-4">
                <Skeleton className="h-12 w-36 rounded-lg" />
                <Skeleton className="h-12 w-36 rounded-lg" />
              </div>
              <div className="flex gap-4">
                <Skeleton className="w-12 h-12 rounded-lg" />
                <Skeleton className="w-12 h-12 rounded-lg" />
                <Skeleton className="w-12 h-12 rounded-lg" />
                <Skeleton className="w-12 h-12 rounded-lg" />
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              <Skeleton className="h-32 w-full max-w-md mx-auto rounded-xl" />
              <Skeleton className="aspect-[4/5] w-full max-w-md mx-auto rounded-2xl" />
              <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
                <Skeleton className="h-20 rounded-lg" />
                <Skeleton className="h-20 rounded-lg" />
                <Skeleton className="h-20 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Skeleton */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-16">
          <Skeleton className="h-4 w-32 mb-4" />
          <Skeleton className="h-12 w-full max-w-2xl mb-12" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <SkeletonText lines={6} />
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-32 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
