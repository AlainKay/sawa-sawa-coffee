# V1 Components (Archive)

This folder contains the original version of components with the interactive blockchain demo.

## Components

- **SawaSawaCoffee.jsx** - Original main component with interactive traceability demo
- **TraceabilityDemo.jsx** - Full interactive blockchain demo with role switching (Consumer, Farmer, Processor, Trader)

## To Use V1 Instead

If you want to switch back to the version with the interactive demo:

1. Edit `src/App.jsx`:
```javascript
import SawaSawaCoffee from './components/v1/SawaSawaCoffee'

function App() {
  return <SawaSawaCoffee />
}
```

2. The page will automatically reload with the interactive demo.

## Key Differences from Current Version

V1 includes:
- Interactive "View Demo" button in Traceability section
- Role-switching interface (Consumer, Farmer, Processor, Trader)
- Role-specific dashboards with metrics
- Full supply chain timeline viewer
- "Add Event" functionality for different roles

Current version has:
- Simplified traceability section (no interactive demo)
- Professional pricing disclaimers
- Cleaner, static presentation
