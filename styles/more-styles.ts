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

  sectionTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '900',
    marginTop: 30,
    marginBottom: 14,
  },

  moduleCard: {
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  moduleCardDanger: {
    borderColor: colors.red,
  },

  moduleIcon: {
    width: 52,
    height: 52,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  moduleContent: {
    flex: 1,
  },

  moduleTitle: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '900',
  },

  moduleDescription: {
    color: colors.text,
    lineHeight: 20,
    marginTop: 5,
    fontSize: 13,
  },
})