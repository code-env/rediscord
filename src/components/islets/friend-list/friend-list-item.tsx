"use client";
import React from "react";
import Avatar from "@/components/ui/avatar";
import RoundedButton from "@/components/ui/button/rounded-button";
import { ListItem } from "@/components/ui/list";
import { User } from "@/lib/entities/user";
import { t } from "@/lib/i18n";
import { BsChatLeftFill, BsThreeDotsVertical } from "react-icons/bs";

interface FriendListItemProps {
  friend: User;
}

export default function FriendListItem({ friend }: FriendListItemProps) {
  return (
    <ListItem
      href={`/channels/${friend.id}`}
      className="group justify-between border-t-[1px] border-gray-800 py-2.5 pr-3"
      noVerticalPadding
    >
      <div className="flex items-center gap-3">
        <Avatar
          src={friend.avatar}
          alt={friend.name}
          className="flex-none"
          status={friend.status}
        />
        <div className="flex-1 leading-4">
          <div className="flex items-center gap-1.5 text-sm text-gray-200">
            <span className="font-semibold">{friend.name}</span>
            <span className="hidden text-xs text-gray-400 group-hover:block">
              {friend.username}
            </span>
          </div>
          <div className="text-[13px] text-gray-300">
            {t(`user.status.${friend.status}`)}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2.5">
        <RoundedButton tooltipContent="Message">
          <BsChatLeftFill />
        </RoundedButton>
        <RoundedButton tooltipContent="More">
          <BsThreeDotsVertical />
        </RoundedButton>
      </div>
    </ListItem>
  );
}
