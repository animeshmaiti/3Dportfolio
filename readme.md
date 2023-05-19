## Create a 3D Portfolio Website With React
### This project uses many react libraries
### Read React Docs <a href="https://react.dev/blog/2023/03/16/introducing-react-dev" target="_blank"> <img src="readmesrc/react.png" alt="react" width="50"/> </a>
### For Style we use:
### Tailwind CSS  <a href="https://tailwindcss.com/docs/guides/create-react-app" target="_blank"> <img src="readmesrc/tailwind.svg" alt="react" width="20"/> </a>

### React Three Fiber
### Library for ThreeJS in React: <a href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction" target="_blank"> <img src="readmesrc/threejs.svg" alt="react" width="20"/> </a>
### For Animation in react 
### Framer Motion: <a href="https://www.npmjs.com/package/framer-motion" target="_blank"> <img src="readmesrc/framer.svg" alt="react" width="15"/> </a>

### For Email Service
### EmailJS:<a href="https://www.emailjs.com/docs/examples/reactjs/" target="_blank"> <img src="readmesrc/emailjs.png" alt="react" width="15"/> </a>

## Install all Dependencies in React
### For Create a React template using Vite Run this command in terminal
```
npm create vite@latest ./ -- --template react
```
### install Tailwind CSS and Initialize
```
npm install -D tailwindcss
npx tailwindcss init
```
### Install all Dependencies with a flag Like react-three,maath,react-tilt,emailjs,framer-motion and some others.
```
npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-component @emailjs/browser framer-motion react-router-dom
```
### For proper working of tailwindcss install postcss config
```
npm install -D tailwindcss postcss autoprefixer
```
### We need to install Original ThreeJS package to work properly react/three-fiber
```
npm install --legacy-peer-deps three
```
### After install all Dependencies start a developer server
```
npm run dev
```

