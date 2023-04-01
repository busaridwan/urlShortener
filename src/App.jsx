import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [customUrl, setCustomUrl] = useState("");
  const [message, setMessage] = useState("");
  const [abt, setAbt] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://api-website.com/shorten", {
        url,
        customUrl,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li>
              <a href="/" onClick={() => setAbt(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setAbt(true)}>
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {abt ? (
          <>
            <h1>About URL Shortener</h1>
            <article>
              <p>
                URL shorteners are tools that create shortened URLs from long
                ones. These shortened URLs are easier to share and remember, and
                can be used in social media posts, emails, and other online
                communications.
              </p>
              <p>
                This URL Shortener website allows you to enter a long URL and
                shorten it, as well as customize the shortened URL with a word
                or phrase of your choice. If someone else has already used the
                same custom URL, the website will let you know and suggest
                another option.
              </p>
              <p>
                This website was created by <em>Busari Ridwan</em> and{" "}
                <em>Gbadegesin Idris</em> in {new Date().getFullYear()}.
              </p>
            </article>
          </>
        ) : (
          <>
            <h1>URL Shortener</h1>
            <form onSubmit={handleSubmit}>
              {/* <label> */}
              {/* Enter your URL: */}
              <input
                type="text"
                placeholder="Enter your URL:"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
              {/* </label> */}
              {/* <label> */}
              {/* Enter a custom URL (optional): */}
              <input
                type="text"
                placeholder="Enter a custom URL (optional):"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
              />
              {/* </label> */}
              <button type="submit">Shorten URL</button>
            </form>
            <p>{message}</p>
          </>
        )}
      </main>
      <footer>&copy; {new Date().getFullYear()} Ridwan & Idris</footer>
    </div>
  );
}

export default App;
