export type MissionStatus = 'active' | 'warning' | 'critical'

export type MessageStatus =
  | 'sending'
  | 'in_transit'
  | 'received'
  | 'confirmed'

export type MessageDirection = 'sent' | 'received'

export type TaskPriority = 'low' | 'medium' | 'high' | 'critical'

export type TaskStatus = 'Pendente' | 'Em andamento' | 'Concluída'

export type NotificationType = 'message' | 'task' | 'system' | 'warning'

export type MapPointType = 'base' | 'sample' | 'solar' | 'antenna' | 'danger'

export const mission = {
  name: 'Exploração de Ares',
  sol: 23,
  status: 'active' as MissionStatus,
  location: 'Região Norte de Marte',
  communicationWindow: '14:32',
  latency: '18 min',
  oxygen: 98,
  energy: 84,
  temperature: '-42°C',
  externalCondition: 'Poeira moderada',
  communicationStatus: 'Janela aberta',
}

export const messages = [
  {
    id: '1',
    sender: 'Terra',
    content: 'Bom dia, tripulação. Confirmem o status geral da missão.',
    time: '08:12',
    status: 'confirmed' as MessageStatus,
    direction: 'received' as MessageDirection,
  },
  {
    id: '2',
    sender: 'Você',
    content: 'Status confirmado. Todos os sistemas principais estão operacionais.',
    time: '08:31',
    status: 'confirmed' as MessageStatus,
    direction: 'sent' as MessageDirection,
  },
  {
    id: '3',
    sender: 'Terra',
    content: 'Verifiquem os níveis de oxigênio do módulo habitacional.',
    time: '09:29',
    status: 'confirmed' as MessageStatus,
    direction: 'received' as MessageDirection,
  },
  {
    id: '4',
    sender: 'Você',
    content: 'Níveis verificados. Oxigênio em 98%, sem variações críticas.',
    time: '09:48',
    status: 'confirmed' as MessageStatus,
    direction: 'sent' as MessageDirection,
  },
  {
    id: '5',
    sender: 'Terra',
    content: 'Analise os dados de solo da região norte e envie relatório.',
    time: '10:36',
    status: 'received' as MessageStatus,
    direction: 'received' as MessageDirection,
  },
  {
    id: '6',
    sender: 'Você',
    content: 'Entendido. Iniciaremos a análise e enviaremos o relatório.',
    time: '10:42',
    status: 'in_transit' as MessageStatus,
    direction: 'sent' as MessageDirection,
  },
  {
    id: '7',
    sender: 'Terra',
    content: 'Atenção: há previsão de aumento de poeira na área externa.',
    time: '11:05',
    status: 'received' as MessageStatus,
    direction: 'received' as MessageDirection,
  },
  {
    id: '8',
    sender: 'Você',
    content:
      'Equipe orientada. Atividades externas serão priorizadas antes da mudança climática.',
    time: '11:24',
    status: 'in_transit' as MessageStatus,
    direction: 'sent' as MessageDirection,
  },
]

