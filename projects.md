---
layout: default
title: Projects
permalink: /projects/
---

## Engineering Documentation
{% assign sorted = site.projects | sort: "date" | reverse %}

<div class="project-archive">

{% assign current_year = "" %}

{% for project in sorted %}
  {% assign project_year = project.date | date: "%Y" %}

  {% if project_year != current_year %}
    <h2 class="archive-year">{{ project_year }}</h2>
    {% assign current_year = project_year %}
  {% endif %}

  <div class="archive-item">
    <div class="archive-date">
      {{ project.date | date: "%B" }}
    </div>

    <div class="archive-content">
      <a href="{{ project.url }}" class="archive-title">
        {{ project.title }}
      </a>
      <p class="archive-description">
        {{ project.description }}
      </p>
    </div>
  </div>

{% endfor %}

</div>
