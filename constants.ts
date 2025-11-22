
import { PatternType, GridType, WeaveType, PatternState, Motif } from './types';

// --- 1. REPEAT STRUCTURE PATTERN STYLES ---
export const REPEAT_STRUCTURES = [
  'Straight Repeat',
  'Basic Grid Repeat',
  'Full Drop',
  'Half Drop',
  'Quarter Drop',
  'Brick Repeat Horizontal',
  'Brick Repeat Vertical',
  'Mirror Repeat Horizontal',
  'Mirror Repeat Vertical',
  'Reflective Repeat',
  'Rotational Repeat 90',
  'Rotational Repeat 180',
  'Rotational Repeat 270',
  'Tessellation Repeat',
  'Diamond Grid Repeat',
  'Hexagonal Repeat',
  'Offset Repeat',
  'Engineered Placement',
  'Border Repeat',
  'Stripe Repeat Vertical',
  'Stripe Repeat Horizontal',
  'Stripe Repeat Diagonal',
  'Center Medallion Layout',
  'Scatter / Allover Layout',
  'Trellis Layout',
  'Tiling / Panel Repeat',
  'Continuous Flow Repeat',
  'Non-Directional Repeat'
];

// --- 2. PATTERN GENERATOR LIST ---
export const GENERATOR_TYPES = [
  // Basics
  'Polka Dot Generator',
  'Stripe Generator',
  'Checkered Generator',
  'Plaid Generator',
  'Grid Generator',
  'Honeycomb Generator',
  'Chevron Generator',
  'Herringbone Generator',
  'Houndstooth Generator',
  'Trellis Generator',
  'Hexagon Generator',
  'Tessellation Generator',
  
  // Organic / Nature
  'Dot Scatter Generator',
  'Floral Repeater',
  'Paisley Repeater',
  'Botanical / Leaves',
  'Tropical Botanicals',
  
  // Cultural / Art
  'Ikat Blur Generator',
  'Batik Wax Generator',
  'Block Print Generator',
  'Toile Scene Layout Engine',
  'Mandala / Radial',
  
  // Abstract / Texture
  'Abstract Shape Generator',
  'Texture Overlay Generator',
  'Mid-Century Abstract',
  'Memphis Style',
  'Noise / Grain',
  'Halftone Dot',
  
  // Novelty
  'Animal Print Leopard',
  'Animal Print Zebra',
  'Camouflage',
  'Stars / Constellations'
];

// --- SVG HELPERS ---
const createSvg = (content: string, color: string = '#000') => 
  `data:image/svg+xml;base64,${btoa(`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="${color}">${content}</svg>`)}`;

