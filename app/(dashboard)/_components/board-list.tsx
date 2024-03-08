"use client";

import { EmptyBoards } from "./empty-board";
import { EmptyFavorites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";

interface BoardListProps {
  orgId?: string;
  query?: {
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
  if (!data?.length && query?.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query?.favorites) {
    return <EmptyFavorites/>;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return <div>Board Listssssssssss</div>;
};

export default BoardList;
