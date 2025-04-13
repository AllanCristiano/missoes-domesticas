import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, Star } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface MissionCardProps {
  title: string
  description: string
  points: number
  timeEstimate: string
  status: "pending" | "completed" | "in-progress"
}

export function MissionCard({ title, description, points, timeEstimate, status }: MissionCardProps) {
  return (
    <Card
      className={cn(
        "transition-all",
        status === "completed" && "bg-muted/30 border-muted",
        status === "in-progress" && "border-secondary",
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center">
              <h3 className={cn("font-medium text-lg", status === "completed" && "text-muted-foreground line-through")}>
                {title}
              </h3>
              {status === "completed" && <CheckCircle2 className="h-5 w-5 ml-2 text-secondary" />}
            </div>
            <p className={cn("text-sm text-muted-foreground mt-1", status === "completed" && "line-through")}>
              {description}
            </p>
            <div className="flex items-center mt-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              <span>{timeEstimate}</span>
            </div>
          </div>
          <Badge
            className={cn(
              "ml-2",
              status === "completed" ? "bg-muted text-muted-foreground" : "bg-secondary/20 text-secondary-foreground",
            )}
          >
            <Star
              className={cn(
                "h-3 w-3 mr-1",
                status === "completed" ? "text-muted-foreground" : "fill-yellow-400 text-yellow-400",
              )}
            />
            <span>{points} pontos</span>
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="p-2 pt-0">
        {status === "completed" ? (
          <Button variant="ghost" size="sm" className="ml-auto text-xs" asChild>
            <Link href={`/mission/1`}>Ver detalhes</Link>
          </Button>
        ) : (
          <div className="flex gap-2 ml-auto">
            <Button variant="outline" size="sm" className="text-xs" asChild>
              <Link href={`/mission/1`}>Ver detalhes</Link>
            </Button>
            <Button size="sm" className="text-xs bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Iniciar
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
