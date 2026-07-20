# 🎁 Surprise Gift photo capture website

A simple web application that shows a "Surprise Gift" opening animation and saves a photo capture using the device's front-facing camera.

## ✨ Features

- 🎁 Animated surprise gift
- 📷 Front camera access
- 📸 Captures and saves photos
- ⚡ Express.js backend
- 📱 Mobile-friendly

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js

## 📂 Project Structure

```text
.
├── index.html
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## ⚙️ Quick Start

1.**Clone it or download it to your device**:
```bash
  apt install git -y nodejs -y
  git clone https://github.com/happy-531/Surprise-gift-photo-capture-website.git
```
2. **Install dependencies**:

```bash
   cd Surprise-gift-photo-capture-website/
   npm install
   mkdir img
```

3.**Start the server**:
```bash
   node server.js
```
Now the server will start on port 3000. If you want to send it to other person then you can use cloudflared tunnel.

## 🌐 Optional: Cloudflared Tunnel

Install Cloudflared:

```bash
apt install cloudflared -y
```

Expose the local server:

```bash
cloudflared tunnel --url http://localhost:3000
```

Cloudflared will generate a temporary public URL for development and testing.

## 📖 How It Works

1. Open the website.
2. Click the gift box.
3. Allow camera permission.
4. The app captures a photo.
5. The server receives and stores the image in the `img` folder.

## 👨‍💻 Author

**Happy**

GitHub: https://github.com/babuhappy531-lab

⭐ If you like this project, consider giving it a star!

Made with LOVE 💕 and HARDWORK 💪 of happy ONLY FOR YOU !!
