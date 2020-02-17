## Hooks at a Glance
### State Hook
* It's similar to `this.setState` in a class,except it doesn't merge the old and new state together.
* Note that unlike `this.state`, the state here doesn't have to be an object -- although it can be if you want.
* React assumes that if you call `useState` many times, you do it in the same order during every render.