import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import cloudsecurity from "../assets/cloudsecurity.jpg";

const Cloudsecurity = () => {
  return (
    <>
      <Navbar />
      <div className="row top-section align-items-center container-fluid p-0">
        <div className="col-md-6 d-flex justify-content-center flex-column p-4">
          <h1 style={{ color: "purple" }}>
            Cloud Security: Safeguarding Cloud Computing Systems
          </h1>
          <p>
            Cloud security is a crucial aspect of cybersecurity that protects
            cloud-based infrastructure, applications, and data from cyber
            threats. It involves a combination of technology, policies, and best
            practices to ensure data privacy, compliance, and secure access for
            individuals and businesses. Cloud security is a shared
            responsibility between cloud service providers and clients,
            requiring both parties to take appropriate security measures.
            <br />
          </p>
        </div>
        <div className="col-md-5 text-center p-4">
          <img
            src={cloudsecurity}
            alt="Artificial Intelligence in cybersecurity is not just a tool; it’s a necessity. As threats evolve, AI empowers us to detect, prevent, and respond faster than ever before."
            className="img-fluid rounded"
          />
        </div>
      </div>

      {/* Middle */}

      <div className="container my-4">
        <div className="card shadow-sm border-0">
          <div className="card-body p-4">
            <p className="text-muted mb-0">
              <h3 style={{ fontSize: 24 }}>Key Aspects of Cloud Security:</h3>
            </p>

            <ol className="list-group">
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">Data Security</div>
                  <p className="text-center">
                    Encrypting and protecting stored and transmitted data.
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                    Identity & Access Management (IAM)
                  </div>
                  <p className="text-center">
                    Managing user authentication and authorization.
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                    Governance & Compliance
                  </div>
                  <p className="text-center">
                    Implementing policies for threat prevention, detection, and
                    legal adherence.
                  </p>
                </div>
              </li>
              <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
                <div className="ms-2 me-auto">
                  <div className="fw-bold text-center">
                    Disaster Recovery (DR) & Business Continuity (BC)
                  </div>
                  <p className="text-center">
                    Ensuring data backup and operational resilience.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/* Bottom */}

      <ol className="list-group">
        <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
          <div className="ms-2 me-auto">
            <h3 className="text-center">
              Cloud Service Models & Security Responsibilities:
            </h3>
          </div>
          <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
            <p className="text-center" style={{ fontSize: 18 }}>
              ✅Software-as-a-Service (SaaS) – The provider handles all
              security, while clients only manage access and data usage (e.g.,
              Google Drive, Microsoft 365, Slack).
            </p>
          </li>
          <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
            <p className="text-center" style={{ fontSize: 18 }}>
              ✅Platform-as-a-Service (PaaS) – The provider manages
              infrastructure and runtime, while clients secure applications,
              data, and access controls (e.g., Google App Engine, Windows
              Azure).
            </p>
          </li>
          <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
            <p className="text-center" style={{ fontSize: 18 }}>
              ✅Infrastructure-as-a-Service (IaaS) – Clients have full control
              over OS, applications, and data, while providers manage physical
              infrastructure (e.g., AWS, Google Compute Engine).
            </p>
          </li>
          <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
            <p className="text-center" style={{ fontSize: 18 }}>
              ✅Cloud Deployment Models & Security Implications: Public Cloud –
              Shared environments managed by third-party providers, requiring
              strong access controls.
            </p>
          </li>
          <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
            <p className="text-center" style={{ fontSize: 18 }}>
              ✅Private Cloud – A dedicated cloud environment for a single organization, offering enhanced security and customization.
            </p>
          </li>
        </li>
      </ol>
    </>
  );
};

export default Cloudsecurity;
