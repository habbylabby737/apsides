# Apsides

Orbital gravity studio. Click-drag to fling planets, then watch them orbit, slingshot, and collide.

## Play

- **Drag** to launch a body. The dashed line is a live trajectory prediction.
- **Tap / click** without dragging to place a still world.
- Mass chips: Dust, Moon, Planet, Giant, Star.
- Scenes: System, Figure-8, Binary, Void.
- Time scale, pause, trails, follow center of mass, reset, and clear.

Physics uses a fixed-step Velocity Verlet integrator with softening, adaptive substeps when bodies get close, and inelastic merges that conserve mass and momentum.

## Develop

```bash
npm install
npm run dev
```

```bash
npm run typecheck
npm run build
```

React 19, TanStack Start, Vite, Tailwind v4.
