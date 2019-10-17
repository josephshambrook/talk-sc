## Part 1

_SAT_

-   Introduce `<Layout />` in current form (inc semantic HTML elements)
-   Introduce `Layout.scss`
-   Using modern CSS and at-rules
-   Using BEM naming style, which can be confusing to newcomers
-   Going to rewrite this using Styled Components
-   Introduce `<Grid />`
-   Introduce `<Grid.Item />`

## Part 2

-   Ensure `yarn start` is running

_Start SC1_

-   Import Grid component [S01]
-   Remove Comment out `Layout.scss`
-   Convert `.grid` to `<Grid />`
-   Convert each `.grid__item` to `<Grid.Item />` [SC02]

## Part 2

-   I now want to inherit styles of `Grid.Item`, but add additional styles (give each a `grid-area`)

_Start SC2_

-   Import S-C [SC03]
-   Create S-Cs for each `<Grid.Item />`, extending `Grid.Item` and giving each item a `grid-area` [SC04]
-   Use new S-Cs in `<Grid />` [SC05]

## Part 3

_SAT_

-   Items are no longer semantic HTML as we had before

_Start SC3_

-   Change each grid item to use `as` prop

## Part 4

-   We want stripes, but we want that to be reusable

_Start SC4_

-   Create `<StripedElement />` [SC06]
-   Apply to all items
-   Change `--stripe-color` for Main [SC07]
-   Change `--stripe-color` for Sidebar [SC08]
