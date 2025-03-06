import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import ai from "../assets/AI.jpg";

const ArtficialIntelligence = () => {
  return (
    <>
      <Navbar />

      <div className="row top-section align-items-center container-fluid p-0">
        <div className="col-md-6 d-flex justify-content-center flex-column p-4">
          <h1 style={{ color: "purple" }}>
            Artficial-Intelligence in Cybersecurity?
          </h1>
          <p>
            Artificial Intelligence (AI) is becoming a game-changer in
            cybersecurity, helping organizations strengthen their defenses
            against cyber threats. One of its key contributions is the
            development of Intelligent Agents—software or hardware designed to
            analyze data, learn patterns, and make decisions to improve
            security. These agents help detect vulnerabilities in code, spot
            unusual login activities, and even identify new types of malware
            that might bypass traditional security systems.
          </p>
        </div>
        <div className="col-md-5 text-center p-4">
          <img
            src={ai}
            alt="Artificial Intelligence in cybersecurity is not just a tool; it’s a necessity. As threats evolve, AI empowers us to detect, prevent, and respond faster than ever before."
            className="img-fluid rounded"
          />
        </div>
      </div>
      {/* Bottom */}

      <div className="row bottom-section d-flex align-items-center justify-content-center text-center bg-light container-fluid p-0">
        <div className="col-12 p-4">
          <div className="flex flex-col items-center text-center p-4">
            <h1 style={{ color: "purple" }}>How AI Helps in Cybersecurity?</h1>
            <blockquote className="text-lg italic border-l-4 border-gray-500 pl-4">
              AI processes large amounts of data to recognize patterns and
              detect anomalies. When integrated into cybersecurity systems, it
              helps security professionals by:
            </blockquote>
            <ol className="list-group">
            <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
              <div className="ms-2 me-auto">
                <div className="fw-bold text-center">Recognizing Patterns</div>
                <p className="text-center">
                  AI can detect hidden patterns in complex data that might go
                  unnoticed by humans. This helps security teams analyze and
                  understand potential threats more effectively.
                </p>
              </div>
            </li>
            <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
              <div className="ms-2 me-auto">
                <div className="fw-bold text-center">Providing Actionable Insights</div>
                <p className="text-center">
                  AI offers recommendations based on the patterns it identifies,
                  guiding security professionals on how to respond to threats.
                </p>
              </div>
            </li>
            <li className="list-group-item bg-light border-0 shadow-sm mb-2 p-3 rounded text-center">
              <div className="ms-2 me-auto">
                <div className="fw-bold text-center">Taking Automated Action</div>
                <p className="text-center">
                  Some AI-driven systems can act on their own to fix security
                  issues, reducing response time and minimizing potential
                  damage. Even with skilled cybersecurity professionals and
                  advanced tools in place, AI adds an extra layer of protection.
                  One major benefit is its ability to scan source code
                  accurately, reducing false positives and helping engineers
                  find security flaws before software is deployed.
                </p>
              </div>
            </li>
          </ol> 
          </div>
        </div>
      </div>

      <div className="container my-4">
      <div className="card shadow-sm border-0">
        <div className="card-body p-4">
          <p className="text-muted mb-0">
            AI also plays a critical role in incident response. It not only
            detects threats but also provides detailed context about them,
            enabling security teams to respond quickly and efficiently. By
            integrating AI into cybersecurity strategies, organizations can
            proactively detect and mitigate threats, improving their overall
            security posture and staying ahead of cybercriminals in an
            ever-evolving digital world.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ArtficialIntelligence;
