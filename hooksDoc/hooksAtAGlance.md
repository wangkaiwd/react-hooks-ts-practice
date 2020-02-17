## Hooks at a Glance
### State Hook
* It's similar to `this.setState` in a class,except it doesn't merge the old and new state together.
* Note that unlike `this.state`, the state here doesn't have to be an object -- although it can be if you want.
* React assumes that if you call `useState` many times, you do it in the same order during every render.

### Effect Hook
* By default,React runs the effects after every render - including the first render.
* React would unsubscribe from our `ChatAPI` when the components unmounts, as well as before re-running the effect due to subsequent render.
  ```jsx
  import React, { useState, useEffect } from 'react';

  function FriendStatus(props) {
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    useEffect(() => {
      ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

      return () => {
        ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
      };
    });

    if (isOnline === null) {
      return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
  }
  ```