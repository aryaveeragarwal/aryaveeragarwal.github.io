---
layout: default
title: Home
---

# Engineering Under Constraints

I design and document robotics systems with a focus on mechanical integration, control interaction, and iterative refinement.

This site captures not just completed builds — but the reasoning behind them.

---

## Recent Posts

{% for post in site.posts limit:5 %}
### [{{ post.title }}]({{ post.url }})

<span style="color: var(--muted); font-size: 0.9rem;">
{{ post.date | date: "%B %d, %Y" }}
</span>

{{ post.excerpt }}

---

{% endfor %}
