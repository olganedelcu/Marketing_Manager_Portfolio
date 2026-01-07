import * as React from "react"
import { cn } from "@/lib/utils"

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-transparent bg-secondary text-secondary-foreground px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap",
        className
      )}
      {...props}
    />
  )
}

export { Badge }
