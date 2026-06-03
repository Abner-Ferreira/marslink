import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useMemo, useState } from 'react'
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Card } from '@/components/layout/card/Card'
import { colors } from '@/constants/theme'
import { mission, tasks } from '@/data/marslink'
import { styles } from '@/styles/tasks-styles'

type Task = (typeof tasks)[number]

type TaskFilter = 'all' | 'pending' | 'inProgress' | 'critical'

export default function TasksScreen() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [selectedFilter, setSelectedFilter] = useState<TaskFilter>('all')
  const [search, setSearch] = useState('')

  const pendingTasks = tasks.filter((task) => task.status === 'Pendente').length
  const inProgressTasks = tasks.filter((task) => task.status === 'Em andamento').length
  const completedTasks = tasks.filter((task) => task.status === 'Concluída').length
  const criticalTasks = tasks.filter((task) => task.priority === 'critical').length

  const filteredTasks = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    return tasks.filter((task) => {
      const matchesFilter =
        selectedFilter === 'all' ||
        (selectedFilter === 'pending' && task.status === 'Pendente') ||
        (selectedFilter === 'inProgress' && task.status === 'Em andamento') ||
        (selectedFilter === 'critical' && task.priority === 'critical')

      const matchesSearch =
        !normalizedSearch ||
        task.title.toLowerCase().includes(normalizedSearch) ||
        task.description.toLowerCase().includes(normalizedSearch) ||
        task.responsible.toLowerCase().includes(normalizedSearch) ||
        task.status.toLowerCase().includes(normalizedSearch) ||
        task.due.toLowerCase().includes(normalizedSearch)

      return matchesFilter && matchesSearch
    })
  }, [selectedFilter, search])

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Tarefas</Text>
            <Text style={styles.subtitle}>
              {mission.name} — Sol {mission.sol}
            </Text>
          </View>

          <View style={styles.statusBadge}>
            <Ionicons name="clipboard-outline" size={15} color={colors.orange} />
            <Text style={styles.statusText}>MISSÃO</Text>
          </View>
        </View>

        <LinearGradient
          colors={['#7C2D12', '#020914']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroCard}
        >
          <View style={styles.heroIcon}>
            <Ionicons name="clipboard-outline" size={25} color={colors.orange} />
          </View>

          <Text style={styles.heroLabel}>Plano operacional</Text>

          <Text style={styles.heroTitle}>{pendingTasks} tarefas pendentes</Text>

          <Text style={styles.heroText}>
            Atividades da missão em {mission.location}, organizadas por
            prioridade, responsável e prazo para manter a tripulação alinhada.
          </Text>

          <View style={styles.heroFooter}>
            <View style={styles.heroInfo}>
              <Ionicons name="warning-outline" size={16} color="#FED7AA" />
              <Text style={styles.heroInfoText}>{criticalTasks} críticas</Text>
            </View>

            <View style={styles.heroInfo}>
              <Ionicons name="sync-outline" size={16} color="#FED7AA" />
              <Text style={styles.heroInfoText}>
                {inProgressTasks} em andamento
              </Text>
            </View>

            <View style={styles.heroInfo}>
              <Ionicons name="radio-outline" size={16} color="#FED7AA" />
              <Text style={styles.heroInfoText}>Delay: {mission.latency}</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.metricsGrid}>
          <MetricCard
            icon="time-outline"
            label="Pendentes"
            value={String(pendingTasks)}
            description="aguardando"
          />

          <MetricCard
            icon="construct-outline"
            label="Andamento"
            value={String(inProgressTasks)}
            description="em execução"
          />

          <MetricCard
            icon="alert-circle-outline"
            label="Críticas"
            value={String(criticalTasks)}
            description="prioridade alta"
          />

          <MetricCard
            icon="checkmark-done-outline"
            label="Concluídas"
            value={String(completedTasks)}
            description="finalizadas"
          />
        </View>

        <Text style={styles.sectionTitle}>Buscar tarefa</Text>

        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={20} color={colors.muted} />

          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Buscar por título, responsável, status..."
            placeholderTextColor={colors.muted}
            style={styles.searchInput}
          />

          {search.length > 0 && (
            <TouchableOpacity activeOpacity={0.8} onPress={() => setSearch('')}>
              <Ionicons name="close-circle" size={20} color={colors.muted} />
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.sectionTitle}>Filtros rápidos</Text>

        <View style={styles.filters}>
          <FilterChip
            label={`Todas (${tasks.length})`}
            active={selectedFilter === 'all'}
            onPress={() => setSelectedFilter('all')}
          />

          <FilterChip
            label={`Pendentes (${pendingTasks})`}
            active={selectedFilter === 'pending'}
            onPress={() => setSelectedFilter('pending')}
          />

          <FilterChip
            label={`Críticas (${criticalTasks})`}
            active={selectedFilter === 'critical'}
            onPress={() => setSelectedFilter('critical')}
          />

          <FilterChip
            label={`Em andamento (${inProgressTasks})`}
            active={selectedFilter === 'inProgress'}
            onPress={() => setSelectedFilter('inProgress')}
          />
        </View>

        <View style={styles.listHeader}>
          <Text style={styles.sectionTitle}>Lista de tarefas</Text>

          <Text style={styles.resultCount}>
            {filteredTasks.length} resultado
            {filteredTasks.length !== 1 ? 's' : ''}
          </Text>
        </View>

        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <Card key={task.id} style={styles.taskCard}>
              <View style={styles.taskHeader}>
                <View style={styles.taskTitleArea}>
                  <Text style={styles.taskTitle}>{task.title}</Text>
                  <Text style={styles.taskDescription}>{task.description}</Text>
                </View>

                <PriorityBadge priority={task.priority} />
              </View>

              <View style={styles.taskMetaGrid}>
                <InfoItem
                  icon="person-outline"
                  label="Responsável"
                  value={task.responsible}
                />

                <InfoItem icon="calendar-outline" label="Prazo" value={task.due} />

                <InfoItem
                  icon="radio-button-on-outline"
                  label="Status"
                  value={task.status}
                />
              </View>

              <View style={styles.taskFooter}>
                <View style={styles.progressArea}>
                  <Text style={styles.progressLabel}>Progresso operacional</Text>

                  <View style={styles.progressBar}>
                    <View
                      style={[
                        styles.progressFill,
                        {
                          width: getTaskProgress(task.status),
                        },
                      ]}
                    />
                  </View>
                </View>

                <TouchableOpacity
                  style={styles.detailsButton}
                  activeOpacity={0.85}
                  onPress={() => setSelectedTask(task)}
                >
                  <Text style={styles.detailsButtonText}>Ver detalhes</Text>
                </TouchableOpacity>
              </View>
            </Card>
          ))
        ) : (
          <Card style={styles.emptyCard}>
            <View style={styles.emptyIcon}>
              <Ionicons name="search-outline" size={24} color={colors.orange} />
            </View>

            <Text style={styles.emptyTitle}>Nenhuma tarefa encontrada</Text>
            <Text style={styles.emptyText}>
              Tente buscar por outro termo ou alterar o filtro selecionado.
            </Text>
          </Card>
        )}
      </ScrollView>

      <TaskDetailsModal task={selectedTask} onClose={() => setSelectedTask(null)} />
    </SafeAreaView>
  )
}

