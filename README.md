## Mendel Visualization Project Description

Sonia Rizo

This interactive visualization allows users to select two pea plants to cross and renders three visualizations taking in the selection as inputs:

*Vis 1: Punnet Square Visualization
*Vis 2: Phenotype Visualization
\*Vis 3: Genotype Visualization

### Running the Project

This project is hosted using AWS Amplify: [Mendel Visualization](https://main.d1m2x2p3zo9lgg.amplifyapp.com/).

In order to run this visualization locally, you may first have to install Node.js if it is not already installed on your
computer. Then run "npm install" to install our dependencies.

Once you have everything installed, navigate to the directory that this README.md is in on the command line and run the command "npm run".

### Project Organization

This project was built using React.js and D3.js. In the `src` folder, you'll find the following:

- App.js -- contains the root level code. It has the main logic here which is passed onto the components used in the project through props. It wraps all of the JSX components into a `Container` component, and makes use of MUI grid (https://mui.com/material-ui/react-grid/) to align all of the visual components.
- `components` folder -- our project is broken down into reusable components for scalability and for project organization. We have separate components for each of the 3 visualizations, and additional components for the axes of the visualizations, and a separate component for the buttons.
- `styles` folder within `components` folder -- we make use of React's styled-components library to handle most of the CSS styling within our code. We create a separate styling component for each component to allow for customization.
- `assets` folder - contains the SVG files for the pea plants

### Design and Development Decisions:

- Design Elements:

  - Interaction: I chose to make the button selection interactive on hover to give the user tactile feedback, indicating that they are interactive. I change the cursor, opacity, and size to accomplish this.
  - Layout: On large and medium screens, all three visualizations and all buttons are displayed with the two charts on the right-hand side. On small and extra small screens, the phenotype and genotype visuals are moved to the bottom, so that the user can scroll to view them. The punnet square visual takes over the main screen for easy usability.
  - Color Scheme: In addition to the green and yellow color scheme given, I added a light blue background to the Punnet Square visualization to draw attention to this specific part of the website. Since it is the core functionality, I decided to make that easier for the user to figure out. For consistency, I made the header the same color. The rest of the colors are the green and yellow colors used in the SVGs to draw attention to the visualizations.

  Development:

  - Packages and Tools: I used react and d3. I chose to focus primarily on react development because the visualizations and data involved were at a small scale. Given the project scope, I decided to forgo using d3, as the benefits of d3 usually are seen at the larger data-level-- ie for scaling and axes. In this case, I decided to create a custom punnet square svg and used react-vis for the other visualization. This allows for a lot of customization to the punnet squares whithout forgoing the simplicity of its functionality. I used MUI grid to handle responsiveness to different screen sizes, adjusting the number of grids each component takes up according to the size of the screen.
  - Components: I decided to include most of the core logic and data handling in App.js since this was reused by many components. I then passed information to each separate component as a props object, which kept all of the render/DOM-logic on the components, and all of the dynamics occured on App.js, making it faster and more efficient to render each component. I chose to create separate components for styling to allow for more control over creating svg components, sizing them to fit properly in various grid sizes, and for added customization.

### To be improved

- Styling -- make the styling more consistent, easier flow as it resizes, and add styling to the text elements. Restyle the left-size buttons to be placed in a row in smaller views. I would also like to add more hovering capabilities and interaction. For example, I'd like the user to be able to hover over components/titles to get more information about what the visualization displays. For accessibility, I'd like to add alt tags and more tactile feedback upon scrolling over different elements.
- Project organization -- There are a few components that should be refactored to allow for better scaling. In specific, there are two axes components to handle the punnet square axes for the top and bottom, which should be condensed into one component with the type of axis passed in as a prop. We could then pass this in as a prop to the "Styles" component associated with the axes, so that we can have one consolidated style. There are also a few functions that should be renamed to better explain what they do, such as "doSomethingWithClick()."
- Rendering improvement -- A few times I have noticed a glitch where the SVGs will disappear from the view. I need to debug this some more, but I think it is due to how handling both the rendering and logic simultaneously.

### Views

Main Desktop View:

![Desktop View](/images/desktop-view.jpg)

Main Screen in Mobile View-- everything is centered:

![Main Screen in Mobile View](/images/mobile-view-1.jpg)

Mobile View-- Genotype and Phenotype visualizations can be viewed by scrolling:
![Down-Scroll in Mobile View](/images/mobile-view-2.jpg)
