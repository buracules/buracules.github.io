---
title: Blog
layout: default
permalink: /blog/
published: true
fpath: /assets/images/bg5.jpg
---
<div class="col-md-12 headline">
  <h1 style="text-align: center; font-size: 40px;">Categories</h1><br/>
  <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
    {% assign sorted_categories = site.categories | sort %}
    {% for category in sorted_categories %}
    {% if category.first != "Courses" %}
    <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
      <h2>{{ category | first }}</h2>
      {% for posts in category %}
      {% for post in posts %}
      <p style="font-size: 20px;"><a href="{{ post.url }}">{{ post.title }}</a></p>
      {% endfor %}
      {% endfor %}
    
      <br>
      <br>
    </div>
    {% endif %}
    {% endfor %}
  </div>
  <div>

