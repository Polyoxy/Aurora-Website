# Aurora Website

A modern, responsive website for Aurora company with a clean, dark theme and smooth animations. Inspired by the BB Agency design.

## Features

- Modern dark theme with orange accents
- Responsive design for all screen sizes
- Smooth animations using Framer Motion
- Firebase authentication for team members
- Portfolio management system
- Clean, minimalist UI inspired by BB Agency

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript and React
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion & GSAP
- **Backend**: Firebase (Authentication & Firestore)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/aurora-website.git
   cd aurora-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add your Firebase configuration:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
aurora-website/
├── public/                  # Static assets
│   └── images/              # Image assets
│       └── logos/           # Brand logos
│       └── portfolio/       # Portfolio images
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── admin/           # Admin pages
│   │   ├── work/            # Portfolio pages
│   │   ├── firebase.ts      # Firebase configuration
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable components
│   │   ├── AuthForm.tsx     # Authentication form
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Navbar.tsx       # Navigation bar
│   │   └── PortfolioCard.tsx # Portfolio card component
```

## Deployment

The easiest way to deploy this website is using Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Set up your environment variables
4. Deploy!

## Admin Access

To access the admin dashboard:

1. Navigate to `/admin`
2. Log in with your Firebase credentials
3. Manage portfolio projects

## Customization

- **Colors**: Edit the Tailwind configuration in `tailwind.config.ts`
- **Fonts**: Change the font in `layout.tsx`
- **Content**: Update the content in the page files
- **Animations**: Modify animations in component files

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Design inspiration from [BB Agency](https://bb.agency)
- Icons from [Heroicons](https://heroicons.com/)
