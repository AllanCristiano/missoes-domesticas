"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import {
  Bot,
  ChevronDown,
  ChevronUp,
  Send,
  Sparkles,
  Maximize2,
  Minimize2,
  PlusCircle,
  HelpCircle,
  Home,
  Calendar,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Message = {
  id: string
  text: string
  isUser: boolean
  time: string
  isTyping?: boolean
}

type QuickAction = {
  icon: React.ReactNode
  label: string
  action: () => void
}

export function VirtualAssistant() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [activeTab, setActiveTab] = useState("chat")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Olá! Sou a Lila, sua assistente virtual. Como posso ajudar com suas missões domésticas hoje?",
      isUser: false,
      time: formatTime(new Date()),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isAssistantTyping, setIsAssistantTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickActions: QuickAction[] = [
    {
      icon: <PlusCircle size={16} />,
      label: "Nova Missão",
      action: () => handleQuickAction("Como criar uma nova missão?"),
    },
    {
      icon: <HelpCircle size={16} />,
      label: "Dicas",
      action: () => handleQuickAction("Me dê dicas de organização"),
    },
    {
      icon: <Home size={16} />,
      label: "Rotinas",
      action: () => handleQuickAction("Sugestões de rotina diária"),
    },
    {
      icon: <Calendar size={16} />,
      label: "Planejamento",
      action: () => handleQuickAction("Como planejar minhas tarefas semanais?"),
    },
    {
      icon: <Settings size={16} />,
      label: "Configurações",
      action: () => handleQuickAction("Como personalizar o app?"),
    },
  ]

  function formatTime(date: Date) {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  function generateId() {
    return Math.random().toString(36).substring(2, 11)
  }

  function handleQuickAction(text: string) {
    setInputValue(text)
    handleSendMessage(text)
  }

  function handleSendMessage(overrideText?: string) {
    const text = overrideText || inputValue
    if (!text.trim()) return

    // Add user message
    const userMessage: Message = {
      id: generateId(),
      text: text,
      isUser: true,
      time: formatTime(new Date()),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsAssistantTyping(true)

    // Expand if minimized
    if (!isExpanded) {
      setIsExpanded(true)
    }

    // Simulate assistant typing
    setTimeout(() => {
      const typingMessage: Message = {
        id: generateId(),
        text: "",
        isUser: false,
        time: formatTime(new Date()),
        isTyping: true,
      }

      setMessages((prev) => [...prev, typingMessage])
    }, 500)

    // Simulate assistant response after a short delay
    setTimeout(() => {
      setIsAssistantTyping(false)

      // Remove typing indicator
      setMessages((prev) => prev.filter((msg) => !msg.isTyping))

      const responses: Record<string, string[]> = {
        default: [
          "Entendi! Vou te ajudar com isso.",
          "Que tal começar com uma missão simples hoje?",
          "Você já completou 3 missões esta semana. Está indo muito bem!",
          "Lembre-se de que pequenas tarefas diárias evitam acúmulo de trabalho.",
          "Posso te mostrar algumas dicas para organizar melhor seu tempo.",
          "Você sabia que 5 minutos de organização por dia podem fazer uma grande diferença?",
        ],
        "Como criar uma nova missão?": [
          "Para criar uma nova missão, vá até a página de Missões e clique no botão '+' no canto inferior direito. Preencha os detalhes como título, descrição, pontos e tempo estimado. Você também pode definir a recorrência e prioridade nas configurações avançadas.",
        ],
        "Me dê dicas de organização": [
          "Claro! Aqui estão algumas dicas de organização:\n\n1. Comece com pequenas tarefas de 5-10 minutos\n2. Use o método 'toque único': pegue algo apenas uma vez para decidir seu destino\n3. Estabeleça zonas específicas para cada categoria de itens\n4. Faça uma rotina de 15 minutos diários de organização\n5. Use o sistema 1-in-1-out: para cada novo item, descarte um antigo",
        ],
        "Sugestões de rotina diária": [
          "Uma boa rotina diária inclui:\n\n🌞 Manhã: Fazer a cama, lavar a louça do café, 5 min de organização rápida\n\n🌆 Tarde: Limpar superfícies da cozinha após o almoço\n\n🌙 Noite: 15 min de arrumação geral, preparar roupas para o dia seguinte, lavar louça do jantar",
        ],
        "Como planejar minhas tarefas semanais?": [
          "Para planejar suas tarefas semanais, recomendo:\n\n1. Reserve 15 minutos no domingo para planejar a semana\n2. Divida as tarefas por cômodos (um por dia)\n3. Alterne entre tarefas leves e pesadas\n4. Use o app para criar missões recorrentes semanais\n5. Deixe um dia flexível para tarefas imprevistas\n\nNo app, você pode usar a função de planejamento semanal na aba 'Calendário'.",
        ],
        "Como personalizar o app?": [
          "Você pode personalizar o app de várias formas:\n\n• Na página de Configurações, ajuste o tema de cores e notificações\n• Personalize suas recompensas na seção 'Recompensas'\n• Crie categorias personalizadas de missões\n• Ajuste a dificuldade das missões conforme sua rotina\n• Configure lembretes personalizados para suas missões",
        ],
      }

      // Check if we have a specific response for this question
      let responseText = ""
      const exactMatch = Object.keys(responses).find((key) => text.toLowerCase().includes(key.toLowerCase()))

      if (exactMatch) {
        const matchResponses = responses[exactMatch]
        responseText = matchResponses[Math.floor(Math.random() * matchResponses.length)]
      } else {
        responseText = responses.default[Math.floor(Math.random() * responses.default.length)]
      }

      const assistantMessage: Message = {
        id: generateId(),
        text: responseText,
        isUser: false,
        time: formatTime(new Date()),
      }

      setMessages((prev) => [...prev, assistantMessage])
    }, 2000)
  }

  function handleKeyPress(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  // Auto scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      <Card
        className={cn(
          "transition-all duration-300 ease-in-out bg-white border-primary/20 shadow-xl",
          isFullscreen
            ? "fixed inset-4 w-auto h-auto rounded-xl z-50"
            : isExpanded
              ? "w-[350px] h-[500px] opacity-100"
              : "w-[300px] h-[60px] opacity-95",
        )}
      >
        <CardHeader className="p-3 flex flex-row items-center justify-between border-b bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8 bg-primary/20 ring-2 ring-primary/20">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback className="bg-primary text-primary-foreground">
                <Bot size={16} />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-sm font-medium flex items-center">
                Lila
                <span className="ml-2 text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded-full flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
                  Online
                </span>
              </h3>
              {!isExpanded && messages.length > 1 && (
                <p className="text-xs text-muted-foreground truncate w-44">
                  {isAssistantTyping ? (
                    <span className="flex items-center">
                      <span className="animate-pulse">Digitando</span>
                      <span className="ml-1 flex space-x-1">
                        <span
                          className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></span>
                        <span
                          className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        ></span>
                        <span
                          className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        ></span>
                      </span>
                    </span>
                  ) : (
                    messages[messages.length - 1].text
                  )}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-1">
            {isExpanded && (
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 rounded-full hover:bg-primary/10"
                onClick={() => setIsFullscreen(!isFullscreen)}
              >
                {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-full hover:bg-primary/10"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
            </Button>
          </div>
        </CardHeader>

        {isExpanded && (
          <>
            <Tabs
              defaultValue="chat"
              className="flex flex-col flex-1 h-[calc(100%-60px)]"
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <TabsList className="px-3 pt-2 bg-transparent justify-start border-b rounded-none h-auto">
                <TabsTrigger value="chat" className="data-[state=active]:bg-primary/10 rounded-t-lg rounded-b-none">
                  Chat
                </TabsTrigger>
                <TabsTrigger value="help" className="data-[state=active]:bg-primary/10 rounded-t-lg rounded-b-none">
                  Ajuda
                </TabsTrigger>
              </TabsList>

              <TabsContent value="chat" className="flex-1 flex flex-col p-0 m-0 data-[state=inactive]:hidden">
                <CardContent className="p-3 overflow-y-auto flex-1 flex flex-col space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex flex-col max-w-[85%] rounded-lg p-3 text-sm",
                        message.isUser
                          ? "bg-primary text-primary-foreground self-end shadow-sm"
                          : message.isTyping
                            ? "bg-muted self-start animate-pulse"
                            : "bg-muted self-start shadow-sm",
                      )}
                    >
                      {message.isTyping ? (
                        <div className="flex items-center space-x-2">
                          <div
                            className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          ></div>
                        </div>
                      ) : (
                        <>
                          <div className="whitespace-pre-line">{message.text}</div>
                          <span
                            className={cn(
                              "text-[10px] mt-1",
                              message.isUser
                                ? "text-primary-foreground/70 self-end"
                                : "text-muted-foreground self-start",
                            )}
                          >
                            {message.time}
                          </span>
                        </>
                      )}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </CardContent>

                <div className="px-3 py-2">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {quickActions.map((action, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="h-8 text-xs bg-muted/50 border-primary/10 hover:bg-primary/5"
                        onClick={action.action}
                      >
                        {action.icon}
                        <span className="ml-1">{action.label}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                <CardFooter className="p-3 pt-0 border-t">
                  <div className="flex w-full items-center space-x-2">
                    <Input
                      placeholder="Digite sua mensagem..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1 h-10 border-primary/20 focus-visible:ring-primary/30"
                    />
                    <Button
                      size="icon"
                      className="h-10 w-10 bg-primary hover:bg-primary/90 shadow-md"
                      onClick={() => handleSendMessage()}
                      disabled={!inputValue.trim()}
                    >
                      <Send size={16} className="text-primary-foreground" />
                    </Button>
                  </div>
                </CardFooter>
              </TabsContent>

              <TabsContent value="help" className="flex-1 overflow-y-auto p-4 data-[state=inactive]:hidden">
                <div className="space-y-4">
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <h3 className="font-medium flex items-center text-primary">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Sobre a Lila
                    </h3>
                    <p className="text-sm mt-1 text-muted-foreground">
                      Sou sua assistente virtual para ajudar com suas missões domésticas. Posso dar dicas de
                      organização, ajudar a planejar tarefas e responder suas dúvidas sobre o aplicativo.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2 text-primary">O que posso fazer por você:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Dar dicas de organização e limpeza</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Ajudar a planejar suas tarefas semanais</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Explicar como usar os recursos do app</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Sugerir rotinas para diferentes ambientes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Motivar você a completar suas missões</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2 text-primary">Perguntas frequentes:</h3>
                    <div className="space-y-2">
                      {[
                        "Como criar uma nova missão?",
                        "Como ganhar mais pontos?",
                        "Como personalizar minhas recompensas?",
                        "Como compartilhar meu progresso?",
                        "Como criar rotinas automáticas?",
                      ].map((question, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="w-full justify-start text-left h-auto py-2 px-3 border-primary/10 hover:bg-primary/5"
                          onClick={() => {
                            setActiveTab("chat")
                            handleQuickAction(question)
                          }}
                        >
                          <HelpCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span className="text-sm">{question}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </>
        )}
      </Card>
    </div>
  )
}

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
