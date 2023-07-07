---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}


In my dissertation, I study economic elites' ideas about poverty and inequality and their preferences for taxation. The study is based on a mixed-methods approach, including more than 100 interviews and a survey experiment. 

Apart from my dissertation, I am interested in the political economy of social policy. 
