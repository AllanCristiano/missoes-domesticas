import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BarChart3, CheckCircle2, Clock, LineChart, PieChart, Star, TrendingUp } from "lucide-react"
import Link from "next/link"
import { DashboardNavigation } from "@/components/dashboard-navigation"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function StatisticsPage() {
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
                <h1 className="text-2xl font-bold tracking-tight">Estatísticas e Progresso</h1>
                <p className="text-muted-foreground">Acompanhe seu desempenho e evolução</p>
              </div>

              <Select defaultValue="month">
                <SelectTrigger className="w-[180px]">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-secondary" />
                  Missões Concluídas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">+12% em relação ao mês anterior</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <Star className="h-4 w-4 mr-2 text-yellow-400" />
                  Pontos Acumulados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.250</div>
                <p className="text-xs text-muted-foreground">+320 pontos este mês</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  Tempo Médio por Missão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">22 min</div>
                <p className="text-xs text-muted-foreground">-5 min em relação ao mês anterior</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="atividade" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="atividade">Atividade</TabsTrigger>
              <TabsTrigger value="pontos">Pontos</TabsTrigger>
              <TabsTrigger value="categorias">Categorias</TabsTrigger>
            </TabsList>

            <TabsContent value="atividade">
              <Card className="mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                    Missões por Dia
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="h-[300px] flex items-end justify-between gap-2">
                    {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((day, i) => (
                      <div key={day} className="flex flex-col items-center gap-2">
                        <div
                          className="w-12 bg-primary/20 rounded-t-md"
                          style={{ height: `${[40, 65, 35, 85, 55, 30, 20][i]}%` }}
                        ></div>
                        <span className="text-xs text-muted-foreground">{day}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-accent" />
                    Progresso Semanal
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Segunda-feira</span>
                      <span className="text-sm text-muted-foreground">3/5</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Terça-feira</span>
                      <span className="text-sm text-muted-foreground">4/5</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Quarta-feira</span>
                      <span className="text-sm text-muted-foreground">2/5</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Quinta-feira</span>
                      <span className="text-sm text-muted-foreground">5/5</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Sexta-feira</span>
                      <span className="text-sm text-muted-foreground">3/5</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Sábado</span>
                      <span className="text-sm text-muted-foreground">2/5</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Domingo</span>
                      <span className="text-sm text-muted-foreground">1/5</span>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pontos">
              <Card className="mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <LineChart className="h-5 w-5 mr-2 text-secondary" />
                    Pontos por Semana
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="h-[300px] relative">
                    <div className="absolute inset-0 flex items-end">
                      <div className="w-full h-full flex items-end">
                        <div className="relative w-full h-[80%]">
                          <div className="absolute bottom-0 left-0 right-0 h-[40%] border-t border-dashed border-muted"></div>
                          <div className="absolute bottom-0 left-0 right-0 h-[80%] border-t border-dashed border-muted"></div>
                          <div className="absolute bottom-0 left-0 right-0 h-full border-t border-dashed border-muted"></div>

                          <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-secondary/20 to-transparent rounded-md"></div>

                          <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path
                              d="M0,70 L14.28,60 L28.57,75 L42.85,50 L57.14,65 L71.42,40 L85.71,30 L100,20"
                              fill="none"
                              stroke="hsl(var(--secondary))"
                              strokeWidth="2"
                              vectorEffect="non-scaling-stroke"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-muted-foreground">
                      <span>Sem 1</span>
                      <span>Sem 2</span>
                      <span>Sem 3</span>
                      <span>Sem 4</span>
                    </div>

                    <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between items-start text-xs text-muted-foreground">
                      <span>500</span>
                      <span>250</span>
                      <span>0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-400" />
                    Maiores Pontuações
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Badge className="mr-2 bg-secondary text-secondary-foreground">1</Badge>
                        <span>Limpeza Completa da Casa</span>
                      </div>
                      <Badge variant="outline" className="flex items-center">
                        <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                        <span>150 pontos</span>
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Badge className="mr-2 bg-accent/80 text-accent-foreground">2</Badge>
                        <span>Organização do Porão</span>
                      </div>
                      <Badge variant="outline" className="flex items-center">
                        <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                        <span>120 pontos</span>
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Badge className="mr-2 bg-primary/80 text-primary-foreground">3</Badge>
                        <span>Limpeza da Garagem</span>
                      </div>
                      <Badge variant="outline" className="flex items-center">
                        <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                        <span>100 pontos</span>
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Badge className="mr-2 bg-muted text-muted-foreground">4</Badge>
                        <span>Limpeza da Cozinha</span>
                      </div>
                      <Badge variant="outline" className="flex items-center">
                        <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                        <span>80 pontos</span>
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Badge className="mr-2 bg-muted text-muted-foreground">5</Badge>
                        <span>Organização do Armário</span>
                      </div>
                      <Badge variant="outline" className="flex items-center">
                        <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                        <span>75 pontos</span>
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="categorias">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <PieChart className="h-5 w-5 mr-2 text-accent" />
                    Missões por Categoria
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex justify-center mb-6">
                    <div className="relative w-64 h-64">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          stroke="hsl(var(--primary))"
                          strokeWidth="20"
                          strokeDasharray="75.4 125.6"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          stroke="hsl(var(--secondary))"
                          strokeWidth="20"
                          strokeDasharray="50.3 150.7"
                          strokeDashoffset="-75.4"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          stroke="hsl(var(--accent))"
                          strokeWidth="20"
                          strokeDasharray="37.7 163.3"
                          strokeDashoffset="-125.7"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          stroke="hsl(var(--muted))"
                          strokeWidth="20"
                          strokeDasharray="25.1 175.9"
                          strokeDashoffset="-163.4"
                        />
                        <circle cx="50" cy="50" r="30" fill="white" />
                      </svg>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-primary mr-2"></div>
                      <div>
                        <p className="text-sm font-medium">Limpeza</p>
                        <p className="text-xs text-muted-foreground">40% (16 missões)</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-secondary mr-2"></div>
                      <div>
                        <p className="text-sm font-medium">Organização</p>
                        <p className="text-xs text-muted-foreground">30% (12 missões)</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-accent mr-2"></div>
                      <div>
                        <p className="text-sm font-medium">Manutenção</p>
                        <p className="text-xs text-muted-foreground">20% (8 missões)</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-muted mr-2"></div>
                      <div>
                        <p className="text-sm font-medium">Outros</p>
                        <p className="text-xs text-muted-foreground">10% (4 missões)</p>
                      </div>
                    </div>
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
