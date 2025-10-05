import { useEffect, useRef } from "react";
import TwittCard from "@/components/ui/twittCard";
import { sortedByLatest } from "@/utils/common";
import { useNavigate } from "@tanstack/react-router";
import { routeTwittView } from "@/utils/routePaths";
import { useTwittList } from "@/hook/useTwittList";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";

export default function TwittList() {
  const navigate = useNavigate();
  const loadingTarget = useRef<HTMLDivElement | null>(null);
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useTwittList();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (hasNextPage && entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      {
        threshold: 1,
      }
    );

    if (loadingTarget.current) {
      observer.observe(loadingTarget.current);
    }

    return () => {
      if (loadingTarget.current) {
        observer.unobserve(loadingTarget.current);
      }
    };
  }, [loadingTarget, hasNextPage, fetchNextPage]);

  if (isLoading) {
    return <span className="text-center block mt-4">Loading...</span>;
  }

  if (!data || data.length === 0) {
    return (
      <Empty className="border-1 text-shadow-blue-50">
        <EmptyHeader>
          <EmptyTitle>No Twitts Yet</EmptyTitle>
          <EmptyDescription>
            You have not created any twitt yet. Get started by creating your
            first twitt.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  const sortedData = sortedByLatest(data, "updatedAt");

  const goToTwittDetail = (id: string) => {
    navigate({ to: routeTwittView, params: { id } });
  };

  return (
    <div className="flex flex-col gap-4">
      {sortedData.map((twitt) => (
        <TwittCard
          twitt={twitt}
          onCardClick={() => goToTwittDetail(twitt._id)}
          key={twitt._id}
        />
      ))}
      {hasNextPage && !isFetchingNextPage && (
        <div className="flex justify-center mt-4 text-gray-400">
          <span>Scroll down to load more</span>
        </div>
      )}
      {isFetchingNextPage && (
        <span
          className={
            "block mx-auto w-12 h-12 border-8 border-blue-700 rounded-full border-t-transparent animate-spin"
          }
        ></span>
      )}

      <div ref={loadingTarget} className="mt-[5rem]"></div>
    </div>
  );
}
