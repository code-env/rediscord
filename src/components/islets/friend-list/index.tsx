"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import InputField from "@/components/ui/input/input-field";
import { List } from "@/components/ui/list";
import { TooltipProvider } from "@/components/ui/tooltip";
import { User, UserStatuses } from "@/lib/entities/user";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import { useFriendsTabStore } from "@/state/friends-tab";
import FriendListItem from "./friend-list-item";
import { normalizedCompare } from "@/lib/utils/string";

const tabProps: Record<
  string,
  {
    title: string;
    status: UserStatuses[];
  }
> = {
  Available: {
    title: "ONLINE",
    status: [
      UserStatuses.Online,
      UserStatuses.DND,
      UserStatuses.Mobile,
      UserStatuses.Idle,
    ],
  },
  All: {
    title: "ALL YOUR FRIENDS",
    status: Object.values(UserStatuses),
  },
  Pending: {
    title: "PENDING",
    status: [],
  },
  Blocked: {
    title: "BLOCKED",
    status: [],
  },
};

export default function FriendList({ friends }: { friends: User[] }) {
  const [search, setSearch] = React.useState("");
  const { currentTab } = useFriendsTabStore();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const currentTabProp = tabProps[currentTab];
  const filteredList = friends.filter(
    (friend) =>
      currentTabProp.status.includes(friend.status) &&
      (!search || normalizedCompare(friend.name, search)),
  );
  return (
    <>
      <div className="px-2 pb-5">
        <InputField endIcon={<BsSearch />}>
          <Input placeholder="Search" onChange={handleSearchChange} />
        </InputField>
        <div className="mt-6 text-xs font-semibold text-gray-400">
          {currentTabProp.title} — {filteredList.length}
        </div>
      </div>
      <TooltipProvider>
        <List className="flex-1 overflow-y-auto pb-4">
          {!!filteredList.length ? (
            filteredList.map((friend) => (
              <FriendListItem key={friend.id} friend={friend} />
            ))
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center">
              <Image
                width={300}
                height={300}
                src="/NotFoundSearching.svg"
                alt="Not Found friends"
              />
              <div className="mt-4 text-gray-400">
                we cat&apos;t find anyone with that name :(
              </div>
            </div>
          )}
        </List>
      </TooltipProvider>
    </>
  );
}
