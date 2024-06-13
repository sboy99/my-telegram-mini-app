"use client";

import { useTma } from "./tma/hook";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Me() {
  const { user } = useTma();

  return (
    <div className="flex items-center">
      <Avatar className="p-2 w-12 h-12">
        <AvatarImage src={user?.photoUrl} />
        <AvatarFallback>{user?.firstName?.[0]}</AvatarFallback>
      </Avatar>
      <div className="text-sm font-medium">{user?.firstName}</div>
    </div>
  );
}
