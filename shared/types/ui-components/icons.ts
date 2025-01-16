import type { SpritesMap } from '@/shared/ui/icons/sprite.h';

export interface IconProps<T extends keyof SpritesMap> {
  name: SpritesMap[T];
  type: T;
  w: number;
  h: number;
}
