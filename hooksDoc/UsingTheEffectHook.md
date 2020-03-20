## Using the Effect Hook
* The Effect Hook lets you perform side effects in function components

### Effects Without Cleanup
* Conceptually, we want it to happen after every render--but React class components don't have a method like this.We could extract a separate method but we could still have to call it in two places
* Hooks embrace JavaScript closures and avoid introducing React-specific API where JavaScript already provides a solution.
* By default, it runs both after the first render and after every update.
* Instead of thinking in terms of "mounting" and "updating", you might find it easier to think that effects happen "after render".React guarantees the DOM has been updated by the time it runs the effects.
* useEffect run after every render
* each effect "belongs" to a particular render

### Effects with Cleanup
