---
title: Gallery
layout: default
---

<section>
<link rel="stylesheet" type="text/css" href="./css/gallery.css" />
<script src="./js/gallery.js"></script>

{% for gallery in site.data.galleries.galleryset %}
    <!-- For each gallery make rows of max 4 images -->


    <h1>{{ gallery.description }}</h1>
    {% assign img_count = 0 %}

    {% for image in gallery.images %}

        <!-- First iteration adds row -->
        {% if img_count == 0 %}
        <div class="row">
        {% endif %}

        <div class="column">
            <img src="{{ site.data.galleries.thumnaifolder }}/{{ image.name }}" alt="{{ image.text }}" 
            onclick="myFunction(this,'{{ site.data.galleries.imagefolder }}/{{ image.name }}');">
        </div>

        <!-- End row div when has to add new row or if it is the last item -->
        {% if img_count == 3 or forloop.last == true %}
        </div>
        {% endif %}

        {% assign img_count = img_count|plus:1 %}

    {% endfor %}
{% endfor %}

        <!-- The expanding image container -->
        <div id="imageviewr" class="container" onclick="fade(this)">
            <!-- Close the image -->
            <span class="closebtn">&times;</span>
    
            <!-- Expanded image -->
            <img id="expandedImg" class="container-content">
    
            <!-- Image text -->
            <div id="imgtext"></div>
        </div>

</section>