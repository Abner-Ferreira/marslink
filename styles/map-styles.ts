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
    fontSize: 26,
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

  mapCard: {
    gap: 16,
  },

  mapArea: {
    height: 330,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#3B1D12',
    borderWidth: 1,
    borderColor: '#7C2D12',
    position: 'relative',
  },

  gridLineHorizontalOne: {
    position: 'absolute',
    top: '33%',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },

  gridLineHorizontalTwo: {
    position: 'absolute',
    top: '66%',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },

  gridLineVerticalOne: {
    position: 'absolute',
    left: '33%',
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },

  gridLineVerticalTwo: {
    position: 'absolute',
    left: '66%',
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },

  routeLineOne: {
    position: 'absolute',
    left: '31%',
    top: '38%',
    width: '38%',
    height: 2,
    backgroundColor: 'rgba(249,115,22,0.35)',
    transform: [{ rotate: '14deg' }],
  },

  routeLineTwo: {
    position: 'absolute',
    left: '47%',
    top: '61%',
    width: '25%',
    height: 2,
    backgroundColor: 'rgba(249,115,22,0.35)',
    transform: [{ rotate: '62deg' }],
  },

  mapPoint: {
    position: 'absolute',
    width: 42,
    height: 42,
    marginLeft: -21,
    marginTop: -21,
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mapLegend: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },

  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#0F172A',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 999,
  },

  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
  },

  legendText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '800',
  },

  pointCard: {
    marginBottom: 14,
  },

  pointHeader: {
    flexDirection: 'row',
    gap: 14,
  },

  pointIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pointContent: {
    flex: 1,
  },

  pointName: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '900',
  },

  pointDescription: {
    color: colors.text,
    lineHeight: 21,
    marginTop: 6,
  },

  pointFooter: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    alignItems: 'center',
  },

  pointBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },

  pointBadgeText: {
    fontSize: 12,
    fontWeight: '900',
  },

  pointStatus: {
    color: colors.muted,
    fontWeight: '800',
    flex: 1,
    textAlign: 'right',
  },
})