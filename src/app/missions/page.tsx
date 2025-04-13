"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, CheckCircle2, Clock, Filter, Plus, Search } from "lucide-react"
import { DashboardNavigation } from "@/components/dashboard-navigation"
import { MissionCard } from "@/components/mission-card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { CreateMissionModal } from "@/components/create-mission-modal"

export default function MissionsPage() {
  const [createModalOpen, setCreateModalOpen] = useState(false)

  const handleCreateMission = (data: any) => {
    console.log("Nova missão criada:", data)
    // Aqui você implementaria a lógica para salvar a missão
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col md:flex-row">
        <DashboardNavigation />

        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Missões</h1>
                <p className="text-muted-foreground">Gerencie todas as suas tarefas domésticas</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-9">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtrar
                </Button>
                <Button
                  size="sm"
                  className="h-9 bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => setCreateModalOpen(true)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Nova Missão
                </Button>
              </div>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar missões..." className="pl-9" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2 flex flex-row items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    Hoje
                  </CardTitle>
                  <Badge className="bg-primary/20 text-primary-foreground">5</Badge>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="text-sm text-muted-foreground mb-4">Segunda-feira, 13 de Abril</div>
                  <div className="space-y-3">
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
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2 flex flex-row items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-accent" />
                    Amanhã
                  </CardTitle>
                  <Badge className="bg-accent/20 text-accent-foreground">3</Badge>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="text-sm text-muted-foreground mb-4">Terça-feira, 14 de Abril</div>
                  <div className="space-y-3">
                    <MissionCard
                      title="Lavar roupas"
                      description="Separar, lavar e estender as roupas"
                      points={40}
                      timeEstimate="45 min"
                      status="pending"
                    />
                    <MissionCard
                      title="Limpar janelas"
                      description="Limpar os vidros e as esquadrias"
                      points={35}
                      timeEstimate="30 min"
                      status="pending"
                    />
                    <MissionCard
                      title="Regar plantas"
                      description="Regar todas as plantas da casa"
                      points={15}
                      timeEstimate="10 min"
                      status="pending"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2 flex flex-row items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-secondary" />
                    Concluídas
                  </CardTitle>
                  <Badge className="bg-secondary/20 text-secondary-foreground">8</Badge>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="text-sm text-muted-foreground mb-4">Últimas 24 horas</div>
                  <div className="space-y-3">
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
                    <Button variant="outline" className="w-full text-sm text-muted-foreground">
                      Ver todas as concluídas
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-4">Próximas Missões</h2>
              <Tabs defaultValue="semana" className="w-full">
                <TabsList className="w-full md:w-auto mb-4">
                  <TabsTrigger value="semana">Esta Semana</TabsTrigger>
                  <TabsTrigger value="mes">Este Mês</TabsTrigger>
                  <TabsTrigger value="recorrentes">Recorrentes</TabsTrigger>
                </TabsList>

                <TabsContent value="semana" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <MissionCard
                      title="Limpar geladeira"
                      description="Remover alimentos vencidos e limpar prateleiras"
                      points={60}
                      timeEstimate="40 min"
                      status="pending"
                    />
                    <MissionCard
                      title="Trocar roupa de cama"
                      description="Trocar lençóis, fronhas e cobertores"
                      points={25}
                      timeEstimate="15 min"
                      status="pending"
                    />
                    <MissionCard
                      title="Organizar armários"
                      description="Organizar roupas e separar doações"
                      points={50}
                      timeEstimate="60 min"
                      status="pending"
                    />
                    <MissionCard
                      title="Limpar área externa"
                      description="Varrer quintal e limpar móveis externos"
                      points={45}
                      timeEstimate="30 min"
                      status="pending"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="mes" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <MissionCard
                      title="Limpar ar condicionado"
                      description="Limpar filtros e parte externa"
                      points={70}
                      timeEstimate="45 min"
                      status="pending"
                    />
                    <MissionCard
                      title="Organizar despensa"
                      description="Verificar validades e organizar produtos"
                      points={40}
                      timeEstimate="30 min"
                      status="pending"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="recorrentes" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <MissionCard
                      title="Lavar roupas"
                      description="Separar, lavar e estender as roupas"
                      points={40}
                      timeEstimate="45 min"
                      status="pending"
                    />
                    <MissionCard
                      title="Tirar o lixo"
                      description="Recolha o lixo de todos os cômodos e leve para fora"
                      points={15}
                      timeEstimate="5 min"
                      status="pending"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>

      <CreateMissionModal
        open={createModalOpen}
        onOpenChange={setCreateModalOpen}
        onCreateMission={handleCreateMission}
      />
    </div>
  )
}
