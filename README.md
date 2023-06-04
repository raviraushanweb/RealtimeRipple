# RealtimeRipple
RealtimeRipple is a robust real-time media server built with Node.js. It's designed to handle various media-related tasks like file uploads, video conversion, video streaming, and real-time chat.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/raviraushanweb/RealtimeRipple.git
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Features

### File Upload

RealtimeRipple accepts video uploads through a POST request to `/uploader/upload`. This request must include a `multipart/form-data` body with a `video` field containing the video file.

### Video Conversion

Once a video is uploaded, it can be converted using FFmpeg. Simply make a POST request to `/converter/convert/{filename}` (replacing `{filename}` with the name of your video file). The server will start the conversion process and send a JSON response once it's done.

### Video Streaming

To stream a video, make a GET request to `/streamer/stream/{filename}` (replace `{filename}` with the name of your video file). The server will send the video in chunks, allowing for real-time streaming.

### Real-time Chat

RealtimeRipple also supports real-time chat via WebSockets. Simply open a WebSocket connection to `ws://localhost:3000` and send/receive messages in real-time.

## Screenshots
[![Image1](https://i.ibb.co/G5sRDY9/Screenshot-2023-06-04-at-7-13-02-PM.png)](https://i.ibb.co/G5sRDY9/Screenshot-2023-06-04-at-7-13-02-PM.png)

[![Image2](https://i.ibb.co/w427cs5/Screenshot-2023-06-04-at-7-13-40-PM.png)](https://i.ibb.co/w427cs5/Screenshot-2023-06-04-at-7-13-40-PM.png)

[![Image3](https://i.ibb.co/3WTpkZQ/Screenshot-2023-06-04-at-7-13-54-PM.png)](https://i.ibb.co/3WTpkZQ/Screenshot-2023-06-04-at-7-13-54-PM.png)

[![Image4](https://i.ibb.co/B4ySCdX/Screenshot-2023-06-04-at-7-14-57-PM.png)](https://i.ibb.co/B4ySCdX/Screenshot-2023-06-04-at-7-14-57-PM.png)

## Testing

To test the various features of RealtimeRipple, we recommend using a REST client like Insomnia or Postman.

For the file upload, you'll need to create a POST request with a `multipart/form-data` body. For video conversion and streaming, simply make POST and GET requests respectively. For real-time chat, you can use the browser's WebSocket API or a WebSocket client.

## Built With

- Node.js
- TypeScript
- Express.js
- Multer for handling `multipart/form-data`
- FFmpeg for video conversion
- `ws` for WebSockets

## Author

Ravi Raushan - [Email](mailto:raviraushanweb@gmail.com)
