import { Ionicons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { colors } from '@/constants/theme'
import { mission } from '@/data/marslink'

export default function OnboardingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function verifyOnboarding() {
      const alreadyViewed = await AsyncStorage.getItem('@marslink:onboarding')

      if (alreadyViewed) {
        router.replace('/(tabs)')
        return
      }

      setLoading(false)
    }

    verifyOnboarding()
  }, [])

  async function handleStartMission() {
    await AsyncStorage.setItem('@marslink:onboarding', 'true')
    router.replace('/(tabs)')
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={colors.orange} size="large" />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <LinearGradient
          colors={['#7C2D12', '#020914']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.hero}
        >
          <View style={styles.logoIcon}>
            <Ionicons name="planet-outline" size={42} color={colors.orange} />
          </View>

          <Text style={styles.logo}>
            <Text style={styles.logoHighlight}>Mars</Text>Link
          </Text>

          <Text style={styles.title}>Controle inteligente para missões em Marte</Text>

          <Text style={styles.description}>
            Comunicação assíncrona, monitoramento da tripulação, tarefas,
            alertas e protocolos de emergência em uma única plataforma.
          </Text>

          <View style={styles.missionBadge}>
            <Ionicons name="rocket-outline" size={17} color={colors.orange} />
            <Text style={styles.missionBadgeText}>
              {mission.name} — Sol {mission.sol}
            </Text>
          </View>
        </LinearGradient>

        <Text style={styles.sectionTitle}>Recursos principais</Text>

        <FeatureItem
          icon="chatbox-outline"
          title="Comunicação Terra-Marte"
          description={`Mensagens com latência simulada de ${mission.latency}.`}
        />

        <FeatureItem
          icon="clipboard-outline"
          title="Gestão de tarefas"
          description="Organização por prioridade, responsável, prazo e status."
        />

        <FeatureItem
          icon="pulse-outline"
          title="Saúde da tripulação"
          description="Monitoramento biomédico com indicadores e gráficos."
        />

        <FeatureItem
          icon="warning-outline"
          title="Modo emergência"
          description="Protocolos críticos para incidentes durante a missão."
        />

        <TouchableOpacity
          style={styles.startButton}
          activeOpacity={0.85}
          onPress={handleStartMission}
        >
          <Text style={styles.startButtonText}>Entrar na missão</Text>
          <Ionicons name="arrow-forward" size={20} color={colors.white} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: keyof typeof Ionicons.glyphMap
  title: string
  description: string
}) {
  return (
    <View style={styles.featureItem}>
      <View style={styles.featureIcon}>
        <Ionicons name={icon} size={24} color={colors.orange} />
      </View>

      <View style={styles.featureContent}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDescription}>{description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  loadingContainer: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  hero: {
    borderRadius: 32,
    padding: 24,
    minHeight: 360,
    justifyContent: 'center',
  },

  logoIcon: {
    width: 76,
    height: 76,
    borderRadius: 26,
    backgroundColor: '#431407',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 22,
  },

  logo: {
    color: colors.white,
    fontSize: 38,
    fontWeight: '900',
  },

  logoHighlight: {
    color: colors.orange,
  },

  title: {
    color: colors.white,
    fontSize: 30,
    fontWeight: '900',
    lineHeight: 36,
    marginTop: 18,
  },

  description: {
    color: '#E2E8F0',
    lineHeight: 23,
    fontSize: 15,
    marginTop: 14,
  },

  missionBadge: {
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },

  missionBadgeText: {
    color: colors.white,
    fontWeight: '800',
    fontSize: 13,
  },

  sectionTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '900',
    marginTop: 30,
    marginBottom: 14,
  },

  featureItem: {
    flexDirection: 'row',
    gap: 14,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
  },

  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#431407',
    justifyContent: 'center',
    alignItems: 'center',
  },

  featureContent: {
    flex: 1,
  },

  featureTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '900',
  },

  featureDescription: {
    color: colors.text,
    lineHeight: 20,
    marginTop: 5,
  },

  startButton: {
    marginTop: 18,
    backgroundColor: colors.orange,
    borderRadius: 18,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  startButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '900',
  },
})