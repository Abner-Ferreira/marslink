import { colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 110,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },

  title: {
    color: colors.white,
    fontSize: 28,
    fontWeight: '900',
  },

  subtitle: {
    color: colors.muted,
    marginTop: 4,
  },

  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#052E16',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 999,
    gap: 6,
  },

  statusText: {
    color: colors.green,
    fontSize: 10,
    fontWeight: '900',
  },

  heroCard: {
    marginTop: 28,
    borderRadius: 28,
    padding: 22,
  },

  heroIcon: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: '#450A0A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heroLabel: {
    color: '#FECACA',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
    marginTop: 18,
  },

  heroTitle: {
    color: colors.white,
    fontSize: 32,
    fontWeight: '900',
    marginTop: 4,
    lineHeight: 38,
  },

  heroText: {
    color: '#E2E8F0',
    lineHeight: 22,
    marginTop: 8,
  },

  heroFooter: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 18,
    flexWrap: 'wrap',
  },

  heroInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: 11,
    paddingVertical: 8,
    borderRadius: 999,
  },

  heroInfoText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 13,
  },

  protocolCard: {
    marginTop: 16,
    borderColor: colors.red,
  },

  protocolHeader: {
    flexDirection: 'row',
    gap: 14,
  },

  protocolIcon: {
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: '#450A0A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  protocolContent: {
    flex: 1,
  },

  protocolTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '900',
  },

  protocolText: {
    color: colors.text,
    lineHeight: 21,
    marginTop: 5,
  },

  metricsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 18,
  },

  metricCard: {
    flex: 1,
    minHeight: 145,
  },

  metricIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#450A0A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  metricLabel: {
    color: colors.muted,
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: '700',
  },

  metricValue: {
    color: colors.white,
    fontSize: 30,
    fontWeight: '900',
    marginTop: 6,
  },

  metricDescription: {
    color: colors.text,
    marginTop: 2,
    fontSize: 13,
  },

  sectionTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '900',
    marginTop: 30,
    marginBottom: 14,
  },

  alertCard: {
    marginBottom: 14,
  },

  alertHeader: {
    flexDirection: 'row',
    gap: 14,
  },

  alertIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#450A0A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  alertContent: {
    flex: 1,
  },

  alertTitle: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '900',
  },

  alertDescription: {
    color: colors.text,
    marginTop: 6,
    lineHeight: 21,
  },

  alertButton: {
    marginTop: 18,
    backgroundColor: '#7F1D1D',
    borderWidth: 1,
    borderColor: colors.red,
    borderRadius: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },

  alertButtonText: {
    color: colors.white,
    fontWeight: '900',
  },

  statusCard: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 20,
  },

  statusCardIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#431407',
    justifyContent: 'center',
    alignItems: 'center',
  },

  statusCardContent: {
    flex: 1,
  },

  statusCardTitle: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '900',
  },

  statusCardText: {
    color: colors.text,
    lineHeight: 21,
    marginTop: 6,
  },

  historyCard: {
    flexDirection: 'row',
    gap: 14,
    marginBottom: 12,
  },

  historyIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#431407',
    justifyContent: 'center',
    alignItems: 'center',
  },

  historyContent: {
    flex: 1,
  },

  historyTitle: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '900',
  },

  historyText: {
    color: colors.text,
    lineHeight: 20,
    marginTop: 4,
  },
})