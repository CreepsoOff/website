# AGENTS.md - AI Integration Guide

## Purpose
This document provides instructions for AI agents to add an animated particles background effect to React projects.

## Context
The user has requested to add a dynamic, animated particles background similar to the one used in this portfolio site. The effect creates floating particles that move across the screen with connecting lines between nearby particles, themed in purple gradients that adapt to light/dark mode.

## Effect Description
- **Visual Style**: Animated particles floating across the screen
- **Connections**: Dynamic lines drawn between particles within a certain distance
- **Animation**: Smooth movement with bounce physics at screen edges
- **Theme Integration**: Colors adapt to light/dark mode
- **Performance**: Canvas-based rendering with requestAnimationFrame
- **Colors**: Purple theme (rgba(147, 75, 198)) - fully customizable

## Prerequisites Check

Before implementing, verify:

1. **React Version**: Project uses React 18+
2. **Theme System**: Check if project already has a theme system
   - If yes: Adapt component to use existing theme context
   - If no: Install `next-themes` package
3. **TypeScript**: Check if project uses TypeScript or JavaScript
4. **Styling**: Check if project uses Tailwind CSS or plain CSS

## Implementation Steps

### Step 1: Analyze Project Structure

```bash
# Check project type and structure
ls -la src/
cat package.json | grep "react"
```

Identify:
- Component directory location (usually `src/components/`)
- Whether project uses TypeScript (.tsx) or JavaScript (.jsx)
- Existing theme management approach

### Step 2: Install Dependencies (if needed)

If project doesn't have a theme system:

```bash
npm install next-themes
```

### Step 3: Add ParticlesBackground Component

Copy the component from `exported-content/ParticlesBackground.tsx` to the project's components directory.

**Key adaptations needed**:

1. **Import paths**: Update based on project structure
   ```typescript
   // Adjust this import based on project's theme system
   import { useTheme } from 'next-themes';
   ```

2. **For projects WITHOUT next-themes**: Modify to remove theme dependency
   ```typescript
   // Remove this line:
   const { theme } = useTheme();
   
   // Replace theme check with static value or custom hook:
   const isDark = false; // or use your project's theme hook
   ```

3. **For JavaScript projects**: Remove TypeScript types
   ```javascript
   // Remove interface
   // Remove type annotations (: HTMLCanvasElement, etc.)
   ```

4. **For projects WITHOUT Tailwind**: Update styling
   ```typescript
   // Replace className with inline styles:
   <canvas
     ref={canvasRef}
     style={{
       position: 'fixed',
       top: 0,
       left: 0,
       right: 0,
       bottom: 0,
       pointerEvents: 'none',
       zIndex: -10,
       opacity: 0.8
     }}
   />
   ```

### Step 4: Set Up Theme Provider (if using next-themes)

If the project doesn't have a theme provider, add it to the root component:

```typescript
import { ThemeProvider } from 'next-themes';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {/* existing app content */}
    </ThemeProvider>
  );
}
```

### Step 5: Use the Component

Add the ParticlesBackground component to the desired page:

```typescript
import { ParticlesBackground } from '@/components/ParticlesBackground';

export function HomePage() {
  return (
    <main className="min-h-screen">
      <ParticlesBackground />
      {/* Existing page content */}
    </main>
  );
}
```

### Step 6: Customize for Project Theme

Update the colors to match the project's color scheme:

```typescript
// In ParticlesBackground.tsx, around line 48-49
// Replace purple (147, 75, 198) with project colors
const particleColor = isDark ? 'rgba(R, G, B, 0.6)' : 'rgba(R, G, B, 0.4)';
const lineColor = isDark ? 'rgba(R, G, B, 0.15)' : 'rgba(R, G, B, 0.1)';
```

**How to find project colors**:
1. Search for primary color values in the codebase
2. Look in CSS files, Tailwind config, or theme files
3. Check existing gradient or accent colors
4. Convert hex colors to RGB if needed

### Step 7: Performance Tuning

Adjust parameters based on project needs:

```typescript
// Line 33: Reduce for better performance on slower devices
const particleCount = 80; // Try 50 for mobile-friendly version

// Line 34: Adjust connection density
const maxDistance = 150; // Lower = fewer connections

// Lines 39-40: Adjust animation speed
vx: (Math.random() - 0.5) * 0.5, // Multiply by 0.3 for slower
vy: (Math.random() - 0.5) * 0.5,
```

## Common Scenarios

