import { atomWithStorage } from 'jotai/utils'
import { atom } from 'jotai'

export const photoAtom = atom('photo')
export const floor = atomWithStorage('floor')
export const unit = atomWithStorage('unit')