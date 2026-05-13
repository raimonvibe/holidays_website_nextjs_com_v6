#  Raimonvibe Personal Website

A very modern, responsive personal website for Raimonvibe, a technology researcher and web developer, built with Next.js, React, and TypeScript.

## 📋 Project Overview

This website showcases Raimonvibe's technology research and development work, featuring:

- Modern UI with responsive design
- Christmas-themed elements and animations
- Dropdown navigation menu
- Snowflake animation effects
- FontAwesome integration
- Tailwind CSS styling

## 🚀 Technologies Used

- **Frontend Framework**: Next.js 14.2
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: 
  - Tailwind CSS
  - CSS Modules
  - OOCSS (Object-Oriented CSS) architecture
- **Icons**: FontAwesome
- **Image Optimization**: Sharp

## 🏗️ Project Structure

```
holidays_website_nextjs_com_v6/
├── public/               # Static assets (images, fonts)
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── About/        # About page
│   │   ├── Contact/      # Contact page
│   │   ├── Home/         # Home page
│   │   ├── Services/     # Services page
│   │   └── ...           # Other page components
│   ├── components/       # Reusable components
│   │   ├── Dropdown11.tsx # Navigation dropdown
│   │   ├── Footer.tsx    # Footer component
│   │   └── NavbarHome.tsx # Navigation component
│   ├── styles/           # CSS styles
│   │   ├── globals.css   # Global styles
│   │   ├── footer-social.css # Footer-specific styles
│   │   └── normalize.css # CSS normalization
│   └── script.ts         # JavaScript utilities
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/raimonvibe/holidays_website_nextjs_com_v6.git
   cd holidays_website_nextjs_com_v6
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 🔧 Available Scripts

- `npm run dev` - Run the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 📱 CSS Architecture

The project uses a traditional CSS approach:

- **Global CSS**: Most styles defined in globals.css
- **Component-specific styles**: Some components have dedicated styling
- **CSS Modules**: Limited use of component-specific CSS files
- **Media Queries**: Responsive design for different screen sizes

## 🎄 Special Features

- **Christmas Lights Animation**: Decorative SVG lights with animation effects
- **Snowflake Effects**: Interactive snowflake animations on hover
- **Responsive Design**: Optimized for all device sizes
- **Dropdown Navigation**: Animated dropdown menu component

## 🔍 Browser Compatibility

The website is optimized for modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## 📝 License

This project is the property of Raimonvibe. All rights reserved.

## 👨‍💻 Author

- **Raimon** - Technology Researcher and Web Developer
- Website: [raimonvibe.com](https://raimonvibe.com)
