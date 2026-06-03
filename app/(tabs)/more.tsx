import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Card } from '@/components/layout/card/Card'
import { colors } from '@/constants/theme'
import { apiGet } from '@/services/api'
import { styles } from '@/styles/more-styles'
import { Mission } from '@/types/marslink'

export default function MoreScreen() {
  const [mission, setMission] = useState<Mission | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadMission()
  }, [])

  async function loadMission() {
    try {
      const missionData = await apiGet<Mission>('/mission')
      setMission(missionData)
    } catch (error) {
      console.error('Erro ao carregar missão:', error)
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
            Carregando módulos...
          </Text>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Mais</Text>

            <Text style={styles.subtitle}>
              {mission.name} — Sol {mission.sol}
            </Text>
          </View>

          <View style={styles.statusBadge}>
            <Ionicons
              name="grid-outline"
              size={15}
              color={colors.orange}
            />
            <Text style={styles.statusText}>
              MÓDULOS
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
              name="rocket-outline"
              size={26}
              color={colors.orange}
            />
          </View>

          <Text style={styles.heroLabel}>
            Centro de módulos
          </Text>

          <Text style={styles.heroTitle}>
            Recursos avançados da missão
          </Text>

          <Text style={styles.heroText}>
            Acesse mapa, alertas, log da missão e protocolos
            de emergência sem poluir a navegação principal.
          </Text>
        </LinearGradient>

        <Text style={styles.sectionTitle}>
          Módulos disponíveis
        </Text>

        <ModuleCard
          icon="map-outline"
          title="Mapa operacional"
          description="Visualize base, antena, painéis solares, pontos de coleta e zonas de risco."
          accessibilityLabel="Abrir mapa operacional da missão"
          onPress={() => router.push('/(tabs)/map')}
        />

        <ModuleCard
          icon="notifications-outline"
          title="Alertas da missão"
          description="Acompanhe notificações, eventos críticos e mensagens importantes."
          accessibilityLabel="Abrir alertas da missão"
          onPress={() => router.push('/(tabs)/notifications')}
        />

        <ModuleCard
          icon="document-text-outline"
          title="Log da missão"
          description="Consulte o histórico navegável de comunicações, decisões e eventos."
          accessibilityLabel="Abrir log da missão"
          onPress={() => router.push('/(tabs)/logs')}
        />

        <ModuleCard
          icon="warning-outline"
          title="Emergência"
          description="Acione protocolos críticos e envie alertas para a Terra."
          accessibilityLabel="Abrir protocolos de emergência"
          danger
          onPress={() => router.push('/(tabs)/emergency')}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

function ModuleCard({
  icon,
  title,
  description,
  danger = false,
  accessibilityLabel,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap
  title: string
  description: string
  danger?: boolean
  accessibilityLabel: string
  onPress: () => void
}) {
  const color = danger ? colors.red : colors.orange
  const background = danger ? '#450A0A' : '#431407'

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      accessible
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={description}
    >
      <Card
        style={[
          styles.moduleCard,
          danger && styles.moduleCardDanger,
        ]}
      >
        <View
          style={[
            styles.moduleIcon,
            { backgroundColor: background },
          ]}
        >
          <Ionicons
            name={icon}
            size={24}
            color={color}
          />
        </View>

        <View style={styles.moduleContent}>
          <Text style={styles.moduleTitle}>
            {title}
          </Text>

          <Text style={styles.moduleDescription}>
            {description}
          </Text>
        </View>

        <Ionicons
          name="chevron-forward"
          size={22}
          color={colors.muted}
        />
      </Card>
    </TouchableOpacity>
  )
}