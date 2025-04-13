import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Award, Calendar, Edit, Medal, Settings, Star, Trophy, Upload } from "lucide-react"
import Link from "next/link"
import { DashboardNavigation } from "@/components/dashboard-navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

export default function ProfilePage() {
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

            <h1 className="text-2xl font-bold tracking-tight">Seu Perfil</h1>
            <p className="text-muted-foreground">Gerencie suas informações e acompanhe seu progresso</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-1">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="relative">
                  <Avatar className="h-24 w-24 border-4 border-secondary/30">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" />
                    <AvatarFallback className="text-2xl">MA</AvatarFallback>
                  </Avatar>
                  <Button size="icon" variant="secondary" className="absolute bottom-0 right-0 h-8 w-8 rounded-full">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Editar foto</span>
                  </Button>
                </div>

                <h2 className="mt-4 text-xl font-bold">Maria Oliveira</h2>
                <p className="text-sm text-muted-foreground">maria@exemplo.com</p>

                <div className="mt-6 w-full">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Nível 8</span>
                    <span>Nível 9</span>
                  </div>
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">750/1000 XP</p>
                </div>

                <div className="mt-6 flex justify-center gap-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold">42</div>
                    <p className="text-xs text-muted-foreground">Missões</p>
                  </div>
                  <Separator orientation="vertical" className="h-10" />
                  <div className="text-center">
                    <div className="text-2xl font-bold">850</div>
                    <p className="text-xs text-muted-foreground">Pontos</p>
                  </div>
                  <Separator orientation="vertical" className="h-10" />
                  <div className="text-center">
                    <div className="text-2xl font-bold">5</div>
                    <p className="text-xs text-muted-foreground">Conquistas</p>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="w-full space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/settings">
                      <Settings className="h-4 w-4 mr-2" />
                      Configurações
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Upload className="h-4 w-4 mr-2" />
                    Exportar Dados
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="md:col-span-2 space-y-6">
              <Tabs defaultValue="conquistas" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="conquistas">Conquistas</TabsTrigger>
                  <TabsTrigger value="estatisticas">Estatísticas</TabsTrigger>
                  <TabsTrigger value="historico">Histórico</TabsTrigger>
                </TabsList>

                <TabsContent value="conquistas">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Trophy className="h-5 w-5 mr-2 text-accent" />
                        Suas Conquistas
                      </CardTitle>
                      <CardDescription>Você desbloqueou 5 de 20 conquistas</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center p-3 border rounded-lg bg-accent/10">
                        <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                          <Medal className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-medium">Primeiro Passo</h3>
                          <p className="text-sm text-muted-foreground">Complete sua primeira missão</p>
                        </div>
                      </div>

                      <div className="flex items-center p-3 border rounded-lg bg-accent/10">
                        <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                          <Award className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-medium">Sala Impecável</h3>
                          <p className="text-sm text-muted-foreground">Complete 5 missões de limpeza da sala</p>
                        </div>
                      </div>

                      <div className="flex items-center p-3 border rounded-lg bg-accent/10">
                        <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                          <Trophy className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-medium">Cozinheiro Organizado</h3>
                          <p className="text-sm text-muted-foreground">Complete 3 missões de limpeza da cozinha</p>
                        </div>
                      </div>

                      <div className="flex items-center p-3 border rounded-lg bg-accent/10">
                        <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                          <Star className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-medium">Consistência é Tudo</h3>
                          <p className="text-sm text-muted-foreground">Complete missões por 3 dias seguidos</p>
                        </div>
                      </div>

                      <div className="flex items-center p-3 border rounded-lg bg-accent/10">
                        <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                          <Award className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-medium">Colecionador</h3>
                          <p className="text-sm text-muted-foreground">Acumule 100 pontos</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/rewards">Ver Todas as Conquistas</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="estatisticas">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Star className="h-5 w-5 mr-2 text-yellow-400" />
                        Estatísticas Pessoais
                      </CardTitle>
                      <CardDescription>Seu desempenho ao longo do tempo</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4 space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h3 className="text-sm font-medium">Missões por Categoria</h3>
                          <div className="space-y-1">
                            <div>
                              <div className="flex justify-between text-sm">
                                <span>Limpeza</span>
                                <span className="text-muted-foreground">18 missões</span>
                              </div>
                              <Progress value={45} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm">
                                <span>Organização</span>
                                <span className="text-muted-foreground">12 missões</span>
                              </div>
                              <Progress value={30} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm">
                                <span>Manutenção</span>
                                <span className="text-muted-foreground">8 missões</span>
                              </div>
                              <Progress value={15} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm">
                                <span>Outros</span>
                                <span className="text-muted-foreground">4 missões</span>
                              </div>
                              <Progress value={10} className="h-2" />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-sm font-medium">Dias Mais Produtivos</h3>
                          <div className="space-y-1">
                            <div>
                              <div className="flex justify-between text-sm">
                                <span>Sábado</span>
                                <span className="text-muted-foreground">12 missões</span>
                              </div>
                              <Progress value={80} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm">
                                <span>Domingo</span>
                                <span className="text-muted-foreground">10 missões</span>
                              </div>
                              <Progress value={70} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm">
                                <span>Quarta-feira</span>
                                <span className="text-muted-foreground">8 missões</span>
                              </div>
                              <Progress value={50} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm">
                                <span>Segunda-feira</span>
                                <span className="text-muted-foreground">6 missões</span>
                              </div>
                              <Progress value={40} className="h-2" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="text-sm font-medium mb-2">Tempo Médio por Missão</h3>
                        <div className="h-[150px] flex items-end justify-between gap-2">
                          {["Limpeza", "Organização", "Manutenção", "Outros"].map((category, i) => (
                            <div key={category} className="flex flex-col items-center gap-2">
                              <div
                                className="w-12 bg-primary/20 rounded-t-md"
                                style={{ height: `${[80, 60, 40, 30][i]}%` }}
                              ></div>
                              <span className="text-xs text-muted-foreground">{category}</span>
                              <span className="text-xs font-medium">{[25, 20, 15, 10][i]} min</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/statistics">Ver Estatísticas Detalhadas</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="historico">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-primary" />
                        Histórico de Atividades
                      </CardTitle>
                      <CardDescription>Suas atividades recentes</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        {[
                          {
                            date: "Hoje, 14:30",
                            action: "Completou a missão",
                            mission: "Lavar o banheiro",
                            points: 50,
                          },
                          { date: "Hoje, 10:15", action: "Completou a missão", mission: "Tirar o lixo", points: 15 },
                          {
                            date: "Ontem, 18:45",
                            action: "Ganhou a conquista",
                            mission: "Consistência é Tudo",
                            points: 100,
                          },
                          { date: "Ontem, 16:20", action: "Completou a missão", mission: "Lavar a roupa", points: 40 },
                          {
                            date: "Ontem, 09:30",
                            action: "Completou a missão",
                            mission: "Regar as plantas",
                            points: 10,
                          },
                          {
                            date: "3 dias atrás",
                            action: "Participou do desafio",
                            mission: "Cozinha Impecável",
                            points: 0,
                          },
                          {
                            date: "4 dias atrás",
                            action: "Completou a missão",
                            mission: "Limpar a geladeira",
                            points: 40,
                          },
                        ].map((activity, index) => (
                          <div key={index} className="flex items-start">
                            <div className="mr-4 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium">
                                  {activity.action}: <span className="text-muted-foreground">{activity.mission}</span>
                                </p>
                                {activity.points > 0 && (
                                  <Badge variant="outline" className="flex items-center">
                                    <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                                    <span>+{activity.points}</span>
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground">{activity.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/completed">Ver Histórico Completo</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
