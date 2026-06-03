import { colors } from '@/constants/theme'
import { MissionStatus } from '@/types/marslink'

export function getMissionTheme(status: MissionStatus) {
  const themes = {
    active: {
      label: 'ONLINE',
      title: 'Missão estável',
      primary: colors.green,
      dark: '#052E16',
      gradient: ['#14532D', '#020914'] as const,
      icon: 'shield-checkmark-outline',
    },
    warning: {
      label: 'ATENÇÃO',
      title: 'Missão em atenção',
      primary: colors.yellow,
      dark: '#422006',
      gradient: ['#854D0E', '#020914'] as const,
      icon: 'warning-outline',
    },
    critical: {
      label: 'CRÍTICO',
      title: 'Missão crítica',
      primary: colors.red,
      dark: '#450A0A',
      gradient: ['#7F1D1D', '#020914'] as const,
      icon: 'alert-circle-outline',
    },
  }

  return themes[status]
}