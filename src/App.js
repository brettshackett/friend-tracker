import './App.css';

function App() {
  return (
    <div>
      <h1>Friend Tracker</h1>
      <div>
        <img 
          src= {process.env.PUBLIC_URL + '/Stock_Headshot.jpg'}
          alt="Brett Headshot"
          height = "200" />
          <h2>My Profile</h2>
          <h3>Name</h3>
          <p>Brett Shackett</p>
          <h3>Age</h3>
          <p>25</p>
          <h3>Bio</h3>
          <p>I like to program, I also like food.</p>
          <h3>Birthday</h3>
          <p>December 9, 1997</p>
          <h3>Interests</h3>
          <ul>
            <li>Programming</li>
            <li>Gaming</li>
            <li>Golfing</li>
            <li>Sleeping</li>
          </ul>
      </div>
    </div>
  );
}

export default App;