export const tasks = [
  {
    id: '1',
    title: 'Coletar amostra de solo na região norte',
    description: 'Coletar amostra próxima ao ponto A-17 para análise geológica.',
    priority: 'critical' as TaskPriority,
    responsible: 'Comandante Kléber',
    due: 'Sol 24 — 14:00',
    status: 'Pendente' as TaskStatus,
  },
  {
    id: '2',
    title: 'Verificar painel solar externo',
    description: 'Inspecionar possível acúmulo de poeira nas placas solares.',
    priority: 'high' as TaskPriority,
    responsible: 'Engenheira Rosana',
    due: 'Sol 23 — 18:00',
    status: 'Em andamento' as TaskStatus,
  },
  {
    id: '3',
    title: 'Analisar composição da amostra de solo',
    description: 'Gerar relatório preliminar com composição mineral identificada.',
    priority: 'medium' as TaskPriority,
    responsible: 'Cientista Miguel',
    due: 'Sol 25 — 09:00',
    status: 'Pendente' as TaskStatus,
  },
  {
    id: '4',
    title: 'Inspecionar módulo habitacional',
    description: 'Checar pressão, vedação, temperatura interna e sensores vitais.',
    priority: 'low' as TaskPriority,
    responsible: 'Especialista Ana',
    due: 'Sol 24 — 11:00',
    status: 'Pendente' as TaskStatus,
  },
  {
    id: '5',
    title: 'Sincronizar logs da missão',
    description: 'Enviar registros operacionais para o controle da Terra.',
    priority: 'medium' as TaskPriority,
    responsible: 'Engenheira Rosana',
    due: 'Sol 23 — 16:40',
    status: 'Em andamento' as TaskStatus,
  },
  {
    id: '6',
    title: 'Revisar estoque de suprimentos',
    description:
      'Validar quantidade de alimentos, água e medicamentos disponíveis.',
    priority: 'high' as TaskPriority,
    responsible: 'Especialista Ana',
    due: 'Sol 24 — 08:30',
    status: 'Pendente' as TaskStatus,
  },
  {
    id: '7',
    title: 'Calibrar sensores ambientais',
    description: 'Ajustar sensores de temperatura, pressão e radiação externa.',
    priority: 'medium' as TaskPriority,
    responsible: 'Cientista Miguel',
    due: 'Sol 23 — 20:00',
    status: 'Concluída' as TaskStatus,
  },
  {
    id: '8',
    title: 'Checar antena de comunicação',
    description:
      'Garantir estabilidade do sinal durante a próxima janela com a Terra.',
    priority: 'critical' as TaskPriority,
    responsible: 'Comandante Kléber',
    due: 'Sol 23 — 13:20',
    status: 'Em andamento' as TaskStatus,
  },
  {
    id: '9',
    title: 'Atualizar relatório médico diário',
    description:
      'Registrar sinais vitais da tripulação e enviar resumo ao controle.',
    priority: 'low' as TaskPriority,
    responsible: 'Especialista Ana',
    due: 'Sol 23 — 21:00',
    status: 'Pendente' as TaskStatus,
  },
  {
    id: '10',
    title: 'Mapear rota para exploração externa',
    description: 'Definir rota segura até o ponto de coleta secundário B-09.',
    priority: 'medium' as TaskPriority,
    responsible: 'Comandante Kléber',
    due: 'Sol 25 — 10:00',
    status: 'Pendente' as TaskStatus,
  },
]

export const crew = [
  {
    id: '1',
    name: 'Comandante Kléber',
    role: 'Líder da missão',
    bpm: 72,
    oxygen: 98,
    temperature: '36.6°C',
    pressure: '120/80',
    status: 'OK',
  },
  {
    id: '2',
    name: 'Engenheira Rosana',
    role: 'Sistemas da nave',
    bpm: 68,
    oxygen: 97,
    temperature: '36.5°C',
    pressure: '118/79',
    status: 'OK',
  },
  {
    id: '3',
    name: 'Cientista Miguel',
    role: 'Análise geológica',
    bpm: 75,
    oxygen: 96,
    temperature: '36.7°C',
    pressure: '122/81',
    status: 'OK',
  },
  {
    id: '4',
    name: 'Especialista Ana',
    role: 'Operações externas',
    bpm: 70,
    oxygen: 98,
    temperature: '36.4°C',
    pressure: '119/78',
    status: 'OK',
  },
  {
    id: '5',
    name: 'Médico Rafael',
    role: 'Saúde da tripulação',
    bpm: 73,
    oxygen: 97,
    temperature: '36.6°C',
    pressure: '121/80',
    status: 'OK',
  },
  {
    id: '6',
    name: 'Piloto Helena',
    role: 'Navegação e pouso',
    bpm: 71,
    oxygen: 98,
    temperature: '36.5°C',
    pressure: '119/77',
    status: 'OK',
  },
]

