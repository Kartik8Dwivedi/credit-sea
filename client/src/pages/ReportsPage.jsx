import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ReportsPage() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_FRONTEND_URI + "/api/v1/reports"
        );
        console.log("Response, ", response);
        setReports(response.data.data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };
    fetchReports();
  }, []);

  return (
    <div className="card w-full max-w-4xl shadow-2xl bg-base-100">
      <div className="card-body">
        <h2 className="card-title">All Reports</h2>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Credit Score</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report._id}>
                  <td>{report._id}</td>
                  <td>{report.basicDetails?.name || "N/A"}</td>
                  <td>{report.basicDetails?.creditScore || "N/A"}</td>
                  <td>
                    <Link
                      to={`/reports/${report._id}`}
                      className="btn btn-sm btn-primary"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ReportsPage;