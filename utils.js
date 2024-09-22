const base64 = require('base64-js');
const mime = require('mime-types');

const handleFile = (file_b64) => {
  if (!file_b64) {
    return { valid: false, mime_type: null, size_kb: null };
  }

  const fileBuffer = base64.toByteArray(file_b64);
  const mimeType = mime.lookup(fileBuffer);
  const fileSizeKb = fileBuffer.length / 1024;

  return { valid: true, mime_type: mimeType, size_kb: fileSizeKb };
};

module.exports = { handleFile };