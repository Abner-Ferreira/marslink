import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Card } from '@/components/layout/card/Card'
import { getMissionTheme } from '@/constants/mission-theme'
import { colors } from '@/constants/theme'
import {
  crew,
  messages,
  mission,
  systemMetricsHistory,
  tasks,
} from '@/data/marslink'
import { missionLogs } from '@/data/mission-logs'
import { styles } from '@/styles/index-styles'

export default function HomeScreen() {
  const missionTheme = getMissionTheme(mission.status)

  const pendingTasks = tasks.filter((task) => task.status === 'Pendente').length
  const inProgressTasks = tasks.filter((task) => task.status === 'Em andamento').length
  const criticalTasks = tasks.filter((task) => task.priority === 'critical').length
  const receivedMessages = messages.filter((message) => message.direction === 'received').length
  const lastMessage = messages[messages.length - 1]
  const latestLogs = missionLogs.slice(-4).reverse()

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>
              <Text style={{ color: missionTheme.primary }}>Mars</Text>Link
            </Text>

            <Text style={styles.headerSubtitle}>
              {mission.name} — Sol {mission.sol}
            </Text>
          </View>

          <View style={[styles.statusBadge, { backgroundColor: missionTheme.dark }]}>
            <View style={[styles.statusDot, { backgroundColor: missionTheme.primary }]} />
            <Text style={[styles.statusText, { color: missionTheme.primary }]}>
              {missionTheme.label}
            </Text>
          </View>
        </View>

        <LinearGradient
          colors={missionTheme.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroCard}
        >
          <View style={styles.heroIcon}>
            <Ionicons
              name={missionTheme.icon as keyof typeof Ionicons.glyphMap}
              size={26}
              color={missionTheme.primary}
            />
          </View>

          <Text style={styles.heroLabel}>{missionTheme.title}</Text>

          <Text style={styles.heroTitle}>
            {mission.name} — Sol {mission.sol}
          </Text>

          <Text style={styles.heroDescription}>
            Operação ativa em {mission.location}. Comunicação assíncrona com
            latência média de {mission.latency}.
          </Text>

          <View style={styles.heroFooter}>
            <View style={styles.heroInfo}>
              <Ionicons name="radio-outline" size={18} color={missionTheme.primary} />
              <Text style={styles.heroInfoText}>
                Janela: {mission.communicationWindow}
              </Text>
            </View>

            <View style={styles.heroInfo}>
              <Ionicons name="planet-outline" size={18} color={missionTheme.primary} />
              <Text style={styles.heroInfoText}>{mission.externalCondition}</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.metricsGrid}>
          <MetricCard
            icon="clipboard-outline"
            label="Tarefas"
            value={String(pendingTasks)}
            description="pendentes"
            color={missionTheme.primary}
            background={missionTheme.dark}
          />

          <MetricCard
            icon="chatbubble-ellipses-outline"
            label="Mensagens"
            value={String(receivedMessages)}
            description="recebidas"
            color={missionTheme.primary}
            background={missionTheme.dark}
          />

          <MetricCard
            icon="battery-charging-outline"
            label="Energia"
            value={`${mission.energy}%`}
            description="sistema"
            color={missionTheme.primary}
            background={missionTheme.dark}
          />

          <MetricCard
            icon="water-outline"
            label="Oxigênio"
            value={`${mission.oxygen}%`}
            description="módulo"
            color={missionTheme.primary}
            background={missionTheme.dark}
          />
        </View>

        <Text style={styles.sectionTitle}>Indicadores da missão</Text>

        <Card style={styles.indicatorsCard}>
          <StatusIndicator
            icon="battery-charging-outline"
            label="Energia"
            value={mission.energy}
            suffix="%"
            color={missionTheme.primary}
            background={missionTheme.dark}
          />

          <StatusIndicator
            icon="water-outline"
            label="Oxigênio"
            value={mission.oxygen}
            suffix="%"
            color={colors.green}
            background="#052E16"
          />

          <StatusIndicator
            icon="radio-outline"
            label="Comunicação"
            value={mission.energy}
            suffix="%"
            color={colors.orange}
            background="#431407"
          />
        </Card>

        <Text style={styles.sectionTitle}>Telemetria da missão</Text>

        <Card style={styles.telemetryCard}>
          <TelemetryChart
            title="Energia"
            value={`${mission.energy}%`}
            description="Histórico do sistema energético"
            icon="battery-charging-outline"
            data={systemMetricsHistory.energy}
            suffix="%"
            minValue={70}
            maxValue={100}
            color={missionTheme.primary}
            background={missionTheme.dark}
          />

          <View style={styles.chartDivider} />

          <TelemetryChart
            title="Oxigênio"
            value={`${mission.oxygen}%`}
            description="Estabilidade do módulo habitacional"
            icon="water-outline"
            data={systemMetricsHistory.oxygen}
            suffix="%"
            minValue={90}
            maxValue={100}
            color={colors.green}
            background="#052E16"
          />

          <View style={styles.chartDivider} />

          <TelemetryChart
            title="Temperatura externa"
            value={mission.temperature}
            description="Variação registrada na superfície"
            icon="thermometer-outline"
            data={systemMetricsHistory.temperature}
            suffix="°C"
            minValue={-50}
            maxValue={-30}
            color={colors.orange}
            background="#431407"
          />
        </Card>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Timeline da missão</Text>

          <TouchableOpacity activeOpacity={0.85} onPress={() => router.push('/(tabs)/logs')}>
            <Text style={styles.sectionAction}>Ver log</Text>
          </TouchableOpacity>
        </View>

        <Card style={styles.timelineCard}>
          {latestLogs.map((log, index) => (
            <View key={log.id} style={styles.timelineItem}>
              <View style={styles.timelineLeft}>
                <View style={styles.timelineDot} />
                {index !== latestLogs.length - 1 && <View style={styles.timelineLine} />}
              </View>

              <View style={styles.timelineContent}>
                <Text style={styles.timelineTime}>{log.time}</Text>
                <Text style={styles.timelineTitle}>{log.title}</Text>
                <Text style={styles.timelineDescription}>{log.description}</Text>
              </View>
            </View>
          ))}
        </Card>

        <Text style={styles.sectionTitle}>Status operacional</Text>

        <Card style={styles.operationCard}>
          <OperationItem
            icon="pulse-outline"
            title="Tripulação estável"
            text={`${crew.length} astronautas monitorados com sinais dentro da normalidade.`}
            color={colors.green}
          />

          <View style={styles.divider} />

          <OperationItem
            icon="planet-outline"
            title="Ambiente externo"
            text={`Temperatura marciana registrada em ${mission.temperature}. Condição: ${mission.externalCondition}.`}
            color={missionTheme.primary}
          />

          <View style={styles.divider} />

          <OperationItem
            icon="construct-outline"
            title="Operação da missão"
            text={`${inProgressTasks} tarefas em andamento e ${criticalTasks} tarefas críticas.`}
            color={colors.yellow}
          />
        </Card>

        <Text style={styles.sectionTitle}>Última comunicação</Text>

        <Card style={styles.messageCard}>
          <View style={styles.messageHeader}>
            <View>
              <Text style={styles.messageFrom}>{lastMessage.sender}</Text>
              <Text style={styles.messageTime}>Registrada às {lastMessage.time}</Text>
            </View>

            <View style={[styles.messageStatus, { backgroundColor: missionTheme.dark }]}>
              <Ionicons name="checkmark-done-outline" size={16} color={missionTheme.primary} />
              <Text style={[styles.messageStatusText, { color: missionTheme.primary }]}>
                {getMessageStatusLabel(lastMessage.status)}
              </Text>
            </View>
          </View>

          <Text style={styles.messageText}>{lastMessage.content}</Text>
        </Card>

        <Text style={styles.sectionTitle}>Imagem da missão</Text>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200',
          }}
          style={styles.marsImage}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

