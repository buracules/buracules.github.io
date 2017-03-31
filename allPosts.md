---
title: About Hagura
layout: default
permalink: /all/
published: true
---
<h2>Latest Posts</h2><br/>
<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
	{% for post in site.posts %}
	<div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
		<h4><li><a href="{{post.url | prepend: site.baseurl}}">{{post.title}}</a></li></h4>
	</div>
{% endfor %}
</div>

<h2>Test Copy</h2><br/>

<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
	{% for post in site.posts %}
	<div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
		<h4><li><a href="{{post.url | prepend: site.baseurl}}">{{post.title}}</a></li></h4>
	</div>
{% endfor %}
</div>

<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
	{% for post in site.deneme %}
	<div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
		<h4><li><a href="{{post.url | prepend: site.baseurl}}">{{post.title}}</a></li></h4>
	</div>
{% endfor %}
</div>

<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
	{% for post in site.posts %}
	<div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
		<h4><li><a href="{{post.url | prepend: site.baseurl}}">{{post.title}}</a></li></h4>
	</div>
{% endfor %}
</div>
