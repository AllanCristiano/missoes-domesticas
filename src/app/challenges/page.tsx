import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Flag, Star, Trophy, Users } from "lucide-react"
import Link from "next/link"
import { DashboardNavigation } from "@/components/dashboard-navigation"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ChallengesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col md:flex-row">
        <DashboardNavigation />

        <main className="flex-1 p-4 md:p-6">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link href="/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para o Dashboard
              </Link>
            </Button>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Desafios Especiais</h1>
                <p className="text-muted-foreground">Participe de desafios para ganhar recompensas exclusivas</p>
              </div>

              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Trophy className="h-4 w-4 mr-2" />
                Ver Ranking
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-primary text-primary-foreground">Em Destaque</Badge>
                  <Badge variant="outline" className="bg-white/50 backdrop-blur-sm">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>5 dias restantes</span>
                  </Badge>
                </div>
                <CardTitle className="text-xl mt-2">Desafio da Primavera</CardTitle>
                <CardDescription>Prepare sua casa para a nova estação</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm">
                    Complete todas as missões de limpeza e organização para preparar sua casa para a primavera. Ganhe
                    pontos extras e recompensas exclusivas!
                  </p>

                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Progresso</span>
                      <span>2/7 missões</span>
                    </div>
                    <Progress value={28} className="h-2" />
                  </div>

                  <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 space-y-2">
                    <h4 className="font-medium text-sm">Recompensas:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="flex items-center bg-white/50">
                        <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                        <span>300 pontos</span>
                      </Badge>
                      <Badge variant="outline" className="flex items-center bg-white/50">
                        <Trophy className="h-3 w-3 mr-1 text-accent" />
                        <span>Conquista exclusiva</span>
                      </Badge>
                      <Badge variant="outline" className="flex items-center bg-white/50">
                        <Flag className="h-3 w-3 mr-1 text-secondary" />
                        <span>Dia de folga</span>
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">128 participantes</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Participar do Desafio
                </Button>
              </CardFooter>
            </Card>

            <h2 className="text-lg font-medium mt-8 mb-4">Outros Desafios</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-secondary text-secondary-foreground">Semanal</Badge>
                    <Badge variant="outline">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>2 dias restantes</span>
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mt-2">Cozinha Impecável</CardTitle>
                  <CardDescription>Deixe sua cozinha brilhando</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm">
                      Complete todas as missões relacionadas à limpeza e organização da cozinha em tempo recorde.
                    </p>

                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Progresso</span>
                        <span>1/3 missões</span>
                      </div>
                      <Progress value={33} className="h-2" />
                    </div>

                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">64 participantes</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Participar</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-accent text-accent-foreground">Mensal</Badge>
                    <Badge variant="outline">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>15 dias restantes</span>
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mt-2">Maratona de Organização</CardTitle>
                  <CardDescription>Organize todos os cômodos da casa</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm">
                      Complete missões de organização em todos os cômodos da casa durante o mês para ganhar recompensas
                      especiais.
                    </p>

                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Progresso</span>
                        <span>3/10 missões</span>
                      </div>
                      <Progress value={30} className="h-2" />
                    </div>

                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">92 participantes</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Participar</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-secondary text-secondary-foreground">Semanal</Badge>
                    <Badge variant="outline">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>4 dias restantes</span>
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mt-2">Limpeza Rápida</CardTitle>
                  <CardDescription>Complete missões em tempo recorde</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm">
                      Complete 5 missões de limpeza rápida em menos de 1 hora no total para ganhar pontos extras.
                    </p>

                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Progresso</span>
                        <span>0/5 missões</span>
                      </div>
                      <Progress value={0} className="h-2" />
                    </div>

                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">45 participantes</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Participar</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-primary text-primary-foreground">Especial</Badge>
                    <Badge variant="outline">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>10 dias restantes</span>
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mt-2">Desafio em Equipe</CardTitle>
                  <CardDescription>Convide amigos para limpar juntos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm">
                      Convide amigos para o aplicativo e complete missões juntos para ganhar pontos em dobro.
                    </p>

                    <div className="flex -space-x-2 mb-2">
                      <Avatar className="border-2 border-background">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>CD</AvatarFallback>
                      </Avatar>
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground text-xs border-2 border-background">
                        +2
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Progresso da Equipe</span>
                        <span>5/20 missões</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Convidar Amigos</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
