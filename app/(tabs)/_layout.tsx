import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

import { colors } from '@/constants/theme'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.muted,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
          marginTop: 2,
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.cardBorder,
          height: 72,
          paddingBottom: 10,
          paddingTop: 6,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarAccessibilityLabel: 'Abrir tela inicial da missão',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={22} />
          ),
        }}
      />

      <Tabs.Screen
        name="messages"
        options={{
          title: 'Mensagens',
          tabBarAccessibilityLabel: 'Abrir comunicação da missão',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'chatbox' : 'chatbox-outline'} color={color} size={22} />
          ),
        }}
      />

      <Tabs.Screen
        name="tasks"
        options={{
          title: 'Tarefas',
          tabBarAccessibilityLabel: 'Abrir tarefas da missão',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'clipboard' : 'clipboard-outline'} color={color} size={22} />
          ),
        }}
      />

      <Tabs.Screen
        name="health"
        options={{
          title: 'Saúde',
          tabBarAccessibilityLabel: 'Abrir monitoramento de saúde da tripulação',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'pulse' : 'pulse-outline'} color={color} size={22} />
          ),
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title: 'Mais',
          tabBarAccessibilityLabel: 'Abrir módulos adicionais da missão',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'grid' : 'grid-outline'} color={color} size={22} />
          ),
        }}
      />

      <Tabs.Screen name="map" options={{ href: null }} />
      <Tabs.Screen name="notifications" options={{ href: null }} />
      <Tabs.Screen name="emergency" options={{ href: null }} />
      <Tabs.Screen name="logs" options={{ href: null }} />
    </Tabs>
  )
}