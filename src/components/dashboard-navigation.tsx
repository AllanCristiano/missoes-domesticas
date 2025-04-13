"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Award, Calendar, Home, LogOut, Menu, MessageSquare, Settings, Star, Trophy, User } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function DashboardNavigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const routes = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "Missões",
      href: "/missions",
      icon: Calendar,
    },
    {
      name: "Recompensas",
      href: "/rewards",
      icon: Trophy,
    },
    {
      name: "Conquistas",
      href: "/achievements",
      icon: Award,
    },
    {
      name: "Comunidade",
      href: "/community",
      icon: MessageSquare,
    },
    {
      name: "Perfil",
      href: "/profile",
      icon: User,
    },
    {
      name: "Configurações",
      href: "/settings",
      icon: Settings,
    },
  ]

  return (
    <>
      <div className="md:hidden flex items-center h-16 px-4 border-b bg-card">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                    <Star className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="font-semibold">Missões Domésticas</h2>
                    <p className="text-xs text-muted-foreground">Transforme a limpeza em diversão</p>
                  </div>
                </div>
              </div>
              <nav className="flex-1 p-2">
                <div className="space-y-1">
                  {routes.map((route) => (
                    <Button
                      key={route.href}
                      variant={pathname === route.href ? "secondary" : "ghost"}
                      className={cn(
                        "w-full justify-start",
                        pathname === route.href && "bg-secondary text-secondary-foreground",
                      )}
                      asChild
                      onClick={() => setOpen(false)}
                    >
                      <Link href={route.href}>
                        <route.icon className="h-4 w-4 mr-2" />
                        {route.name}
                      </Link>
                    </Button>
                  ))}
                </div>
              </nav>
              <div className="p-4 border-t">
                <Button variant="ghost" className="w-full justify-start text-muted-foreground" asChild>
                  <Link href="/">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sair
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2 mx-auto">
          <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
            <Star className="h-3 w-3 text-primary-foreground" />
          </div>
          <h2 className="font-semibold">Missões Domésticas</h2>
        </div>
      </div>

      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col h-full border-r bg-card">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <Star className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-semibold">Missões Domésticas</h2>
                <p className="text-xs text-muted-foreground">Transforme a limpeza em diversão</p>
              </div>
            </div>
          </div>
          <nav className="flex-1 p-2 overflow-y-auto">
            <div className="space-y-1">
              {routes.map((route) => (
                <Button
                  key={route.href}
                  variant={pathname === route.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    pathname === route.href && "bg-secondary text-secondary-foreground",
                  )}
                  asChild
                >
                  <Link href={route.href}>
                    <route.icon className="h-4 w-4 mr-2" />
                    {route.name}
                  </Link>
                </Button>
              ))}
            </div>
          </nav>
          <div className="p-4 border-t">
            <Button variant="ghost" className="w-full justify-start text-muted-foreground" asChild>
              <Link href="/">
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="md:pl-64">{/* Espaço para o conteúdo principal */}</div>
    </>
  )
}