export const shapes = {
  circle: (c='#000') => createSvg(`<circle cx="50" cy="50" r="40"/>`, c),
  ring: (c='#000') => createSvg(`<circle cx="50" cy="50" r="40" stroke="${c}" stroke-width="10" fill="none"/>`, c),
  rect: (c='#000') => createSvg(`<rect x="10" y="10" width="80" height="80"/>`, c),
  rectNarrow: (c='#000') => createSvg(`<rect x="40" y="0" width="20" height="100"/>`, c),
  rectRounded: (c='#000') => createSvg(`<rect x="10" y="10" width="80" height="80" rx="20"/>`, c),
  tri: (c='#000') => createSvg(`<polygon points="50,10 90,90 10,90"/>`, c),
  triInv: (c='#000') => createSvg(`<polygon points="10,10 90,10 50,90"/>`, c),
  star: (c='#000') => createSvg(`<polygon points="50,10 61,40 95,40 68,60 79,90 50,75 21,90 32,60 5,40 39,40"/>`, c),
  diamond: (c='#000') => createSvg(`<polygon points="50,10 90,50 50,90 10,50"/>`, c),
  cross: (c='#000') => createSvg(`<path d="M35,10 h30 v25 h25 v30 h-25 v25 h-30 v-25 h-25 v-30 h25 z"/>`, c),
  hexagon: (c='#000') => createSvg(`<polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"/>`, c),
  chevron: (c='#000') => createSvg(`<polygon points="0,30 50,80 100,30 100,60 50,110 0,60"/>`, c),
  
  leaf: (c='#000') => createSvg(`<path d="M50 90 Q10 50 50 10 Q90 50 50 90 Z"/>`, c),
  leafComplex: (c='#000') => createSvg(`<path d="M50,95 Q20,60 20,30 Q20,0 50,20 Q80,0 80,30 Q80,60 50,95 z"/>`, c),
  drop: (c='#000') => createSvg(`<path d="M50 10 Q90 60 50 90 Q10 60 50 10 Z"/>`, c),
  blob1: (c='#000') => createSvg(`<path d="M45,10 Q80,0 85,40 Q90,80 50,85 Q10,90 15,50 Q20,20 45,10 Z"/>`, c),
  blob2: (c='#000') => createSvg(`<path d="M30,20 Q70,10 80,40 Q90,70 60,80 Q30,90 20,60 Q10,30 30,20 Z"/>`, c),
  wave: (c='#000') => createSvg(`<path d="M0,50 Q25,20 50,50 T100,50 v20 H0 Z"/>`, c),
  bean: (c='#000') => createSvg(`<path d="M30,30 Q60,10 80,40 Q90,80 50,80 Q20,80 30,30 Z"/>`, c),
  amoeba: (c='#000') => createSvg(`<path d="M50,50 m-30,0 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0 M30,30 Q10,10 30,10"/>`, c),
  paisley: (c='#000') => createSvg(`<path d="M50,90 Q20,60 20,40 A20,20 0 1,1 60,40 Q60,50 50,50 Q40,50 40,40 A10,10 0 1,1 60,40 Q60,70 80,80 Q60,100 50,90 Z"/>`, c),
  splash: (c='#000') => createSvg(`<path d="M50,50 m-30,0 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0 M30,30 Q10,10 30,10"/>`, c),
  
  berry: (c='#000') => createSvg(`<circle cx="40" cy="40" r="15"/><circle cx="60" cy="40" r="15"/><circle cx="50" cy="60" r="15"/>`, c),
  apple: (c='#000') => createSvg(`<path d="M30,30 Q50,10 70,30 Q90,20 90,50 Q90,90 50,90 Q10,90 10,50 Q10,20 30,30 M50,30 L50,10"/>`, c),
  carrot: (c='#000') => createSvg(`<path d="M40,10 L60,10 L50,90 Z M45,10 L35,0 M55,10 L65,0"/>`, c),
  mushroom: (c='#000') => createSvg(`<path d="M20,40 Q50,0 80,40 H20 M40,40 L40,90 H60 L60,40"/>`, c),
  flowerSimple: (c='#000') => createSvg(`<circle cx="50" cy="50" r="15"/><circle cx="50" cy="25" r="10"/><circle cx="50" cy="75" r="10"/><circle cx="25" cy="50" r="10"/><circle cx="75" cy="50" r="10"/>`, c),
  tree: (c='#000') => createSvg(`<rect x="45" y="60" width="10" height="30"/><polygon points="50,10 80,60 20,60"/>`, c),
  wheat: (c='#000') => createSvg(`<path d="M50,90 L50,10 M50,20 L30,30 M50,20 L70,30 M50,40 L30,50 M50,40 L70,50"/>`, c),
  
  cog: (c='#000') => createSvg(`<path d="M50,35 A15,15 0 1,0 50,65 A15,15 0 1,0 50,35 M50,10 L55,25 A25,25 0 0,1 65,28 L80,20 L90,30 L80,45 A25,25 0 0,1 80,55 L95,60 L90,80 L75,75 A25,25 0 0,1 65,82 L60,95 L40,95 L35,82 A25,25 0 0,1 25,75 L10,80 L5,65 L20,55 A25,25 0 0,1 20,45 L5,35 L15,20 L30,25 A25,25 0 0,1 45,25 L50,10 Z" fill-rule="evenodd"/>`, c),
  wrench: (c='#000') => createSvg(`<path d="M20,80 L80,20 M15,75 A10,10 0 1,0 25,85 M75,15 L85,25"/>`, c, ),
  brick: (c='#000') => createSvg(`<rect x="5" y="20" width="40" height="20"/><rect x="50" y="20" width="40" height="20"/><rect x="25" y="45" width="50" height="20"/>`, c),
  bulb: (c='#000') => createSvg(`<path d="M40,60 Q30,50 30,30 A20,20 0 1,1 70,30 Q70,50 60,60 M40,60 L60,60 L55,80 H45 Z"/>`, c),
  bolt: (c='#000') => createSvg(`<polygon points="60,10 30,50 50,50 40,90 70,50 50,50"/>`, c),
  clip: (c='#000') => createSvg(`<path d="M30,20 L30,70 A20,20 0 0,0 70,70 L70,20" fill="none" stroke="${c}" stroke-width="5"/>`, c),
  pencil: (c='#000') => createSvg(`<polygon points="30,10 70,10 70,70 50,90 30,70"/>`, c),
  house: (c='#000') => createSvg(`<polygon points="50,10 90,40 10,40"/> <rect x="20" y="40" width="60" height="50"/>`, c),
  chair: (c='#000') => createSvg(`<rect x="20" y="50" width="60" height="10"/> <rect x="20" y="60" width="10" height="30"/> <rect x="70" y="60" width="10" height="30"/> <rect x="20" y="20" width="10" height="30"/> <rect x="20" y="20" width="60" height="10"/>`, c)
};

