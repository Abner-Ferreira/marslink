import { colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  keyboardView: {
    flex: 1,
  },

  scroll: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 24,
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

  signalBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 999,
    gap: 6,
  },

  signalBadgeOnline: {
    backgroundColor: '#052E16',
  },

  signalBadgeOffline: {
    backgroundColor: '#450A0A',
  },

  signalDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
  },

  signalDotOnline: {
    backgroundColor: colors.green,
  },

  signalDotOffline: {
    backgroundColor: colors.red,
  },

  signalText: {
    fontSize: 10,
    fontWeight: '900',
  },

  signalTextOnline: {
    color: colors.green,
  },

  signalTextOffline: {
    color: colors.red,
  },

  latencyCard: {
    marginTop: 28,
    borderRadius: 28,
    padding: 22,
  },

  latencyIcon: {
    width: 52,
    height: 52,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  latencyIconOnline: {
    backgroundColor: '#431407',
  },

  latencyIconOffline: {
    backgroundColor: '#450A0A',
  },

  latencyLabel: {
    color: '#FED7AA',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
    marginTop: 18,
  },

  latencyValue: {
    color: colors.white,
    fontSize: 42,
    fontWeight: '900',
    marginTop: 4,
  },

  latencyText: {
    color: '#E2E8F0',
    lineHeight: 22,
    marginTop: 8,
  },

  connectionButton: {
    marginTop: 18,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.16)',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  connectionButtonText: {
    color: colors.white,
    fontWeight: '900',
  },

  latencyFooter: {
    gap: 8,
    marginTop: 18,
  },

  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  footerText: {
    color: colors.white,
    fontWeight: '600',
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

  offlineWarningCard: {
    marginTop: 16,
    borderColor: colors.red,
  },

  offlineWarningHeader: {
    flexDirection: 'row',
    gap: 14,
  },

  offlineWarningIcon: {
    width: 44,
    height: 44,
    borderRadius: 16,
    backgroundColor: '#450A0A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  offlineWarningContent: {
    flex: 1,
  },

  offlineWarningTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '900',
  },

  offlineWarningText: {
    color: colors.text,
    lineHeight: 21,
    marginTop: 5,
  },

  sectionTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '900',
    marginTop: 30,
    marginBottom: 14,
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },

  searchInput: {
    flex: 1,
    color: colors.white,
    fontSize: 15,
    padding: 0,
  },

  queueCard: {
    gap: 12,
  },

  queueStep: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  queueIcon: {
    width: 38,
    height: 38,
    borderRadius: 14,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    justifyContent: 'center',
    alignItems: 'center',
  },

  queueIconActive: {
    backgroundColor: '#431407',
    borderColor: colors.orange,
  },

  queueTextArea: {
    flex: 1,
  },

  queueTitle: {
    color: colors.muted,
    fontSize: 14,
    fontWeight: '900',
  },

  queueTitleActive: {
    color: colors.white,
  },

  queueDescription: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 2,
  },

  queueConnector: {
    width: 2,
    height: 18,
    backgroundColor: colors.cardBorder,
    marginLeft: 18,
  },

  queueConnectorActive: {
    backgroundColor: colors.orange,
  },

  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: 12,
  },

  resultCount: {
    color: colors.muted,
    fontWeight: '700',
    fontSize: 13,
  },

  messageBubble: {
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
    maxWidth: '88%',
  },

  receivedBubble: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    alignSelf: 'flex-start',
  },

  sentBubble: {
    backgroundColor: '#7C2D12',
    alignSelf: 'flex-end',
  },

  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },

  sender: {
    color: colors.white,
    fontWeight: '900',
    fontSize: 15,
  },

  messageTime: {
    color: colors.muted,
    fontSize: 12,
  },

  messageText: {
    color: colors.white,
    lineHeight: 22,
    marginTop: 10,
    fontSize: 15,
  },

  messageFooter: {
    marginTop: 12,
    gap: 8,
  },

  statusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    gap: 5,
  },

  statusPillText: {
    fontSize: 12,
    fontWeight: '800',
  },

  delayText: {
    color: '#FED7AA',
    fontSize: 12,
    fontWeight: '600',
  },

  emptyCard: {
    alignItems: 'center',
    paddingVertical: 30,
  },

  emptyIcon: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: '#431407',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  emptyTitle: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '900',
  },

  emptyText: {
    color: colors.text,
    marginTop: 6,
    textAlign: 'center',
    lineHeight: 21,
  },

  offlineCard: {
    marginTop: 16,
  },

  offlineHeader: {
    flexDirection: 'row',
    gap: 14,
  },

  offlineIcon: {
    width: 44,
    height: 44,
    borderRadius: 16,
    backgroundColor: '#431407',
    justifyContent: 'center',
    alignItems: 'center',
  },

  offlineContent: {
    flex: 1,
  },

  offlineTitle: {
    color: colors.white,
    fontWeight: '900',
    fontSize: 16,
  },

  offlineText: {
    color: colors.text,
    lineHeight: 21,
    marginTop: 5,
  },

  composer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 12,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.cardBorder,
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 14,
  },

  input: {
    flex: 1,
    maxHeight: 110,
    backgroundColor: colors.card,
    color: colors.white,
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    fontSize: 15,
  },

  sendButton: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sendButtonDisabled: {
    opacity: 0.45,
  },
})