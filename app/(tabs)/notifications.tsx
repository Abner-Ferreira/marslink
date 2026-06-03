import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useMemo, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Card } from '@/components/layout/card/Card'
import { colors } from '@/constants/theme'
import { API_URL, apiGet, apiPost } from '@/services/api'
import { styles } from '@/styles/notifications-styles'
import { Mission, Notification, NotificationType } from '@/types/marslink'

type NotificationFilter = 'all' | 'unread' | 'warning' | 'system'

const simulatedEvents = [
  {
    title: 'Nova telemetria recebida',
    description: 'Dados biomédicos da tripulação foram atualizados.',
    type: 'system' as NotificationType,
  },
  {
    title: 'Mensagem aguardando confirmação',
    description: 'Uma mensagem enviada para a Terra ainda está em trânsito.',
    type: 'message' as NotificationType,
  },
  {
    title: 'Alerta de poeira externa',
    description: 'Sensores indicam aumento de partículas na área de exploração.',
    type: 'warning' as NotificationType,
  },
  {
    title: 'Tarefa operacional atualizada',
    description: 'Uma atividade da missão recebeu nova prioridade.',
    type: 'task' as NotificationType,
  },
]

export default function NotificationsScreen() {
  const [mission, setMission] = useState<Mission | null>(null)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [selectedFilter, setSelectedFilter] = useState<NotificationFilter>('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      createSimulatedNotification()
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  async function loadData() {
    try {
      setLoading(true)

      const [missionData, notificationsData] = await Promise.all([
        apiGet<Mission>('/mission'),
        apiGet<Notification[]>('/notifications'),
      ])

      setMission(missionData)
      setNotifications(sortNotifications(notificationsData))
    } catch (error) {
      console.error('Erro ao carregar notificações:', error)
    } finally {
      setLoading(false)
    }
  }

  async function createSimulatedNotification() {
    try {
      const randomEvent =
        simulatedEvents[Math.floor(Math.random() * simulatedEvents.length)]

      const createdNotification = await apiPost<Notification>('/notifications', {
        title: randomEvent.title,
        description: randomEvent.description,
        time: getCurrentTime(),
        type: randomEvent.type,
        unread: true,
      })

      setNotifications((current) =>
        sortNotifications([createdNotification, ...current]),
      )
    } catch (error) {
      console.error('Erro ao criar notificação simulada:', error)
    }
  }

  const unreadCount = notifications.filter((item) => item.unread).length
  const warningCount = notifications.filter((item) => item.type === 'warning').length
  const systemCount = notifications.filter((item) => item.type === 'system').length

  const filteredNotifications = useMemo(() => {
    if (selectedFilter === 'unread') {
      return notifications.filter((item) => item.unread)
    }

    if (selectedFilter === 'warning') {
      return notifications.filter((item) => item.type === 'warning')
    }

    if (selectedFilter === 'system') {
      return notifications.filter((item) => item.type === 'system')
    }

    return notifications
  }, [notifications, selectedFilter])

  async function markAsRead(id: number) {
    try {
      const updatedNotification = await apiPatch<Notification>(
        `/notifications/${id}/read`,
        {},
      )

      setNotifications((current) =>
        current.map((item) =>
          item.id === id ? updatedNotification : item,
        ),
      )
    } catch (error) {
      console.error('Erro ao marcar notificação como lida:', error)
    }
  }

  async function markAllAsRead() {
    try {
      const updatedNotifications = await apiPatch<Notification[]>(
        '/notifications/read-all',
        {},
      )

      setNotifications(sortNotifications(updatedNotifications))
    } catch (error) {
      console.error('Erro ao marcar todas como lidas:', error)
    }
  }

  if (loading || !mission) {
    return (
      <SafeAreaView edges={['top']} style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ color: colors.white, fontSize: 16, fontWeight: '800' }}>
            Carregando alertas...
          </Text>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Alertas</Text>
            <Text style={styles.subtitle}>
              {mission.name} — Sol {mission.sol}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.readAllButton}
            activeOpacity={0.85}
            onPress={markAllAsRead}
            accessibilityRole="button"
            accessibilityLabel="Marcar todos os alertas como lidos"
          >
            <Ionicons name="checkmark-done-outline" size={18} color={colors.white} />
          </TouchableOpacity>
        </View>

        <LinearGradient
          colors={['#7C2D12', '#020914']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroCard}
        >
          <View style={styles.heroIcon}>
            <Ionicons name="notifications-outline" size={26} color={colors.orange} />
          </View>

          <Text style={styles.heroLabel}>Central em tempo real</Text>
          <Text style={styles.heroTitle}>{unreadCount} alertas não lidos</Text>

          <Text style={styles.heroText}>
            Eventos automáticos registram informações da missão, alertas,
            mensagens, tarefas e status operacional.
          </Text>

          <View style={styles.heroFooter}>
            <View style={styles.heroInfo}>
              <Ionicons name="sync-outline" size={16} color="#FED7AA" />
              <Text style={styles.heroInfoText}>Eventos a cada 15s</Text>
            </View>

            <View style={styles.heroInfo}>
              <Ionicons name="radio-outline" size={16} color="#FED7AA" />
              <Text style={styles.heroInfoText}>
                Janela: {mission.communication_window}
              </Text>
            </View>
          </View>
        </LinearGradient>

        {warningCount > 0 && (
          <Card style={styles.warningBanner}>
            <View style={styles.warningIcon}>
              <Ionicons name="warning-outline" size={22} color={colors.red} />
            </View>

            <View style={styles.warningContent}>
              <Text style={styles.warningTitle}>Atenção operacional</Text>
              <Text style={styles.warningText}>
                Existem {warningCount} alertas que exigem acompanhamento da tripulação.
              </Text>
            </View>
          </Card>
        )}

        <View style={styles.metricsGrid}>
          <MetricCard
            icon="mail-unread-outline"
            label="Não lidos"
            value={String(unreadCount)}
            description="pendentes"
          />

          <MetricCard
            icon="warning-outline"
            label="Atenção"
            value={String(warningCount)}
            description="alertas"
          />

          <MetricCard
            icon="settings-outline"
            label="Sistema"
            value={String(systemCount)}
            description="eventos"
          />

          <MetricCard
            icon="notifications-outline"
            label="Total"
            value={String(notifications.length)}
            description="notificações"
          />
        </View>

        <Text style={styles.sectionTitle}>Filtros rápidos</Text>

        <View style={styles.filters}>
          <FilterChip
            label={`Todas (${notifications.length})`}
            active={selectedFilter === 'all'}
            onPress={() => setSelectedFilter('all')}
          />

          <FilterChip
            label={`Não lidas (${unreadCount})`}
            active={selectedFilter === 'unread'}
            onPress={() => setSelectedFilter('unread')}
          />

          <FilterChip
            label={`Atenção (${warningCount})`}
            active={selectedFilter === 'warning'}
            onPress={() => setSelectedFilter('warning')}
          />

          <FilterChip
            label={`Sistema (${systemCount})`}
            active={selectedFilter === 'system'}
            onPress={() => setSelectedFilter('system')}
          />
        </View>

        <View style={styles.listHeader}>
          <Text style={styles.sectionTitle}>Eventos da missão</Text>

          <Text style={styles.resultCount}>
            {filteredNotifications.length} resultado
            {filteredNotifications.length !== 1 ? 's' : ''}
          </Text>
        </View>

        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
              onMarkAsRead={() => markAsRead(notification.id)}
            />
          ))
        ) : (
          <Card style={styles.emptyCard}>
            <View style={styles.emptyIcon}>
              <Ionicons name="search-outline" size={24} color={colors.orange} />
            </View>

            <Text style={styles.emptyTitle}>Nenhum alerta encontrado</Text>

            <Text style={styles.emptyText}>
              Não existem notificações para o filtro selecionado.
            </Text>
          </Card>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

async function apiPatch<T>(endpoint: string, body: unknown): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    throw new Error(`Erro ao atualizar ${endpoint}`)
  }

  return response.json()
}

