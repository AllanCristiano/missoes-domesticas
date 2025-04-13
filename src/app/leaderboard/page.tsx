import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Medal, Star, Trophy, Users } from "lucide-react"
import Link from "next/link"
import { DashboardNavigation } from "@/components/dashboard-navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LeaderboardPage() {
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
                <h1 className="text-2xl font-bold tracking-tight">Ranking</h1>
                <p className="text-muted-foreground">Veja quem está liderando as missões domésticas</p>
              </div>

              <div className="flex gap-2">
                <Select defaultValue="month">
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">Esta semana</SelectItem>
                    <SelectItem value="month">Este mês</SelectItem>
                    <SelectItem value="year">Este ano</SelectItem>
                    <SelectItem value="all">Todo o período</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Tabs defaultValue="global" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="global">Ranking Global</TabsTrigger>
              <TabsTrigger value="friends">Amigos</TabsTrigger>
            </TabsList>

            <TabsContent value="global">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <Card className="relative overflow-hidden border-2 border-accent/30">
                    <div className="absolute top-0 right-0">
                      <Badge className="rounded-bl-lg rounded-tr-lg bg-accent text-accent-foreground">2º Lugar</Badge>
                    </div>
                    <CardContent className="pt-12 pb-8 flex flex-col items-center">
                      <Avatar className="h-20 w-20 border-4 border-accent/30">
                        <AvatarImage src="/placeholder.svg?height=80&width=80" />
                        <AvatarFallback className="text-2xl">JD</AvatarFallback>
                      </Avatar>
                      <h3 className="mt-4 text-lg font-bold">João Silva</h3>
                      <p className="text-sm text-muted-foreground">Nível 18</p>
                      <div className="mt-4 flex items-center">
                        <Medal className="h-5 w-5 mr-2 text-accent" />
                        <span className="font-bold">1.850 pontos</span>
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">42 missões concluídas</p>
                    </CardContent>
                  </Card>

                  <Card className="relative overflow-hidden border-2 border-primary/30">
                    <div className="absolute top-0 right-0">
                      <Badge className="rounded-bl-lg rounded-tr-lg bg-primary text-primary-foreground">1º Lugar</Badge>
                    </div>
                    <CardContent className="pt-12 pb-8 flex flex-col items-center">
                      <div className="absolute top-0 left-0 right-0 h-2 bg-primary"></div>
                      <Avatar className="h-24 w-24 border-4 border-primary/30">
                        <AvatarImage src="/placeholder.svg?height=96&width=96" />
                        <AvatarFallback className="text-2xl">MA</AvatarFallback>
                      </Avatar>
                      <h3 className="mt-4 text-lg font-bold">Maria Oliveira</h3>
                      <p className="text-sm text-muted-foreground">Nível 22</p>
                      <div className="mt-4 flex items-center">
                        <Trophy className="h-5 w-5 mr-2 text-primary fill-yellow-400" />
                        <span className="font-bold">2.250 pontos</span>
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">56 missões concluídas</p>
                    </CardContent>
                  </Card>

                  <Card className="relative overflow-hidden border-2 border-secondary/30">
                    <div className="absolute top-0 right-0">
                      <Badge className="rounded-bl-lg rounded-tr-lg bg-secondary text-secondary-foreground">
                        3º Lugar
                      </Badge>
                    </div>
                    <CardContent className="pt-12 pb-8 flex flex-col items-center">
                      <Avatar className="h-20 w-20 border-4 border-secondary/30">
                        <AvatarImage src="/placeholder.svg?height=80&width=80" />
                        <AvatarFallback className="text-2xl">CA</AvatarFallback>
                      </Avatar>
                      <h3 className="mt-4 text-lg font-bold">Carlos Almeida</h3>
                      <p className="text-sm text-muted-foreground">Nível 15</p>
                      <div className="mt-4 flex items-center">
                        <Medal className="h-5 w-5 mr-2 text-secondary" />
                        <span className="font-bold">1.620 pontos</span>
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">38 missões concluídas</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Users className="h-5 w-5 mr-2 text-muted-foreground" />
                      Classificação Geral
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      {[
                        { position: 4, name: "Ana Santos", level: 14, points: 1480, missions: 35 },
                        { position: 5, name: "Pedro Costa", level: 13, points: 1350, missions: 32 },
                        { position: 6, name: "Luísa Ferreira", level: 12, points: 1220, missions: 30 },
                        { position: 7, name: "Ricardo Martins", level: 11, points: 1150, missions: 28 },
                        { position: 8, name: "Sofia Ribeiro", level: 10, points: 980, missions: 25 },
                        { position: 9, name: "Miguel Sousa", level: 9, points: 920, missions: 23 },
                        { position: 10, name: "Beatriz Lima", level: 8, points: 850, missions: 20 },
                      ].map((user) => (
                        <div
                          key={user.position}
                          className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-md"
                        >
                          <div className="flex items-center">
                            <Badge className="mr-3 bg-muted text-muted-foreground">{user.position}</Badge>
                            <Avatar className="h-8 w-8 mr-2">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" />
                              <AvatarFallback>
                                {user.name.charAt(0)}
                                {user.name.split(" ")[1].charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-xs text-muted-foreground">Nível {user.level}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Badge variant="outline" className="flex items-center mr-2">
                              <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                              <span>{user.points}</span>
                            </Badge>
                            <span className="text-xs text-muted-foreground">{user.missions} missões</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="friends">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center">
                      <Users className="h-5 w-5 mr-2 text-accent" />
                      Seus Amigos
                    </CardTitle>
                    <Button size="sm" variant="outline">
                      Convidar Amigos
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    {[
                      { position: 1, name: "João Silva", level: 18, points: 1850, missions: 42 },
                      { position: 2, name: "Ana Santos", level: 14, points: 1480, missions: 35 },
                      { position: 3, name: "Pedro Costa", level: 13, points: 1350, missions: 32 },
                      { position: 4, name: "Sofia Ribeiro", level: 10, points: 980, missions: 25 },
                      { position: 5, name: "Você", level: 8, points: 850, missions: 20, isYou: true },
                    ].map((user) => (
                      <div
                        key={user.position}
                        className={`flex items-center justify-between p-2 rounded-md ${
                          user.isYou ? "bg-secondary/10 border border-secondary/30" : "hover:bg-muted/50"
                        }`}
                      >
                        <div className="flex items-center">
                          <Badge
                            className={`mr-3 ${
                              user.isYou ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {user.position}
                          </Badge>
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" />
                            <AvatarFallback>
                              {user.isYou ? "VC" : `${user.name.charAt(0)}${user.name.split(" ")[1].charAt(0)}`}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-xs text-muted-foreground">Nível {user.level}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Badge variant="outline" className="flex items-center mr-2">
                            <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                            <span>{user.points}</span>
                          </Badge>
                          <span className="text-xs text-muted-foreground">{user.missions} missões</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
