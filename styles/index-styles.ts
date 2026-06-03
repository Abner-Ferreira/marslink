import { colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    padding: 20,
    paddingTop: 24,
    paddingBottom: 110,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  logo: {
    fontSize: 32,
    fontWeight: '900',
    color: colors.white,
  },

  headerSubtitle: {
    color: colors.muted,
    marginTop: 4,
    fontSize: 13,
  },

  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    gap: 6,
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
  },

  statusText: {
    fontSize: 11,
    fontWeight: '800',
  },

  heroCard: {
    marginTop: 30,
    borderRadius: 28,
    padding: 22,
    minHeight: 250,
  },

  heroIcon: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.28)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heroLabel: {
    color: '#FED7AA',
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: '800',
    letterSpacing: 1,
    marginTop: 14,
  },

  heroTitle: {
    color: colors.white,
    fontSize: 28,
    fontWeight: '900',
    lineHeight: 34,
    marginTop: 12,
  },

  heroDescription: {
    color: '#E2E8F0',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 10,
  },

  heroFooter: {
    marginTop: 22,
    gap: 10,
  },

  heroInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  heroInfoText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
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

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: 12,
  },

  sectionAction: {
    color: colors.orange,
    fontWeight: '900',
  },

  sectionTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '900',
    marginTop: 30,
    marginBottom: 14,
  },

  indicatorsCard: {
    gap: 18,
  },

  indicatorItem: {
    gap: 10,
  },

  indicatorHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  indicatorIcon: {
    width: 38,
    height: 38,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },

  indicatorTextArea: {
    flex: 1,
  },

  indicatorLabel: {
    color: colors.muted,
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: '700',
  },

  indicatorValue: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '900',
    marginTop: 2,
  },

  indicatorTrack: {
    height: 9,
    borderRadius: 999,
    backgroundColor: '#0F172A',
    overflow: 'hidden',
  },

  indicatorFill: {
    height: '100%',
    borderRadius: 999,
  },

  telemetryCard: {
    gap: 18,
  },

  chartBlock: {
    gap: 16,
  },

  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },

  chartTitleArea: {
    flexDirection: 'row',
    gap: 12,
    flex: 1,
  },

  chartIcon: {
    width: 38,
    height: 38,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },

  chartTextArea: {
    flex: 1,
  },

  chartTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '900',
  },

  chartDescription: {
    color: colors.muted,
    fontSize: 13,
    marginTop: 3,
    lineHeight: 18,
  },

  chartValue: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '900',
  },

  chartBars: {
    height: 122,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 8,
  },

  barWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 7,
  },

  bar: {
    width: '100%',
    maxWidth: 24,
    borderRadius: 999,
  },

  barLabel: {
    color: colors.muted,
    fontSize: 10,
    fontWeight: '700',
  },

  chartDivider: {
    height: 1,
    backgroundColor: colors.cardBorder,
  },

  timelineCard: {
    gap: 0,
  },

  timelineItem: {
    flexDirection: 'row',
    gap: 12,
  },

  timelineLeft: {
    alignItems: 'center',
  },

  timelineDot: {
    width: 13,
    height: 13,
    borderRadius: 999,
    backgroundColor: colors.orange,
    marginTop: 4,
  },

  timelineLine: {
    flex: 1,
    width: 2,
    minHeight: 50,
    backgroundColor: colors.cardBorder,
  },

  timelineContent: {
    flex: 1,
    paddingBottom: 18,
  },

  timelineTime: {
    color: colors.orange,
    fontSize: 12,
    fontWeight: '900',
  },

  timelineTitle: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '900',
    marginTop: 4,
  },

  timelineDescription: {
    color: colors.text,
    lineHeight: 20,
    marginTop: 4,
  },

  operationCard: {
    gap: 16,
  },

  operationItem: {
    flexDirection: 'row',
    gap: 14,
  },

  operationIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#0F172A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  operationContent: {
    flex: 1,
  },

  operationTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '800',
  },

  operationText: {
    color: colors.text,
    marginTop: 4,
    lineHeight: 20,
  },

  divider: {
    height: 1,
    backgroundColor: colors.cardBorder,
  },

  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },

  messageFrom: {
    color: colors.white,
    fontWeight: '900',
    fontSize: 16,
  },

  messageTime: {
    color: colors.muted,
    marginTop: 3,
    fontSize: 13,
  },

  messageStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },

  messageStatusText: {
    fontSize: 12,
    fontWeight: '800',
  },

  messageText: {
    color: colors.text,
    marginTop: 16,
    lineHeight: 22,
    fontSize: 15,
  },

  messageCard: {
    marginTop: 0,
  },

  marsImage: {
    width: '100%',
    height: 190,
    borderRadius: 24,
    marginBottom: 20,
  },
})