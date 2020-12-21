---
title: Gallery
layout: default
custom_css: /css/gallery.css
custom_js: /js/gallery.js
---

<section>
<!-- For each gallery make rows of max 4 images -->
<!-- First iteration adds row -->
<!-- End row div when has to add new row or if it is the last item -->
<!-- Need to add empty column if not filled with images -->
{% for gallery in site.data.galleries.galleryset %}
    <h2>{{ gallery.description }}</h2>
    {% assign img_count_int = 0 %}
    {% for image in gallery.images %}
        {% if img_count_int == 0 %}
    <div class="row">
        {% endif %}
        <div class="column">
            <img src="{{ site.data.galleries.thumnaifolder }}/{{ image.name }}" alt="{{ image.text }}" 
            onclick="myFunction(this,'{{ site.data.galleries.imagefolder }}/{{ image.name }}');">
        </div>
        {% if img_count_int == 3 %}
            {% assign img_count_int = 0 %}
    </div>
        {% elsif forloop.last == true %}
            {% for missin_col in (img_count_int..3) %}
        <div class="column"></div>
            {% endfor %}
    </div>
        {% else %}
            {% assign img_count_int = img_count_int|plus:1 %}
        {% endif %}
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