# Personal Website

## Challanges / Potential Refactors:

### Locale / Languages

Thoughts:

- I can store all always in the url, but then if navigating and such I may need to handle always keeping ?locale=XX in the url.
- Also can use context with a cookie / localstorage to save any existing locale
- When I render a component like localizedDate, is there a way to get from the request already the date and render it in the correct format already or is this client side approach that i've found ok?
