import { useMemo } from 'react'
import type { CategoryId } from '../types'

export type TimeSlotMessageKey = 'gathering' | 'lunch' | 'dinnerPrep' | 'dinner' | 'night' | 'lunchPrep'

export interface TimeSlotInfo {
  primary: CategoryId
  isWeekendEve: boolean
  messageKey: TimeSlotMessageKey
}

function computeTimeSlot(date: Date): TimeSlotInfo {
  const hour = date.getHours()
  const day = date.getDay() // 0 Sun ... 5 Fri, 6 Sat
  const isFriOrSat = day === 5 || day === 6

  if (hour >= 17 && hour < 21 && isFriOrSat) {
    return { primary: 'gathering', isWeekendEve: true, messageKey: 'gathering' }
  }
  if (hour >= 11 && hour < 14) {
    return { primary: 'lunch', isWeekendEve: false, messageKey: 'lunch' }
  }
  if (hour >= 14 && hour < 17) {
    return { primary: 'dinner', isWeekendEve: false, messageKey: 'dinnerPrep' }
  }
  if (hour >= 17 && hour < 21) {
    return { primary: 'dinner', isWeekendEve: false, messageKey: 'dinner' }
  }
  if (hour >= 21 || hour < 5) {
    return { primary: 'night', isWeekendEve: false, messageKey: 'night' }
  }
  return { primary: 'lunch', isWeekendEve: false, messageKey: 'lunchPrep' }
}

export function useTimeSlot(): TimeSlotInfo {
  return useMemo(() => computeTimeSlot(new Date()), [])
}
