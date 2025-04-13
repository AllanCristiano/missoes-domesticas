import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Award, Gift, Medal, Star, Trophy } from "lucide-react"
import Link from "next/link"
import { DashboardNavigation } from "@/components/dashboard-navigation"
import { Progress } from "@/components/ui/progress"

export default function RewardsPage() {
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
                <h1 className="text-2xl font-bold tracking-tight">Recompensas e Conquistas</h1>
                <p className="text-muted-foreground">Veja suas conquistas e troque seus pontos por recompensas</p>
              </div>

              <Badge className="w-fit bg-primary/20 text-primary-foreground border-primary/30 px-4 py-2 text-base">
                <Star className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400" />
                <span>120 pontos</span>
              </Badge>
            </div>
          </div>

          <Tabs defaultValue="conquistas" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="conquistas">Conquistas</TabsTrigger>
              <TabsTrigger value="loja">Loja de Pontos</TabsTrigger>
            </TabsList>

            <TabsContent value="conquistas" className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-accent" />
                    Conquistas Desbloqueadas
                  </CardTitle>
                  <CardDescription>Você desbloqueou 5 de 20 conquistas</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
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
                      <Gift className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium">Colecionador</h3>
                      <p className="text-sm text-muted-foreground">Acumule 100 pontos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Award className="h-5 w-5 mr-2 text-muted-foreground" />
                    Próximas Conquistas
                  </CardTitle>
                  <CardDescription>Continue completando missões para desbloquear</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center p-3 border rounded-lg bg-muted/30">
                    <div className="h-12 w-12 rounded-full bg-muted/20 flex items-center justify-center mr-4">
                      <Medal className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-muted-foreground">Mestre da Limpeza</h3>
                      <p className="text-sm text-muted-foreground">Complete 20 missões</p>
                      <Progress value={60} className="h-1.5 mt-2" />
                    </div>
                  </div>

                  <div className="flex items-center p-3 border rounded-lg bg-muted/30">
                    <div className="h-12 w-12 rounded-full bg-muted/20 flex items-center justify-center mr-4">
                      <Trophy className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-muted-foreground">Maratonista</h3>
                      <p className="text-sm text-muted-foreground">Complete missões por 7 dias seguidos</p>
                      <Progress value={40} className="h-1.5 mt-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="loja" className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Gift className="h-5 w-5 mr-2 text-secondary" />
                    Loja de Recompensas
                  </CardTitle>
                  <CardDescription>Troque seus pontos por recompensas especiais</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <Card className="border-secondary/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">30 minutos de descanso</CardTitle>
                      <CardDescription>Tire um tempo para relaxar</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Permita-se 30 minutos de descanso após completar suas missões.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Badge variant="outline" className="flex items-center">
                        <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                        <span>50 pontos</span>
                      </Badge>
                      <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                        Resgatar
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="border-secondary/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Filme favorito</CardTitle>
                      <CardDescription>Assista seu filme favorito</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Permita-se assistir seu filme favorito como recompensa.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Badge variant="outline" className="flex items-center">
                        <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                        <span>100 pontos</span>
                      </Badge>
                      <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                        Resgatar
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="border-secondary/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Sobremesa especial</CardTitle>
                      <CardDescription>Permita-se uma sobremesa</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Desfrute de uma sobremesa especial após completar suas missões.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Badge variant="outline" className="flex items-center">
                        <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                        <span>75 pontos</span>
                      </Badge>
                      <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                        Resgatar
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="border-secondary/30">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Dia de folga</CardTitle>
                      <CardDescription>Um dia sem missões</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Tire um dia de folga das missões domésticas.</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Badge variant="outline" className="flex items-center">
                        <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                        <span>200 pontos</span>
                      </Badge>
                      <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                        Resgatar
                      </Button>
                    </CardFooter>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
