import * as migration_20250527_203440 from './20250527_203440';

export const migrations = [
  {
    up: migration_20250527_203440.up,
    down: migration_20250527_203440.down,
    name: '20250527_203440'
  },
];
