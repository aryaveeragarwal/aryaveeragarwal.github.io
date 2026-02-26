---
layout: default
title: Blog
permalink: /blog/
---

# Archive

<div class="blog-archive">
{% assign current_year = "" %}
{% for post in site.posts %}
  {% assign post_year = post.date | date: "%Y" %}

  {% if post_year != current_year %}
    {% unless forloop.first %}</div>{% endunless %}
    <h2 class="archive-year">{{ post_year }}</h2>
    <div class="archive-group">
    {% assign current_year = post_year %}
  {% endif %}

  <div class="archive-item">
    <span class="archive-date">
      {{ post.date | date: "%b %d" }}
    </span>
    <a href="{{ post.url }}" class="archive-title">
      {{ post.title }}
    </a>
  </div>

  {% if forloop.last %}</div>{% endif %}
{% endfor %}
</div>
