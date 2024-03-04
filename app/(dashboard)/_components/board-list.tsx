"use client";

import { useQuery } from "convex/react";
import React from "react";
import { api } from "@/convex/_generated/api";
import { EmptySearch } from "./empty-search";
import { EmptyFavorites } from "./empty-favorites";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}
const BoardList = ({ orgId, query }: BoardListProps) => {
  // const data = useQuery(api.boards.get, {
  //   orgId,
  //   ...query,
  // });
  const data = []
  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavorites/>;
  }

  // if (!data?.length) {
  //   return <EmptyBoards />;
  // }

  return <div>Board List</div>;
};

export default BoardList;
