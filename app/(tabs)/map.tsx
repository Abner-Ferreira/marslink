import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Card } from '@/components/layout/card/Card'
import { colors } from '@/constants/theme'
import { marsMapPoints, MapPointType, mission } from '@/data/marslink'
import { styles } from '@/styles/map-styles'

export default function MapScreen() {
  const riskPoints = marsMapPoints.filter((point) => point.type === 'danger').length
  const operationalPoints = marsMapPoints.filter(
    (point) => point.status === 'Operacional',
  ).length

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Mapa</Text>
            <Text style={styles.subtitle}>
              {mission.name} — Sol {mission.sol}
            </Text>
          </View>

          <View style={styles.statusBadge}>
            <Ionicons name="planet-outline" size={15} color={colors.orange} />
            <Text style={styles.statusText}>MARTE</Text>
          </View>
        </View>

        <LinearGradient
          colors={['#7C2D12', '#020914']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroCard}
        >
          <View style={styles.heroIcon}>
            <Ionicons name="map-outline" size={26} color={colors.orange} />
          </View>

          <Text style={styles.heroLabel}>Reconhecimento territorial</Text>

          <Text style={styles.heroTitle}>Mapa operacional da missão</Text>

          <Text style={styles.heroText}>
            Visualização simulada dos principais pontos da região de exploração:
            base, coleta, comunicação, energia e zonas de atenção.
          </Text>

          <View style={styles.heroFooter}>
            <View style={styles.heroInfo}>
              <Ionicons name="location-outline" size={16} color="#FED7AA" />
              <Text style={styles.heroInfoText}>{mission.location}</Text>
            </View>

            <View style={styles.heroInfo}>
              <Ionicons name="warning-outline" size={16} color="#FED7AA" />
              <Text style={styles.heroInfoText}>{riskPoints} zona de risco</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.metricsGrid}>
          <MetricCard
            icon="navigate-outline"
            label="Pontos"
            value={String(marsMapPoints.length)}
            description="mapeados"
          />

          <MetricCard
            icon="shield-checkmark-outline"
            label="Operacionais"
            value={String(operationalPoints)}
            description="ativos"
          />

          <MetricCard
            icon="warning-outline"
            label="Risco"
            value={String(riskPoints)}
            description="zona crítica"
          />

          <MetricCard
            icon="radio-outline"
            label="Delay"
            value={mission.latency}
            description="com a Terra"
          />
        </View>

        <Text style={styles.sectionTitle}>Mapa da região</Text>

        <Card style={styles.mapCard}>
          <View style={styles.mapArea}>
            <View style={styles.gridLineHorizontalOne} />
            <View style={styles.gridLineHorizontalTwo} />
            <View style={styles.gridLineVerticalOne} />
            <View style={styles.gridLineVerticalTwo} />

            <View style={styles.routeLineOne} />
            <View style={styles.routeLineTwo} />

            {marsMapPoints.map((point) => (
              <View
                key={point.id}
                style={[
                  styles.mapPoint,
                  {
                    left: `${point.x}%`,
                    top: `${point.y}%`,
                    backgroundColor: getPointConfig(point.type).background,
                    borderColor: getPointConfig(point.type).color,
                  },
                ]}
              >
                <Ionicons
                  name={getPointConfig(point.type).icon}
                  size={18}
                  color={getPointConfig(point.type).color}
                />
              </View>
            ))}
          </View>

          <View style={styles.mapLegend}>
            <LegendItem type="base" label="Base" />
            <LegendItem type="sample" label="Coleta" />
            <LegendItem type="solar" label="Energia" />
            <LegendItem type="antenna" label="Antena" />
            <LegendItem type="danger" label="Risco" />
          </View>
        </Card>

        <Text style={styles.sectionTitle}>Pontos da missão</Text>

        {marsMapPoints.map((point) => {
          const config = getPointConfig(point.type)

          return (
            <Card key={point.id} style={styles.pointCard}>
              <View style={styles.pointHeader}>
                <View style={[styles.pointIcon, { backgroundColor: config.background }]}>
                  <Ionicons name={config.icon} size={22} color={config.color} />
                </View>

                <View style={styles.pointContent}>
                  <Text style={styles.pointName}>{point.name}</Text>
                  <Text style={styles.pointDescription}>{point.description}</Text>
                </View>
              </View>

              <View style={styles.pointFooter}>
                <View style={[styles.pointBadge, { backgroundColor: config.background }]}>
                  <Text style={[styles.pointBadgeText, { color: config.color }]}>
                    {config.label}
                  </Text>
                </View>

                <Text style={styles.pointStatus}>{point.status}</Text>
              </View>
            </Card>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

function getPointConfig(type: MapPointType): {
  label: string
  icon: keyof typeof Ionicons.glyphMap
  color: string
  background: string
} {
  const config = {
    base: {
      label: 'Base',
      icon: 'home-outline',
      color: colors.green,
      background: '#052E16',
    },
    sample: {
      label: 'Coleta',
      icon: 'flask-outline',
      color: colors.orange,
      background: '#431407',
    },
    solar: {
      label: 'Energia',
      icon: 'sunny-outline',
      color: colors.yellow,
      background: '#422006',
    },
    antenna: {
      label: 'Comunicação',
      icon: 'radio-outline',
      color: colors.orange,
      background: '#431407',
    },
    danger: {
      label: 'Risco',
      icon: 'warning-outline',
      color: colors.red,
      background: '#450A0A',
    },
  } as const

  return config[type]
}

function LegendItem({ type, label }: { type: MapPointType; label: string }) {
  const config = getPointConfig(type)

  return (
    <View style={styles.legendItem}>
      <View style={[styles.legendDot, { backgroundColor: config.color }]} />
      <Text style={styles.legendText}>{label}</Text>
    </View>
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

