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

export type MissionLogType =
  | 'message'
  | 'task'
  | 'health'
  | 'system'
  | 'emergency'

export type MapPointType = 'base' | 'sample' | 'solar' | 'antenna' | 'danger'

export type Mission = {
  id: number
  name: string
  sol: number
  status: MissionStatus
  location: string
  communication_window: string
  latency: string
  oxygen: number
  energy: number
  temperature: string
  external_condition: string
  communication_status: string
}

export type Message = {
  id: number
  sender: string
  content: string
  time: string
  status: MessageStatus
  direction: MessageDirection
  created_at?: string
}

export type Task = {
  id: number
  title: string
  description: string
  priority: TaskPriority
  responsible: string
  due: string
  status: TaskStatus
  created_at?: string
}

export type CrewMember = {
  id: number
  name: string
  role: string
  bpm: number
  oxygen: number
  temperature: string
  pressure: string
  status: string
}

export type Notification = {
  id: number
  title: string
  description: string
  time: string
  type: NotificationType
  unread: boolean
  created_at?: string
}

export type EmergencyAlert = {
  id: number
  title: string
  description: string
  priority: TaskPriority
}

export type MissionLog = {
  id: number
  time: string
  type: MissionLogType
  title: string
  description: string
  responsible: string
  created_at?: string
}

export type MapPoint = {
  id: number
  name: string
  description: string
  type: MapPointType
  status: string
  x: number
  y: number
}