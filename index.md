<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Enrique Heredia Aguado</title>
    <link
      id="favicon"
      rel="shortcut icon"
      type="image/png"
      href="./img/robot.png"
    />
    <link rel="stylesheet" type="text/css" href="./css/index.css" />
    <link rel="stylesheet" type="text/css" href="./css/gitgraph.css" />
  </head>
  <body>
    <header>
      <img src="./img/robot.png" alt="cool robot logo" height="160" align="left" />
    
      <h1  style="text-align:left">Enrique Heredia Aguado</h1>
      <nav>
        <a href="#" id="nav-contact">Contact</a>
        <a href="#" id="nav-presentation">Presentation</a>
        <a href="#" id="nav-education">Eduation</a>
        <a href="#" id="nav-work">Work Experience</a>
        <a href="#" id="nav-skills">Skills</a>
      </nav>
    </header>

    <section>
      <!-- GitGraph canvas -->
      <canvas id="gitGraph"></canvas>
      
      <div id="detail-contact" class="gitgraph-detail">
        <p>Name: <strong>Enrique Heredia Aguado</strong></p>
        <p>LinkedIn: <a href="https:/www.linkedin.com/in/enheragu">
            enheragu 
            <img border="0" alt="LinkedIn" src="./img/linkedin-logo.png" width="15" height="15">
            </a>
        </p>
        <p>GitHub: <a href="https://github.com/enheragu">
            enheragu 
            <img border="0" alt="GitHub" src="./img/github-logo.png" width="15" height="15">
            </a>
        </p>
      </div>


      <div id="detail-presentation" class="gitgraph-detail">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div id="detail-electronicsdeg" class="gitgraph-detail">

      </div>
      
      <div id="detail-bq" class="gitgraph-detail">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua.
        </p>
      </div>

      <div id="detail-gmv" class="gitgraph-detail">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua.
        </p>
      </div>

      <div id="detail-projects" class="gitgraph-detail">
        <ul>
          <li><strong>GOTCHA:</strong></li>
          <li><strong>ERGO:</strong></li>
          <li><strong>ADE:</strong></li>
        </ul>
      </div>
      
      <div id="detail-publications" class="gitgraph-detail">
        <ul>
          <li>Paper blah blah 1</li>
          <li>Paper blah blah 2</li>
          <li>Paper blah blah 3</li>
        </ul>
      </div>
      
      <div id="detail-skills" class="gitgraph-detail">
        <p></p>
          <div class="row">
            <div class="column">
              <p><strong>Engineering:</strong><br>
                <ul>
                  <li>Programming languages: C/C++, Python</li>
                  <li>Robotics frameworks: TASTE, ROS, ROCK</li>
                </ul>
              </p>
            </div>
            <div class="column">
              <p><strong>Languages:</strong><br>
                <ul>
                  <li>Spanish</li>
                  <li>English</li>
                </ul>
              </p>
              <p><strong>Other:</strong><br>
              </p>
            </div>
          </div>

      </div>

    </section>

    <!-- Scripts -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>
    <script src="./js/gitgraph.1.0.0.min.js"></script>
    <script src="./js/index.js"></script>
  </body>
</html>
