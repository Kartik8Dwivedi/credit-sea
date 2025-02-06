import xml2js from "xml2js";
import fs from "fs";
import Report from "../Models/report.model.js";
import extractData from "../Utils/extractData.js";

class MainController {

  // upload file and extract data
  async upload(req, res) {
    try {
      const file = req.file;
      if (!file) {
        return res.status(400).send({
          success: false,
          error: "No file uploaded",
        });
      }

      const filePath = file.path;
      const fileContent = fs.readFileSync(filePath, "utf8");

      const parser = new xml2js.Parser({
        explicitArray: false,
        ignoreAttrs: true,
      });
      const result = await parser.parseStringPromise(fileContent);

      const reportData = extractData(result);
      const report = new Report(reportData);
      const savedReport = await report.save();

      fs.unlinkSync(filePath);

      res.status(200).json({
        message: "File uploaded and data extracted successfully",
        data: {
          id: savedReport._id,
          status: "completed",
          savedReport,
        },
      });
    } catch (error) {
      console.log("Error extracting data in controller layer", error);
      if (req.file) {
        fs.unlinkSync(req.file.path); 
      }
      res.status(500).send({
        success: false,
        error: "Failed to extract data",
      });
    }
  }
}

export default MainController;
