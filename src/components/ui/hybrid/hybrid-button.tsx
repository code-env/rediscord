"use client";
import Link from "next/link";
import * as React from "react";

export type HybridButtonProps =
  | React.ComponentPropsWithoutRef<typeof Link>
  | React.ComponentPropsWithoutRef<"button">;

type HybridButtonRef = React.ElementRef<typeof Link> &
  React.ElementRef<"button">;

const HybridButton = React.forwardRef<HybridButtonRef, HybridButtonProps>(
  (props, ref) => {
    return "href" in props ? (
      <Link {...props} ref={ref} />
    ) : (
      <button {...props} ref={ref} />
    );
  },
);

HybridButton.displayName = "HybridButton";

export default HybridButton;
// export default function HybridButton({ ...props }: HybridButtonProps) {
//   return "href" in props ? <Link {...props} /> : <button {...props} />;
// }
