# Hornet Hub ServiceNow Integration Guide

## Overview
This guide provides instructions for integrating the Hornet Hub Service Portal components into ServiceNow. The components have been converted from React/Tailwind to vanilla HTML, CSS (SCSS), and JavaScript for compatibility with ServiceNow's widget framework.

## Files Included

### 1. Core Styling
- **hornet-hub-styles.scss** - Complete SCSS stylesheet with all component styles
- **hornet-hub-styles.css** - Compiled CSS (compile from SCSS)

### 2. Complete Page
- **hornet-hub-main.html** - Full page layout with all components
- **hornet-hub-main.js** - JavaScript for the complete page

### 3. Individual Widgets
- **header-widget.html** - Header component with search and sign-in
- **sidebar-nav-widget.html** - Left sidebar navigation component  
- **service-card-widget.html** - Individual service card component

## ServiceNow Implementation Steps

### Step 1: Upload Stylesheets
1. Compile `hornet-hub-styles.scss` to CSS
2. Upload the CSS file to ServiceNow as a Style Sheet record
3. Include the stylesheet in your Service Portal theme or page

### Step 2: Create ServiceNow Widgets

#### Header Widget
1. Create a new widget in ServiceNow
2. Copy the HTML content from `header-widget.html` into the HTML template
3. Copy the JavaScript from the `<script>` tags into the Client Script
4. Configure widget options for title, subtitle, and search placeholder

#### Sidebar Navigation Widget  
1. Create a new widget in ServiceNow
2. Copy the HTML content from `sidebar-nav-widget.html` into the HTML template
3. Copy the JavaScript from the `<script>` tags into the Client Script
4. Set up data sources for navigation categories in the Server Script

#### Service Card Widget
1. Create a new widget in ServiceNow
2. Copy the HTML content from `service-card-widget.html` into the HTML template
3. Copy the JavaScript from the `<script>` tags into the Client Script
4. Configure widget options for card data (title, description, services, etc.)

### Step 3: Configure Server Scripts

#### For Sidebar Navigation Widget
```javascript
(function() {
    // Server script to provide navigation categories
    data.categories = [
        {
            id: 'admin-business',
            title: 'Administrative & Business',
            iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6m10 0V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0h2l-4 4h-2m-6 0h2l-4-4h2z"/>',
            isActive: true
        }
        // Add more categories as needed
    ];
})();
```

#### For Service Card Widget
```javascript
(function() {
    // Server script to provide service card data
    data.serviceCard = {
        id: options.card_id || 'default',
        title: options.card_title || 'Service Title',
        description: options.card_description || 'Service description',
        color: options.card_color || '#4e58a6',
        iconSvg: options.card_icon_svg || '',
        services: options.card_services ? options.card_services.split(',') : []
    };
})();
```

### Step 4: Create Service Portal Page
1. Create a new Service Portal page
2. Add the header widget to the top
3. Create a two-column layout:
   - Left column: Add the sidebar navigation widget
   - Right column: Add multiple service card widgets or create a container widget

### Step 5: Widget Communication
The widgets use custom events for communication:

#### Events Emitted:
- `headerSearch` - When user types in header search
- `performSearch` - When user presses Enter in search
- `categorySelected` - When sidebar category is selected
- `userSignedIn` / `userSignedOut` - Authentication state changes

#### Event Listeners:
Add these to your main page or container widget:
```javascript
// Listen for search events
document.addEventListener('headerSearch', function(event) {
    console.log('Search term:', event.detail.searchTerm);
    // Filter service cards or update content
});

// Listen for category selection
document.addEventListener('categorySelected', function(event) {
    console.log('Category selected:', event.detail.categoryId);
    // Filter services by category
});
```

## CSS Class Structure

All CSS classes follow the naming convention: `hornet-hub-[component]-[element]`

### Main Layout Classes:
- `.hornet-hub-container` - Main page container
- `.hornet-hub-header` - Header section
- `.hornet-hub-main-layout` - Main content layout
- `.hornet-hub-sidebar` - Sidebar container
- `.hornet-hub-main-content` - Main content area

### Component Classes:
- `.hornet-hub-service-card` - Service card container
- `.hornet-hub-sidebar-nav-item` - Navigation items
- `.hornet-hub-search-input` - Search input fields

## Brand Colors
The SCSS includes CSS variables for all Sacramento State brand colors:
- `--sac-state-green: #043927`
- `--princess-tree-purple: #4e58a6`
- `--american-river-teal: #006472`
- `--mulberry: #8b346d`
- `--red-maple: #c6401d`
- `--stinger-green: #008453`
- `--hornet-yellow: #e6b711`

## Responsive Design
The layout is responsive with breakpoints at:
- Mobile: Default single column
- Tablet: 768px+ (2 columns for service grid)
- Desktop: 1024px+ (3 columns for service grid)

## Customization Options

### Widget Options to Add:
- Header title and subtitle
- Search placeholder text
- Service card colors and content
- Navigation category lists
- Login/logout URLs

### ServiceNow Integration Points:
- Connect search to Knowledge Base
- Link categories to Service Catalog categories
- Integrate with ServiceNow authentication
- Connect service cards to actual catalog items

## Best Practices
1. Use the provided CSS classes exactly as specified
2. Compile SCSS to CSS for better performance
3. Minimize inline styles - use CSS classes instead
4. Test responsive design on different screen sizes
5. Implement proper error handling for API calls
6. Follow ServiceNow security best practices for client scripts

## Testing Checklist
- [ ] Header displays correctly with branding
- [ ] Search functionality works
- [ ] Sidebar navigation is interactive
- [ ] Service cards display with correct colors and content
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Widget communication events work
- [ ] Authentication integration functions
- [ ] Links navigate to correct ServiceNow pages