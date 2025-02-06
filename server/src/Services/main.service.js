import xml2js from "xml2js";
import fs from "fs";

import extractData from "../Utils/extractData.js";
import Report from "../Models/report.model.js";

export async function extract(file) {
  try {
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
    return savedReport;
  } catch (error) {
        if (req.file) {
            fs.unlinkSync(req.file.path);
        }
  }
}
