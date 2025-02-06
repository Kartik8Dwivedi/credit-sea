import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-[81vh] bg-base-100">
      <div className="container mx-auto p-4">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="card w-full max-w-3xl shadow-2xl bg-base-100">
            <div className="card-body text-center">
              <h1 className="card-title text-4xl mb-6">
                Credit Report Management
              </h1>
              <p className="text-lg mb-8">
                Easily upload and manage credit reports. View detailed
                information and generate comprehensive reports.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card bg-base-200 p-6">
                  <h3 className="text-2xl mb-3">Upload XML Files</h3>
                  <p className="mb-4">
                    Easily upload credit report XML files and automatically
                    extract relevant information.
                  </p>
                  <Link to="/upload" className="btn btn-primary w-full">
                    Upload Now
                  </Link>
                </div>

                <div className="card bg-base-200 p-6">
                  <h3 className="text-2xl mb-3">View Reports</h3>
                  <p className="mb-4">
                    Access and manage all your uploaded reports. View details
                    and generate comprehensive summaries.
                  </p>
                  <Link to="/reports" className="btn btn-secondary w-full">
                    View Reports
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
