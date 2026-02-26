---
layout: default
title: Home
---

# Creating, Engineering, and Making life easier

I design and document robotics systems with a focus on mechanical integration, control interaction, and iterative refinement.

This site captures not just completed builds — but the reasoning behind them.

---

## Recent Posts

<div class="post-list">
{% for post in site.posts limit:5 %}
  <a href="{{ post.url }}" class="post-item">
    <div class="post-meta">
      <span class="post-date">
        {{ post.date | date: "%b %d, %Y" }}
      </span>
    </div>
    <div class="post-content">
      <h3 class="post-title">{{ post.title }}</h3>
      <p class="post-excerpt">
        {{ post.excerpt | strip_html | truncate: 140 }}
      </p>
    </div>
  </a>
{% endfor %}
</div>
