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
    fontSize: 34,
    fontWeight: '900',
    marginTop: 4,
  },

  heroText: {
    color: '#E2E8F0',
    lineHeight: 22,
    marginTop: 8,
  },

  heroFooter: {
    flexDirection: 'row',
    gap: 12,
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

  taskCard: {
    marginBottom: 14,
  },

  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },

  taskTitleArea: {
    flex: 1,
  },

  taskTitle: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '900',
    lineHeight: 23,
  },

  taskDescription: {
    color: colors.text,
    lineHeight: 21,
    marginTop: 7,
  },

  priorityBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    alignSelf: 'flex-start',
  },

  priorityText: {
    fontSize: 12,
    fontWeight: '900',
  },

  taskMetaGrid: {
    marginTop: 18,
    gap: 12,
  },

  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  infoIcon: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: '#431407',
    justifyContent: 'center',
    alignItems: 'center',
  },

  infoContent: {
    flex: 1,
  },

  infoLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  infoValue: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
    marginTop: 2,
  },

  taskFooter: {
    marginTop: 18,
    gap: 14,
  },

  progressArea: {
    gap: 8,
  },

  progressLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  progressBar: {
    height: 8,
    backgroundColor: '#0F172A',
    borderRadius: 999,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: colors.orange,
    borderRadius: 999,
  },

  detailsButton: {
    backgroundColor: '#431407',
    borderWidth: 1,
    borderColor: colors.orange,
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
  },

  detailsButtonText: {
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

  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  modalBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.68)',
  },

  modalContent: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 28,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },

  modalHandle: {
    width: 46,
    height: 5,
    borderRadius: 999,
    backgroundColor: colors.cardBorder,
    alignSelf: 'center',
    marginBottom: 18,
  },

  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  modalIcon: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: '#431407',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalCloseButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalTitle: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '900',
    lineHeight: 30,
    marginTop: 16,
  },

  modalDescription: {
    color: colors.text,
    lineHeight: 22,
    marginTop: 10,
    fontSize: 15,
  },

  modalInfoList: {
    gap: 13,
    marginTop: 20,
  },

  modalProgressArea: {
    gap: 8,
    marginTop: 22,
  },

  modalObservationCard: {
    marginTop: 22,
    backgroundColor: '#0F172A',
  },

  modalObservationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  modalObservationTitle: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '900',
  },

  modalObservationText: {
    color: colors.text,
    lineHeight: 21,
    marginTop: 8,
  },

  modalActionButton: {
    marginTop: 22,
    backgroundColor: colors.orange,
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },

  modalActionButtonText: {
    color: colors.white,
    fontWeight: '900',
    fontSize: 15,
  },
})