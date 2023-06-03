// src/views/VideoUpload/VideoUpload.tsx
import React, { useState } from 'react';
import axios from 'axios';

interface FileResponse {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

interface ConversionResponse {
  message: string;
  filename: string;
}

function VideoUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [fileData, setFileData] = useState<FileResponse | null>(null);
  const [convertResponse, setConvertResponse] = useState<ConversionResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.item(0) || null);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('video', file);

    const res = await axios.post(`${process.env.REACT_APP_HOST}/uploader/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    setFileData(res.data.file);
  };

  const handleConvert = async () => {
    if (!fileData) {
      return;
    }
    setLoading(true);
    const res = await axios.post(`${process.env.REACT_APP_HOST}/converter/convert/${fileData.filename}`);
    setConvertResponse(res.data);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input 
          type="file" 
          onChange={handleFileChange} 
          className="my-4 p-2 bg-gray-800 rounded-md"
        />
        <button 
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
        >
          Upload
        </button>
      </form>
      {fileData && (
        <div className="p-4 mt-5 bg-gray-800 rounded shadow text-white w-1/2">
          <p className="py-1"><strong>Field name:</strong> {fileData.fieldname}</p>
          <p className="py-1"><strong>Original name:</strong> {fileData.originalname}</p>
          <p className="py-1"><strong>Encoding:</strong> {fileData.encoding}</p>
          <p className="py-1"><strong>Mime type:</strong> {fileData.mimetype}</p>
          <p className="py-1"><strong>Destination:</strong> {fileData.destination}</p>
          <p className="py-1"><strong>Filename:</strong> {fileData.filename}</p>
          <p className="py-1"><strong>Path:</strong> {fileData.path}</p>
          <p className="py-1"><strong>Size:</strong> {fileData.size} bytes</p>
          <div className='flex justify-center items-center'>
            <button onClick={handleConvert} className="px-4 py-2 text-center bg-blue-500 text-white rounded shadow">
                {loading ? 'Converting...' : 'Convert Now'}
            </button>
          </div>
        </div>
      )}
      {convertResponse && (
        <div className="p-4 bg-gray-800 rounded shadow text-white w-1/2 mt-4">
          <p><strong>Message:</strong> {convertResponse.message}</p>
          <p><strong>Filename:</strong> {convertResponse.filename}</p>
        </div>
      )}
    </div>
  );
}

export default VideoUpload;
