# 3. Truth Tables and Validity

### The Truth Table Method for Determining Validity

Being able to construct a truth table for complex propositions provides an important method that allows us to determine definitively whether an argument is valid.

Let us consider the following argument:

(1) P and Q
<br> (2) If P, then R
<br> (3) Therefore, R

Intuitively, this argument is valid. How can we show this using a truth table?

First, let’s construct a complete truth table for every proposition in the argument, and combine them into one:

| P | Q | R | P and Q | If P, then R
| - | - | - | ------- | ------------
| T | T | T       | T | T
| T | T | F       | T | F
| T | F | T       | F | T
| T | F | F       | F | F
| F | T | T       | F | T
| F | T | F       | F | T
| F | F | T       | F | T
| F | F | F       | F | T

Now, how do we use this table to determine whether the argument is valid? Well, recall that an argument is valid just in case if the premises are true, then the conclusion is true. That means we want to look for any row in the table in which *all the premises are true* (and we can ignore any other rows). You can see the relevant row in bold:

| P | Q | R | P and Q | If P, then R
| - | - | - | -------- |-----------
| **T** | **T** | **T**       | **T** | **T**
| T | T | F       | T | F
| T | F | T       | F | T
| T | F | F       | F | F
| F | T | T       | F | T
| F | T | F       | F | T
| F | F | T       | F | T
| F | F | F       | F | T

Row 1 is the only row where all the premises (1) and (2) are true. Now, in order to determine validity, you first find the rows where all the premises are true, then you see whether the *conclusion is true in all of those rows as well*. In this case, there is only one relevant row, and the conclusion (R) is indeed true in that row, so therefore the argument is valid.

Let’s look at another example:

(1) P and Q
<br> (2) (P and Q) implies Q

| P | Q | P and Q | (P and Q) implies Q
| - | - | - | --------------------
| **T** | **T** | **T**       | **T**
| T | F | F       | T
| F | T | F       | T
| T | F | F       | T

As you can see, in this example “P and Q” is the only premise, so row 1 is the only row where all the premises are true; now, if we look to the conclusion at these rows, we see that it is true in that row. Therefore, it is clear that whenever the premise(s) are true, the conclusion is true, and hence this argument is valid.

Let us also notice something interesting about this last example: Consider the final column, which states the conclusion. Notice that it has “True” in every entry. This is in fact an example of a very significant class of propositions known as **tautologies**. Intuitively, a tautology is a statement that is true “no matter what,” i.e., no matter what is “going on in the world.” For example, “It’s raining or it’s not raining” might be considered a tautology, for it’s always true that wherever you are, it either *is raining* or *it’s not raining*. More precisely, a tautology is a statement whose column in the truth table contains all “True” values.

In contrast to a tautology, there are statements that are false “no matter what” – they have “False” in every row of their truth table column. For example: “Alice is at home and she’s not at home.” This is totally *impossible* or *contradictory* because it says two things that are totally incompatible. This is known as a **contradiction**. A contradiction is a statement that asserts an impossibility. It has all “False” values in its truth table column.

Finally, some statements are true in some cases, and false in others. For instance, consider “If P then R” from Table 1 – this statement has a mixture of “True” and “False” values in its column. Intuitively, this suggests that the statement is *sometimes* true and *sometimes* false. This is known as a **contingent** statement.

These are importantly terminology to bear in mind as we move forward.

Let us take stock:


* An argument is *valid*, as shown in a truth table, just in case for every row in which every premise is true, the conclusion is true at that row as well. (All other rows can be ignored.)

* A statement is a *tautology* if the complete truth table shows that its value is “True” at every row of the truth table. (Intuitively, it is a statement that is “always” true “no matter what the circumstances.")

* A statement is a *contradiction* if the complete truth table shows that its value is “False” at every row of the truth table. (Intuitively, it is a statement that is “always” false “no matter what the circumstances.")

* A statement is *contingent* (or, is a *contingency*) if the complete truth table shows that its value is “True” at some rows and “False” at others. (Intuitively, it is a statement that is whose truth value may change depending on the circumstances.)

### Key Concepts
* Tautology
* Contradiction
* Contingent statement
