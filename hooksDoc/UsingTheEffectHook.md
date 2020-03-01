## Using the Effect Hook
* The Effect Hook lets you perform side effects in function components

### Effects Without Cleanup
* Conceptually, we want it to happen after every render--but React class components don't have a method like this.We could extract a separate method but we could still have to call it in two places
### Effects with Cleanup