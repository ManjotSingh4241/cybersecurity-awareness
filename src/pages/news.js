import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar";

export default function ITNewsPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsdata.io/api/1/news?apikey=pub_796774842958f4efab124945bf068f3070b42&category=technology&language=en`
        );
        setNews(response.data.results);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (<>
    <Navbar />
    <div className="container-fluid bg-light text-dark py-5 min-vh-100">
      <h1 className="display-4 text-center mb-5">🔥 Live IT & Tech News</h1>

      {loading ? (
        <p className="text-center h5">Loading latest news...</p>
      ) : (
        <div className="row g-4">
          {news.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text text-muted flex-grow-1">{item.description?.slice(0, 150)}...</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-3"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
}
