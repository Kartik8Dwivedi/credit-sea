const validateXML = (req, res, next) => {
  if (!req.file) return res.status(400).json({ 
        success: false,
        error: "No file uploaded",
  });
  //we are using validatoin for both text/xml & application/xml because some files are uploaded as text/xml and some as application/xml
  if (req.file.mimetype !== "text/xml" && req.file.mimetype !== "application/xml") {
    console.log(typeof req.file);
    console.log(req.file.mimetype)
    return res.status(400).json({ 
        success: false,
        error: "Invalid file type" 
    });
  }
  next();
};

export default validateXML;