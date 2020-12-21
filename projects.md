---
title: Projects
layout: default
custom_css: /css/gitgraph.css
custom_js: 
- /js/gitgraph.1.0.0.min.js
- /js/gitgraph_nav.js
- /js/projects.js
---

<section>
    <canvas id="gitGraph"></canvas>
    {% for item in site.data.projects.items %}
    <div id="{{ item.id }}" class="gitgraph-detail">
        {% include_relative {{ site.data.projects.content_path }}/{{item.id | downcase | replace: '-', '_'}}.html %}
    </div>
    {% endfor %}
</section>