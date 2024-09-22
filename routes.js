const express = require('express');
const router = express.Router();
const fileHandler = require('../utils/fileHandler');

router.post('/', async (req, res) => {
  try {
    const { data, file_b64 } = req.body;
    const userId = 'john_doe_17091999'; // hardcoded for demonstration purposes
    const collegeEmailId = 'john@xyz.com';
    const collegeRollNumber = 'ABCD123';

    const numbers = data.filter((item) => !isNaN(item));
    const alphabets = data.filter((item) => isNaN(item));
    const highestLowercaseAlphabet = alphabets.sort((a, b) => b.localeCompare(a))[0];

    const file = fileHandler.handleFile(file_b64);
    const fileValid = file.valid;
    const fileMimeType = file.mime_type;
    const fileSizeKb = file.size_kb;

    const response = {
      is_success: true,
      user_id: userId,
      email: collegeEmailId,
      roll_number: collegeRollNumber,
      numbers,
      alphabets,
      highest_lowercase_alphabet: [highestLowercaseAlphabet],
      file: {
        file_valid: fileValid,
        file_mime_type: fileMimeType,
        file_size_kb: fileSizeKb,
      },
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ is_success: false, error: 'Internal Server Error' });
  }
});

router.get('/', (req, res) => {
  res.json({ operation_code: 1 });
});

module.exports = router;