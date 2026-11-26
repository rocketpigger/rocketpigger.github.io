---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography --query !@patent %}

<h2 class="bibliography">Patents</h2>

{% bibliography --query @patent --group_by none %}

</div>
