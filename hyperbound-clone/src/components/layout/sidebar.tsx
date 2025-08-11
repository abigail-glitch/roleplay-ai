"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Home, 
  Phone, 
  Users, 
  BarChart3, 
  Settings, 
  PlayCircle, 
  FileText,
  Target,
  Calendar,
  BookOpen
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Calls", href: "/calls", icon: Phone },
  { name: "Practice", href: "/practice", icon: PlayCircle },
  { name: "Scenarios", href: "/scenarios", icon: FileText },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Team", href: "/team", icon: Users },
  { name: "Goals", href: "/goals", icon: Target },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Library", href: "/library", icon: BookOpen },
  { name: "Settings", href: "/settings", icon: Settings },
]

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn("flex h-full w-64 flex-col border-r bg-background", className)}>
      <div className="flex h-16 items-center border-b px-6">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary"></div>
          <span className="text-xl font-semibold">Hyperbound</span>
        </div>
      </div>
      
      <ScrollArea className="flex-1 px-3 py-4">
        <div className="space-y-1">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.name} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3 px-3 py-2 text-sm font-medium",
                    isActive && "bg-secondary text-secondary-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            )
          })}
        </div>
      </ScrollArea>
    </div>
  )
}