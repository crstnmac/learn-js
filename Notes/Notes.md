**What is JavaScript?**

JavaScript is a scripting or programming language that allows you to implement complex features on the web pages.

**Variables:**

Variables is a placeholder that allows you to store values.

**Object:**
Object is simply a collection of grouped varibles. 

**Promise:**
The promise object is used for asynchronous computations.
Represents a value which may be available now, or in the future, or never.

```
                                         ___________
                                        |           |
                                        |    OK     |
                        HTTP Request    |           |
User( Client/browser) ----------------> |   Error   |
                                        |           |
                                        |    No     |
                                        |  Response |
                5 seconds to process     -----------
                        the request

```

There are three states:

1) **Pending**: initial state, not fulfilled or rejected.

2) **Fulfilled**: meaning that the operation completed successfully.

3) **Rejected**: meaning that the operation failed.