# Web Image Pipeline Project

This project demonstrates an image processing pipeline using Vite and React. It automatically generates `.webp` images from source images during the build process and provides responsive image loading through a React component.

## Project Structure

```
web-image-pipeline-project
├── src
│   ├── assets
│   │   └── images
│   │       └── sample.jpg
│   ├── components
│   │   └── ResponsiveImage.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── public
│   └── favicon.svg
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd web-image-pipeline-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

## Usage

The `ResponsiveImage` component can be used to display images responsively. It takes the image source and sizes as props, generating a `srcset` attribute for optimal loading based on the viewport size.

### Example

```tsx
import ResponsiveImage from './components/ResponsiveImage';

const App = () => (
  <div>
    <h1>Welcome to the Web Image Pipeline Project</h1>
    <ResponsiveImage 
      src="/src/assets/images/sample.jpg" 
      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" 
    />
  </div>
);

export default App;
```

## Image Processing

The project uses `vite-imagetools` to automatically generate `.webp` images from the original `.jpg` files during the build process. Ensure that your `vite.config.ts` is properly configured to handle image processing.

## License

This project is licensed under the MIT License.