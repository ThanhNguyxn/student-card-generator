# 🎓 Global Student ID Generator
A production-ready web application that generates professional student ID cards from universities worldwide using AI-powered data generation.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## ✨ Features

- 📸 **Custom Photo Upload** with Base64 conversion (CORS-safe)
- 🎴 **Dual Layout Support** - Vertical and Horizontal ID card formats
- 📥 **Multiple Export Options** - Download as PNG or PDF
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile
- 🚀 **Zero Backend** - Pure frontend, ready for GitHub Pages

## 🎯 Live Demo

Visit: [https://thanhnguyxn.github.io/student-card-generator/](https://thanhnguyxn.github.io/student-card-generator/)

## ⚠️ Important Warning

> [!WARNING]
> **Legal Disclaimer - Read Carefully**
> 
> This application is designed for **educational and demonstration purposes only**. 
> 
> - ❌ **NOT Official Documents**: Generated student IDs are NOT valid official documents
> - ❌ **NO Legal Use**: Do not use for identity verification, access control, or any legal purposes
> - ❌ **NO Impersonation**: Do not use to impersonate students or gain unauthorized access
> - ❌ **NO Fraud**: Misuse of this tool for fraudulent activities is **illegal** and **punishable by law**
> 
> **Privacy & Data:**
> - All data is generated randomly using Faker.js - no real student information is used
> - Uploaded photos are processed locally in your browser (Base64 conversion)
> - No data is sent to any server or stored anywhere
> - University logos and names are used for demonstration only - all trademarks belong to their respective owners
> 
> **Intended Use:**
> - ✅ Learning web development techniques
> - ✅ Portfolio demonstration
> - ✅ UI/UX design reference
> - ✅ Testing export/print functionality
> 
> **By using this application, you agree to:**
> - Use it responsibly and ethically
> - Not attempt to pass generated IDs as real documents
> - Respect university trademarks and intellectual property
> - Comply with all local laws and regulations
> 
> The author (@ThanhNguyxn) is **NOT responsible** for any misuse of this application.

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | 3.4 | Utility-first CSS framework |
| **Faker.js** | 5.5.3 | AI data generation with localization |
| **html2canvas** | 1.4.1 | Convert DOM to image |
| **jsPDF** | 2.5.1 | PDF generation |
| **Google Fonts** | Latest | Inter, Libre Baskerville, Great Vibes |

## 📁 Project Structure

```
student-card-generator/
│
├── index.html              # Main entry point
├── css/
│   └── style.css          # Custom glassmorphism & card styles
├── js/
│   ├── universities.js    # Database of 50+ universities (Real data)
│   └── script.js          # Main application logic
├── README.md              # This file
└── LICENSE                # MIT License
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/ThanhNguyxn/student-card-generator.git
   cd student-card-generator
   ```

2. **Open in browser**
   ```bash
   # Just open index.html in your browser
   # No build process needed!
   ```

3. **Or use a local server (recommended)**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

4. **Visit** `http://localhost:8000`

## 📦 Deployment to GitHub Pages

### Method 1: Via GitHub UI (Easiest)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select `main` branch
4. Click **Save**
5. Your site will be live at `https://YOUR_USERNAME.github.io/student-card-generator/`

### Method 2: Via Git Commands

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: Global Student ID Generator"

# Connect to GitHub repository
git branch -M main
git remote add origin https://github.com/ThanhNguyxn/student-card-generator.git
git push -u origin main

# Enable GitHub Pages
# Go to Settings → Pages → Select 'main' branch → Save
```

### Method 3: Using gh-pages branch

```bash
# Create a gh-pages branch
git checkout -b gh-pages
git push origin gh-pages

# Go to Settings → Pages → Select 'gh-pages' branch → Save
```

## 🎮 Usage Guide

1. **Select Country** - Choose from 13 available countries
2. **Select University** - Pick from top universities in that country
3. **Upload Photo (Optional)** - Use your own photo or let AI generate one
4. **Generate** - AI automatically creates student data with proper localization
5. **Download** - Export as PNG or PDF

## 🌍 Supported Countries & Universities

### Vietnam (IT Focus)
- Hanoi University of Science and Technology (HUST)
- VNU University of Engineering and Technology (VNU-UET)
- VNU University of Information Technology (VNU-UIT)
- FPT University
- Posts and Telecommunications Institute of Technology (PTIT)

### USA
- Massachusetts Institute of Technology (MIT)
- Stanford University
- Harvard University
- UC Berkeley
- Yale University

### UK
- University of Oxford
- University of Cambridge
- Imperial College London

### Japan
- The University of Tokyo
- Kyoto University

### Germany
- Technical University of Munich (TUM)
- Ludwig Maximilian University of Munich (LMU)

### And 8 more countries... (Canada, Australia, France, Singapore, China, Brazil, India, South Korea)

## 🎨 Key Features Explained

### Smart Data Generation
- **Localized Names**: Vietnamese names for Vietnamese unis, Japanese for Japanese unis, etc.
- **Smart Dates**: Issue date randomly set 1-6 months in the past, valid for 4 years
- **Realistic Emails**: Generated based on university domain
- **Unique IDs**: Year + 5-digit random number

### Photo Handling
- Default: Random avatar from `pravatar.cc`
- Custom: Upload your own photo (automatically converted to Base64 for CORS safety)

### Export Options
- **PNG**: High-quality image export using html2canvas
- **PDF**: Centered on A4 landscape page using jsPDF

## 🔧 Customization

### Adding New Universities

Edit `js/universities.js`:

```javascript
"YourCountry": [
  {
    name: "University Full Name",
    shortName: "ABBR",
    domain: "university.edu",
    logo: "https://example.com/logo.png",
    color: "#HEX_COLOR",
    layout: "vertical", // or "horizontal"
    address: "Full Address"
  }
]
```

### Changing Card Design

Edit `css/style.css`:
- Modify `.id-card` for overall card styling
- Adjust `.glass-overlay` for glassmorphism effects
- Update color schemes in `.card-header`

## 🐛 Troubleshooting

### Issue: Universities not loading
**Solution**: Check browser console for errors. Ensure `universities.js` is loaded before `script.js`

### Issue: Photo upload not working
**Solution**: Make sure you're using image files (JPEG, PNG, etc.). The app converts to Base64 automatically.

### Issue: Export fails
**Solution**: Ensure html2canvas and jsPDF are loaded from CDN. Check network tab for 404 errors.

### Issue: Localization not working
**Solution**: Verify Faker.js version is 5.5.3 (not v6+). The new API syntax is different.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👨‍💻 Author

**ThanhNguyxn**
- GitHub: [@ThanhNguyxn](https://github.com/ThanhNguyxn)
- Project: [student-card-generator](https://github.com/ThanhNguyxn/student-card-generator)

## 🙏 Acknowledgments

- University logos from Wikipedia Commons
- Faker.js for data generation
- html2canvas for DOM rendering
- jsPDF for PDF export


### Web Application Preview
![Student ID Generator Web Interface](image.png)

## 🚀 Future Enhancements

- [ ] QR code with real student data
- [ ] More countries and universities
- [ ] Custom color themes
- [ ] Batch generation
- [ ] Print-ready templates

---

**Made with ❤️ by ThanhNguyxn**

If you find this project useful, please give it a ⭐ on GitHub!
