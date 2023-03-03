'use client'

import { HeaderObserver } from '@components/HeaderObserver'
import { useTheme } from '@providers/Theme'

export const RenderLayout = ({ children }) => {
  const theme = useTheme()

  return (
    <HeaderObserver color={theme} pullUp>
      {children}
    </HeaderObserver>
  )
}
