import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Missões Domésticas</h1>
          <p className="text-muted-foreground mt-2">Transforme a limpeza em uma aventura divertida</p>
        </div>

        <Card className="w-full shadow-lg border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl text-center">Criar Conta</CardTitle>
            <CardDescription className="text-center">Comece sua jornada de missões domésticas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nome</Label>
                <Input id="firstName" placeholder="João" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Sobrenome</Label>
                <Input id="lastName" placeholder="Silva" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="seu@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar Senha</Label>
              <Input id="confirmPassword" type="password" placeholder="••••••••" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm font-normal">
                Eu concordo com os{" "}
                <Link href="#" className="text-primary font-medium hover:underline">
                  Termos de Serviço
                </Link>{" "}
                e{" "}
                <Link href="#" className="text-primary font-medium hover:underline">
                  Política de Privacidade
                </Link>
              </Label>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg py-6 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
              Criar Conta
            </Button>
            <div className="text-center text-sm">
              Já tem uma conta?{" "}
              <Link href="/login" className="text-primary font-medium hover:underline">
                Entrar
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
