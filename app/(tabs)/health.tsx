import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useState } from 'react'
import {
  DimensionValue,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Card } from '@/components/layout/card/Card'
import { colors } from '@/constants/theme'
import { apiGet } from '@/services/api'
import { styles } from '@/styles/health-styles'
import { CrewMember, Mission } from '@/types/marslink'

export default function HealthScreen() {
  const [mission, setMission] = useState<Mission | null>(null)
  const [crew, setCrew] = useState<CrewMember[]>([])
  const [selectedMember, setSelectedMember] = useState<CrewMember | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    try {
      setLoading(true)

      const [missionData, crewData] = await Promise.all([
        apiGet<Mission>('/mission'),
        apiGet<CrewMember[]>('/crew'),
      ])

      setMission(missionData)
      setCrew(crewData)
    } catch (error) {
      console.error('Erro ao carregar saúde:', error)
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
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ color: colors.white, fontSize: 16, fontWeight: '800' }}>
            Carregando saúde da tripulação...
          </Text>
        </View>
      </SafeAreaView>
    )
  }

  const totalCrew = crew.length
  const stableCrew = crew.filter((member) => member.status === 'OK').length

  const averageBpm =
    totalCrew > 0
      ? Math.round(crew.reduce((total, member) => total + member.bpm, 0) / totalCrew)
      : 0

  const averageOxygen =
    totalCrew > 0
      ? Math.round(
          crew.reduce((total, member) => total + member.oxygen, 0) / totalCrew,
        )
      : 0

  const averageTemperature =
    totalCrew > 0
      ? crew.reduce((total, member) => {
          const value = Number(member.temperature.replace('°C', ''))
          return total + value
        }, 0) / totalCrew
      : 0

  const healthAlerts = crew.filter(
    (member) => member.bpm > 95 || member.oxygen < 94,
  )

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Saúde</Text>
            <Text style={styles.subtitle}>
              {mission.name} — Sol {mission.sol}
            </Text>
          </View>

          <View style={styles.statusBadge}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>ESTÁVEL</Text>
          </View>
        </View>

        <LinearGradient
          colors={['#14532D', '#020914']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroCard}
        >
          <View style={styles.heroIcon}>
            <Ionicons name="pulse-outline" size={26} color={colors.green} />
          </View>

          <Text style={styles.heroLabel}>Monitoramento vital</Text>

          <Text style={styles.heroTitle}>
            {stableCrew}/{totalCrew} tripulantes estáveis
          </Text>

          <Text style={styles.heroText}>
            Indicadores biomédicos da tripulação durante a missão em{' '}
            {mission.location}.
          </Text>

          <View style={styles.heroFooter}>
            <View style={styles.heroInfo}>
              <Ionicons name="heart-outline" size={16} color="#BBF7D0" />
              <Text style={styles.heroInfoText}>Média: {averageBpm} bpm</Text>
            </View>

            <View style={styles.heroInfo}>
              <Ionicons name="water-outline" size={16} color="#BBF7D0" />
              <Text style={styles.heroInfoText}>O₂ médio: {averageOxygen}%</Text>
            </View>

            <View style={styles.heroInfo}>
              <Ionicons name="radio-outline" size={16} color="#BBF7D0" />
              <Text style={styles.heroInfoText}>Delay: {mission.latency}</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.metricsGrid}>
          <MetricCard
            icon="people-outline"
            label="Tripulação"
            value={String(totalCrew)}
            description="monitorados"
          />

          <MetricCard
            icon="checkmark-circle-outline"
            label="Estáveis"
            value={String(stableCrew)}
            description="sem alerta"
          />

          <MetricCard
            icon="heart-outline"
            label="FC Média"
            value={`${averageBpm}`}
            description="bpm"
          />

          <MetricCard
            icon="water-outline"
            label="Oxigênio"
            value={`${averageOxygen}%`}
            description="média"
          />
        </View>

        <Text style={styles.sectionTitle}>Tendência de saúde</Text>

        <Card style={styles.trendCard}>
          <TrendItem
            icon="people-outline"
            label="Tripulação"
            value="Estável"
            description="Todos os membros estão dentro da faixa esperada"
            status="good"
          />

          <TrendItem
            icon="water-outline"
            label="Oxigenação"
            value="Sem queda crítica"
            description={`Média atual em ${averageOxygen}%`}
            status="good"
          />

          <TrendItem
            icon="heart-outline"
            label="Batimentos"
            value="Normal"
            description={`Média atual em ${averageBpm} bpm`}
            status="good"
          />
        </Card>

        <Text style={styles.sectionTitle}>Alertas biomédicos</Text>

        {healthAlerts.length > 0 ? (
          healthAlerts.map((member) => (
            <Card key={member.id} style={styles.alertCard}>
              <View style={styles.alertIcon}>
                <Ionicons name="warning-outline" size={22} color={colors.red} />
              </View>

              <View style={styles.alertContent}>
                <Text style={styles.alertTitle}>{member.name}</Text>
                <Text style={styles.alertText}>
                  Indicador fora do padrão. Verificar sinais vitais e registrar
                  avaliação médica.
                </Text>
              </View>
            </Card>
          ))
        ) : (
          <Card style={styles.noAlertCard}>
            <View style={styles.noAlertIcon}>
              <Ionicons name="shield-checkmark-outline" size={22} color={colors.green} />
            </View>

            <View style={styles.alertContent}>
              <Text style={styles.noAlertTitle}>Nenhum alerta crítico</Text>
              <Text style={styles.alertText}>
                Todos os indicadores biomédicos estão dentro da normalidade.
              </Text>
            </View>
          </Card>
        )}

        <Text style={styles.sectionTitle}>Gráficos biomédicos</Text>

        <Card style={styles.chartCard}>
          <HorizontalChart
            title="Frequência cardíaca"
            description="Comparativo de batimentos por minuto"
            icon="heart-outline"
            data={crew.map((member) => ({
              label: getShortName(member.name),
              value: member.bpm,
              suffix: ' bpm',
            }))}
            maxValue={100}
          />

          <View style={styles.chartDivider} />

          <HorizontalChart
            title="Oxigenação"
            description="Percentual de oxigenação por tripulante"
            icon="water-outline"
            data={crew.map((member) => ({
              label: getShortName(member.name),
              value: member.oxygen,
              suffix: '%',
            }))}
            maxValue={100}
          />
        </Card>

        <Text style={styles.sectionTitle}>Resumo clínico</Text>

        <Card style={styles.summaryGridCard}>
          <SummaryItem icon="heart-circle-outline" label="FC média" value={`${averageBpm} bpm`} />
          <SummaryItem icon="water-outline" label="O₂ médio" value={`${averageOxygen}%`} />
          <SummaryItem
            icon="thermometer-outline"
            label="Temp. média"
            value={`${averageTemperature.toFixed(1)}°C`}
          />
          <SummaryItem icon="shield-checkmark-outline" label="Status geral" value="Normal" />
        </Card>

        <Text style={styles.sectionTitle}>Tripulação</Text>

        {crew.map((member) => (
          <TouchableOpacity
            key={member.id}
            activeOpacity={0.85}
            onPress={() => setSelectedMember(member)}
          >
            <Card style={styles.memberCard}>
              <View style={styles.memberHeader}>
                <View style={styles.memberIdentity}>
                  <View style={styles.avatar}>
                    <Text style={styles.avatarText}>{getInitials(member.name)}</Text>
                  </View>

                  <View style={styles.memberInfo}>
                    <Text style={styles.memberName}>{member.name}</Text>
                    <Text style={styles.memberRole}>{member.role}</Text>
                  </View>
                </View>

                <View style={styles.memberStatus}>
                  <Ionicons name="checkmark-circle-outline" size={15} color={colors.green} />
                  <Text style={styles.memberStatusText}>{member.status}</Text>
                </View>
              </View>

              <View style={styles.vitalGrid}>
                <VitalItem icon="heart-outline" label="Batimentos" value={`${member.bpm} bpm`} />
                <VitalItem icon="water-outline" label="Oxigenação" value={`${member.oxygen}%`} />
                <VitalItem icon="thermometer-outline" label="Temperatura" value={member.temperature} />
                <VitalItem icon="fitness-outline" label="Pressão" value={member.pressure} />
              </View>

              <Text style={styles.tapHint}>Toque para ver detalhes</Text>
            </Card>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <CrewDetailsModal
        member={selectedMember}
        mission={mission}
        onClose={() => setSelectedMember(null)}
      />
    </SafeAreaView>
  )
}

function CrewDetailsModal({
  member,
  mission,
  onClose,
}: {
  member: CrewMember | null
  mission: Mission
  onClose: () => void
}) {
  if (!member) return null

  return (
    <Modal visible transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <Pressable style={styles.modalBackdrop} onPress={onClose} />

        <View style={styles.modalContent}>
          <View style={styles.modalHandle} />

          <View style={styles.modalHeader}>
            <View style={styles.modalAvatar}>
              <Text style={styles.avatarText}>{getInitials(member.name)}</Text>
            </View>

            <TouchableOpacity style={styles.modalCloseButton} onPress={onClose}>
              <Ionicons name="close" size={22} color={colors.white} />
            </TouchableOpacity>
          </View>

          <Text style={styles.modalTitle}>{member.name}</Text>
          <Text style={styles.modalSubtitle}>{member.role}</Text>

          <View style={styles.modalInfoList}>
            <VitalItem icon="heart-outline" label="Batimentos" value={`${member.bpm} bpm`} />
            <VitalItem icon="water-outline" label="Oxigenação" value={`${member.oxygen}%`} />
            <VitalItem icon="thermometer-outline" label="Temperatura" value={member.temperature} />
            <VitalItem icon="fitness-outline" label="Pressão arterial" value={member.pressure} />
            <VitalItem icon="radio-outline" label="Comunicação" value={mission.latency} />
          </View>

          <Card style={styles.modalObservationCard}>
            <Text style={styles.modalObservationTitle}>Avaliação automática</Text>
            <Text style={styles.modalObservationText}>
              O tripulante está com sinais vitais estáveis. O acompanhamento deve
              continuar durante as próximas janelas de comunicação com a Terra.
            </Text>
          </Card>

          <TouchableOpacity style={styles.modalActionButton} onPress={onClose}>
            <Ionicons name="checkmark-done-outline" size={18} color={colors.white} />
            <Text style={styles.modalActionButtonText}>Entendido</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

function getInitials(name: string) {
  const names = name.trim().split(' ')
  if (names.length === 1) return names[0].slice(0, 2).toUpperCase()
  return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase()
}

function getShortName(name: string) {
  return name.trim().split(' ')[0]
}

function getPercentageWidth(value: number, maxValue: number): DimensionValue {
  const percentage = Math.min(100, Math.max(8, (value / maxValue) * 100))
  return `${percentage}%` as DimensionValue
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
        <Ionicons name={icon} size={22} color={colors.green} />
      </View>

      <Text style={styles.metricLabel}>{label}</Text>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricDescription}>{description}</Text>
    </Card>
  )
}

function TrendItem({
  icon,
  label,
  value,
  description,
}: {
  icon: keyof typeof Ionicons.glyphMap
  label: string
  value: string
  description: string
  status: 'good' | 'warning' | 'critical'
}) {
  return (
    <View style={styles.trendItem}>
      <View style={styles.trendIcon}>
        <Ionicons name={icon} size={20} color={colors.green} />
      </View>

      <View style={styles.trendContent}>
        <Text style={styles.trendLabel}>{label}</Text>
        <Text style={styles.trendValue}>{value}</Text>
        <Text style={styles.trendDescription}>{description}</Text>
      </View>
    </View>
  )
}

function HorizontalChart({
  title,
  description,
  icon,
  data,
  maxValue,
}: {
  title: string
  description: string
  icon: keyof typeof Ionicons.glyphMap
  data: { label: string; value: number; suffix: string }[]
  maxValue: number
}) {
  return (
    <View style={styles.chartBlock}>
      <View style={styles.chartHeader}>
        <View style={styles.chartIcon}>
          <Ionicons name={icon} size={18} color={colors.green} />
        </View>

        <View style={styles.chartTitleArea}>
          <Text style={styles.chartTitle}>{title}</Text>
          <Text style={styles.chartDescription}>{description}</Text>
        </View>
      </View>

      <View style={styles.horizontalChart}>
        {data.map((item) => (
          <View key={`${title}-${item.label}`} style={styles.chartRow}>
            <Text style={styles.chartRowLabel}>{item.label}</Text>

            <View style={styles.chartBarTrack}>
              <View
                style={[
                  styles.chartBarFill,
                  { width: getPercentageWidth(item.value, maxValue) },
                ]}
              />
            </View>

            <Text style={styles.chartRowValue}>
              {item.value}
              {item.suffix}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

function SummaryItem({
  icon,
  label,
  value,
}: {
  icon: keyof typeof Ionicons.glyphMap
  label: string
  value: string
}) {
  return (
    <View style={styles.summaryItem}>
      <View style={styles.summaryItemIcon}>
        <Ionicons name={icon} size={18} color={colors.green} />
      </View>

      <View style={styles.summaryItemContent}>
        <Text style={styles.summaryItemLabel}>{label}</Text>
        <Text style={styles.summaryItemValue}>{value}</Text>
      </View>
    </View>
  )
}

function VitalItem({
  icon,
  label,
  value,
}: {
  icon: keyof typeof Ionicons.glyphMap
  label: string
  value: string
}) {
  return (
    <View style={styles.vitalItem}>
      <View style={styles.vitalIcon}>
        <Ionicons name={icon} size={17} color={colors.green} />
      </View>

      <View style={styles.vitalContent}>
        <Text style={styles.vitalLabel}>{label}</Text>
        <Text style={styles.vitalValue}>{value}</Text>
      </View>
    </View>
  )
}