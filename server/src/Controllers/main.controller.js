import xml2js from "xml2js";
import Report from "../Models/report.model.js";
import extractData from "../utils/extractData.js";

class MainController{

    // upload file and extract data
    async upload(req,res){
          const file = req.file;
          if (!file) {
            console.log("No file uploaded in controller layer");
            return res.status(400).send({
                success: false,
                error: "No file uploaded",
            });
          }

          const parser = new xml2js.Parser();

          parser.parseString(file.buffer.toString(), (err, result) => {
            if (err) {
                console.log("Error parsing XML in controller layer", err);
                return res.status(400).send({
                    success: false,
                    error: "Failed to parse XML",
                });
            }

            const reportData = extractData(result);
            const report = new Report(reportData);
            report.save((err, savedReport) => {
              if (err) {
                return res.status(500).send("Failed to save report");
              }
              res.status(200).json({
                message: "File uploaded and data extracted successfully",
                data: {
                  id: savedReport._id,
                  status: "completed",
                },
              });
            });
          });
    }
}

export default MainController;