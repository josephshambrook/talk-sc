## Part 1

_SAT_

-   Introduce `<Layout />` in current form (inc semantic HTML elements)
-   Introduce `Layout.scss`
-   Going to rewrite this using Styled Components
-   Introduce <Grid />
-   Introduce &lt;Grid.Item />

## Part 2

_Start SC1_

-   Import Grid component
-   Convert `.grid` to `<Grid />`
-   Convert each `.grid__item` to `<Grid.Item />`

## Part 2

_Start SC2_

-   Import S-C
-   Create S-Cs for each `<Grid.Item />`, extending `Grid.Item` and giving each item a `grid-area`
-   Use new S-Cs in `<Layout />`

## Part 3

_SAT_

-   Items are no longer semantic HTML as we had before

_Start SC3_

-   Change each grid item to use `as` prop

## Part 4

-   We want stripes, but we want that to be reusable

_Start SC4_

-   Create `<StripedElement />`
-   Apply to all items
-   Change `--stripe-color` for Main and Sidebar