function getMessageStatusLabel(status: string) {
  if (status === 'sending') return 'Enviando'
  if (status === 'in_transit') return 'Em trânsito'
  if (status === 'received') return 'Recebida'
  return 'Confirmada'
}

type MetricCardProps = {
  icon: keyof typeof Ionicons.glyphMap
  label: string
  value: string
  description: string
  color: string
  background: string
}

function MetricCard({
  icon,
  label,
  value,
  description,
  color,
  background,
}: MetricCardProps) {
  return (
    <Card style={styles.metricCard}>
      <View style={[styles.metricIcon, { backgroundColor: background }]}>
        <Ionicons name={icon} size={22} color={color} />
      </View>

      <Text style={styles.metricLabel}>{label}</Text>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricDescription}>{description}</Text>
    </Card>
  )
}

function StatusIndicator({
  icon,
  label,
  value,
  suffix,
  color,
  background,
}: {
  icon: keyof typeof Ionicons.glyphMap
  label: string
  value: number
  suffix: string
  color: string
  background: string
}) {
  return (
    <View style={styles.indicatorItem}>
      <View style={styles.indicatorHeader}>
        <View style={[styles.indicatorIcon, { backgroundColor: background }]}>
          <Ionicons name={icon} size={18} color={color} />
        </View>

        <View style={styles.indicatorTextArea}>
          <Text style={styles.indicatorLabel}>{label}</Text>
          <Text style={styles.indicatorValue}>
            {value}
            {suffix}
          </Text>
        </View>
      </View>

      <View style={styles.indicatorTrack}>
        <View style={[styles.indicatorFill, { width: `${value}%`, backgroundColor: color }]} />
      </View>
    </View>
  )
}

