import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, CheckCircle2, Clock, Star, Trophy } from "lucide-react"
import Link from "next/link"
import { DashboardNavigation } from "@/components/dashboard-navigation"

export default function MissionDetailPage({ params }: { params: { id: string } }) {
  // Normalmente, buscaríamos os detalhes da missão com base no ID
  // Para este exemplo, usaremos dados estáticos

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

            <h1 className="text-2xl font-bold tracking-tight">Detalhes da Missão</h1>
            <p className="text-muted-foreground">Veja todos os detalhes e dicas para completar esta missão</p>
          </div>

          <Card className="mb-6">
            <CardHeader className="pb-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-lg">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">Organizar a sala</CardTitle>
                <Badge className="bg-secondary text-secondary-foreground">
                  <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                  30 pontos
                </Badge>
              </div>
              <CardDescription className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Tempo estimado: 20 minutos
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h3 className="font-medium mb-2">Descrição</h3>
                <p className="text-muted-foreground">
                  Arrume os objetos, limpe o pó e passe o aspirador na sala de estar para deixá-la limpa e organizada.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Passos para completar</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5 h-5 w-5 rounded-full border border-secondary flex items-center justify-center">
                      <span className="text-xs">1</span>
                    </div>
                    <span>Recolha todos os objetos fora do lugar e guarde-os em seus devidos locais</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5 h-5 w-5 rounded-full border border-secondary flex items-center justify-center">
                      <span className="text-xs">2</span>
                    </div>
                    <span>Limpe o pó dos móveis, prateleiras e objetos decorativos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5 h-5 w-5 rounded-full border border-secondary flex items-center justify-center">
                      <span className="text-xs">3</span>
                    </div>
                    <span>Organize as almofadas e mantas do sofá</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5 h-5 w-5 rounded-full border border-secondary flex items-center justify-center">
                      <span className="text-xs">4</span>
                    </div>
                    <span>Passe o aspirador ou varra o chão</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5 h-5 w-5 rounded-full border border-secondary flex items-center justify-center">
                      <span className="text-xs">5</span>
                    </div>
                    <span>Verifique se não há mais nada fora do lugar</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Dicas úteis</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="text-accent mr-2">•</div>
                    <span>
                      Comece de cima para baixo: primeiro as prateleiras, depois os móveis e por último o chão
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-accent mr-2">•</div>
                    <span>Use um pano levemente úmido para remover o pó com mais eficiência</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-accent mr-2">•</div>
                    <span>Coloque uma música animada para tornar a tarefa mais divertida</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">Recompensas</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="flex items-center">
                    <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                    30 pontos base
                  </Badge>
                  <Badge variant="outline" className="flex items-center">
                    <Trophy className="h-3 w-3 mr-1 text-accent" />
                    Conquista "Sala Impecável"
                  </Badge>
                  <Badge variant="outline" className="flex items-center">
                    <CheckCircle2 className="h-3 w-3 mr-1 text-secondary" />
                    +5 pontos por conclusão rápida
                  </Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3">
              <Button className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Iniciar Missão
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Adiar para Amanhã
              </Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  )
}
