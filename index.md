---
layout: single
---
This is a living build log of my work in robotics and engineering.

I focus on:

- FTC & FRC robotics systems  
- Embedded control experiments  
- Applied problem solving under constraints

{% for post in site.posts limit:5 %}
### [{{ post.title }}]({{ post.url }})
{{ post.excerpt }}
{% endfor %}
---
