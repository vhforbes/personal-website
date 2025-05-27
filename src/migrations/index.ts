import * as migration_20250527_202735 from './20250527_202735';

export const migrations = [
  {
    up: migration_20250527_202735.up,
    down: migration_20250527_202735.down,
    name: '20250527_202735'
  },
];
