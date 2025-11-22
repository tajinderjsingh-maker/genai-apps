
export enum PatternType {
  Straight = 'Straight',
  HalfDrop = 'Half-Drop',
  Brick = 'Brick',
  Mirror = 'Mirror',
  Radial = 'Radial',
  Diamond = 'Diamond',
  Ogee = 'Ogee',
  Toss = 'Random Toss',
  Hex = 'Hexagonal',
  // New logical mappings for UI
  QuarterDrop = 'Quarter-Drop',
  Rotational90 = 'Rotational-90',
  Rotational180 = 'Rotational-180',
  ColumnStripe = 'Column-Stripe'
}

export enum GridType {
  Square = 'Square',
  Diamond = 'Diamond',
  Hex = 'Hex',
  Radial = 'Radial'
}

export enum MotifSource {
  Library = 'Library',
  Upload = 'Upload',
  AI = 'AI'
}

export interface Motif {
  id: string;
  url: string;
  name: string;
  opacity: number;
  scale: number;
  rotation: number;
  x: number; // Offset X (-100 to 100)
  y: number; // Offset Y (-100 to 100)
  tint: string; // Color hex or empty for original
  visible: boolean;
}

export interface Palette {
  background: string;
  primary: string;
  secondary: string;
  accent: string;
}

export type DistortType = 'None' | 'Noise' | 'Wave' | 'Marble' | 'Glitch' | 'Turbulence';

export interface TextureConfig {
  roughness: number;
  grain: number;
  overprint: number;
  distress: boolean;
  blur: number;
  distortType: DistortType;
  distortIntensity: number;
}

export enum WeaveType {
  Plain = 'Plain',
  Twill = 'Twill',
  Basket = 'Basket',
  Satin = 'Satin',
  Herringbone = 'Herringbone',
  Oxford = 'Oxford',
  Dobby = 'Dobby'
}

export interface WeaveConfig {
  enabled: boolean;
  type: WeaveType;
  opacity: number;
  scale: number;
  color: string;
  rotation: number;
  threads: number; // Thread density/Tiling
  depth: number; // Shadow intensity for relief effect
}

export interface PatternState {
  // Meta
  projectName: string;
  attribution: string;
  
  // Core
  tileSize: number;
  repeatType: PatternType;
  density: number; // 1-10
  globalScale: number;
  spacingX: number;
  spacingY: number;
  offsetX: number;
  offsetY: number;

  // Grid
  gridType: GridType;
  gridRotation: number;
  snapToGrid: boolean;

  // Geometry
  globalRotation: number;
  angularity: number; // 0 (curvy) to 100 (angular)
  symmetry: number;
  strokeWidth: number;

  // Color
  palette: Palette;
  saturation: number;
  brightness: number;
  twoColorMode: boolean;

  // Texture
  texture: TextureConfig;
  
  // Weave
  weave: WeaveConfig;
}

export interface Preset {
  id: string;
  name: string;
  tags: string[];
  thumbnail?: string; // URL
  defaultState: Partial<PatternState>;
  defaultMotifs: Motif[];
}
