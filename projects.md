---
layout: default
title: Projects
permalink: /projects/
---

## Engineering Documentation

{% assign sorted = site.projects | sort: "date" | reverse %}

<div class="project-list">
{% for project in sorted %}
  <a class="project-item" href="{{ project.url }}">
    <div class="project-date">
      {{ project.date | date: "%B %Y" }}
    </div>
    <div class="project-title">
      {{ project.title }}
    </div>
    <div class="project-excerpt">
      {{ project.excerpt }}
    </div>
  </a>
{% endfor %}
</div>
