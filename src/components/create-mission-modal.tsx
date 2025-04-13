"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { CalendarIcon, Clock, Home, Star } from "lucide-react"
import { cn } from "@/lib/utils"

// Definição do schema de validação
const formSchema = z.object({
  title: z.string().min(3, {
    message: "O título deve ter pelo menos 3 caracteres.",
  }),
  description: z.string().min(5, {
    message: "A descrição deve ter pelo menos 5 caracteres.",
  }),
  points: z.number().min(5).max(100),
  timeEstimate: z.number().min(5).max(180),
  dueDate: z.date().optional(),
  priority: z.enum(["baixa", "media", "alta"]),
  room: z.string(),
  isRecurring: z.boolean().default(false),
  recurrencePattern: z.enum(["diaria", "semanal", "mensal", "personalizada"]).optional(),
})

type CreateMissionModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCreateMission?: (data: z.infer<typeof formSchema>) => void
}

export function CreateMissionModal({ open, onOpenChange, onCreateMission }: CreateMissionModalProps) {
  const [tab, setTab] = useState("detalhes")

  // Inicializar o formulário com react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      points: 30,
      timeEstimate: 30,
      priority: "media",
      room: "sala",
      isRecurring: false,
      recurrencePattern: "semanal",
    },
  })

  // Função para lidar com o envio do formulário
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    if (onCreateMission) {
      onCreateMission(values)
    }
    onOpenChange(false)
    form.reset()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Nova Missão</DialogTitle>
          <DialogDescription>Crie uma nova missão doméstica para manter sua casa organizada.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Tabs value={tab} onValueChange={setTab} className="w-full">
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="detalhes">Detalhes Básicos</TabsTrigger>
                <TabsTrigger value="avancado">Configurações Avançadas</TabsTrigger>
              </TabsList>

              <TabsContent value="detalhes" className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Título da Missão</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Limpar a cozinha" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descrição</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Descreva os detalhes da missão" className="resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="points"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <Star className="h-4 w-4 mr-2 text-yellow-500" />
                          Pontos
                        </FormLabel>
                        <FormControl>
                          <div className="space-y-2">
                            <Slider
                              min={5}
                              max={100}
                              step={5}
                              value={[field.value]}
                              onValueChange={(value) => field.onChange(value[0])}
                              className="py-4"
                            />
                            <div className="flex justify-between">
                              <span className="text-xs text-muted-foreground">5</span>
                              <span className="text-sm font-medium">{field.value} pontos</span>
                              <span className="text-xs text-muted-foreground">100</span>
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="timeEstimate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-blue-500" />
                          Tempo Estimado
                        </FormLabel>
                        <FormControl>
                          <div className="space-y-2">
                            <Slider
                              min={5}
                              max={180}
                              step={5}
                              value={[field.value]}
                              onValueChange={(value) => field.onChange(value[0])}
                              className="py-4"
                            />
                            <div className="flex justify-between">
                              <span className="text-xs text-muted-foreground">5 min</span>
                              <span className="text-sm font-medium">{field.value} min</span>
                              <span className="text-xs text-muted-foreground">3h</span>
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="dueDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Data de Conclusão</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP", { locale: ptBR })
                              ) : (
                                <span>Selecione uma data</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>Deixe em branco para criar sem data específica</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>

              <TabsContent value="avancado" className="space-y-4">
                <FormField
                  control={form.control}
                  name="room"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center">
                        <Home className="h-4 w-4 mr-2 text-green-500" />
                        Cômodo
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um cômodo" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="sala">Sala</SelectItem>
                          <SelectItem value="cozinha">Cozinha</SelectItem>
                          <SelectItem value="banheiro">Banheiro</SelectItem>
                          <SelectItem value="quarto">Quarto</SelectItem>
                          <SelectItem value="area_externa">Área Externa</SelectItem>
                          <SelectItem value="lavanderia">Lavanderia</SelectItem>
                          <SelectItem value="escritorio">Escritório</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Prioridade</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-1"
                        >
                          <FormItem className="flex items-center space-x-1 space-y-0 rounded-md border p-2 flex-1 cursor-pointer hover:bg-accent">
                            <FormControl>
                              <RadioGroupItem value="baixa" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">Baixa</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-1 space-y-0 rounded-md border p-2 flex-1 cursor-pointer hover:bg-accent">
                            <FormControl>
                              <RadioGroupItem value="media" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">Média</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-1 space-y-0 rounded-md border p-2 flex-1 cursor-pointer hover:bg-accent">
                            <FormControl>
                              <RadioGroupItem value="alta" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">Alta</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isRecurring"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Missão Recorrente</FormLabel>
                        <FormDescription>Ativar para repetir esta missão periodicamente</FormDescription>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {form.watch("isRecurring") && (
                  <FormField
                    control={form.control}
                    name="recurrencePattern"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Padrão de Recorrência</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione a frequência" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="diaria">Diária</SelectItem>
                            <SelectItem value="semanal">Semanal</SelectItem>
                            <SelectItem value="mensal">Mensal</SelectItem>
                            <SelectItem value="personalizada">Personalizada</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </TabsContent>
            </Tabs>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancelar
              </Button>
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Criar Missão
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