export const MOTIF_TEMPLATES = {
  geometry: [
    { name: 'Circle', svg: shapes.circle() },
    { name: 'Ring', svg: shapes.ring() },
    { name: 'Square', svg: shapes.rect() },
    { name: 'Rounded Square', svg: shapes.rectRounded() },
    { name: 'Triangle', svg: shapes.tri() },
    { name: 'Inv Triangle', svg: shapes.triInv() },
    { name: 'Star', svg: shapes.star() },
    { name: 'Diamond', svg: shapes.diamond() },
    { name: 'Cross', svg: shapes.cross() },
    { name: 'Hexagon', svg: shapes.hexagon() }
  ],
  organic: [
    { name: 'Simple Leaf', svg: shapes.leaf() },
    { name: 'Complex Leaf', svg: shapes.leafComplex() },
    { name: 'Drop', svg: shapes.drop() },
    { name: 'Blob 1', svg: shapes.blob1() },
    { name: 'Blob 2', svg: shapes.blob2() },
    { name: 'Wave', svg: shapes.wave() },
    { name: 'Bean', svg: shapes.bean() },
    { name: 'Amoeba', svg: shapes.amoeba() },
    { name: 'Splatter', svg: shapes.blob1('#000') }, 
    { name: 'Puddle', svg: shapes.blob2('#000') }
  ],
  fruits: [
    { name: 'Berry', svg: shapes.berry() },
    { name: 'Apple', svg: shapes.apple() },
    { name: 'Carrot', svg: shapes.carrot() },
    { name: 'Mushroom', svg: shapes.mushroom() },
    { name: 'Flower', svg: shapes.flowerSimple() },
    { name: 'Tree', svg: shapes.tree() },
    { name: 'Wheat', svg: shapes.wheat() },
    { name: 'Petal', svg: shapes.leaf() },
    { name: 'Seed', svg: shapes.drop() },
    { name: 'Fern', svg: shapes.leafComplex() }
  ],
  mechanical: [
    { name: 'Cog', svg: shapes.cog() },
    { name: 'Wrench', svg: shapes.wrench() },
    { name: 'Brick Wall', svg: shapes.brick() },
    { name: 'Bulb', svg: shapes.bulb() },
    { name: 'Bolt', svg: shapes.bolt() },
    { name: 'Clip', svg: shapes.clip() },
    { name: 'Pencil', svg: shapes.pencil() },
    { name: 'House', svg: shapes.house() },
    { name: 'Chair', svg: shapes.chair() },
    { name: 'Block', svg: shapes.rect() }
  ]
};

export const DEFAULT_PATTERN_STATE: PatternState = {
  projectName: 'New Pattern',
  attribution: '',
  tileSize: 300,
  repeatType: PatternType.Straight,
  density: 5,
  globalScale: 1,
  spacingX: 0,
  spacingY: 0,
  offsetX: 0,
  offsetY: 0,
  gridType: GridType.Square,
  gridRotation: 0,
  snapToGrid: false,
  globalRotation: 0,
  angularity: 0,
  symmetry: 0,
  strokeWidth: 1,
  palette: {
    background: '#f8fafc',
    primary: '#0f172a',
    secondary: '#64748b',
    accent: '#3b82f6'
  },
  saturation: 50,
  brightness: 50,
  twoColorMode: false,
  texture: {
    roughness: 0,
    grain: 0,
    overprint: 0,
    distress: false,
    blur: 0,
    distortType: 'None',
    distortIntensity: 20
  },
  weave: {
      enabled: false,
      type: WeaveType.Plain,
      opacity: 30,
      scale: 1,
      color: '#000000',
      rotation: 0,
      threads: 50,
      depth: 50
  }
};

