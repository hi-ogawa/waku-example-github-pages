# Waku + Github Pages

This is an example of deployging [Waku](https://github.com/wakujs/waku) SSG output to [Github Pages](https://docs.github.com/en/pages).

- https://hi-ogawa.github.io/waku-example-github-pages/

## Notes

- This repo currently uses Waku release from https://github.com/wakujs/waku/pull/1699 for custom `basePath` support
- Trailing slash behavior is different between Waku and Github Pages. Waku's client side navigation goes to `/about` (without trailing slash) and then reloading browser will be redirected to `/about/` (with trailing slash) by Github Pages.
