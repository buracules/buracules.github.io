---
title: Courses
layout: default
permalink: /courses/
published: true
fpath: /assets/images/bg5.jpg
---
<div class="col-md-12 headline">
  <h1 style="text-align: center; font-size: 40px;">Categories</h1><br/>
  <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
    <div class="col-md-4 col-lg-12 col-sm-12 col-xs-12">
      {% for post in site.categories.Courses %}
      <p style="font-size: 20px;"><a href="{{ post.url }}">{{ post.title }}</a></p>
      {% endfor %}
      <br>
      <br>
    </div>
  </div>
  <div>

