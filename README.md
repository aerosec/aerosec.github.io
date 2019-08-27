# Aerosec Website Repository

## Making Changes

Our site is built by [Jekyll](https://jekyllrb.com/) and deployed by [Travis-CI](https://travis-ci.com).

**We never push to master.**

To make a change, create a branch from **release**, make your changes, and then issue a [pull request](https://help.github.com/en/articles/creating-a-pull-request) to **release**. If approved and merged, Travis-CI will automatically generate and push a new static site to **master**. Note that pull requests to **release** will be prevented from merging if Travis-CI cannot build them.

## Adding or Modifying People

The file **_data/people.yml** contains a list of categories (e.g. Principal Investigators), each of which has a nested list of members. Making modifications to this data file triggers the automatic regeneration of the people page.

## Adding Publications

As with people, simply add a new entry to **_data/publications.yml** and it will automatically be built.
