---
title: Tags
layout: default
permalink: /tags/
published: true
---
<link href="{{site.baseurl}}/assets/css/github.css" rel="stylesheet" media="screen">
<div id="tags" style="float: left;">
<ul>
  {% assign tags_list = site.tags %}
   {% if tags_list.first[0] == null %}
    {% for tag in tags_list %}
        <li>
            <a href="#{{ tag }}-ref" data-toggle="tab">
              {{ tag | capitalize }} <span class="badge">{{ site.tags[tag].size }}</span>
           </a>
        </li>
    {% endfor %}
  {% else %}
    {% for tag in tags_list %}
        <li>
            <a href="#{{ tag[0] }}-ref" data-toggle="tab">
                {{ tag[0] | capitalize }} <span class="badge">{{ tag[1].size }}</span>
            </a>
        </li>
    {% endfor %}
  {% endif %}
  {% assign tags_list = nil %}
</ul>
<br/>
<br/>

<!-- Tab panes -->
<div class="tab-content">
  {% for tag in site.tags %}
    <div class="tab-pane" id="{{ tag[0] }}-ref">
    <br/>
      <h2 style="margin-top: 0px">Posts tagged  with {{ tag[0] }}</h2>
        {% assign pages_list = tag[1] %}
        {% for node in pages_list %}
          {% if node.title != null %}
            {% if group == null or group == node.group %}
              <p style="line-height: 35px;"><a href="{{ BASE_PATH }}{{node.url}}">{{node.title}}</a> <span class="text-muted">- {{ node.date | date: "%B %d, %Y" }}</span></p>
            {% endif %}
          {% endif %}
        {% endfor %}
        {% assign pages_list = nil %}
    </div>
  {% endfor %}
</div>

<div class="clearfix"></div>

<script>
  /**
   * Tags & categories tab activation based on hash value. If hash is undefined then first tab is activated.
   */
  function activateTab() {
    console.log(window);
    var hash = window.location.hash;
    console.log(hash, $('a[href="' + hash + '"]'));
    if(hash && hash != '') {
      $('.tab-pane').length && $('a[href="' + hash + '"]').tab('show');
    }
    else {
      $('.tab-pane').length && $($('.tag li a')[0]).tab('show');
    }
  }

  /* initial activation */
  document.addEventListener('DOMContentLoaded', function(event) {
    console.log('DOMContentLoaded');
    /* watch hash change and activate relevant tab */
    $(window).on('hashchange', activateTab);
    activateTab()
  })
</script>