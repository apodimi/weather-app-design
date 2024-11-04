## Running the Vite Project Locally

To run the Vite project locally, follow these steps:

1. **Clone the repository:**

```sh
git clone https://github.com/apodimi/weather-app-design.git
cd weather-app-design
```

2. **Install dependencies:**

```sh
npm install
```

3. **Start the development server:**

```sh
npm run dev
```

This will start the Vite development server with Hot Module Replacement (HMR) enabled. You can now open your browser and navigate to ` http://localhost:5173/` to see your application running.

## Structure of the project

- **public/**: Contains static assets such as the favicon and the main HTML file.

  - `favicon.ico`: The favicon for the application.
  - `index.html`: The main HTML file that serves as the entry point for the application.

- **src/**: Contains the source code of the application.

  - **assets/**: Contains static assets like icons and images.
    - **icons/**: Contains SVG icons used in the application.
    - **images/**: Contains image files used in the application.
  - **components/**: Contains reusable React components.
    - `NavigationBar.tsx`: The navigation bar component.
  - **layout/**: Contains layout components that define the structure of the application.
    - `MainLayout.tsx`: The main layout component.
  - **pages/**: Contains page components, each representing a different route in the application.
    - **Homepage/**: Contains components related to the homepage.
      - `Homepage.tsx`: The main component for the homepage.
      - **components/**: Contains sub-components used in the homepage.
        - `Air.tsx`: A component displaying air quality information.
        - `Forecast.tsx`: A component displaying weather forecasts.
        - `TempChart.tsx`: A component displaying temperature charts.
        - `Activities.tsx`: A component displaying activities you can do based on the weather.
        - `MainInfos.tsx`: A component displaying weather infos.
        - `Menu.tsx`: A component displaying the menu.
        - `WeatherSlider.tsx`: A component with a slider for the days.
  - `App.tsx`: The root component of the application.
  - `index.tsx`: The entry point for the React application.

- **tailwind.config.js**: Configuration file for Tailwind CSS.
- **vite.config.js**: Configuration file for Vite.
- **package.json**: Contains metadata about the project and its dependencies.
- **README.md**: The main documentation file for the project.

## Decisions

### 1. Handling Design Rendering Issues on Laptop Screens

While implementing the design, I noticed that several fine details were not rendering correctly on my laptop screen as I wrote the code. Specifically, scaling and visual inconsistencies occurred because the laptop display did not perfectly match the design specifications from Figma. To address these issues, I implemented responsive techniques such as media queries and leveraged CSS Grid or Flexbox to ensure that the user interface (UI) adapts seamlessly across various devices and screen sizes.

### 2. Content Flow and Scroll Behavior

The design in Figma depicted the application as covering only the height of the screen without requiring any scrolling. However, during implementation, I found that this approach caused usability issues, particularly on smaller screens, where crucial content was not visible. To improve user experience, I decided to enable scrolling, allowing the content to adjust dynamically. This choice ensures the design remains accessible and usable across a range of devices, focusing on creating a more intuitive user experience.

### 3. Interactive Elements and Hover States

I took some initiative in defining the appearance of hover states and determining which elements should function as buttons. This involved selecting specific colors and transitions to enhance visibility and provide clear cues for clickable elements. The goal was to maintain visual consistency and improve usability, making user actions easily understandable and intuitive throughout the application.

### 4. Icon Management and Graphic Resources

For icons, I initially downloaded them as images because I was uncertain if a suitable icon library was available. This approach allowed me to proceed quickly with the implementation while maintaining the desired aesthetic. Moving forward, I plan to evaluate the use of optimized solutions, such as vector graphics or established libraries like Font Awesome or Material Icons, to enhance performance and maintainability.

### 5. Dynamic Background Image Considerations

There was some uncertainty about whether the background photo should change dynamically. One potential approach I considered was to update the background image based on the current weather status. This could be implemented by passing weather status data as props, allowing the image to change dynamically, thereby enhancing the application's interactivity and immersive experience. Utilizing APIs and conditional rendering would support this feature effectively.

### 6. Library Choice for Forecast Graphs

For the weather forecast data visualization, I chose to use the `recharts` library. This decision was driven by the library’s ease of integration, support for interactive elements, and ability to produce high-quality graphs. By using `recharts`, I ensured that the forecast data was presented in a clear and visually appealing way, improving the overall user experience by making complex data easily interpretable.
