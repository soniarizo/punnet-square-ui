## Mendel Visualization Project Description

Sonia Rizo

This interactive visualization allows users to select two pea plants to cross and renders three visualizations taking in the selection as inputs:

*Vis 1: Punnet Square Visualization
*Vis 2: Phenotype Visualization
\*Vis 3: Genotype Visualization

### Running the Project

In order to run this visualization, you may first have to install Node.js if it is not already installed on your
computer. Then run "npm install" to install our dependencies.

Once you have everything installed, navigate to the directory that this README.md is in on the command line and run the commend "npm run".

### Project Organization

This project was built using React.js and D3.js. In the `src` folder, you'll find the following:

- App.js -- contains the root level code. It has the main logic here which is passed onto the components used in the project through props. It wraps all of the JSX components into a `Container` component, and makes use of MUI grid (https://mui.com/material-ui/react-grid/) to align all of the visual components.
- `components` folder -- our project is broken down into reusable components for scalability and for project organization. We have separate components for each of the 3 visualizations, and additional components for the axes of the visualizations, and a separate component for the buttons.
- `styles` folder within `components` folder -- we make use of React's styled-components library to handle most of the CSS styling within our code. We create a separate styling component for each component to allow for customization.
- `assets` folder - contains the SVG files for the pea plants

### To be improved

- Styling -- make the styling more consistent, easier flow as it resizes, and add styling to the text elements. Restyle the left-size buttons to be placed in a row in smaller views.
- Project organization -- There are a few components that should be refactored to allow for better scaling. In specific, there are two axes components to handle the punnet square axes for the top and bottom, which should be condensed into one component with the type of axis passed in as a prop. We could then pass this in as a prop to the "Styles" component associated with the axes, so that we can have one consolidated style.
- Rendering improvement -- A few times I have noticed a glitch where the SVGs will disappear from the view. I need to debug this some more, but I think it is due to how handling both the rendering and logic simultaneously.