function sortNotifications(notificationsToSort: Notification[]) {
  return [...notificationsToSort].sort((a, b) => {
    const aDate = a.created_at ? new Date(a.created_at).getTime() : 0
    const bDate = b.created_at ? new Date(b.created_at).getTime() : 0

    return bDate - aDate
  })
}

function getCurrentTime() {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  return `${hours}:${minutes}`
}

function NotificationCard({
  notification,
  onMarkAsRead,
}: {
  notification: Notification
  onMarkAsRead: () => void
}) {
  const config = getNotificationConfig(notification.type)

  return (
    <Card style={[styles.notificationCard, notification.unread && styles.unreadCard]}>
      <View style={styles.notificationHeader}>
        <View style={[styles.notificationIcon, { backgroundColor: config.bg }]}>
          <Ionicons name={config.icon} size={22} color={config.color} />
        </View>

        <View style={styles.notificationContent}>
          <View style={styles.notificationTitleRow}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            {notification.unread && <View style={styles.unreadDot} />}
          </View>

          <Text style={styles.notificationDescription}>
            {notification.description}
          </Text>

          <View style={styles.notificationFooter}>
            <Text style={styles.notificationTime}>{notification.time}</Text>

            <View style={[styles.notificationTypeBadge, { backgroundColor: config.bg }]}>
              <Text style={[styles.notificationTypeText, { color: config.color }]}>
                {config.label}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {notification.unread && (
        <TouchableOpacity
          style={styles.markReadButton}
          activeOpacity={0.85}
          onPress={onMarkAsRead}
          accessibilityRole="button"
          accessibilityLabel={`Marcar alerta ${notification.title} como lido`}
        >
          <Ionicons name="checkmark-outline" size={17} color={colors.white} />
          <Text style={styles.markReadButtonText}>Marcar como lido</Text>
        </TouchableOpacity>
      )}
    </Card>
  )
}

function getNotificationConfig(type: NotificationType): {
  label: string
  icon: keyof typeof Ionicons.glyphMap
  color: string
  bg: string
} {
  const config = {
    message: {
      label: 'Mensagem',
      icon: 'chatbox-outline',
      color: colors.orange,
      bg: '#431407',
    },
    task: {
      label: 'Tarefa',
      icon: 'clipboard-outline',
      color: colors.yellow,
      bg: '#422006',
    },
    system: {
      label: 'Sistema',
      icon: 'settings-outline',
      color: colors.green,
      bg: '#052E16',
    },
    warning: {
      label: 'Atenção',
      icon: 'warning-outline',
      color: colors.red,
      bg: '#450A0A',
    },
  } as const

  return config[type]
}

function FilterChip({
  label,
  active,
  onPress,
}: {
  label: string
  active: boolean
  onPress: () => void
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[styles.filterChip, active && styles.filterChipActive]}
      accessibilityRole="button"
      accessibilityLabel={`Filtrar alertas por ${label}`}
    >
      <Text style={[styles.filterChipText, active && styles.filterChipTextActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

function MetricCard({
  icon,
  label,
  value,
  description,
}: {
  icon: keyof typeof Ionicons.glyphMap
  label: string
  value: string
  description: string
}) {
  return (
    <Card style={styles.metricCard}>
      <View style={styles.metricIcon}>
        <Ionicons name={icon} size={22} color={colors.orange} />
      </View>

      <Text style={styles.metricLabel}>{label}</Text>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricDescription}>{description}</Text>
    </Card>
  )
}