const Home = () => {
  return (
    <div className="contentContainer">
      <div className="aboutContainer">
        <h2>About me</h2>
        <table>
          <tr>
            <td>
              <img
                className="emoji"
                width="40em"
                src={process.env.PUBLIC_URL + "/icons/nutAndBolt.png"}
              />
            </td>
            <td>
              If I'm not taking something apart to understand how it works, I'm
              fixing something that I broke while taking it apart to understand
              how it worked.
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="emoji"
                width="40em"
                src={process.env.PUBLIC_URL + "/icons/books.png"}
              />
            </td>
            <td>
              Curiosity, knowledge, growth and improvement are all motivators
              for me to keep expanding upon my various disciplines of study.
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="emoji"
                width="40em"
                src={process.env.PUBLIC_URL + "/icons/artistPalette.png"}
              />
            </td>
            <td>
              I continually draw upon my varied experiences from the music,
              management, HVAC, plumbing, culinary and coding worlds. I combine
              them with my explorations of philosophy and logic in order to
              enrich my life and the lives of others.
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="emoji"
                width="40em"
                src={process.env.PUBLIC_URL + "/icons/speaker.png"}
              />
            </td>
            <td>
              My current focus is learning C++ and the JUCE framework in order
              to build virtual instruments as VST plugins.{" "}
            </td>
          </tr>
        </table>

        {/* <p>
          Currently, my primary focus is on computer programming with the
          ultimate goal of creating software-based musical instruments that are
          accessible to individuals of all skill levels, including those who are
          new to music as well as experienced musicians. I am motivated to
          develop these tools in order to provide a intuitive and creative
          platform for people to explore and express their musical abilities.
        </p> */}

        <div className="skillsWrapper">
          <h2>Tech I am Familiar With</h2>
          <div>
            <h3>Programing Languages</h3>
            <img
              title="javaScript"
              className="badge"
              width="40em"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            />
            <img
              title="C++"
              className="badge"
              width="40em"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
            />
            <img
              title="Python"
              className="badge"
              width="40em"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            />
            <img
              title="HTML 5"
              className="badge"
              width="40em"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            />
            <img
              title="CSS 3"
              className="badge"
              width="40em"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            />
            <img
              title="Pure Data"
              className="badge"
              width="42em"
              src="https://user-images.githubusercontent.com/1220707/45721248-947db900-bba7-11e8-9465-63497daf8029.png"
            />
          </div>
          <div>
            <h3>Frameworks and Libraries</h3>
            <img
              title="React"
              className="badge"
              width="40em"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
            <img
              title="Node.js"
              className="badge"
              width="40em"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            />
            <img
              title="Redux"
              className="badge"
              width="40em"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
            />
            <img
              title="JUCE"
              className="badge"
              width="40em"
              src={process.env.PUBLIC_URL + "/icons/juce.png"}
            />
            <img
              title="Express.js"
              className="badge"
              width="54em"
              src={process.env.PUBLIC_URL + "/icons/express.png"}
            />
            <img
              title="JQuery"
              className="badge"
              width="40em"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
            />
            <img
              title="Django"
              className="badge"
              id="django"
              width="44em"
              src={process.env.PUBLIC_URL + "/icons/django.png"}
            />
          </div>
          <div>
            <h3>Database Technologies</h3>
            <img
              title="Mongo DB"
              className="badge"
              width="40em"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
            />
            <img
              title="PostgreSQL"
              className="badge"
              width="40em"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            />
          </div>
          <div>
            <h3>Version Control and Collaboration</h3>
            <img
              title="Git"
              className="badge"
              width="40em"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            />
            <img
              title="GitHub"
              className="badge"
              width="40em"
              src={process.env.PUBLIC_URL + "/icons/githubPink.png"}
            />
            <img
              title="Markdown"
              className="badge"
              width="58em"
              src={process.env.PUBLIC_URL + "/icons/markdown.png"}
            />
            <img
              title="Slack"
              className="badge"
              width="40em"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg"
            />
            <img
              title="Trello"
              className="badge"
              width="40em"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg"
            />
          </div>
          <div>
            <h3>Development Tools</h3>
            <img
              title="VSCode"
              className="badge"
              width="40em"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            />
            <img
              title="Heroku"
              className="badge"
              width="40em"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"
            />
            <img
              title="Chrome"
              className="badge"
              width="40em"
              src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
            />
            {/* <svg viewBox="0 0 128 128">
              <path style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-variant-east-asian:normal;font-feature-settings:normal;font-variation-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;shape-margin:0;inline-size:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" d="M11.95 24.348c-5.836 0-10.618 4.867-10.618 10.681v57.942c0 5.814 4.782 10.681 10.617 10.681h104.102c5.835 0 10.617-4.867 10.617-10.681V35.03c0-5.814-4.783-10.681-10.617-10.681H14.898l-.002-.002H11.95zm-.007 9.543h104.108c.625 0 1.076.423 1.076 1.14v57.94c0 .717-.453 1.14-1.076 1.14H11.949c-.623 0-1.076-.423-1.076-1.14V35.029c0-.715.451-1.135 1.07-1.138z" color="#000" font-weight="400" font-family="sans-serif" overflow="visible"></path><path d="M20.721 84.1V43.9H32.42l11.697 14.78L55.81 43.9h11.696v40.2H55.81V61.044l-11.694 14.78-11.698-14.78V84.1H20.722zm73.104 0L76.28 64.591h11.697V43.9h11.698v20.69h11.698zm0 0"></path>
            </svg> */}
            <img
              title="Xcode"
              className="badge"
              width="44em"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg"
            />
            <img
              title="Apple"
              className="badge"
              id="apple"
              width="34em"
              src="https://camo.githubusercontent.com/bc62adb68f2cec197dca6b76dfe5ceb5e81e120c05f132aaa5686ee713ed7b9c/68747470733a2f2f63646e2e66726565626965737570706c792e636f6d2f6c6f676f732f6c617267652f32782f6170706c652d312d6c6f676f2d706e672d7472616e73706172656e742e706e67"
            />
          </div>
          <div>
            <h3>A/V Production Tools</h3>
            <img
              title="MIDI"
              className="badge"
              width="40em"
              src={process.env.PUBLIC_URL + "/icons/midiPort.png"}
            />
            <img
              title="Ableton"
              className="badge"
              id="ableton"
              width="74em"
              src={process.env.PUBLIC_URL + "/icons/ableton.png"}
            />
            <img
              title="Reaper"
              className="badge"
              width="42em"
              src="https://millennialmind.co/wp-content/uploads/2019/05/reaper.png"
            />
            <img
              title="Pro Tools"
              className="badge"
              width="42em"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/PT2019.png/180px-PT2019.png"
            />
            <img
              title="Midjourney"
              className="badge"
              width="44em"
              src={process.env.PUBLIC_URL + "/icons/midjourney.png"}
            />
            <img
              title="BeFunky"
              className="badge"
              width="38em"
              src={process.env.PUBLIC_URL + "/icons/beFunky.png"}
            />
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img
          className="bioImage"
          src={process.env.PUBLIC_URL + "/IMG_07792.png"}
          alt="Jason"
        />
      </div>
    </div>
  );
};

export default Home;
