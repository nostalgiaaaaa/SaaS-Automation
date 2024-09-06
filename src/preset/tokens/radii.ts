import { defineTokens } from '@pandacss/dev'

export const radii = defineTokens.radii({
  none: { value: '0' },
  small: { value: '2px' },
  base: { value: '4px' },
  large: { value: '6px' },
  xlarge: { value: '8px' },
  max: { value: '9999px' },
})
