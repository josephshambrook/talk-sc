# Live Demo Steps

## Part 1

_SAT_

-   Introduce `<Layout />` in current form (inc semantic HTML elements)
-   Introduce `Layout.scss`
-   Using modern CSS and at-rules
-   Using BEM naming style, which can be confusing to newcomers
-   Going to rewrite this using Styled Components

## Part 2

-   Ensure `yarn start` is running

_Start SC1_

-   Introduce `<Grid />`
-   Introduce `<Grid.Item />`
-   Import Grid component [SC01]
-   Remove `Layout.scss`
-   Convert `.grid` to `<Grid />`
-   Convert each `.grid__item` to `<Grid.Item />` [SC02]

## Part 3

-   I now want to inherit styles of `Grid.Item`, but add additional styles (give each a `grid-area`)

_Start SC2_

-   Import S-C [SC03]
-   Create S-Cs for each `<Grid.Item />`, extending `Grid.Item` and giving each item a `grid-area` [SC04]
-   Use new S-Cs in `<Grid />` [SC05]

## Part 4

_SAT_

-   Items are no longer semantic HTML as we had before

_Start SC3_

-   Change each grid item to use `as` prop

## Part 5

-   We want stripes, but we want that to be reusable

_Start SC4_

-   Create `<StripedElement />` [SC06]
-   Apply to all items
-   Change `--stripe-color` for Main [SC07]
-   Change `--stripe-color` for Sidebar [SC08]
