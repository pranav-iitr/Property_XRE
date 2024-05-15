import { create } from 'zustand';

export const useMatchStore = create((set) => ({
    projectId: null,
    setProjectId: (inputVal) => set((state) => ({ projectId: inputVal })),
    unitId: null,
    setUnitId: (inputVal) => set((state) => ({ unitId: inputVal })),
    floorId: null,
    setFloorId: (inputVal) => set((state) => ({ floorId: inputVal })),
    personId: null,
    setPersonId: (inputVal) => set((state) => ({ personId: inputVal })),
    currentFormIndex: 0,
    setCurrentFormIndex: (inputVal) => set((state) => ({ currentFormIndex: inputVal }))
}));