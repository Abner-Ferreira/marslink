import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Card } from '@/components/layout/card/Card'
import { colors } from '@/constants/theme'
import { API_URL, apiGet, apiPost } from '@/services/api'
import { styles } from '@/styles/messages-styles'
import {
  Message,
  MessageStatus as MarslinkMessageStatus,
  Mission,
} from '@/types/marslink'

export default function MessagesScreen() {
  const scrollViewRef = useRef<ScrollView>(null)

  const [mission, setMission] = useState<Mission | null>(null)
  const [messageText, setMessageText] = useState('')
  const [search, setSearch] = useState('')
  const [isOffline, setIsOffline] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    try {
      setLoading(true)

      const [missionData, messagesData] = await Promise.all([
        apiGet<Mission>('/mission'),
        apiGet<Message[]>('/messages'),
      ])

      setMission(missionData)
      setMessages(sortMessagesByTime(messagesData))
    } catch (error) {
      console.error('Erro ao carregar mensagens:', error)
    } finally {
      setLoading(false)
    }
  }

  const receivedMessages = useMemo(
    () => messages.filter((message) => message.direction === 'received').length,
    [messages],
  )

  const sentMessages = useMemo(
    () => messages.filter((message) => message.direction === 'sent').length,
    [messages],
  )

  const queuedMessages = useMemo(
    () =>
      messages.filter(
        (message) => message.direction === 'sent' && message.status === 'sending',
      ).length,
    [messages],
  )

  const pendingMessages = useMemo(
    () =>
      messages.filter(
        (message) =>
          message.status === 'sending' ||
          message.status === 'in_transit' ||
          message.status === 'received',
      ).length,
    [messages],
  )

  const filteredMessages = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()

    if (!normalizedSearch) return messages

    return messages.filter(
      (message) =>
        message.sender.toLowerCase().includes(normalizedSearch) ||
        message.content.toLowerCase().includes(normalizedSearch) ||
        message.time.toLowerCase().includes(normalizedSearch) ||
        getMessageStatusLabel(message.status)
          .toLowerCase()
          .includes(normalizedSearch),
    )
  }, [messages, search])

  async function handleSendMessage() {
    const trimmedMessage = messageText.trim()

    if (!trimmedMessage) return

    const localMessage: Message = {
      id: Date.now() * -1,
      sender: 'Você',
      content: trimmedMessage,
      time: getCurrentTime(),
      status: 'sending',
      direction: 'sent',
    }

    setMessages((currentMessages) => [...currentMessages, localMessage])
    setMessageText('')

    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true })
    }, 100)

    if (!isOffline) {
      await sendMessageToApi(localMessage)
    }
  }

  async function sendMessageToApi(localMessage: Message) {
    try {
      const createdMessage = await apiPost<Message>('/messages', {
        sender: localMessage.sender,
        content: localMessage.content,
        time: localMessage.time,
        status: localMessage.status,
        direction: localMessage.direction,
      })

      setMessages((currentMessages) =>
        sortMessagesByTime(
          currentMessages.map((message) =>
            message.id === localMessage.id ? createdMessage : message,
          ),
        ),
      )

      simulateMessageDelivery(createdMessage.id)
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
    }
  }

  function toggleConnection() {
    setIsOffline((current) => {
      const nextValue = !current

      if (current && !nextValue) {
        setTimeout(() => {
          processQueuedMessages()
        }, 400)
      }

      return nextValue
    })
  }

  function processQueuedMessages() {
    const queued = messages.filter(
      (message) =>
        message.direction === 'sent' &&
        message.status === 'sending' &&
        message.id < 0,
    )

    queued.forEach((message, index) => {
      setTimeout(() => {
        sendMessageToApi(message)
      }, index * 700)
    })
  }

  function simulateMessageDelivery(id: number) {
    setTimeout(() => {
      updateMessageStatus(id, 'in_transit')
    }, 1500)

    setTimeout(() => {
      updateMessageStatus(id, 'received')
    }, 3500)

    setTimeout(() => {
      updateMessageStatus(id, 'confirmed')
    }, 5500)
  }

  async function updateMessageStatus(id: number, status: MarslinkMessageStatus) {
    setMessages((currentMessages) =>
      currentMessages.map((message) =>
        message.id === id
          ? {
              ...message,
              status,
            }
          : message,
      ),
    )

    if (id < 0) return

    try {
      await apiPatch<Message>(`/messages/${id}/status`, {
        status,
      })
    } catch (error) {
      console.error('Erro ao atualizar status da mensagem:', error)
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
            Carregando comunicação...
          </Text>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          ref={scrollViewRef}
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() => {
            if (!search.trim()) {
              scrollViewRef.current?.scrollToEnd({ animated: true })
            }
          }}
        >
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Comunicação</Text>
              <Text style={styles.subtitle}>
                {mission.name} — Sol {mission.sol}
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={toggleConnection}
              style={[
                styles.signalBadge,
                isOffline ? styles.signalBadgeOffline : styles.signalBadgeOnline,
              ]}
            >
              <View
                style={[
                  styles.signalDot,
                  isOffline ? styles.signalDotOffline : styles.signalDotOnline,
                ]}
              />

              <Text
                style={[
                  styles.signalText,
                  isOffline ? styles.signalTextOffline : styles.signalTextOnline,
                ]}
              >
                {isOffline ? 'OFFLINE' : 'ONLINE'}
              </Text>
            </TouchableOpacity>
          </View>

          <LinearGradient
            colors={isOffline ? ['#450A0A', '#020914'] : ['#7C2D12', '#020914']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.latencyCard}
          >
            <View
              style={[
                styles.latencyIcon,
                isOffline ? styles.latencyIconOffline : styles.latencyIconOnline,
              ]}
            >
              <Ionicons
                name={isOffline ? 'cloud-offline-outline' : 'radio-outline'}
                size={24}
                color={isOffline ? colors.red : colors.orange}
              />
            </View>

            <Text style={styles.latencyLabel}>
              {isOffline ? 'Comunicação interrompida' : 'Latência Terra ↔ Marte'}
            </Text>

            <Text style={styles.latencyValue}>
              {isOffline ? `${queuedMessages} na fila` : mission.latency}
            </Text>

            <Text style={styles.latencyText}>
              {isOffline
                ? 'A nave está operando offline. As mensagens serão salvas localmente e sincronizadas quando a conexão voltar.'
                : 'As mensagens não chegam em tempo real. Cada envio passa por fila, transmissão, recebimento e confirmação.'}
            </Text>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={toggleConnection}
              style={styles.connectionButton}
            >
              <Ionicons
                name={isOffline ? 'wifi-outline' : 'cloud-offline-outline'}
                size={18}
                color={colors.white}
              />

              <Text style={styles.connectionButtonText}>
                {isOffline ? 'Restaurar conexão' : 'Simular modo offline'}
              </Text>
            </TouchableOpacity>

            <View style={styles.latencyFooter}>
              <View style={styles.footerItem}>
                <Ionicons name="time-outline" size={16} color="#FED7AA" />
                <Text style={styles.footerText}>
                  Próxima janela: {mission.communication_window}
                </Text>
              </View>

              <View style={styles.footerItem}>
                <Ionicons name="location-outline" size={16} color="#FED7AA" />
                <Text style={styles.footerText}>{mission.location}</Text>
              </View>
            </View>
          </LinearGradient>

          <View style={styles.metricsGrid}>
            <MetricCard
              icon="download-outline"
              label="Recebidas"
              value={String(receivedMessages)}
              description="da Terra"
            />

            <MetricCard
              icon="send-outline"
              label="Enviadas"
              value={String(sentMessages)}
              description="pela tripulação"
            />

            <MetricCard
              icon="file-tray-full-outline"
              label="Na fila"
              value={String(queuedMessages)}
              description="offline"
            />

            <MetricCard
              icon="rocket-outline"
              label="Pendentes"
              value={String(pendingMessages)}
              description="em trânsito"
            />
          </View>

          {isOffline && (
            <Card style={styles.offlineWarningCard}>
              <View style={styles.offlineWarningHeader}>
                <View style={styles.offlineWarningIcon}>
                  <Ionicons name="warning-outline" size={22} color={colors.red} />
                </View>

                <View style={styles.offlineWarningContent}>
                  <Text style={styles.offlineWarningTitle}>
                    Modo offline ativado
                  </Text>

                  <Text style={styles.offlineWarningText}>
                    Mensagens enviadas agora ficarão em fila local até a conexão
                    ser restaurada.
                  </Text>
                </View>
              </View>
            </Card>
          )}

          <Text style={styles.sectionTitle}>Buscar mensagem</Text>

          <View style={styles.searchBox}>
            <Ionicons name="search-outline" size={20} color={colors.muted} />

            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Buscar por conteúdo, remetente, horário ou status..."
              placeholderTextColor={colors.muted}
              style={styles.searchInput}
            />

            {search.length > 0 && (
              <TouchableOpacity activeOpacity={0.8} onPress={() => setSearch('')}>
                <Ionicons name="close-circle" size={20} color={colors.muted} />
              </TouchableOpacity>
            )}
          </View>

          <Text style={styles.sectionTitle}>Fila de entrega</Text>

          <Card style={styles.queueCard}>
            <QueueStep
              icon="create-outline"
              title="Criada"
              description="Mensagem registrada no sistema"
              active
            />

            <QueueConnector active />

            <QueueStep
              icon="file-tray-full-outline"
              title="Fila local"
              description="Aguardando conexão"
              active={queuedMessages > 0}
            />

            <QueueConnector active={!isOffline} />

            <QueueStep
              icon="rocket-outline"
              title="Em trânsito"
              description="Viajando até a Terra"
              active={messages.some((message) => message.status === 'in_transit')}
            />

            <QueueConnector
              active={messages.some((message) => message.status === 'received')}
            />

            <QueueStep
              icon="download-outline"
              title="Recebida"
              description="Chegou ao controle"
              active={messages.some((message) => message.status === 'received')}
            />

            <QueueConnector
              active={messages.some((message) => message.status === 'confirmed')}
            />

            <QueueStep
              icon="checkmark-done-outline"
              title="Confirmada"
              description="Recebimento validado"
              active={messages.some((message) => message.status === 'confirmed')}
            />
          </Card>

          <View style={styles.listHeader}>
            <Text style={styles.sectionTitle}>Histórico de mensagens</Text>

            <Text style={styles.resultCount}>
              {filteredMessages.length} resultado
              {filteredMessages.length !== 1 ? 's' : ''}
            </Text>
          </View>

          {filteredMessages.length > 0 ? (
            filteredMessages.map((message) => {
              const isSent = message.direction === 'sent'

              return (
                <View
                  key={message.id}
                  style={[
                    styles.messageBubble,
                    isSent ? styles.sentBubble : styles.receivedBubble,
                  ]}
                >
                  <View style={styles.messageHeader}>
                    <Text style={styles.sender}>{message.sender}</Text>
                    <Text style={styles.messageTime}>{message.time}</Text>
                  </View>

                  <Text style={styles.messageText}>{message.content}</Text>

                  <View style={styles.messageFooter}>
                    <MessageStatus status={message.status} />

                    {isSent && (
                      <Text style={styles.delayText}>
                        {message.status === 'sending' && isOffline
                          ? 'Aguardando conexão para envio'
                          : `Latência estimada: ${mission.latency}`}
                      </Text>
                    )}
                  </View>
                </View>
              )
            })
          ) : (
            <Card style={styles.emptyCard}>
              <View style={styles.emptyIcon}>
                <Ionicons name="search-outline" size={24} color={colors.orange} />
              </View>

              <Text style={styles.emptyTitle}>Nenhuma mensagem encontrada</Text>

              <Text style={styles.emptyText}>
                Tente buscar por outro termo, remetente, horário ou status.
              </Text>
            </Card>
          )}

          <Card style={styles.offlineCard}>
            <View style={styles.offlineHeader}>
              <View style={styles.offlineIcon}>
                <Ionicons
                  name="cloud-offline-outline"
                  size={22}
                  color={colors.orange}
                />
              </View>

              <View style={styles.offlineContent}>
                <Text style={styles.offlineTitle}>Fila offline preparada</Text>
                <Text style={styles.offlineText}>
                  Se a comunicação cair, novas mensagens ficam salvas em fila e
                  são sincronizadas na próxima janela às{' '}
                  {mission.communication_window}.
                </Text>
              </View>
            </View>
          </Card>
        </ScrollView>

        <View style={styles.composer}>
          <TextInput
            placeholder="Escrever mensagem para a Terra..."
            placeholderTextColor={colors.muted}
            style={styles.input}
            value={messageText}
            onChangeText={setMessageText}
            multiline
            maxLength={180}
            accessibilityLabel="Campo para escrever mensagem para a Terra"
          />

          <TouchableOpacity
            style={[
              styles.sendButton,
              !messageText.trim() && styles.sendButtonDisabled,
            ]}
            activeOpacity={0.8}
            onPress={handleSendMessage}
            disabled={!messageText.trim()}
            accessibilityLabel="Enviar mensagem"
          >
            <Ionicons name="send" size={20} color={colors.white} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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

function sortMessagesByTime(messagesToSort: Message[]) {
  return [...messagesToSort].sort((a, b) => {
    const [aHour, aMinute] = a.time.split(':').map(Number)
    const [bHour, bMinute] = b.time.split(':').map(Number)

    return aHour * 60 + aMinute - (bHour * 60 + bMinute)
  })
}

function getCurrentTime() {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  return `${hours}:${minutes}`
}

function getMessageStatusLabel(status: MarslinkMessageStatus) {
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

type QueueStepProps = {
  icon: keyof typeof Ionicons.glyphMap
  title: string
  description: string
  active?: boolean
}

function QueueStep({
  icon,
  title,
  description,
  active = false,
}: QueueStepProps) {
  return (
    <View style={styles.queueStep}>
      <View style={[styles.queueIcon, active && styles.queueIconActive]}>
        <Ionicons
          name={icon}
          size={18}
          color={active ? colors.orange : colors.muted}
        />
      </View>

      <View style={styles.queueTextArea}>
        <Text style={[styles.queueTitle, active && styles.queueTitleActive]}>
          {title}
        </Text>

        <Text style={styles.queueDescription}>{description}</Text>
      </View>
    </View>
  )
}

function QueueConnector({ active = false }: { active?: boolean }) {
  return <View style={[styles.queueConnector, active && styles.queueConnectorActive]} />
}

function MessageStatus({ status }: { status: MarslinkMessageStatus }) {
  const config = {
    sending: {
      label: 'Na fila',
      icon: 'file-tray-full-outline',
      color: colors.yellow,
      bg: '#422006',
    },
    in_transit: {
      label: 'Em trânsito',
      icon: 'rocket-outline',
      color: colors.orange,
      bg: '#431407',
    },
    received: {
      label: 'Recebida',
      icon: 'download-outline',
      color: colors.green,
      bg: '#052E16',
    },
    confirmed: {
      label: 'Confirmada',
      icon: 'checkmark-done-outline',
      color: colors.green,
      bg: '#052E16',
    },
  } as const

  const current = config[status]

  return (
    <View style={[styles.statusPill, { backgroundColor: current.bg }]}>
      <Ionicons
        name={current.icon as keyof typeof Ionicons.glyphMap}
        size={14}
        color={current.color}
      />

      <Text style={[styles.statusPillText, { color: current.color }]}>
        {current.label}
      </Text>
    </View>
  )
}