function TaskDetailsModal({
  task,
  onClose,
}: {
  task: Task | null
  onClose: () => void
}) {
  if (!task) return null

  return (
    <Modal visible transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <Pressable style={styles.modalBackdrop} onPress={onClose} />

        <View style={styles.modalContent}>
          <View style={styles.modalHandle} />

          <View style={styles.modalHeader}>
            <View style={styles.modalIcon}>
              <Ionicons
                name="clipboard-outline"
                size={24}
                color={colors.orange}
              />
            </View>

            <TouchableOpacity
              style={styles.modalCloseButton}
              activeOpacity={0.8}
              onPress={onClose}
            >
              <Ionicons name="close" size={22} color={colors.white} />
            </TouchableOpacity>
          </View>

          <PriorityBadge priority={task.priority} />

          <Text style={styles.modalTitle}>{task.title}</Text>

          <Text style={styles.modalDescription}>{task.description}</Text>

          <View style={styles.modalInfoList}>
            <InfoItem
              icon="person-outline"
              label="Responsável"
              value={task.responsible}
            />

            <InfoItem icon="calendar-outline" label="Prazo" value={task.due} />

            <InfoItem
              icon="radio-button-on-outline"
              label="Status atual"
              value={task.status}
            />

            <InfoItem
              icon="planet-outline"
              label="Local da missão"
              value={mission.location}
            />

            <InfoItem
              icon="time-outline"
              label="Latência com a Terra"
              value={mission.latency}
            />

            <InfoItem
              icon="radio-outline"
              label="Janela de comunicação"
              value={mission.communicationWindow}
            />
          </View>

          <View style={styles.modalProgressArea}>
            <Text style={styles.progressLabel}>Progresso operacional</Text>

            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  {
                    width: getTaskProgress(task.status),
                  },
                ]}
              />
            </View>
          </View>

          <Card style={styles.modalObservationCard}>
            <View style={styles.modalObservationHeader}>
              <Ionicons
                name="information-circle-outline"
                size={22}
                color={colors.orange}
              />

              <Text style={styles.modalObservationTitle}>
                Observação da missão
              </Text>
            </View>

            <Text style={styles.modalObservationText}>
              Esta tarefa faz parte do planejamento operacional do Sol{' '}
              {mission.sol}. Alterações de prioridade devem ser sincronizadas
              com o controle da Terra devido à latência de comunicação.
            </Text>
          </Card>

          <TouchableOpacity
            style={styles.modalActionButton}
            activeOpacity={0.85}
            onPress={onClose}
          >
            <Ionicons name="checkmark-done-outline" size={18} color={colors.white} />
            <Text style={styles.modalActionButtonText}>Entendido</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

