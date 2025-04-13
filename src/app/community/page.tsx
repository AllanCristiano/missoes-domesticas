import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Share2,
  Star,
  ThumbsUp,
  Users,
  Trophy,
  Medal,
} from "lucide-react"
import Link from "next/link"
import { DashboardNavigation } from "@/components/dashboard-navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function CommunityPage() {
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
                <h1 className="text-2xl font-bold tracking-tight">Comunidade</h1>
                <p className="text-muted-foreground">Compartilhe dicas e interaja com outros usuários</p>
              </div>

              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Users className="h-4 w-4 mr-2" />
                Encontrar Amigos
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Compartilhar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>MA</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Input className="w-full" placeholder="Compartilhe uma dica ou conquista..." />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Star className="h-4 w-4 mr-2" />
                      Conquista
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Dica
                    </Button>
                  </div>
                  <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Publicar
                  </Button>
                </CardFooter>
              </Card>

              <Tabs defaultValue="feed" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="feed">Feed</TabsTrigger>
                  <TabsTrigger value="dicas">Dicas</TabsTrigger>
                  <TabsTrigger value="conquistas">Conquistas</TabsTrigger>
                </TabsList>

                <TabsContent value="feed" className="space-y-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">João Silva</div>
                            <div className="text-xs text-muted-foreground">Há 2 horas</div>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Mais opções</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Salvar</DropdownMenuItem>
                            <DropdownMenuItem>Reportar</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Acabei de descobrir uma técnica incrível para limpar os vidros sem deixar marcas! Misture partes
                        iguais de água e vinagre branco, adicione uma colher de amido de milho e pronto. Vidros
                        impecáveis em segundos! 🧼✨
                      </p>
                      <Badge variant="outline" className="mt-3">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        Dica
                      </Badge>
                    </CardContent>
                    <CardFooter className="border-t pt-3 flex justify-between">
                      <div className="flex gap-4">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <ThumbsUp className="h-4 w-4 mr-2" />
                          <span>24</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          <span>8</span>
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <Share2 className="h-4 w-4 mr-2" />
                        <span>Compartilhar</span>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>AS</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Ana Santos</div>
                            <div className="text-xs text-muted-foreground">Ontem</div>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Mais opções</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Salvar</DropdownMenuItem>
                            <DropdownMenuItem>Reportar</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Consegui a conquista "Mestre da Organização"! 🏆 Depois de semanas organizando cada cômodo da
                        casa, finalmente completei todas as missões. A sensação de ter tudo em ordem é incrível!
                      </p>
                      <div className="mt-3 p-3 bg-accent/10 rounded-md flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                          <Trophy className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">Mestre da Organização</h4>
                          <p className="text-xs text-muted-foreground">Complete 20 missões de organização</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-3 flex justify-between">
                      <div className="flex gap-4">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Heart className="h-4 w-4 mr-2 fill-red-500 text-red-500" />
                          <span>42</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          <span>12</span>
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <Share2 className="h-4 w-4 mr-2" />
                        <span>Compartilhar</span>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>PC</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Pedro Costa</div>
                            <div className="text-xs text-muted-foreground">2 dias atrás</div>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Mais opções</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Salvar</DropdownMenuItem>
                            <DropdownMenuItem>Reportar</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Alguém tem alguma dica para organizar a despensa? A minha está um caos e não sei por onde
                        começar. Já tentei algumas coisas, mas nada parece funcionar por muito tempo. 😓
                      </p>
                    </CardContent>
                    <CardFooter className="border-t pt-3 flex justify-between">
                      <div className="flex gap-4">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <ThumbsUp className="h-4 w-4 mr-2" />
                          <span>8</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          <span>15</span>
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <Share2 className="h-4 w-4 mr-2" />
                        <span>Compartilhar</span>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="dicas" className="space-y-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">João Silva</div>
                            <div className="text-xs text-muted-foreground">Há 2 horas</div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Acabei de descobrir uma técnica incrível para limpar os vidros sem deixar marcas! Misture partes
                        iguais de água e vinagre branco, adicione uma colher de amido de milho e pronto. Vidros
                        impecáveis em segundos! 🧼✨
                      </p>
                      <Badge variant="outline" className="mt-3">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        Dica
                      </Badge>
                    </CardContent>
                    <CardFooter className="border-t pt-3 flex justify-between">
                      <div className="flex gap-4">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <ThumbsUp className="h-4 w-4 mr-2" />
                          <span>24</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          <span>8</span>
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <Share2 className="h-4 w-4 mr-2" />
                        <span>Compartilhar</span>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>LF</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Luísa Ferreira</div>
                            <div className="text-xs text-muted-foreground">3 dias atrás</div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Para quem tem problemas com roupas amassadas e não tem tempo para passar: pendure-as no banheiro
                        enquanto toma banho quente. O vapor ajuda a desamassar naturalmente! 👕💨
                      </p>
                      <Badge variant="outline" className="mt-3">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        Dica
                      </Badge>
                    </CardContent>
                    <CardFooter className="border-t pt-3 flex justify-between">
                      <div className="flex gap-4">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <ThumbsUp className="h-4 w-4 mr-2" />
                          <span>36</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          <span>5</span>
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <Share2 className="h-4 w-4 mr-2" />
                        <span>Compartilhar</span>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="conquistas" className="space-y-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>AS</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Ana Santos</div>
                            <div className="text-xs text-muted-foreground">Ontem</div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Consegui a conquista "Mestre da Organização"! 🏆 Depois de semanas organizando cada cômodo da
                        casa, finalmente completei todas as missões. A sensação de ter tudo em ordem é incrível!
                      </p>
                      <div className="mt-3 p-3 bg-accent/10 rounded-md flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                          <Trophy className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">Mestre da Organização</h4>
                          <p className="text-xs text-muted-foreground">Complete 20 missões de organização</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-3 flex justify-between">
                      <div className="flex gap-4">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Heart className="h-4 w-4 mr-2 fill-red-500 text-red-500" />
                          <span>42</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          <span>12</span>
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <Share2 className="h-4 w-4 mr-2" />
                        <span>Compartilhar</span>
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>RM</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Ricardo Martins</div>
                            <div className="text-xs text-muted-foreground">4 dias atrás</div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Finalmente desbloqueei a conquista "Maratonista"! 🏃‍♂️ Sete dias seguidos completando todas as
                        missões diárias. Minha casa nunca esteve tão organizada!
                      </p>
                      <div className="mt-3 p-3 bg-primary/10 rounded-md flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Medal className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">Maratonista</h4>
                          <p className="text-xs text-muted-foreground">Complete missões por 7 dias seguidos</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-3 flex justify-between">
                      <div className="flex gap-4">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <ThumbsUp className="h-4 w-4 mr-2" />
                          <span>28</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          <span>7</span>
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <Share2 className="h-4 w-4 mr-2" />
                        <span>Compartilhar</span>
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Amigos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">João Silva</p>
                        <p className="text-xs text-muted-foreground">Online</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Ana Santos</p>
                        <p className="text-xs text-muted-foreground">Há 2h</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>PC</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Pedro Costa</p>
                        <p className="text-xs text-muted-foreground">Há 5h</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Ver Todos
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-400" />
                    Dicas Populares
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Limpeza de Vidros</h3>
                    <p className="text-xs text-muted-foreground">
                      Misture partes iguais de água e vinagre branco, adicione uma colher de amido de milho para vidros
                      impecáveis.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      <span>24 curtidas</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Roupas Amassadas</h3>
                    <p className="text-xs text-muted-foreground">
                      Pendure roupas amassadas no banheiro durante o banho quente. O vapor ajuda a desamassar
                      naturalmente.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      <span>36 curtidas</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Organização de Gavetas</h3>
                    <p className="text-xs text-muted-foreground">
                      Use caixas de sapatos cortadas como divisórias para organizar gavetas de roupas íntimas e meias.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      <span>18 curtidas</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
