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

  readAllButton: {
    width: 44,
    height: 44,
    borderRadius: 16,
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 34,
    fontWeight: '900',
    marginTop: 4,
    lineHeight: 39,
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

  warningBanner: {
    marginTop: 16,
    borderColor: colors.red,
    flexDirection: 'row',
    gap: 14,
  },

  warningIcon: {
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: '#450A0A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  warningContent: {
    flex: 1,
  },

  warningTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '900',
  },

  warningText: {
    color: colors.text,
    lineHeight: 21,
    marginTop: 5,
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

  filters: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },

  filterChip: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 999,
  },

  filterChipActive: {
    backgroundColor: '#7C2D12',
    borderColor: colors.orange,
  },

  filterChipText: {
    color: colors.muted,
    fontWeight: '800',
  },

  filterChipTextActive: {
    color: colors.white,
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

  notificationCard: {
    marginBottom: 14,
  },

  unreadCard: {
    borderColor: colors.orange,
  },

  notificationHeader: {
    flexDirection: 'row',
    gap: 14,
  },

  notificationIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  notificationContent: {
    flex: 1,
  },

  notificationTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  notificationTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '900',
    flex: 1,
  },

  unreadDot: {
    width: 9,
    height: 9,
    borderRadius: 999,
    backgroundColor: colors.orange,
  },

  notificationDescription: {
    color: colors.text,
    lineHeight: 21,
    marginTop: 6,
  },

  notificationFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 12,
    flexWrap: 'wrap',
  },

  notificationTime: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '700',
  },

  notificationTypeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },

  notificationTypeText: {
    fontSize: 12,
    fontWeight: '900',
  },

  markReadButton: {
    marginTop: 16,
    backgroundColor: '#431407',
    borderWidth: 1,
    borderColor: colors.orange,
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 7,
  },

  markReadButtonText: {
    color: colors.white,
    fontWeight: '900',
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
})