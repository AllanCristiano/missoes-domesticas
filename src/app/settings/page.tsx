import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Bell, Globe, Lock, Moon, Palette, Sun, User } from "lucide-react"
import Link from "next/link"
import { DashboardNavigation } from "@/components/dashboard-navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
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

            <h1 className="text-2xl font-bold tracking-tight">Configurações</h1>
            <p className="text-muted-foreground">Gerencie suas preferências e configurações da conta</p>
          </div>

          <Tabs defaultValue="conta" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="conta">Conta</TabsTrigger>
              <TabsTrigger value="aparencia">Aparência</TabsTrigger>
              <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
              <TabsTrigger value="privacidade">Privacidade</TabsTrigger>
            </TabsList>

            <TabsContent value="conta">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <User className="h-5 w-5 mr-2 text-primary" />
                    Informações da Conta
                  </CardTitle>
                  <CardDescription>Atualize suas informações pessoais</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input id="name" defaultValue="Maria Oliveira" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="maria@exemplo.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Biografia</Label>
                    <Input id="bio" defaultValue="Entusiasta de organização e limpeza" />
                    <p className="text-xs text-muted-foreground">Esta informação será exibida no seu perfil público</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="language">Idioma</Label>
                    <Select defaultValue="pt-BR">
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Selecione um idioma" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                        <SelectItem value="en-US">English (US)</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="fr">Français</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto">Salvar Alterações</Button>
                </CardFooter>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Lock className="h-5 w-5 mr-2 text-primary" />
                    Segurança
                  </CardTitle>
                  <CardDescription>Atualize sua senha e configurações de segurança</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Senha Atual</Label>
                    <Input id="current-password" type="password" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nova Senha</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="two-factor">Autenticação de dois fatores</Label>
                      <p className="text-xs text-muted-foreground">
                        Adicione uma camada extra de segurança à sua conta
                      </p>
                    </div>
                    <Switch id="two-factor" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto">Atualizar Senha</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="aparencia">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Palette className="h-5 w-5 mr-2 text-accent" />
                    Aparência
                  </CardTitle>
                  <CardDescription>Personalize a aparência do aplicativo</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Tema</Label>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" className="w-full justify-start">
                        <Sun className="h-4 w-4 mr-2" />
                        Claro
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Moon className="h-4 w-4 mr-2" />
                        Escuro
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Globe className="h-4 w-4 mr-2" />
                        Sistema
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label>Esquema de Cores</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-full h-10 rounded-md bg-gradient-to-r from-blue-200 to-purple-200 border-2 border-primary"></div>
                        <span className="text-xs">Tranquilidade</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-full h-10 rounded-md bg-gradient-to-r from-green-200 to-teal-200"></div>
                        <span className="text-xs">Natureza</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-full h-10 rounded-md bg-gradient-to-r from-orange-200 to-red-200"></div>
                        <span className="text-xs">Energia</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="animations">Animações</Label>
                      <p className="text-xs text-muted-foreground">Ativar animações e transições no aplicativo</p>
                    </div>
                    <Switch id="animations" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="compact-mode">Modo Compacto</Label>
                      <p className="text-xs text-muted-foreground">
                        Reduzir o espaçamento entre elementos para mostrar mais conteúdo
                      </p>
                    </div>
                    <Switch id="compact-mode" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto">Salvar Preferências</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="notificacoes">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Bell className="h-5 w-5 mr-2 text-secondary" />
                    Notificações
                  </CardTitle>
                  <CardDescription>Configure como e quando deseja receber notificações</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Notificações por Email</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-missoes">Lembretes de Missões</Label>
                          <p className="text-xs text-muted-foreground">Receba lembretes sobre missões pendentes</p>
                        </div>
                        <Switch id="email-missoes" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-desafios">Novos Desafios</Label>
                          <p className="text-xs text-muted-foreground">
                            Seja notificado quando novos desafios estiverem disponíveis
                          </p>
                        </div>
                        <Switch id="email-desafios" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-conquistas">Conquistas</Label>
                          <p className="text-xs text-muted-foreground">
                            Receba emails quando desbloquear novas conquistas
                          </p>
                        </div>
                        <Switch id="email-conquistas" />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Notificações no Aplicativo</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="app-lembretes">Lembretes Diários</Label>
                          <p className="text-xs text-muted-foreground">
                            Receba lembretes diários para completar suas missões
                          </p>
                        </div>
                        <Switch id="app-lembretes" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="app-amigos">Atividades de Amigos</Label>
                          <p className="text-xs text-muted-foreground">
                            Seja notificado sobre as atividades de seus amigos
                          </p>
                        </div>
                        <Switch id="app-amigos" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="app-ranking">Atualizações de Ranking</Label>
                          <p className="text-xs text-muted-foreground">Receba notificações sobre mudanças no ranking</p>
                        </div>
                        <Switch id="app-ranking" />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="frequency">Frequência de Notificações</Label>
                    <Select defaultValue="daily">
                      <SelectTrigger id="frequency">
                        <SelectValue placeholder="Selecione a frequência" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="realtime">Tempo real</SelectItem>
                        <SelectItem value="daily">Diariamente</SelectItem>
                        <SelectItem value="weekly">Semanalmente</SelectItem>
                        <SelectItem value="never">Nunca</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto">Salvar Preferências</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="privacidade">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Lock className="h-5 w-5 mr-2 text-primary" />
                    Privacidade
                  </CardTitle>
                  <CardDescription>Gerencie suas configurações de privacidade</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="profile-public">Perfil Público</Label>
                      <p className="text-xs text-muted-foreground">
                        Permitir que outros usuários vejam seu perfil e progresso
                      </p>
                    </div>
                    <Switch id="profile-public" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="show-ranking">Aparecer no Ranking</Label>
                      <p className="text-xs text-muted-foreground">
                        Mostrar sua pontuação e posição nos rankings públicos
                      </p>
                    </div>
                    <Switch id="show-ranking" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="activity-visible">Atividades Visíveis</Label>
                      <p className="text-xs text-muted-foreground">
                        Permitir que outros usuários vejam suas atividades recentes
                      </p>
                    </div>
                    <Switch id="activity-visible" />
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="data-usage">Uso de Dados</Label>
                    <Select defaultValue="analytics">
                      <SelectTrigger id="data-usage">
                        <SelectValue placeholder="Selecione as opções de uso de dados" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Permitir todo uso de dados</SelectItem>
                        <SelectItem value="analytics">Apenas para análises anônimas</SelectItem>
                        <SelectItem value="essential">Apenas dados essenciais</SelectItem>
                        <SelectItem value="none">Não permitir coleta de dados</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">
                      Escolha como seus dados podem ser usados para melhorar o aplicativo
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Ações de Conta</h3>
                    <div className="flex flex-col gap-2">
                      <Button variant="outline">Exportar Meus Dados</Button>
                      <Button variant="outline" className="text-destructive hover:text-destructive">
                        Excluir Minha Conta
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto">Salvar Preferências</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
