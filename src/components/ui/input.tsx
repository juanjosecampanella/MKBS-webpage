import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & { label: string }
>(({ className, type = "text", label,value, onChange, id, ...props }, ref) => {
  const [isFocused, setIsFocused] = React.useState(false)

  const hasValue = value !== undefined && value !== null && value.toString().trim() !== ""

  return (
    <div className="relative w-full mt-4">
      <input
        id={id}
        type={type}
        ref={ref}
        className={cn(
          `peer w-full bg-transparent text-slate-700 text-base border border-slate-300 rounded-xl px-3 py-3 
           transition duration-300 ease focus:outline-none focus:border-blue-600 hover:border-blue-500 shadow-sm focus:shadow`,
          className
        )}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      <label
        htmlFor={id}
        className={cn(
          `absolute cursor-text bg-white px-1 left-3 transition-all transform origin-left duration-300`,
          (isFocused || hasValue)
            ? "-top-3 text-sm text-blue-600 scale-90" 
            : "top-3 text-base text-slate-500"        
        )}
      >
        {label}
      </label>
    </div>
  )
})

Input.displayName = "FloatingInput"

export { Input }

