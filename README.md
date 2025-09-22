# Waku + Github Pages

This is an example of deployging [Waku](https://github.com/wakujs/waku) SSG output to [Github Pages](https://docs.github.com/en/pages).

## Notes

- Due to the difference of trailing slash behavior, Waku's client side navigation goes to `/about` (without trailing slash) and reloading browser is redirected to `/about/` (with trailing slash) by Github Pages.

## References

- https://github.com/wakujs/waku/pull/1699
