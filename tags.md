---
title: Tags
layout: default
permalink: /tags/
published: true
---

<h1 style="text-align: center; font-size: 40px;">Tags</h1><br/>
<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
    <h2>{{ page.tag }}</h2>
           {% for post in posts %}
              <p style="font-size: 50px;"><a href="{{post.url}}">{{ post.title }} ({{ post.date | date_to_string }} | Tags: {{ post | tags }})</a></p>
           {% endfor %}
         <br>
         <br>
</div>


<div id="tag-cloud">
  {{ site | tag_cloud }}
</div>