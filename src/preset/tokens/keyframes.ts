export const keyframes = {
  accordionDown: {
    from: {
      opacity: 0.01,
      height: 0,
      paddingBottom: '0',
    },
    to: {
      opacity: 1,
      height: 'var(--height)',
      paddingBottom: '16',
    },
  },
  accordionUp: {
    from: {
      opacity: 1,
      height: 'var(--height)',
      paddingBottom: '16',
    },
    to: {
      opacity: 0.01,
      height: 0,
      paddingBottom: '0',
    },
  },
}
