import type { Preset } from '@pandacss/types'
import { defineConfig } from '@pandacss/dev'
import {
  colors,
  sementicTokenColors,
  spacing,
  keyframes,
  sizes,
  radii,
  borders,
} from '@preset/tokens'

export const preset = defineConfig({
  utilities: {
    extend: {
      interection: {
        values: 'colors',
        transform(value = 'colors.neutral-text-default', { token }) {
          return {
            '&:not(:disabled)::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              opacity: 0,
              visibility: 'hidden',
              backgroundColor:
                value === 'default'
                  ? token('colors.neutral-text-default')
                  : value,
              transition: token('easings.base'),
            },
            '&:not(:disabled):hover::after': {
              visibility: 'visible',
              opacity: 0.05,
            },
            '&:not(:disabled):focus::after': {
              visibility: 'visible',
              opacity: 0.05,
            },
          }
        },
      },
    },
  },
  theme: {
    extend: {
      tokens: {
        colors: {
          white: { value: '#ffffff' },
          ...colors,
        },
        easings: {
          base: { value: '0.2s ease-in-out' },
          fade: { value: '0.2s linear' },
          collapse: { value: '0.35s ease-out' },
          popover: { value: '0.16s cubic-bezier(.16, 1, .3, 1)' },
        },
        durations: {
          fastest: { value: '50ms' },
          faster: { value: '100ms' },
          fast: { value: '150ms' },
          normal: { value: '200ms' },
          slow: { value: '300ms' },
          slower: { value: '400ms' },
          slowest: { value: '500ms' },
        },
        opacity: {
          base: { value: '1' },
          drag: { value: '0.5' },
        },
        spacing,
        sizes,
        lineHeights: {
          base: { value: 1.5 },
          heading: { value: 1.3 },
          reading: { value: 1.6 },
          fit: { value: 1 },
        },
        letterSpacings: {
          base: { value: '-0.005em' },
          display: { value: '-0.03em' },
          heading: { value: '-0.015em' },
        },
        radii,
        borders,
      },
      keyframes,
    },
    semanticTokens: {
      colors: {
        ...sementicTokenColors,
      },
      fontSizes: {
        display1: { value: '3.5rem' },
        display2: { value: '2.5rem' },
        heading1: { value: '2.25rem' },
        heading2: { value: '1.75rem' },
        heading3: { value: '1.5rem' },
        title1: { value: '1.375rem' },
        title2: { value: '1.25rem' },
        title3: { value: '1.125rem' },
        body1: { value: '1rem' },
        body2: { value: '0.9375rem' },
        body3: { value: '0.875rem' },
        label1: { value: '0.875rem' },
        label2: { value: '0.8125rem' },
        caption1: { value: '0.75rem' },
        caption2: { value: '0.6875rem' },
        base: { value: '0.875rem' },
        small: { value: '0.75rem' },
        large: { value: '1rem' },
      },
    },
  },
}) as Preset
