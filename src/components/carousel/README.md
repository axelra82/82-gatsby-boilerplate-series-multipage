# Carousel

A simple slider using [Bootstrap Carousel Component](https://react-bootstrap.github.io/components/carousel/).

## Properties

| Name       | Default                           | Description                                                                                                                                                                            |
| ---------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| controls   | `true`                            | Show/ Hide the Navigation Next and Previous arrows on the carousel.                                                                                                                    |
| fade       | `false` (_to apply slide effect_) | Crossfade slides instead of the default slide animation.                                                                                                                               |
| slide      | `true`                            | Enables animation on the Carousel as it transitions between slides.                                                                                                                    |
| indicators | `true`                            | To show/hide the horizontal pipe indicators on the carousel bottom.                                                                                                                    |
| interval   | `5000`                            | The amount of time in milliseconds to delay between automatically cycling an item. If null, carousel will not automatically cycle.                                                     |
| keyboard   | `true`                            | Whether the carousel should react to keyboard events.                                                                                                                                  |
| pause      | `false`                           | If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave. If set to false, hovering over the carousel won’t pause it. |
| nextLabel  | Next                              | The label shown to screen readers only can be used to show the next element in the carousel. Set to null to deactivate.                                                                |
| prevLabel  | Previous                          | The label shown to screen readers only can be used to show the previous element in the carousel. Set to null to deactivate.                                                            |
| nextIcon   |                                   | Override the default button icon for the "next" control                                                                                                                                |
| prevIcon   |                                   | Override the default button icon for the "previous" control                                                                                                                            |
| touch      | `true`                            | Whether the carousel should support left/right swipe interactions on touchscreen devices.                                                                                              |
| wrap       | `true`                            | Whether the carousel should cycle continuously or have hard stops.                                                                                                                     |
| bsPrefix   | carousel                          | Change the underlying component CSS base class name and modifier class names prefix.                                                                                                   |