function getTaskProgress(status: string) {
  if (status === 'Concluída') return '100%'
  if (status === 'Em andamento') return '62%'
  return '18%'
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
    >
      <Text style={[styles.filterChipText, active && styles.filterChipTextActive]}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

type MetricCardProps = {
  icon: keyof typeof Ionicons.glyphMap
  label: string
  value: string
  description: string
}

function MetricCard({ icon, label, value, description }: MetricCardProps) {
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

function PriorityBadge({ priority }: { priority: string }) {
  const config = {
    low: {
      label: 'Baixa',
      color: colors.green,
      bg: '#052E16',
      icon: 'arrow-down-circle-outline',
    },
    medium: {
      label: 'Média',
      color: colors.yellow,
      bg: '#422006',
      icon: 'remove-circle-outline',
    },
    high: {
      label: 'Alta',
      color: colors.orange,
      bg: '#431407',
      icon: 'arrow-up-circle-outline',
    },
    critical: {
      label: 'Crítica',
      color: colors.red,
      bg: '#450A0A',
      icon: 'alert-circle-outline',
    },
  } as const

  const current = config[priority as keyof typeof config] ?? config.low

  return (
    <View style={[styles.priorityBadge, { backgroundColor: current.bg }]}>
      <Ionicons
        name={current.icon as keyof typeof Ionicons.glyphMap}
        size={14}
        color={current.color}
      />

      <Text style={[styles.priorityText, { color: current.color }]}>
        {current.label}
      </Text>
    </View>
  )
}

type InfoItemProps = {
  icon: keyof typeof Ionicons.glyphMap
  label: string
  value: string
}

function InfoItem({ icon, label, value }: InfoItemProps) {
  return (
    <View style={styles.infoItem}>
      <View style={styles.infoIcon}>
        <Ionicons name={icon} size={16} color={colors.orange} />
      </View>

      <View style={styles.infoContent}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  )
}

