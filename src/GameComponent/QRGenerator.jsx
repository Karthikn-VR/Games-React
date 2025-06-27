import { useState, useEffect } from "react";
import bgImage from "../assets/image.png";

export default function QrGenerator() {
  const [text, setText] = useState("");
  const [qrInput, setQrInput] = useState("");
  const [size, setSize] = useState(400);
  const [qrImg, setQrImg] = useState();
  const bgColor = "black";

  useEffect(() => {
    setQrImg(
      `https://api.qrserver.com/v1/create-qr-code/?data=${text}&size=${size}x${size}&bgcolor=${bgColor}`
    );
  }, [text, size]);

  function handleGenerate() {
    setText(qrInput.trim());
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div className="row w-100 px-3" style={{ maxWidth: "1000px" }}>
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <form className="p-5 border rounded-4 shadow bg-light bg-opacity-75 w-100">
            <div className="mb-4 text-center">
              <h2 className="text-dark fw-bold mb-2">QR Code Generator</h2>
              <hr className="mx-auto text-dark" style={{ width: "50%" }} />
            </div>
            <div className="input-group input-group-lg">
              <input
                type="text"
                className="form-control"
                placeholder="Enter text or link"
                onChange={(e) => setQrInput(e.target.value)}
              />
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={handleGenerate}
              >
                Generate
              </button>
            </div>
          </form>
        </div>

        <div className="col-lg-6 d-flex justify-content-center align-items-center mt-4 mt-lg-0">
          <div className="text-center p-4 border rounded-4 shadow bg-light bg-opacity-75">
            {qrImg ? (
              <>
                <img
                  src={qrImg}
                  className="img-fluid rounded mb-3"
                  alt="Generated QR"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <a href={qrImg} download="QRCode.png">
                  <button type="button" className="btn btn-success w-100">
                    Download QR
                  </button>
                </a>
              </>
            ) : (
              <p className="text-muted fw-semibold">No QR code yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
