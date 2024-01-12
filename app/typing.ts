export type Updater<T> = (updater: (value: T) => void, options?: { sync?: boolean }) => void;
export interface SyncOptions {
  sync: boolean;
}
