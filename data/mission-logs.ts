export type MissionLogType =
  | 'message'
  | 'task'
  | 'health'
  | 'system'
  | 'emergency'

export const missionLogs = [
  {
    id: '1',
    time: '08:12',
    type: 'message' as MissionLogType,
    title: 'Mensagem recebida da Terra',
    description: 'Controle solicitou confirmação do status geral da missão.',
    responsible: 'Controle Terra',
  },
  {
    id: '2',
    time: '08:31',
    type: 'message' as MissionLogType,
    title: 'Resposta enviada pela tripulação',
    description: 'Status geral confirmado como operacional.',
    responsible: 'Comandante Kléber',
  },
  {
    id: '3',
    time: '09:29',
    type: 'health' as MissionLogType,
    title: 'Verificação de oxigênio solicitada',
    description: 'Controle pediu validação dos níveis do módulo habitacional.',
    responsible: 'Controle Terra',
  },
  {
    id: '4',
    time: '09:48',
    type: 'health' as MissionLogType,
    title: 'Oxigênio confirmado',
    description: 'Nível de oxigênio registrado em 98%, sem variações críticas.',
    responsible: 'Especialista Ana',
  },
  {
    id: '5',
    time: '10:20',
    type: 'task' as MissionLogType,
    title: 'Tarefa crítica priorizada',
    description: 'Coleta de amostra no ponto A-17 marcada como prioridade crítica.',
    responsible: 'Comandante Kléber',
  },
  {
    id: '6',
    time: '10:36',
    type: 'message' as MissionLogType,
    title: 'Nova instrução recebida',
    description: 'Terra solicitou análise dos dados de solo da região norte.',
    responsible: 'Controle Terra',
  },
  {
    id: '7',
    time: '11:05',
    type: 'system' as MissionLogType,
    title: 'Alerta climático registrado',
    description: 'Possível aumento de poeira identificado na área externa.',
    responsible: 'Sistema MarsLink',
  },
  {
    id: '8',
    time: '11:24',
    type: 'message' as MissionLogType,
    title: 'Resposta operacional enviada',
    description: 'Equipe informou que atividades externas serão priorizadas.',
    responsible: 'Comandante Kléber',
  },
]