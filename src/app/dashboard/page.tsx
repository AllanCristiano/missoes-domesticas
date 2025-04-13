import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { DashboardNavigation } from "@/components/dashboard-navigation"
import { MissionCard } from "@/components/mission-card"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col md:flex-row">
        <DashboardNavigation />

        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Olá, Maria!</h1>
                <p className="text-muted-foreground">Vamos deixar sua casa brilhando hoje?</p>
              </div>
              <Avatar className="h-10 w-10 border-2 border-secondary">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@maria" />
                <AvatarFallback className="bg-primary text-primary-foreground">MA</AvatarFallback>
              </Avatar>
            </div>

            <Card className="bg-gradient-to-r from-primary/20 to-accent/20 border-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Seu progresso diário</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">2 de 5 missões concluídas</span>
                  <Badge variant="outline" className="bg-white/50 backdrop-blur-sm">
                    <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                    <span>120 pontos</span>
                  </Badge>
                </div>
                <Progress value={40} className="h-2 bg-white/50" />
              </CardContent>
              <CardFooter className="pt-0">
                <p className="text-sm italic text-muted-foreground">&quot;Pequenos passos levam a grandes conquistas!&quot;</p>
              </CardFooter>
            </Card>

            <Tabs defaultValue="hoje" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="hoje">Hoje</TabsTrigger>
                <TabsTrigger value="pendentes">Pendentes</TabsTrigger>
                <TabsTrigger value="concluidas">Concluídas</TabsTrigger>
              </TabsList>

              <TabsContent value="hoje" className="space-y-4">
                <MissionCard
                  title="Organizar a sala"
                  description="Arrume os objetos, limpe o pó e passe o aspirador"
                  points={30}
                  timeEstimate="20 min"
                  status="pending"
                />

                <MissionCard
                  title="Limpar a cozinha"
                  description="Lave a louça, limpe o fogão e organize a bancada"
                  points={45}
                  timeEstimate="30 min"
                  status="pending"
                />

                <MissionCard
                  title="Lavar o banheiro"
                  description="Limpe o vaso, a pia e o box do chuveiro"
                  points={50}
                  timeEstimate="25 min"
                  status="completed"
                />

                <MissionCard
                  title="Tirar o lixo"
                  description="Recolha o lixo de todos os cômodos e leve para fora"
                  points={15}
                  timeEstimate="5 min"
                  status="completed"
                />

                <MissionCard
                  title="Organizar o quarto"
                  description="Arrume a cama, guarde as roupas e limpe o pó"
                  points={35}
                  timeEstimate="15 min"
                  status="pending"
                />
              </TabsContent>

              <TabsContent value="pendentes" className="space-y-4">
                <MissionCard
                  title="Organizar a sala"
                  description="Arrume os objetos, limpe o pó e passe o aspirador"
                  points={30}
                  timeEstimate="20 min"
                  status="pending"
                />

                <MissionCard
                  title="Limpar a cozinha"
                  description="Lave a louça, limpe o fogão e organize a bancada"
                  points={45}
                  timeEstimate="30 min"
                  status="pending"
                />

                <MissionCard
                  title="Organizar o quarto"
                  description="Arrume a cama, guarde as roupas e limpe o pó"
                  points={35}
                  timeEstimate="15 min"
                  status="pending"
                />
              </TabsContent>

              <TabsContent value="concluidas" className="space-y-4">
                <MissionCard
                  title="Lavar o banheiro"
                  description="Limpe o vaso, a pia e o box do chuveiro"
                  points={50}
                  timeEstimate="25 min"
                  status="completed"
                />

                <MissionCard
                  title="Tirar o lixo"
                  description="Recolha o lixo de todos os cômodos e leve para fora"
                  points={15}
                  timeEstimate="5 min"
                  status="completed"
                />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
