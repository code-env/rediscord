import { BsChatRightFill, BsGithub, BsInboxFill } from "react-icons/bs";
import Header from "../header";
import Divider from "@/components/ui/divider";
import React from "react";
import clsx from "@/lib/clsx";
import HybridButton, {
  HybridButtonProps,
} from "@/components/ui/hybrid/hybrid-button";

interface PageHeader {
  children: React.ReactNode;
}

type PageHeaderButtonProps = {} & HybridButtonProps;
const PageHeaderButton = ({
  children,
  className,
  ...props
}: PageHeaderButtonProps) => (
  <HybridButton
    className={clsx("text-gray-300 hover:text-gray-200")}
    {...props}
  >
    {children}
  </HybridButton>
);

export default function PageHeader({ children }: PageHeader) {
  return (
    <Header className="justify-between">
      {children}
      <div className="flex items-center gap-6">
        <PageHeaderButton>
          <BsChatRightFill fontSize={18} />
        </PageHeaderButton>
        <Divider vertical />
        <PageHeaderButton>
          <BsInboxFill fontSize={20} />
        </PageHeaderButton>
        <PageHeaderButton
          href="https://github.com/igorm84/rediscord"
          target="_blank"
        >
          <BsGithub fontSize={20} />
        </PageHeaderButton>
      </div>
    </Header>
  );
}
