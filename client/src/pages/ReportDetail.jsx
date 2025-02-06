import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ReportDetail() {
  const { id } = useParams();
  const [report, setReport] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_FRONTEND_URI + `/api/v1/reports/${id}`
        );
        console.log("NEW RESPONSE", response);
        setReport(response.data.data);
      } catch (error) {
        console.error("Error fetching report:", error);
      }
    };
    fetchReport();
  }, [id]);

  if (!report) return <div className="loading loading-spinner"></div>;

  return (
    <div className="card w-full max-w-4xl shadow-2xl bg-base-100">
      <div className="card-body">
        <h2 className="card-title">Report Details</h2>

        <div className="tab tab-lifted">
          <a className="tab tab-active">Basic Details</a>
          <a className="tab">Summary</a>
          <a className="tab">Accounts</a>
        </div>

        <div className="mt-4">
          {report && (
            <>
              <div className="mb-4">
                <h3 className="text-xl font-bold">Basic Details</h3>
                <p>Name: {report.basicDetails?.name || "N/A"}</p>
                <p>PAN: {report.basicDetails?.pan || "N/A"}</p>
                <p>Credit Score: {report.basicDetails?.creditScore || "N/A"}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold">Report Summary</h3>
                <p>
                  Total Accounts: {report.reportSummary?.totalAccounts || 0}
                </p>
                <p>
                  Active Accounts: {report.reportSummary?.activeAccounts || 0}
                </p>
                <p>
                  Closed Accounts: {report.reportSummary?.closedAccounts || 0}
                </p>
                <p>
                  Current Balance:{" "}
                  {report.reportSummary?.currentBalanceAmount || 0}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">Credit Accounts</h3>
                <div className="overflow-x-auto">
                  <table className="table table-compact w-full">
                    <thead>
                      <tr>
                        <th>Bank</th>
                        <th>Account Number</th>
                        <th>Current Balance</th>
                        <th>Amount Overdue</th>
                      </tr>
                    </thead>
                    <tbody>
                      {report.creditAccountsInformation?.map(
                        (account, index) => (
                          <tr key={index}>
                            <td>{account.bank || "N/A"}</td>
                            <td>{account.accountNumber || "N/A"}</td>
                            <td>{account.currentBalance || 0}</td>
                            <td>{account.amountOverdue || 0}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReportDetail;