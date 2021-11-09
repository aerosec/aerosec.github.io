# Aerosec Website Repository

## Making Changes

Our site is built by [Jekyll](https://jekyllrb.com/) and deployed by GitHub
Actions.


To make a change, create a branch from `main`, make your changes, and
then create a [pull
request](https://help.github.com/en/articles/creating-a-pull-request).

After a PR is made, a GitHub Action will attempt to build the site with your
modifications. If successful, then the commits can then be merged into
`main`.

Once the commits have been merged into `main`, a GitHub Action will build and
deploy the site to the `gh-pages` branch. No manual changes should be made to
this branch as they will be overwritten.

## Adding or Modifying People

The file `_data/people.yml` contains a list of categories (e.g., Principal
Investigators), each of which has a nested list of members. Making
modifications to this data file triggers the automatic regeneration of the
people page.

## Adding Publications

As with people, simply add a new entry to `_data/publications.yml` and it will
automatically be built.

## Questions

Direct any questions to Stephen Checkoway.
