import Report from "../Models/report.model.js";
import { extract } from "../Services/main.service.js";


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
      const savedReport = await extract(file);

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
      res.status(500).send({
        success: false,
        error: "Failed to extract data",
      });
    }
  }

  async getAllReports(req, res) {
    try {
      const defaultEntriesPerPage = 7;

      const page = parseInt(req.query.page) || 1; 
      const entriesPerPage =
        parseInt(req.query.entriesPerPage) || defaultEntriesPerPage; 

      const skip = (page - 1) * entriesPerPage;

      const reports = await Report.find().skip(skip).limit(entriesPerPage);

      const totalReports = await Report.countDocuments();

      const totalPages = Math.ceil(totalReports / entriesPerPage);

      res.status(200).json({
        success: true,
        data: reports,
        pagination: {
          page,
          entriesPerPage,
          totalReports,
          totalPages,
        },
      });
    } catch (error) {
      console.log("Error fetching reports in controller layer", error);
      res.status(500).send({
        success: false,
        error: "Failed to fetch reports",
      });
    }
  }

  async getReportById(req, res) {
    try {
      const report = await Report.findById(req.params.id);
      if (!report) {
        return res.status(404).send({
          success: false,
          error: "Report not found",
        });
      }
      res.status(200).json({
        success: true,
        data: report,
      });
    } catch (error) {
      console.log("Error fetching report in controller layer", error);
      res.status(500).send({
        success: false,
        error: "Failed to fetch report",
      });
    }
  }
}

export default MainController;
