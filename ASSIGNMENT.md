# Frontend Developer Assignment - Service Providers Dashboard

This is a complete implementation of the Service Providers Waitlist dashboard as per the assignment requirements.

## ✅ Features Implemented

### 1. **Data Table**
- ✓ 8 columns: Email, Phone Number, Postcode, Vendor Type, Service Offering, Signup Date, Status, Actions
- ✓ 10 rows per page with functional pagination (52 total records across 6 pages)
- ✓ Sorting functionality on all columns (click headers to sort)
- ✓ Filtering across all columns via sidebar
- ✓ Row selection with "Select All" checkbox
- ✓ Status badges (Onboarded/Rejected with color-coded styling)
- ✓ Edit action button that opens a modal

### 2. **Sidebar Filters**
- ✓ Postcode filter (UK postcode text input)
- ✓ Registration Status filter (Onboarded/Rejected checkboxes)
- ✓ Date Registered filter (Start & End date pickers)
- ✓ Vendor Type filter (Independent/Company checkboxes)
- ✓ Service Offering filter (Housekeeping/Window Cleaning/Car Valet checkboxes)
- ✓ "Apply Filters" button
- ✓ "Clear Filters" button (resets all filters)

### 3. **Main Content**
- ✓ Search bar positioned in top-right corner
- ✓ Live search functionality (filters results as you type)
- ✓ Handles partial inputs and trims whitespace
- ✓ Searches across email, name, phone, postcode, vendor type, service offering, and status

### 4. **Responsiveness**
- ✓ Desktop layout (sidebar + main content side-by-side)
- ✓ Tablet layout (sidebar stacks on top, table scrolls horizontally)
- ✓ Mobile layout (optimized for smaller screens)
- ✓ Flexible grid system that adapts to different screen sizes

### 5. **Bonus Features**
- ✓ Toast notifications (success, info messages)
- ✓ Smooth animations and transitions
- ✓ Hover effects on interactive elements
- ✓ Modal with detailed service provider information
- ✓ Professional color scheme and typography
- ✓ Clean, modern UI design

## 📁 Project Structure

```
src/
├── components/
│   ├── DataTable.jsx       # Main table component with sorting & pagination
│   ├── Sidebar.jsx         # Filter sidebar component
│   ├── SearchBar.jsx       # Search input component
│   ├── Modal.jsx           # Modal for viewing provider details
│   └── Toast.jsx           # Toast notification component
├── App.jsx                 # Main application component
├── App.css                 # All styling (responsive design)
├── index.css               # Global base styles
├── mockData.js             # Mock service provider data (52 records)
└── main.jsx                # Entry point
```

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

The app will start on `http://localhost:5174/` (or the next available port)

### Build for Production
```bash
npm run build
```

## 🎨 Design Features

### Color Scheme
- Primary Blue: #2563eb
- Success Green: #10b981
- Error Red: #ef4444
- Neutral Grays for backgrounds and borders

### Typography
- Clean, modern sans-serif font stack
- Proper font sizes and weights for hierarchy
- Readable line heights and letter spacing

### Interactive Elements
- Smooth transitions (0.2-0.3s ease)
- Hover effects on buttons and rows
- Focus states for accessibility
- Loading states and feedback

## 📊 Data Information

### Mock Data
- 52 service providers randomly generated
- Realistic UK postcodes
- Mix of Independent and Company vendors
- Three service offerings
- Random signup dates in 2024
- Onboarded/Rejected statuses

## 🔍 Filtering & Searching

### Sidebar Filters
- **Postcode**: Text input with partial matching
- **Status**: Multi-select checkboxes
- **Date Range**: Start and end date pickers
- **Vendor Type**: Multi-select checkboxes
- **Service Offering**: Multi-select checkboxes

### Search
- Real-time search across multiple fields
- Case-insensitive matching
- Whitespace trimming
- Works alongside filters

### Sorting
- Click any table header to sort
- Ascending/Descending toggle
- Visual indicators (↑ ↓ ⇅)
- Sorts alphabetically or numerically as appropriate

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+ (sidebar + main content)
- **Tablet**: 768px - 1024px (stacked layout)
- **Mobile**: 480px - 768px (optimized for touch)
- **Small Mobile**: < 480px (minimal padding, horizontal scroll)

## ✨ Key Components

### DataTable
- Handles sorting, filtering, and pagination
- Manages row selection state
- Displays records with proper formatting
- Includes pagination controls

### Sidebar
- Multi-field filter management
- Apply and clear functionality
- Checkbox and text input handling
- Clean, organized layout

### SearchBar
- Live search input
- Placeholder text for guidance
- Icon for visual feedback

### Modal
- Detailed view of provider information
- Close button and overlay click to dismiss
- Properly styled with animations

### Toast
- Auto-dismiss after 3 seconds
- Success, Info, and Error types
- Icon and message display
- Positioned in bottom-right corner

## 🎯 Technical Highlights

- **React Hooks**: useState, useMemo, useEffect for state management
- **Performance**: Memoization for filtered and sorted data
- **Accessibility**: Proper labels, ARIA attributes, keyboard navigation
- **CSS Grid & Flexbox**: Responsive layout
- **Mobile-First Design**: Optimized for all screen sizes
- **Clean Code**: Well-organized components with clear separation of concerns

## 🔧 Configuration

- Vite for fast development and build
- React 19 for latest features
- ESLint for code quality
- No additional UI library dependencies (pure CSS)

## 📝 Notes

- All data is mock data for demonstration purposes
- No backend API integration required
- All features work entirely on the client-side
- Pagination resets when filters or search changes
- Select all checkbox is scoped to current page

---

Built with React + Vite | Assignment for Frontend Developer Position