// --- CORE GENERATOR LOGIC ---
export const runPatternGenerator = (generatorName: string): { state: PatternState, motifs: Motif[] } => {
  const state: PatternState = JSON.parse(JSON.stringify(DEFAULT_PATTERN_STATE));
  const motifs: Motif[] = [];
  
  // Helper to add motif
  const add = (svg: string, name: string, props: Partial<Motif> = {}) => {
    motifs.push({
      id: Date.now().toString() + Math.random(),
      url: svg,
      name,
      opacity: 1, scale: 1, rotation: 0, x: 0, y: 0, tint: '', visible: true,
      ...props
    });
  };

  // Helper for colors
  const setColors = (bg: string, pri: string, sec: string, acc: string) => {
    state.palette = { background: bg, primary: pri, secondary: sec, accent: acc };
  };

  switch (generatorName) {
    // --- BASICS ---
    case 'Polka Dot Generator':
      state.repeatType = PatternType.HalfDrop;
      state.density = 4;
      add(shapes.circle(), 'Dot', { scale: 0.8 });
      setColors('#ffffff', '#000000', '#888888', '#ff0000');
      break;
    case 'Stripe Generator':
      state.repeatType = PatternType.ColumnStripe;
      state.spacingX = -50;
      add(shapes.rectNarrow(), 'Stripe', { scale: 5, rotation: 0 });
      break;
    case 'Checkered Generator':
      state.repeatType = PatternType.Brick;
      state.tileSize = 200;
      state.density = 1;
      add(shapes.rect(), 'Block', { scale: 3.5, tint: '#000000' });
      setColors('#ffffff', '#000000', '#333333', '#000000');
      break;
    case 'Plaid Generator':
      state.weave.enabled = true;
      state.weave.type = WeaveType.Twill;
      state.weave.opacity = 60;
      state.repeatType = PatternType.Straight;
      add(shapes.rectNarrow(), 'V-Band', { rotation: 0, scale: 4, opacity: 0.5, tint: state.palette.primary });
      add(shapes.rectNarrow(), 'H-Band', { rotation: 90, scale: 4, opacity: 0.5, tint: state.palette.secondary });
      break;
    case 'Grid Generator':
      state.repeatType = PatternType.Straight;
      add(shapes.cross(), 'GridLine', { scale: 2.5, rotation: 0 });
      break;
    case 'Honeycomb Generator':
      state.repeatType = PatternType.Hex;
      state.density = 5;
      add(shapes.hexagon(), 'Hex', { scale: 1.1 });
      break;
    case 'Chevron Generator':
      state.repeatType = PatternType.Straight;
      state.spacingY = -20;
      add(shapes.chevron(), 'ZigZag', { scale: 2 });
      break;
    case 'Houndstooth Generator':
      state.weave.enabled = true;
      state.weave.type = WeaveType.Herringbone;
      state.weave.opacity = 80;
      state.repeatType = PatternType.Brick;
      add(shapes.chevron(), 'Tooth', { scale: 1.5 });
      break;

    // --- ORGANIC ---
    case 'Dot Scatter Generator':
      state.repeatType = PatternType.Toss;
      state.density = 8;
      add(shapes.circle(), 'ScatterDot', { scale: 0.5 });
      break;
    case 'Floral Repeater':
      state.repeatType = PatternType.Toss;
      state.density = 7;
      add(shapes.leaf(), 'Leaf', { scale: 1, tint: '#2d6a4f' });
      add(shapes.flowerSimple(), 'Flower', { scale: 1.2, tint: '#e63946' });
      break;
    case 'Paisley Repeater':
      state.repeatType = PatternType.Toss;
      add(shapes.paisley(), 'Paisley', { scale: 1.5 });
      add(shapes.drop(), 'Drop', { scale: 0.5 });
      break;
    case 'Botanical / Leaves':
      state.repeatType = PatternType.HalfDrop;
      add(shapes.leafComplex(), 'Fern', { scale: 1.2, rotation: 15 });
      add(shapes.leaf(), 'Simple', { scale: 0.8, rotation: -15 });
      break;

    // --- CULTURAL ---
    case 'Ikat Blur Generator':
      state.repeatType = PatternType.Straight;
      state.texture.blur = 3;
      state.texture.roughness = 20;
      add(shapes.diamond(), 'IkatDia', { scale: 1 });
      break;
    case 'Batik Wax Generator':
      state.repeatType = PatternType.Radial;
      state.texture.distress = true;
      state.texture.distortType = 'Wave';
      state.texture.distortIntensity = 30;
      add(shapes.blob1(), 'DyeSpot', { scale: 2, opacity: 0.8 });
      break;
    case 'Block Print Generator':
      state.repeatType = PatternType.Straight;
      state.texture.roughness = 20;
      state.texture.overprint = 40;
      add(shapes.flowerSimple(), 'BlockFlower', { scale: 1.2 });
      break;
    case 'Mandala / Radial':
      state.repeatType = PatternType.Radial;
      add(shapes.star(), 'CenterStar', { scale: 1.5 });
      add(shapes.drop(), 'OuterDrop', { scale: 0.5, y: 50 });
      break;

    // --- ABSTRACT / NOVELTY ---
    case 'Abstract Shape Generator':
      state.repeatType = PatternType.Toss;
      add(shapes.tri(), 'Tri', { scale: 1 });
      add(shapes.circle(), 'Cir', { scale: 0.5 });
      setColors('#f0f9ff', '#0369a1', '#0284c7', '#7dd3fc');
      break;
    case 'Texture Overlay Generator':
      state.repeatType = PatternType.Toss;
      state.texture.roughness = 80;
      state.texture.grain = 60;
      add(shapes.blob2(), 'Grit', { scale: 3, opacity: 0.1 });
      break;
    case 'Animal Print Leopard':
       state.repeatType = PatternType.HalfDrop;
       state.density = 8;
       add(shapes.blob2(), 'Spot', { scale: 0.8, tint: '#000' });
       setColors('#d97706', '#000000', '#78350f', '#000000');
       break;
    case 'Camouflage':
       state.repeatType = PatternType.Toss;
       state.texture.distortType = 'Turbulence';
       state.texture.distortIntensity = 40;
       add(shapes.blob1(), 'Blob1', { scale: 2, tint: '#556b2f' });
       add(shapes.blob2(), 'Blob2', { scale: 2, tint: '#8fbc8f' });
       break;

    default:
      state.repeatType = PatternType.Straight;
      add(shapes.circle(), 'Shape', { scale: 1 });
      break;
  }

  return { state, motifs };
};

