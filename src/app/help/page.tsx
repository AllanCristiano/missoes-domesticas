import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft, BookOpen, HelpCircle, Info, Play, Search } from "lucide-react"
import Link from "next/link"
import { DashboardNavigation } from "@/components/dashboard-navigation"
import { Input } from "@/components/ui/input"

export default function HelpPage() {
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
                <h1 className="text-2xl font-bold tracking-tight">Ajuda e Tutoriais</h1>
                <p className="text-muted-foreground">
                  Aprenda a usar o aplicativo e encontre respostas para suas dúvidas
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input className="pl-10" placeholder="Pesquisar por tópicos de ajuda..." />
            </div>
          </div>

          <Tabs defaultValue="faq" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="faq">Perguntas Frequentes</TabsTrigger>
              <TabsTrigger value="tutoriais">Tutoriais</TabsTrigger>
              <TabsTrigger value="guias">Guias</TabsTrigger>
            </TabsList>

            <TabsContent value="faq">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                    Perguntas Frequentes
                  </CardTitle>
                  <CardDescription>Respostas para as dúvidas mais comuns sobre o aplicativo</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Como funciona o sistema de pontos?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground">
                          Cada missão concluída concede uma quantidade específica de pontos, que varia de acordo com a
                          complexidade e o tempo estimado para a tarefa. Missões mais difíceis ou demoradas geralmente
                          concedem mais pontos. Você também pode ganhar pontos extras por completar desafios, manter uma
                          sequência de dias consecutivos ou desbloquear conquistas.
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Os pontos acumulados podem ser trocados por recompensas na Loja de Pontos, como tempo de
                          descanso, atividades divertidas ou outros benefícios personalizados.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Como criar missões personalizadas?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground">
                          Para criar uma missão personalizada, acesse a página "Missões" e clique no botão "Nova Missão"
                          no canto superior direito. Preencha os detalhes como título, descrição, tempo estimado e
                          categoria. Você também pode definir a frequência (diária, semanal, mensal) e a quantidade de
                          pontos que a missão concederá quando concluída.
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Missões personalizadas aparecem junto com as missões padrão no seu dashboard e podem ser
                          editadas ou excluídas a qualquer momento.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Como participar de desafios com amigos?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground">
                          Para participar de desafios com amigos, primeiro você precisa adicioná-los à sua lista de
                          amigos. Acesse a página "Comunidade" e clique em "Encontrar Amigos" para buscar por nome de
                          usuário ou email.
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Depois de adicionar amigos, vá até a página "Desafios" e selecione "Desafio em Equipe". Você
                          pode convidar seus amigos para participar do desafio e competir juntos para completar missões
                          e ganhar pontos em dobro.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Como resgatar recompensas?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground">
                          Para resgatar recompensas, acesse a página "Recompensas" e navegue até a seção "Loja de
                          Pontos". Lá você encontrará diversas opções de recompensas que podem ser trocadas pelos pontos
                          que você acumulou.
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Clique no botão "Resgatar" ao lado da recompensa desejada e confirme a troca. Os pontos serão
                          automaticamente deduzidos do seu saldo e você receberá uma confirmação da recompensa
                          resgatada.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>Como alterar as configurações de notificação?</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground">
                          Para alterar as configurações de notificação, acesse a página "Configurações" e selecione a
                          aba "Notificações". Lá você pode personalizar quais tipos de notificações deseja receber, como
                          lembretes de missões, novos desafios, conquistas e atividades de amigos.
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Você também pode definir a frequência das notificações (tempo real, diária, semanal) e
                          escolher se deseja recebê-las por email, no aplicativo ou ambos.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tutoriais">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Play className="h-5 w-5 mr-2 text-secondary" />
                      Primeiros Passos
                    </CardTitle>
                    <CardDescription>Aprenda a usar o aplicativo em poucos minutos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="relative aspect-video rounded-md overflow-hidden bg-muted">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="h-12 w-12 text-muted-foreground opacity-50" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">Como começar com Missões Domésticas</h3>
                        <p className="text-sm text-muted-foreground">
                          Este tutorial rápido mostra como configurar seu perfil, navegar pelo aplicativo e começar suas
                          primeiras missões.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Assistir Tutorial</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Play className="h-5 w-5 mr-2 text-secondary" />
                      Sistema de Recompensas
                    </CardTitle>
                    <CardDescription>Entenda como funciona o sistema de pontos e recompensas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="relative aspect-video rounded-md overflow-hidden bg-muted">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="h-12 w-12 text-muted-foreground opacity-50" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">Maximizando suas Recompensas</h3>
                        <p className="text-sm text-muted-foreground">
                          Aprenda como ganhar mais pontos, desbloquear conquistas e trocar por recompensas
                          personalizadas.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Assistir Tutorial</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Play className="h-5 w-5 mr-2 text-secondary" />
                      Missões Personalizadas
                    </CardTitle>
                    <CardDescription>Crie suas próprias missões adaptadas à sua rotina</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="relative aspect-video rounded-md overflow-hidden bg-muted">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="h-12 w-12 text-muted-foreground opacity-50" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">Criando Missões Eficientes</h3>
                        <p className="text-sm text-muted-foreground">
                          Saiba como criar missões personalizadas que se encaixam na sua rotina e necessidades
                          específicas.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Assistir Tutorial</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Play className="h-5 w-5 mr-2 text-secondary" />
                      Desafios em Equipe
                    </CardTitle>
                    <CardDescription>Aprenda a participar de desafios com amigos e família</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="relative aspect-video rounded-md overflow-hidden bg-muted">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="h-12 w-12 text-muted-foreground opacity-50" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium">Limpeza Colaborativa</h3>
                        <p className="text-sm text-muted-foreground">
                          Descubra como tornar a limpeza mais divertida ao convidar amigos e familiares para desafios em
                          equipe.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Assistir Tutorial</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="guias">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-accent" />
                      Guia para Iniciantes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Um guia completo para quem está começando a usar o aplicativo Missões Domésticas. Aprenda os
                      conceitos básicos e comece a transformar suas tarefas em missões divertidas.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                        <span className="text-sm">Configuração inicial</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                        <span className="text-sm">Navegação pelo aplicativo</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                        <span className="text-sm">Completando sua primeira missão</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Ler Guia
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-accent" />
                      Técnicas de Organização
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Descubra as melhores técnicas de organização para manter sua casa arrumada com menos esforço.
                      Aprenda métodos eficientes para cada cômodo.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                        <span className="text-sm">Método KonMari</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                        <span className="text-sm">Sistema de zonas</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                        <span className="text-sm">Organização por categorias</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Ler Guia
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-accent" />
                      Limpeza Ecológica
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Aprenda a limpar sua casa usando produtos naturais e ecológicos. Reduza o impacto ambiental
                      enquanto mantém sua casa limpa e saudável.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                        <span className="text-sm">Produtos de limpeza naturais</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                        <span className="text-sm">Redução de resíduos</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                        <span className="text-sm">Economia de água e energia</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Ler Guia
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-accent" />
                      Limpeza Rápida
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Técnicas para manter sua casa limpa quando você tem pouco tempo. Aprenda a priorizar tarefas e
                      maximizar sua eficiência.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                        <span className="text-sm">Método dos 15 minutos</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                        <span className="text-sm">Limpeza por cômodo</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                        <span className="text-sm">Rotinas diárias eficientes</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Ler Guia
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-accent" />
                      Motivação Constante
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Dicas para manter a motivação e consistência nas tarefas domésticas. Transforme hábitos e crie uma
                      rotina sustentável.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                        <span className="text-sm">Criação de hábitos</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                        <span className="text-sm">Recompensas efetivas</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                        <span className="text-sm">Superando a procrastinação</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Ler Guia
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-accent" />
                      Limpeza Sazonal
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Guia completo para limpezas sazonais: primavera, verão, outono e inverno. Prepare sua casa para
                      cada estação do ano.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                        <span className="text-sm">Limpeza de primavera</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                        <span className="text-sm">Preparação para o inverno</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                        <span className="text-sm">Checklists por estação</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Ler Guia
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 border rounded-lg p-6 bg-muted/20">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-shrink-0">
                <Info className="h-12 w-12 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium mb-2">Precisa de mais ajuda?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Se você não encontrou a resposta para sua pergunta, entre em contato com nossa equipe de suporte.
                  Estamos aqui para ajudar!
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button variant="outline">Enviar Email</Button>
                  <Button>Chat ao Vivo</Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