export const emergencyAlerts = [
  {
    id: '1',
    title: 'Falha no oxigênio',
    description: 'Aciona protocolo de emergência no módulo habitacional.',
    priority: 'critical' as TaskPriority,
  },
  {
    id: '2',
    title: 'Pane no módulo',
    description: 'Registra falha estrutural ou operacional na base.',
    priority: 'high' as TaskPriority,
  },
  {
    id: '3',
    title: 'Solicitar suporte da Terra',
    description: 'Envia pedido de orientação para o controle da missão.',
    priority: 'medium' as TaskPriority,
  },
  {
    id: '4',
    title: 'Evacuação de área externa',
    description: 'Aciona retirada imediata da equipe em atividade fora da base.',
    priority: 'critical' as TaskPriority,
  },
]

export const notifications = [
  {
    id: '1',
    title: 'Nova mensagem da Terra',
    description: 'O controle da missão enviou uma nova instrução operacional.',
    time: '10:36',
    type: 'message' as NotificationType,
    unread: true,
  },
  {
    id: '2',
    title: 'Tarefa crítica pendente',
    description: 'Coletar amostra de solo na região norte exige atenção imediata.',
    time: '10:20',
    type: 'task' as NotificationType,
    unread: true,
  },
  {
    id: '3',
    title: 'Janela de comunicação aberta',
    description: `A próxima janela de comunicação está prevista para ${mission.communicationWindow}.`,
    time: '09:58',
    type: 'system' as NotificationType,
    unread: false,
  },
  {
    id: '4',
    title: 'Energia abaixo do ideal',
    description: `O sistema está operando com ${mission.energy}% de energia.`,
    time: '09:42',
    type: 'warning' as NotificationType,
    unread: false,
  },
  {
    id: '5',
    title: 'Sincronização parcial concluída',
    description: 'Logs da missão foram enviados parcialmente ao controle da Terra.',
    time: '09:15',
    type: 'system' as NotificationType,
    unread: false,
  },
  {
    id: '6',
    title: 'Atividade externa em andamento',
    description: 'A equipe iniciou preparação para exploração do ponto B-09.',
    time: '08:55',
    type: 'task' as NotificationType,
    unread: true,
  },
  {
    id: '7',
    title: 'Alerta climático',
    description: 'Possível aumento de poeira nas próximas horas.',
    time: '08:40',
    type: 'warning' as NotificationType,
    unread: true,
  },
]

export const systemMetricsHistory = {
  energy: [96, 93, 91, 88, 86, 84],
  oxygen: [99, 99, 98, 98, 98, 98],
  temperature: [-39, -40, -41, -42, -42, -42],
}

export const marsMapPoints = [
  {
    id: '1',
    name: 'Base Ares',
    description: 'Módulo principal da tripulação.',
    type: 'base' as MapPointType,
    status: 'Operacional',
    x: 50,
    y: 52,
  },
  {
    id: '2',
    name: 'Ponto A-17',
    description: 'Área de coleta de amostras de solo.',
    type: 'sample' as MapPointType,
    status: 'Pendente',
    x: 28,
    y: 34,
  },
  {
    id: '3',
    name: 'Painéis solares',
    description: 'Fonte principal de energia da missão.',
    type: 'solar' as MapPointType,
    status: 'Inspeção necessária',
    x: 70,
    y: 40,
  },
  {
    id: '4',
    name: 'Antena de comunicação',
    description: 'Responsável pela troca de dados com a Terra.',
    type: 'antenna' as MapPointType,
    status: 'Em sincronização',
    x: 62,
    y: 72,
  },
  {
    id: '5',
    name: 'Zona de poeira',
    description: 'Região com risco de baixa visibilidade.',
    type: 'danger' as MapPointType,
    status: 'Atenção',
    x: 35,
    y: 75,
  },
]