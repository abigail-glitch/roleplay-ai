# Hyperbound AI Clone

A complete UI clone of the Hyperbound AI sales training platform built with Next.js 15 and shadcn/ui.

## 🚀 Features

### Core Pages
- **Dashboard** - Overview of sales performance, recent calls, and quick actions
- **Call Recordings** - Call playback with AI-powered analysis, transcripts, and coaching insights
- **Practice Sessions** - AI-driven sales training scenarios and skill development
- **Analytics** - Comprehensive performance tracking and team comparisons

### Key Components
- **Responsive Layout** - Sidebar navigation with header search and user profile
- **Modern UI** - Built with shadcn/ui components and Tailwind CSS
- **Interactive Elements** - Audio player controls, filtering, tabs, and progress tracking
- **Data Visualization** - Performance charts, skill breakdowns, and trend analysis

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hyperbound-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with sidebar and header
│   ├── page.tsx           # Dashboard page
│   ├── calls/page.tsx     # Call recordings page
│   ├── practice/page.tsx  # Practice sessions page
│   ├── analytics/page.tsx # Analytics page
│   └── globals.css        # Global styles and CSS variables
├── components/
│   ├── layout/            # Layout components
│   │   ├── sidebar.tsx    # Navigation sidebar
│   │   └── header.tsx     # Top header with search and user menu
│   └── ui/                # shadcn/ui components
└── lib/
    └── utils.ts           # Utility functions
```

## 🎨 Pages Overview

### Dashboard (`/`)
- Performance metrics cards (Total Calls, Avg Score, Practice Hours, Goals Met)
- Recent activity with call history
- Quick actions for starting practice sessions
- Performance and goals tracking tabs

### Call Recordings (`/calls`)
- Call history with search and filtering
- Audio player with waveform visualization
- Call analysis tabs:
  - **Insights**: Talk ratio, questions asked, objections handled
  - **Transcript**: AI-generated conversation transcript
  - **Key Moments**: Important timestamps and highlights
  - **Coaching**: AI-powered feedback and recommendations

### Practice Sessions (`/practice`)
- Practice scenario library with difficulty levels
- Skill-based filtering (Discovery, Objection Handling, Demo, Closing)
- Recent session history with performance scores
- Skill development tracking and AI recommendations

### Analytics (`/analytics`)
- Performance metrics and trends
- Skill ratings with improvement tracking
- Team comparisons and industry benchmarks
- Achievement tracking and milestone recognition

## 🎯 Features Implemented

### UI/UX
- ✅ Responsive design for desktop and mobile
- ✅ Modern card-based layout
- ✅ Interactive navigation with active states
- ✅ Search functionality in header
- ✅ User profile dropdown menu
- ✅ Progress bars and data visualization placeholders

### Call Management
- ✅ Call list with search and filtering
- ✅ Audio player interface with controls
- ✅ Tabbed analysis interface
- ✅ Transcript display with speaker identification
- ✅ Key moments timeline
- ✅ AI coaching insights

### Practice System
- ✅ Scenario library with categories
- ✅ Skill-based practice recommendations
- ✅ Progress tracking across different skills
- ✅ Session history with performance metrics

### Analytics Dashboard
- ✅ Performance trend visualization
- ✅ Skill breakdown and improvement areas
- ✅ Team and industry comparisons
- ✅ Achievement and milestone tracking

## 🚀 Getting Started

The application includes sample data to demonstrate all features. Navigate through the different pages using the sidebar to explore:

1. **Dashboard** - Get an overview of your sales training progress
2. **Calls** - Review call recordings with AI analysis
3. **Practice** - Start practice sessions to improve your skills
4. **Analytics** - Track your performance and compare with benchmarks

## 🎨 Customization

The project uses shadcn/ui components which are fully customizable. You can modify:

- **Colors**: Update CSS variables in `src/app/globals.css`
- **Components**: Modify shadcn/ui components in `src/components/ui/`
- **Layout**: Adjust sidebar navigation in `src/components/layout/sidebar.tsx`
- **Data**: Replace sample data with real API calls

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

This is a UI clone project. To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the build with `npm run build`
5. Submit a pull request

## 📄 License

This project is for educational and demonstration purposes only.

---

Built with ❤️ using Next.js and shadcn/ui
