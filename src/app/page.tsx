"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Home, Star } from "lucide-react"

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 via-purple-50 to-blue-50 p-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-[40%] right-[15%] w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[10%] left-[35%] w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-8 z-10">
        {/* Left side - Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
              Missões <span className="text-secondary">Domésticas</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Transforme a limpeza em uma aventura divertida e conquiste uma casa organizada com recompensas e desafios.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all py-6"
              >
                <Link href="/login">
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/20 text-primary hover:bg-primary/5 shadow-md hover:shadow-lg transition-all py-6"
              >
                <Link href="/register">Criar Conta</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <Card className="bg-white/80 backdrop-blur-sm border-primary/10 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-4 flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-primary">Gamificação</h3>
                  <p className="text-sm text-muted-foreground">Ganhe pontos e recompensas por cada tarefa concluída</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-primary/10 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-4 flex items-start space-x-3">
                <Star className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-primary">Desafios</h3>
                  <p className="text-sm text-muted-foreground">Supere desafios especiais e desbloqueie conquistas</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-primary/10 shadow-md hover:shadow-lg transition-all sm:col-span-2">
              <CardContent className="p-4 flex items-start space-x-3">
                <Home className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-primary">Casa Organizada</h3>
                  <p className="text-sm text-muted-foreground">
                    Transforme sua rotina de limpeza em momentos de conquista e bem-estar
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl"></div>
            <div className="relative bg-white rounded-3xl p-6 shadow-xl rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="absolute -top-4 -right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Novo
              </div>
                <Image
                src="/imgs/images.jpeg"
                alt="Uma image de uma cozinha organizada"
                width={300}
                height={300}
                className="object-contain rounded-2xl"
                />
              <div className="mt-4 bg-secondary/10 p-3 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-sm font-medium">Missão Diária</span>
                  </div>
                  <span className="text-xs bg-secondary/20 px-2 py-0.5 rounded-full">+25 pts</span>
                </div>
                <p className="text-sm text-muted-foreground">Organize a cozinha em 15 minutos</p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                  <div className="bg-primary h-1.5 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="mt-12 w-full max-w-md">
        <Card className="bg-white/90 backdrop-blur-sm border-primary/10 shadow-lg">
          <CardContent className="p-6">
            <p className="text-center italic text-muted-foreground">
              &quot;Desde que comecei a usar o app, minha casa está sempre organizada e a limpeza se tornou uma atividade
              divertida para toda a família.&quot;
            </p>
            <div className="flex items-center justify-center mt-4">
              <div className="flex -space-x-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-sm font-medium">Maria S.</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
