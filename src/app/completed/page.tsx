import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, CheckCircle2, Filter } from "lucide-react"
import Link from "next/link"
import { DashboardNavigation } from "@/components/dashboard-navigation"
import { MissionCard } from "@/components/mission-card"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CompletedMissionsPage() {
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
                <h1 className="text-2xl font-bold tracking-tight">Missões Completadas</h1>
                <p className="text-muted-foreground">Histórico de todas as suas missões concluídas</p>
              </div>

              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os períodos</SelectItem>
                    <SelectItem value="today">Hoje</SelectItem>
                    <SelectItem value="week">Esta semana</SelectItem>
                    <SelectItem value="month">Este mês</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">Filtrar</span>
                </Button>
              </div>
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-secondary" />
                  Resumo
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-secondary/10 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground">Total de Missões</p>
                  <p className="text-3xl font-bold text-secondary-foreground">42</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground">Pontos Acumulados</p>
                  <p className="text-3xl font-bold text-primary-foreground">1.250</p>
                </div>
                <div className="bg-accent/10 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground">Tempo Economizado</p>
                  <p className="text-3xl font-bold text-accent-foreground">12h</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div>
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                <h2 className="text-lg font-medium">Hoje</h2>
              </div>
              <div className="space-y-4">
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
              </div>
            </div>

            <Separator />

            <div>
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                <h2 className="text-lg font-medium">Ontem</h2>
              </div>
              <div className="space-y-4">
                <MissionCard
                  title="Lavar a roupa"
                  description="Separe, lave e estenda as roupas"
                  points={40}
                  timeEstimate="60 min"
                  status="completed"
                />

                <MissionCard
                  title="Regar as plantas"
                  description="Regue todas as plantas da casa"
                  points={10}
                  timeEstimate="10 min"
                  status="completed"
                />

                <MissionCard
                  title="Limpar a geladeira"
                  description="Remova alimentos vencidos e limpe as prateleiras"
                  points={40}
                  timeEstimate="30 min"
                  status="completed"
                />
              </div>
            </div>

            <Separator />

            <div>
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                <h2 className="text-lg font-medium">Esta semana</h2>
              </div>
              <div className="space-y-4">
                <MissionCard
                  title="Organizar o armário"
                  description="Organize as roupas e separe o que não usa mais"
                  points={35}
                  timeEstimate="45 min"
                  status="completed"
                />

                <MissionCard
                  title="Limpar as janelas"
                  description="Limpe os vidros e as molduras das janelas"
                  points={40}
                  timeEstimate="30 min"
                  status="completed"
                />

                <MissionCard
                  title="Organizar a despensa"
                  description="Organize os alimentos e verifique os prazos de validade"
                  points={30}
                  timeEstimate="25 min"
                  status="completed"
                />
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="outline">Carregar mais</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
