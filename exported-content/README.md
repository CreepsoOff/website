# Animated Particles Background Effect

This package contains a React component that creates a beautiful animated particles background with connecting lines. The particles move smoothly across the screen and create dynamic connections when they get close to each other.

## Preview

The effect creates:
- Floating animated particles that move across the screen
- Dynamic lines connecting nearby particles
- Smooth bouncing animation when particles hit screen edges
- Theme-aware colors that adapt to light/dark mode
- Purple gradient theme (customizable)

## Files Included

- `ParticlesBackground.tsx` - The main React component
- `example-usage.tsx` - Example of how to use the component
- `README.md` - This documentation file

## Dependencies

This component requires the following dependencies:

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "next-themes": "^0.3.0"
}
```

## Installation Steps

### 1. Install Dependencies

```bash
npm install react react-dom next-themes
```

### 2. Copy the Component

Copy the `ParticlesBackground.tsx` file to your project's components directory:

```
your-project/
  src/
    components/
      ParticlesBackground.tsx
```

### 3. Set Up Theme Provider

The component uses `next-themes` for theme detection. Wrap your app with the ThemeProvider:

```tsx
import { ThemeProvider } from 'next-themes';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

### 4. Use the Component

Import and use the ParticlesBackground component in any page:

```tsx
import { ParticlesBackground } from '@/components/ParticlesBackground';

export function YourPage() {
  return (
    <main className="min-h-screen">
      <ParticlesBackground />
      {/* Your page content */}
    </main>
  );
}
```

## Customization

### Colors

The component uses purple colors by default. To customize, modify these values in `ParticlesBackground.tsx`:

```typescript
// Line 48-49: Particle and line colors
const particleColor = isDark ? 'rgba(147, 75, 198, 0.6)' : 'rgba(147, 75, 198, 0.4)';
const lineColor = isDark ? 'rgba(147, 75, 198, 0.15)' : 'rgba(147, 75, 198, 0.1)';
```

Format: `rgba(R, G, B, Alpha)`
- R, G, B: Color values (0-255)
- Alpha: Opacity (0-1)

Example for blue theme:
```typescript
const particleColor = isDark ? 'rgba(59, 130, 246, 0.6)' : 'rgba(59, 130, 246, 0.4)';
const lineColor = isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.1)';
```

### Particle Count

Adjust the number of particles (line 33):

```typescript
const particleCount = 80; // Default: 80, Range: 30-150
```

- Lower values (30-50): Better performance, less dense
- Higher values (100-150): More dramatic effect, may impact performance

### Connection Distance

Adjust how far particles can be to create connections (line 34):

```typescript
const maxDistance = 150; // Default: 150, Range: 100-250
```

- Lower values (100-120): Fewer, shorter connections
- Higher values (200-250): More connections, denser web effect

### Particle Speed

Adjust particle movement speed (lines 39-40):

```typescript
vx: (Math.random() - 0.5) * 0.5, // Horizontal speed
vy: (Math.random() - 0.5) * 0.5, // Vertical speed
```

Multiply by different values to change speed:
- `* 0.3`: Slower, more gentle
- `* 0.5`: Default speed
- `* 1.0`: Faster, more dynamic

### Particle Size

Adjust particle size range (line 41):

```typescript
size: Math.random() * 2 + 1, // Size between 1-3
```

Change to customize:
- `Math.random() * 1 + 0.5`: Smaller particles (0.5-1.5)
- `Math.random() * 3 + 2`: Larger particles (2-5)

### Opacity

Adjust overall effect opacity (line 98):

```tsx
style={{ opacity: 0.8 }} // Range: 0-1
```

## Technical Details

### How It Works

1. **Canvas Setup**: Creates an HTML5 canvas that covers the entire screen
2. **Particle Generation**: Randomly positions particles with random velocities
3. **Animation Loop**: Uses `requestAnimationFrame` for smooth 60fps animation
4. **Collision Detection**: Calculates distances between particles to draw connecting lines
5. **Boundary Handling**: Reverses velocity when particles hit screen edges
6. **Theme Integration**: Adjusts colors based on light/dark mode

### Performance

- Optimized with `requestAnimationFrame`
- Uses canvas 2D context for efficient rendering
- Particle count configurable for performance tuning
- Clean up on unmount prevents memory leaks

### Styling

The component uses Tailwind CSS classes:
- `fixed inset-0`: Positions canvas to cover entire viewport
- `pointer-events-none`: Allows clicks to pass through to content below
- `-z-10`: Places canvas behind other content

If not using Tailwind, replace with equivalent CSS:

```css
canvas {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: -10;
  opacity: 0.8;
}
```

## Troubleshooting

### Component not visible
- Ensure ThemeProvider is wrapping your app
- Check that z-index allows visibility
- Verify canvas is rendering (inspect DOM)

### Performance issues
- Reduce `particleCount` (try 50 instead of 80)
- Reduce `maxDistance` (try 120 instead of 150)
- Lower particle speeds

### TypeScript errors
- Ensure `@types/react` is installed
- Check that your tsconfig.json includes proper settings

### Theme not working
- Verify `next-themes` is installed correctly
- Ensure ThemeProvider is configured
- Check theme attribute matches your setup

## Browser Support

Works in all modern browsers that support:
- HTML5 Canvas
- ES6+ JavaScript
- React 18+

## License

Free to use in any project. Attribution appreciated but not required.

## Credits

Created for a dynamic, modern web experience with animated particle effects.