type TelemetryChartProps = {
  title: string
  value: string
  description: string
  icon: keyof typeof Ionicons.glyphMap
  data: number[]
  suffix: string
  minValue: number
  maxValue: number
  color: string
  background: string
}

function TelemetryChart({
  title,
  value,
  description,
  icon,
  data,
  suffix,
  minValue,
  maxValue,
  color,
  background,
}: TelemetryChartProps) {
  return (
    <View style={styles.chartBlock}>
      <View style={styles.chartHeader}>
        <View style={styles.chartTitleArea}>
          <View style={[styles.chartIcon, { backgroundColor: background }]}>
            <Ionicons name={icon} size={18} color={color} />
          </View>

          <View style={styles.chartTextArea}>
            <Text style={styles.chartTitle}>{title}</Text>
            <Text style={styles.chartDescription}>{description}</Text>
          </View>
        </View>

        <Text style={styles.chartValue}>{value}</Text>
      </View>

      <View style={styles.chartBars}>
        {data.map((item, index) => {
          const height = getBarHeight(item, minValue, maxValue)

          return (
            <View key={`${title}-${index}`} style={styles.barWrapper}>
              <View style={[styles.bar, { height, backgroundColor: color }]} />

              <Text style={styles.barLabel}>
                {item}
                {suffix}
              </Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}

function OperationItem({
  icon,
  title,
  text,
  color,
}: {
  icon: keyof typeof Ionicons.glyphMap
  title: string
  text: string
  color: string
}) {
  return (
    <View style={styles.operationItem}>
      <View style={styles.operationIcon}>
        <Ionicons name={icon} size={20} color={color} />
      </View>

      <View style={styles.operationContent}>
        <Text style={styles.operationTitle}>{title}</Text>
        <Text style={styles.operationText}>{text}</Text>
      </View>
    </View>
  )
}

function getBarHeight(value: number, minValue: number, maxValue: number) {
  const normalized = (value - minValue) / (maxValue - minValue)
  const clamped = Math.max(0.12, Math.min(1, normalized))

  return 18 + clamped * 70
}