### Scenario A: React + TypeScript + Tailwind (Full Stack)
✅ Use component as-is from exported-content
✅ Just update import paths
✅ Customize colors to match project

### Scenario B: React + JavaScript + Tailwind
1. Remove TypeScript types
2. Keep all functionality the same
3. Update file extension to .jsx

### Scenario C: React + TypeScript + Custom CSS
1. Keep TypeScript
2. Replace className with inline styles or CSS classes
3. Add CSS file if needed

### Scenario D: React + Existing Theme System
1. Replace `next-themes` import with project's theme hook
2. Adapt theme detection logic
3. Keep rest of component unchanged

### Scenario E: Next.js Project
✅ Component works perfectly with Next.js
✅ next-themes is designed for Next.js
✅ May need "use client" directive for client component

## Testing

After implementation, verify:

1. **Visual Check**: Particles visible and animating smoothly
2. **Performance**: No lag or frame drops (check browser DevTools)
3. **Responsiveness**: Works on different screen sizes
4. **Theme Switch**: Colors change appropriately with theme
5. **Z-Index**: Content appears above particles background

## Troubleshooting Guide

### Issue: Component not rendering
**Solution**: Check that:
- Component is imported correctly
- Parent element has sufficient height (min-h-screen)
- Canvas is not hidden by other elements

### Issue: TypeScript errors
**Solution**: 
- Ensure @types/react is installed
- Check import paths match project structure
- Verify theme hook types

### Issue: Theme not working
**Solution**:
- Verify theme provider is set up correctly
- Check theme hook is accessible
- Consider using static colors if theme system is complex

### Issue: Performance problems
**Solution**:
- Reduce particleCount to 50 or lower
- Increase animation delay
- Reduce maxDistance for fewer calculations

### Issue: Styling conflicts
**Solution**:
- Check z-index values
- Verify fixed positioning works with layout
- Ensure pointer-events: none is applied

## Color Customization Examples

### Blue Theme
```typescript
const particleColor = isDark ? 'rgba(59, 130, 246, 0.6)' : 'rgba(59, 130, 246, 0.4)';
const lineColor = isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.1)';
```

### Green Theme
```typescript
const particleColor = isDark ? 'rgba(34, 197, 94, 0.6)' : 'rgba(34, 197, 94, 0.4)';
const lineColor = isDark ? 'rgba(34, 197, 94, 0.15)' : 'rgba(34, 197, 94, 0.1)';
```

### Orange Theme
```typescript
const particleColor = isDark ? 'rgba(249, 115, 22, 0.6)' : 'rgba(249, 115, 22, 0.4)';
const lineColor = isDark ? 'rgba(249, 115, 22, 0.15)' : 'rgba(249, 115, 22, 0.1)';
```

### Gradient Match
If project has a gradient, use the dominant color:
```typescript
// For gradient: from-[#934bc6] to-[#3e197b]
// Use the lighter color: #934bc6 = rgb(147, 75, 198)
```

## Best Practices

1. **Place Once**: Add ParticlesBackground to one page/layout at a time
2. **Z-Index Management**: Ensure particles stay in background (-z-10 or equivalent)
3. **Performance**: Start with default settings, optimize if needed
4. **Accessibility**: Particles are decorative, ensure they don't interfere with content
5. **Mobile**: Test on mobile devices, reduce particle count if needed
6. **Theme Consistency**: Match particle colors to project's color scheme

## File Locations Reference

```
exported-content/
├── ParticlesBackground.tsx    # Main component
├── example-usage.tsx          # Usage example
├── README.md                  # Detailed documentation
└── AGENTS.md                  # This file
```

## Quick Implementation Checklist for AI Agents

- [ ] Analyze project structure and dependencies
- [ ] Determine if next-themes is needed or if project has theme system
- [ ] Copy ParticlesBackground component to appropriate location
- [ ] Adapt imports and types for project (TS/JS, paths, etc.)
- [ ] Update styling approach (Tailwind/CSS) if needed
- [ ] Customize colors to match project theme
- [ ] Set up ThemeProvider if needed
- [ ] Import and use component in target page
- [ ] Test rendering and performance
- [ ] Adjust parameters if needed for optimal experience

## Expected Result

After successful implementation, the project will have:
- Smooth animated particles background
- Dynamic connecting lines between nearby particles
- Theme-aware colors that adapt to light/dark mode
- No performance impact on main application
- Professional, modern visual enhancement

## Support

Reference files in `exported-content/` directory:
- Technical details: README.md
- Code example: ParticlesBackground.tsx
- Usage example: example-usage.tsx
