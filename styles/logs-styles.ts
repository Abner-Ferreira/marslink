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
    backgroundColor: '#431407',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 999,
    gap: 6,
  },

  statusText: {
    color: colors.orange,
    fontSize: 10,
    fontWeight: '900',
  },

  heroCard: {
    marginTop: 28,
    borderRadius: 28,
    padding: 22,
  },

  heroIcon: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: '#431407',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heroLabel: {
    color: '#FED7AA',
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

  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 18,
  },

  metricCard: {
    width: '48%',
    minHeight: 145,
  },

  metricIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#431407',
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

  timelineCard: {
    gap: 0,
  },

  timelineItem: {
    flexDirection: 'row',
    gap: 14,
  },

  timelineLeft: {
    alignItems: 'center',
  },

  timelineIcon: {
    width: 42,
    height: 42,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  timelineLine: {
    flex: 1,
    width: 2,
    minHeight: 44,
    backgroundColor: colors.cardBorder,
  },

  timelineContent: {
    flex: 1,
    paddingBottom: 22,
  },

  timelineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },

  timelineTime: {
    color: colors.orange,
    fontSize: 13,
    fontWeight: '900',
  },

  typeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },

  typeBadgeText: {
    fontSize: 11,
    fontWeight: '900',
  },

  timelineTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '900',
    marginTop: 7,
  },

  timelineDescription: {
    color: colors.text,
    lineHeight: 21,
    marginTop: 5,
  },

  responsibleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 9,
  },

  responsibleText: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '700',
  },
})