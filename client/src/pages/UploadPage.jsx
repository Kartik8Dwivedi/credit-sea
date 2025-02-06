import { useState } from "react";
import axios from "axios";

function UploadPage() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(import.meta.env.VITE_FRONTEND_URI+"/api/v1/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Response, ", response);
      setMessage(`Upload successful! Report ID: ${response.data.data.id}`);
    } catch (error) {
      setMessage("Upload failed. Please try again.");
    }
  };

  return (
    <div className="card w-full max-w-2xl shadow-2xl bg-base-100">
      <div className="card-body">
        <h2 className="card-title">Upload XML File</h2>
        <form onSubmit={handleUpload}>
          <div className="form-control">
            <label className="block">
              <span className="text-base-content">Select XML File</span>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                onChange={handleFileChange}
                required
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Upload
          </button>
        </form>
        {message && <div className="alert alert-success mt-4">{message}</div>}
      </div>
    </div>
  );
}

export default UploadPage;