import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Card } from '@/components/layout/card/Card'
import { colors } from '@/constants/theme'
import { emergencyAlerts, mission } from '@/data/marslink'
import { styles } from '@/styles/emergency-styles'

export default function EmergencyScreen() {
  const [activeAlert, setActiveAlert] = useState<string | null>(null)
  const [sentAlerts, setSentAlerts] = useState<string[]>([])

  function handleEmergency(title: string) {
    setActiveAlert(title)
    setSentAlerts((current) => [title, ...current])

    Alert.alert(
      'Alerta enviado',
      `O alerta "${title}" foi colocado na fila de comunicação e será enviado para a Terra na próxima janela.`,
    )
  }

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Emergência</Text>
            <Text style={styles.subtitle}>
              {mission.name} — Sol {mission.sol}
            </Text>
          </View>

          <View style={styles.statusBadge}>
            <Ionicons name="shield-checkmark-outline" size={15} color={colors.green} />
            <Text style={styles.statusText}>PRONTO</Text>
          </View>
        </View>

        <LinearGradient
          colors={['#7F1D1D', '#020914']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroCard}
        >
          <View style={styles.heroIcon}>
            <Ionicons name="warning-outline" size={28} color={colors.red} />
          </View>

          <Text style={styles.heroLabel}>Protocolo crítico</Text>

          <Text style={styles.heroTitle}>Modo emergência da missão</Text>

          <Text style={styles.heroText}>
            Acione alertas críticos para registrar incidentes, informar a Terra e
            iniciar protocolos de segurança mesmo com comunicação intermitente.
          </Text>

          <View style={styles.heroFooter}>
            <View style={styles.heroInfo}>
              <Ionicons name="radio-outline" size={16} color="#FECACA" />
              <Text style={styles.heroInfoText}>
                Próxima janela: {mission.communicationWindow}
              </Text>
            </View>

            <View style={styles.heroInfo}>
              <Ionicons name="time-outline" size={16} color="#FECACA" />
              <Text style={styles.heroInfoText}>Delay: {mission.latency}</Text>
            </View>
          </View>
        </LinearGradient>

        <Card style={styles.protocolCard}>
          <View style={styles.protocolHeader}>
            <View style={styles.protocolIcon}>
              <Ionicons name="lock-closed-outline" size={22} color={colors.red} />
            </View>

            <View style={styles.protocolContent}>
              <Text style={styles.protocolTitle}>Confirmação de segurança</Text>
              <Text style={styles.protocolText}>
                Todo alerta enviado é registrado localmente, entra na fila de
                comunicação e fica disponível para auditoria no log da missão.
              </Text>
            </View>
          </View>
        </Card>

        <View style={styles.metricsGrid}>
          <MetricCard
            icon="warning-outline"
            label="Protocolos"
            value={String(emergencyAlerts.length)}
            description="disponíveis"
          />

          <MetricCard
            icon="send-outline"
            label="Enviados"
            value={String(sentAlerts.length)}
            description="na sessão"
          />
        </View>

        <Text style={styles.sectionTitle}>Alertas rápidos</Text>

        {emergencyAlerts.map((item) => (
          <Card key={item.id} style={styles.alertCard}>
            <View style={styles.alertHeader}>
              <View style={styles.alertIcon}>
                <Ionicons name="alert-circle-outline" size={24} color={colors.red} />
              </View>

              <View style={styles.alertContent}>
                <Text style={styles.alertTitle}>{item.title}</Text>
                <Text style={styles.alertDescription}>{item.description}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.alertButton}
              activeOpacity={0.85}
              onPress={() => handleEmergency(item.title)}
              accessibilityRole="button"
              accessibilityLabel={`Enviar alerta de emergência: ${item.title}`}
            >
              <Ionicons name="send-outline" size={18} color={colors.white} />
              <Text style={styles.alertButtonText}>Enviar alerta</Text>
            </TouchableOpacity>
          </Card>
        ))}

        <Text style={styles.sectionTitle}>Status do último alerta</Text>

        <Card style={styles.statusCard}>
          <View style={styles.statusCardIcon}>
            <Ionicons
              name={activeAlert ? 'rocket-outline' : 'checkmark-circle-outline'}
              size={24}
              color={activeAlert ? colors.orange : colors.green}
            />
          </View>

          <View style={styles.statusCardContent}>
            <Text style={styles.statusCardTitle}>
              {activeAlert ? activeAlert : 'Nenhum alerta ativo'}
            </Text>

            <Text style={styles.statusCardText}>
              {activeAlert
                ? `Alerta em fila. Chegada estimada na Terra em ${mission.latency}.`
                : 'Todos os protocolos estão disponíveis para acionamento.'}
            </Text>
          </View>
        </Card>

        {sentAlerts.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Histórico desta sessão</Text>

            {sentAlerts.map((alert, index) => (
              <Card key={`${alert}-${index}`} style={styles.historyCard}>
                <View style={styles.historyIcon}>
                  <Ionicons name="radio-outline" size={18} color={colors.orange} />
                </View>

                <View style={styles.historyContent}>
                  <Text style={styles.historyTitle}>{alert}</Text>
                  <Text style={styles.historyText}>
                    Enviado para fila de comunicação com a Terra.
                  </Text>
                </View>
              </Card>
            ))}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
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
        <Ionicons name={icon} size={22} color={colors.red} />
      </View>

      <Text style={styles.metricLabel}>{label}</Text>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricDescription}>{description}</Text>
    </Card>
  )
}

