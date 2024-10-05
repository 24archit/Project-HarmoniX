# HarmoniX - Music To Your Mood 🎵

<img src="./vite-project/src/assets/media/Logo_Readme.png" alt="HarmoniX Logo" width="784" height="208">

<p>
  <strong>HarmoniX</strong> is a full-stack web application designed to elevate your music streaming experience. Integrating with the Spotify Web API, HarmoniX allows you to explore diverse playlists, discover new tracks, and seamlessly stream your favorite music. Enjoy real-time trending songs, manage your playlists, and effortlessly search for your desired artists, albums, and songs.
</p>

<h2>🌐 Live Demo</h2>
<p>
  Experience the application live: 
  <a href="https://harmonix-play.vercel.app" target="_blank">
    HarmoniX - Play Music
  </a>
</p>

<hr>

<h2>📜 Features</h2>

<ul>
  <li><strong>🎧 Dynamic Music Streaming:</strong> Seamlessly stream tracks and audio across the globe without interruptions or ads.</li>
  <li><strong>🌍 Trending Songs:</strong> Access real-time trending songs in India and globally.</li>
  <li><strong>🔍 Search Functionality:</strong> Discover your favorite tracks, artists, playlists, and albums with a powerful and intuitive search bar.</li>
  <li><strong>📑 Playlist Management:</strong> Easily create, edit, publish, and delete playlists to organize your music.</li>
  <li><strong>🎛️ Spotify Integration:</strong> Securely connect and authenticate with your Spotify account to unlock full access to HarmoniX’s services.</li>
  <li><strong>🔑 Secure Authentication:</strong> OAuth 2.0 authentication and cookie management ensure secure login and session persistence.</li>
  <li><strong>🔄 REST APIs:</strong> Backend-to-frontend communication powered by REST APIs, enabling smooth data retrieval and manipulation from Spotify.</li>
</ul>

<hr>

<h2>🛠️ Technologies Used</h2>

<h3>Frontend:</h3>
<ul>
  <li><strong>HTML5</strong></li>
  <li><strong>CSS3</strong></li>
  <li><strong>JavaScript (ES6)</strong></li>
  <li><strong>React</strong> - A powerful framework for creating interactive user interfaces.</li>
</ul>

<h3>Backend:</h3>
<ul>
  <li><strong>Node.js</strong> - JavaScript runtime environment for server-side development.</li>
  <li><strong>Express.js</strong> - Web application framework for handling routing and middleware.</li>
</ul>

<h3>Database:</h3>
<ul>
  <li><strong>SQL</strong> - For handling relational data management.</li>
</ul>

<h3>APIs:</h3>
<ul>
  <li><strong>Spotify Web API</strong> - Provides access to Spotify's vast library of music, allowing HarmoniX to fetch and manage track, artist, and playlist data.</li>
</ul>

<hr>

<h2>🚀 Getting Started</h2>

<p>Follow these steps to get the project running locally on your machine.</p>

<h3>Prerequisites:</h3>
<ul>
  <li>Node.js and npm installed.</li>
  <li>A Spotify Developer account to create an app and get credentials (Client ID and Client Secret).</li>
</ul>

<h3>1. Clone the Repository:</h3>
<pre>
<code>
git clone https://github.com/your-username/harmonix.git
cd harmonix
</code>
</pre>

<h3>2. Install Dependencies:</h3>
<pre>
<code>
npm install
</code>
</pre>

<h3>3. Set up Environment Variables:</h3>
<p>Create a <strong>.env</strong> file at the root of your project and add the following:</p>
<pre>
<code>
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REDIRECT_URI=your_spotify_redirect_uri
</code>
</pre>

<h3>4. Run the Application:</h3>
<pre>
<code>
npm start
</code>
</pre>

<hr>

<h2>📂 Folder Structure</h2>

<pre>
<code>
/harmonix
├── /public
│   └── favicon.ico         # Website logo
├── /src
│   ├── /components         # React components
│   ├── /pages              # Main pages of the application
│   ├── App.js              # Main app file
│   └── index.js            # Entry point
├── /server
│   ├── server.js           # Express server
│   └── /routes             # API routes
├── .env                    # Environment variables
├── package.json            # Node.js dependencies and scripts
└── README.md               # Project documentation
</code>
</pre>

<hr>

<h2>🛡️ Security</h2>

<ul>
  <li>OAuth 2.0 for user authentication ensures that users can securely login with their Spotify account.</li>
  <li>Cookie management for session persistence and to safeguard user data.</li>
</ul>

<hr>

<h2>📈 Future Enhancements</h2>

<p>Some upcoming features and improvements:</p>
<ul>
  <li><strong>Offline Mode:</strong> Listen to your favorite songs even without an internet connection.</li>
  <li><strong>AI-Powered Recommendations:</strong> Receive personalized song suggestions based on your listening habits.</li>
  <li><strong>Dark Mode:</strong> A toggle for dark/light theme support to enhance the user experience.</li>
</ul>

<hr>

<h2>🧑‍💻 Contributing</h2>

<p>Contributions are welcome! To contribute:</p>
<ol>
  <li>Fork the repository.</li>
  <li>Create your feature branch (<code>git checkout -b feature/YourFeature</code>).</li>
  <li>Commit your changes (<code>git commit -m 'Add YourFeature'</code>).</li>
  <li>Push to the branch (<code>git push origin feature/YourFeature</code>).</li>
  <li>Open a pull request.</li>
</ol>

<hr>

<h2>📝 License</h2>

<p>This project is licensed under the MIT License - see the <a href="./LICENSE">LICENSE</a> file for details.</p>

<hr>

<h2>🙌 Acknowledgments</h2>

<ul>
  <li><strong>Spotify</strong> for providing an exceptional Web API.</li>
  <li><strong>Node.js</strong> and <strong>React</strong> communities for their excellent tools and documentation.</li>
</ul>

