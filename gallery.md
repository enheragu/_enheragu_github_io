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
    <link rel="stylesheet" type="text/css" href="./css/gallery.css" />
  </head>
  <body>
    <header>
      <img src="./img/robot.png" alt="cool robot logo" height="150" align="left" />
      
      
      <h1 style="margin-left:15.5%;"><strong>Enrique Heredia Aguado</strong>
        <font color="#979797" style="font-weight:normal;">&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;Robotics Engineer</font>
      </h1>
      
      <nav>
        <a href="index.html#" id="nav-contact">Contact</a>
        <a href="index.html#" id="nav-presentation">Presentation</a>
        <a href="index.html#" id="nav-education">Eduation</a>
        <a href="index.html#" id="nav-work">Work Experience</a>
        <a href="index.html#" id="nav-skills">Skills</a>
        <a href="gallery.html">Gallery</a>
      </nav>
    </header>
<body>
    <section>
        <!-- The grid: four columns -->
        <h1>ERGO Field tests</h1>
        <div class="row">
            <div class="column">
                <img src="./img_gallery/Thumbnails/ergo_final_test_shotD2018_346_12_01_23X8_02Y7_99H0_20.png" alt="ERGO Morocco final tests" 
                onclick="myFunction(this,'./img_gallery/ergo_final_test_shotD2018_346_12_01_23X8_02Y7_99H0_20.png');">
            </div>
            <div class="column">
                <img src="./img_gallery/Thumbnails/ergo_final_test_shotD2018_346_12_01_23X8_02Y7_99H0_20.png" alt="ERGO Morocco final tests" 
                onclick="myFunction(this,'./img_gallery/ergo_final_test_shotD2018_346_12_01_23X8_02Y7_99H0_20.png');">
            </div>
            <div class="column">
                <img src="./img_gallery/Thumbnails/ergo_final_test_shotD2018_346_12_01_23X8_02Y7_99H0_20.png" alt="ERGO Morocco final tests" 
                onclick="myFunction(this,'./img_gallery/ergo_final_test_shotD2018_346_12_01_23X8_02Y7_99H0_20.png');">
            </div>
            <div class="column">
                <img src="./img_gallery/Thumbnails/ergo_final_test_shotD2018_346_12_01_23X8_02Y7_99H0_20.png" alt="ERGO Morocco final tests" 
                onclick="myFunction(this,'./img_gallery/ergo_final_test_shotD2018_346_12_01_23X8_02Y7_99H0_20.png');">
            </div>
        </div>
        
        <h1>GOTCHA Field tests</h1>
        <div class="row">
            <div class="column">
                <img src="./img_gallery/Thumbnails/gotcha_final_test.png" alt="GOTCHA Colmenar Tests" 
                onclick="myFunction(this,'./img_gallery/gotcha_final_test.png');">
            </div>
            <div class="column">
                <img src="./img_gallery/Thumbnails/gotcha_final_test.png" alt="GOTCHA Colmenar Tests" 
                onclick="myFunction(this,'./img_gallery/gotcha_final_test.png');">
            </div>
            <div class="column">
                <img src="./img_gallery/Thumbnails/gotcha_final_test.png" alt="GOTCHA Colmenar Tests" 
                onclick="myFunction(this,'./img_gallery/gotcha_final_test.png');">
            </div>
            <div class="column">
                <img src="./img_gallery/Thumbnails/gotcha_final_test.png" alt="GOTCHA Colmenar Tests" 
                onclick="myFunction(this,'./img_gallery/gotcha_final_test.png');">
            </div>
        </div>

    </section>

    <!-- The expanding image container -->
    <div id="imageviewr" class="container" onclick="fade(this)">
        <!-- Close the image -->
        <span class="closebtn">&times;</span>

        <!-- Expanded image -->
        <img id="expandedImg" class="container-content">

        <!-- Image text -->
        <div id="imgtext"></div>
    </div>


    <!-- Scripts -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>
    <script src="./js/gitgraph.1.0.0.min.js"></script>
    <script src="./js/index.js"></script>
    <script src="./js/gallery.js"></script>
</body>
</html>