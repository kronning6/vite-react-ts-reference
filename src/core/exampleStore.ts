import { create } from 'zustand';

export interface ExampleState {
  name: string;
  updateName: (name: string) => void;
}
export const useExampleStore = create<ExampleState>(set => ({
  name: 'Zustand Rocks',
  updateName: (name: string) =>
    set((state: ExampleState) => ({ name: state.name })),
}));
