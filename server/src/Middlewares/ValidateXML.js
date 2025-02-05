const validateXML = (req, res, next) => {
  if (!req.file) return res.status(400).json({ 
        success: false,
        error: "No file uploaded",
  });
  if (req.file.mimetype !== "text/xml") {
    return res.status(400).json({ 
        success: false,
        error: "Invalid file type" 
    });
  }
  next();
};

export default validateXML;