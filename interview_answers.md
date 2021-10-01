# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    Functional components have to rended method, while class component must have a render() method which will render to the page. Also, functional components mainly just render to the page, while class components do both rendering and logic.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
    componentWillMount runs when a component is about to mount, not after it mounts, while componentWillUpdate runs wheneven the component reruns or renders.

3. Define stateful logic.
    Stateful logic is when code uses state to function. This allows code to be used multiple times throughout mulitle components.

4. What are the three step of creating a successful test? What is done in each phase?
    Arrange - render the page and setup and assign data
    Act     - do something, for example clicking a button
    Assert  - check to make sure the results are correct