// Map friendly names to logical types for the UI dropdowns
export const mapStructureToType = (structureName: string): PatternType => {
  if (structureName.includes('Straight')) return PatternType.Straight;
  if (structureName.includes('Basic Grid')) return PatternType.Straight;
  if (structureName.includes('Full Drop')) return PatternType.Straight; // Approximation
  if (structureName.includes('Half Drop')) return PatternType.HalfDrop;
  if (structureName.includes('Quarter Drop')) return PatternType.QuarterDrop;
  if (structureName.includes('Brick')) return PatternType.Brick;
  if (structureName.includes('Mirror')) return PatternType.Mirror;
  if (structureName.includes('Reflective')) return PatternType.Mirror;
  if (structureName.includes('Rotational Repeat 90')) return PatternType.Rotational90;
  if (structureName.includes('Rotational Repeat 180')) return PatternType.Rotational180;
  if (structureName.includes('Rotational Repeat 270')) return PatternType.Rotational90; // Reuse
  if (structureName.includes('Diamond')) return PatternType.Diamond;
  if (structureName.includes('Hexagonal')) return PatternType.Hex;
  if (structureName.includes('Scatter') || structureName.includes('Allover')) return PatternType.Toss;
  if (structureName.includes('Stripe')) return PatternType.ColumnStripe;
  if (structureName.includes('Radial') || structureName.includes('Medallion')) return PatternType.Radial;
  if (structureName.includes('Trellis')) return PatternType.Diamond;
  if (structureName.includes('Ogee')) return PatternType.Ogee;
  
  return PatternType.Straight;
};
