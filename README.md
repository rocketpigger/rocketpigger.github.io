# Zichen Kong’s academic homepage

Source for [zckong.top](https://zckong.top/), built with Jekyll and the [al-folio theme](https://github.com/alshedivat/al-folio).

| To update                                             | Edit                                                                                                                                                           |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Biography, research interests, education and portrait | [`_pages/about.md`](_pages/about.md) and [`assets/img/`](assets/img/)                                                                                          |
| News on the homepage and news archive                 | Add a dated Markdown entry in [`_news/`](_news/).                                                                                                              |
| Publications                                          | Add or edit a BibTeX entry in [`_bibliography/papers.bib`](_bibliography/papers.bib).                                                                          |
| Publication downloads                                 | Store papers and posters in [`assets/pdf/`](assets/pdf/) and slides in [`assets/slides/`](assets/slides/). Use the filename in the corresponding BibTeX field. |
| Contact links                                         | [`_data/socials.yml`](_data/socials.yml)                                                                                                                       |
| Site settings and appearance                          | [`_config.yml`](_config.yml), [`_layouts/`](_layouts/), [`_includes/`](_includes/) and [`_sass/`](_sass/)                                                      |

## Local preview

Run `docker compose up --build` and open [localhost:8080](http://localhost:8080).

## Deployment

The [deploy workflow](.github/workflows/deploy.yml) builds pull requests. Pushing to `main` also publishes the generated site to `gh-pages`. The custom domain is set in [`CNAME`](CNAME).
