# Test doubles

A test double is an object that can stand-in for a real object in a test
(similar to how a stunt double stands in for an actor in a movie).

The 5 variants of test doubles:

1.  Fake: It is an actual implementation of the contract but is unsuitable for production.
2.  Mock: It defines an expectation of how it will be used. It will cause a failure if the expectation isn’t met.
3.  Spy: It records information about how the class is being used.
4.  Stub: It provides fake data to the SUT (System Under Test).
5.  Dummy: It is used as a placeholder when an argument needs to be filled in.
    

# Reference
https://jesusvalerareales.medium.com/testing-with-test-doubles-7c3abb9eb3f2