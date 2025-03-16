import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import keyloggers from "../assets/keyloggers.MP4"

const Keyloggers = () => {
  return (
    <>
      <Navbar />

      <div className="row top-section align-items-center container-fluid p-0">
        <div className="col-md-6 d-flex justify-content-center flex-column p-4">
          <h1 style={{ color: "purple" }}>Keyloggers in Cybersecurity</h1>
          <p>
            Imagine typing your passwords, credit card details, or personal
            messages—only to have someone secretly recording every keystroke.
            That’s exactly what a keylogger does. It’s a sneaky tool used by
            hackers to steal sensitive information, and it’s a big cybersecurity
            threat.
            <br />
            <h5 style={{ color: "red", fontSize: 24 }}>What is a Keylogger?</h5>
            A keylogger is a type of spyware that tracks and records everything
            you type on your keyboard. Hackers use it to steal login
            credentials, banking details, and other private information without
            you even realizing it. Keyloggers can be software-based (installed
            through malware) or hardware-based (a small device attached to your
            keyboard).
          </p>
        </div>
        <div className="col-md-5 text-center p-4">
          <video
            src={keyloggers}
            controls
            autoPlay
            loop
            muted
            className="img-fluid rounded"
          />
        </div>
      </div>
      {/* Middle */}

      <div className="row bottom-section d-flex align-items-center justify-content-center text-center bg-light container-fluid p-0">
        <div className="col-12 p-4">
          <div className="flex flex-col items-center text-center p-4">
            <h1 style={{ color: "purple" }}>
              How Do Keyloggers Get Into Your System?
            </h1>
            <blockquote className="text-lg italic border-l-4 border-gray-500 pl-4">
              Keyloggers don’t just appear out of nowhere. They usually find
              their way into your device through:
              <br />
            </blockquote>
            <ol className="list-group">
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">✅ Phishing emails</div>
                  <p className="text-center">
                    You click on a fake link, and boom, it’s installed.
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                    {" "}
                    ✅ Malicious websites
                  </div>
                  <p className="text-center">
                    Downloading files from shady websites can get you infected.
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                    {" "}
                    ✅ Infected USB devices
                  </div>
                  <p className="text-center">
                    Plugging in an unknown USB can secretly install a keylogger.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="container my-4">
        <div className="card shadow-sm border-0">
          <div className="card-body p-4">
            <p className="text-muted mb-0">
              <h1
                style={{
                  textAlign: "center",
                  verticalAlign: "center",
                  color: "teal",
                }}
              >
                How to Protect Yourself?
              </h1>
              <h3
                style={{
                  color: "teal",
                  textAlign: "center",
                  verticalAlign: "center",
                }}
              >
                The good news? You can defend against keyloggers with some
                simple precautions:
              </h3>
            </p>

            <ol className="list-group">
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                    {" "}
                    🔹Use antivirus software{" "}
                  </div>
                  <p className="text-center">
                    It can detect and remove keyloggers.
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                    🔹Enable Two-Factor Authentication (2FA)
                  </div>
                  <p className="text-center">
                    Even if your password gets stolen, hackers can’t log in
                    without the second verification step.
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                    🔹Be careful with downloads
                  </div>
                  <p className="text-center">
                    Avoid pirated software and unknown links.
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                    🔹Use a password manager
                  </div>
                  <p className="text-center">
                    It auto-fills your credentials, making it harder for
                    keyloggers to capture them.
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                    🔹Check your task manager
                  </div>
                  <p className="text-center">
                    If your device is acting weird, look for unknown processes
                    running in the background.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

    </>
  );
};

export default Keyloggers;
