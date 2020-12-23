---
title: Gallery
layout: default
custom_css: /css/gallery_new.css
custom_js: /js/gallery_new.js
---

<section>
{% for gallery in site.data.galleries.galleryset %}
    <h2>{{ gallery.description }}</h2>
    <div class="gallery" id="gallery">
    {% for image in gallery.images %}
        <div class="gallery-item">
            <div class="content"><img src="{{ site.data.galleries.imagefolder }}/{{ image.name }}" alt=""></div>
        </div>
    {% endfor %}
    </div>
{% endfor %}
</section>