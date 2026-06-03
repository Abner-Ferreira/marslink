import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Card } from '@/components/layout/card/Card'
import { colors } from '@/constants/theme'
import { apiGet } from '@/services/api'
import { styles } from '@/styles/logs-styles'
import { Mission, MissionLog, MissionLogType } from '@/types/marslink'

export default function LogsScreen() {
  const [mission, setMission] = useState<Mission | null>(null)
  const [missionLogs, setMissionLogs] = useState<MissionLog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    try {
      setLoading(true)

      const [missionData, logsData] = await Promise.all([
        apiGet<Mission>('/mission'),
        apiGet<MissionLog[]>('/mission-logs'),
      ])

      setMission(missionData)

      const sortedLogs = [...logsData].sort((a, b) => {
        const aDate = a.created_at
          ? new Date(a.created_at).getTime()
          : 0

        const bDate = b.created_at
          ? new Date(b.created_at).getTime()
          : 0

        return bDate - aDate
      })

      setMissionLogs(sortedLogs)
    } catch (error) {
      console.error('Erro ao carregar logs:', error)
    } finally {
      setLoading(false)
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
          }}
        >
          <Text style={{ color: colors.white }}>
            Carregando logs...
          </Text>
        </View>
      </SafeAreaView>
    )
  }

  const messageLogs = missionLogs.filter(
    (log) => log.type === 'message',
  ).length

  const taskLogs = missionLogs.filter(
    (log) => log.type === 'task',
  ).length

  const systemLogs = missionLogs.filter(
    (log) => log.type === 'system',
  ).length

  const healthLogs = missionLogs.filter(
    (log) => log.type === 'health',
  ).length

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>
              Log da missão
            </Text>

            <Text style={styles.subtitle}>
              {mission.name} — Sol {mission.sol}
            </Text>
          </View>

          <View style={styles.statusBadge}>
            <Ionicons
              name="document-text-outline"
              size={15}
              color={colors.orange}
            />
            <Text style={styles.statusText}>
              HISTÓRICO
            </Text>
          </View>
        </View>

        <LinearGradient
          colors={['#7C2D12', '#020914']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroCard}
        >
          <View style={styles.heroIcon}>
            <Ionicons
              name="time-outline"
              size={26}
              color={colors.orange}
            />
          </View>

          <Text style={styles.heroLabel}>
            Rastreabilidade operacional
          </Text>

          <Text style={styles.heroTitle}>
            {missionLogs.length} eventos registrados
          </Text>

          <Text style={styles.heroText}>
            Histórico navegável de comunicações,
            decisões, tarefas, alertas e eventos
            importantes da missão.
          </Text>

          <View style={styles.heroFooter}>
            <View style={styles.heroInfo}>
              <Ionicons
                name="radio-outline"
                size={16}
                color="#FED7AA"
              />
              <Text style={styles.heroInfoText}>
                Delay: {mission.latency}
              </Text>
            </View>

            <View style={styles.heroInfo}>
              <Ionicons
                name="location-outline"
                size={16}
                color="#FED7AA"
              />
              <Text style={styles.heroInfoText}>
                {mission.location}
              </Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.metricsGrid}>
          <MetricCard
            icon="chatbox-outline"
            label="Mensagens"
            value={String(messageLogs)}
            description="registradas"
          />

          <MetricCard
            icon="clipboard-outline"
            label="Tarefas"
            value={String(taskLogs)}
            description="decisões"
          />

          <MetricCard
            icon="pulse-outline"
            label="Saúde"
            value={String(healthLogs)}
            description="eventos"
          />

          <MetricCard
            icon="settings-outline"
            label="Sistema"
            value={String(systemLogs)}
            description="alertas"
          />
        </View>

        <Text style={styles.sectionTitle}>
          Linha do tempo
        </Text>

        <Card style={styles.timelineCard}>
          {missionLogs.map((log, index) => {
            const config = getLogConfig(log.type)

            const isLast =
              index === missionLogs.length - 1

            return (
              <View
                key={log.id}
                style={styles.timelineItem}
              >
                <View style={styles.timelineLeft}>
                  <View
                    style={[
                      styles.timelineIcon,
                      {
                        backgroundColor: config.bg,
                        borderColor: config.color,
                      },
                    ]}
                  >
                    <Ionicons
                      name={config.icon}
                      size={18}
                      color={config.color}
                    />
                  </View>

                  {!isLast && (
                    <View
                      style={styles.timelineLine}
                    />
                  )}
                </View>

                <View
                  style={styles.timelineContent}
                >
                  <View
                    style={styles.timelineHeader}
                  >
                    <Text
                      style={styles.timelineTime}
                    >
                      {log.time}
                    </Text>

                    <View
                      style={[
                        styles.typeBadge,
                        {
                          backgroundColor:
                            config.bg,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.typeBadgeText,
                          {
                            color:
                              config.color,
                          },
                        ]}
                      >
                        {config.label}
                      </Text>
                    </View>
                  </View>

                  <Text
                    style={styles.timelineTitle}
                  >
                    {log.title}
                  </Text>

                  <Text
                    style={
                      styles.timelineDescription
                    }
                  >
                    {log.description}
                  </Text>

                  <View
                    style={styles.responsibleRow}
                  >
                    <Ionicons
                      name="person-outline"
                      size={14}
                      color={colors.muted}
                    />

                    <Text
                      style={
                        styles.responsibleText
                      }
                    >
                      {log.responsible}
                    </Text>
                  </View>
                </View>
              </View>
            )
          })}
        </Card>
      </ScrollView>
    </SafeAreaView>
  )
}

function getLogConfig(
  type: MissionLogType,
): {
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
    health: {
      label: 'Saúde',
      icon: 'pulse-outline',
      color: colors.green,
      bg: '#052E16',
    },
    system: {
      label: 'Sistema',
      icon: 'settings-outline',
      color: colors.orange,
      bg: '#431407',
    },
    emergency: {
      label: 'Emergência',
      icon: 'warning-outline',
      color: colors.red,
      bg: '#450A0A',
    },
  } as const

  return config[type]
}

type MetricCardProps = {
  icon: keyof typeof Ionicons.glyphMap
  label: string
  value: string
  description: string
}

function MetricCard({
  icon,
  label,
  value,
  description,
}: MetricCardProps) {
  return (
    <Card style={styles.metricCard}>
      <View style={styles.metricIcon}>
        <Ionicons
          name={icon}
          size={22}
          color={colors.orange}
        />
      </View>

      <Text style={styles.metricLabel}>
        {label}
      </Text>

      <Text style={styles.metricValue}>
        {value}
      </Text>

      <Text style={styles.metricDescription}>
        {description}
      </Text>
    </Card>
  )
}