# Truth Tables and Truth Functions

### Functions

We have seen that there are special words in English that are used to combine sentences – the logical, or sentential, operators. We have so far been talking loosely about “operators.” But what are these operators? Here, we will attempt to provide a somewhat more rigorous explanation.

In its most abstract, basic form a function is just a mapping from inputs to outputs:

![function diagram](https://upload.wikimedia.org/wikipedia/commons/3/3b/Function_machine2.svg)

Think of a mathematical function, such as the square function.

X<sup>2</sup> = Y

Here X is the *input*, Y the *output*, and the function is to square the input in order to get an output. In the square function, the function takes an *input* - here an integer - , and produces an *output* - here another integer that is the square of the input. But a function needn’t take integers as inputs. It is intuitive to think of a function as a kind of “factory,” where inputs arrive at one end, are processed in some way inside, and then some output is produced. But one needn’t think of it as an integer factory--anything can, in certain circumstances, be an input into a function.

Strictly speaking, a mathematical function is a kind of *mapping* or *correspondence* between elements. For instance, you can think of the *square* function (over integers) as comprising the following mapping:

INPUT: 1	OUTPUT: 1
<br> INPUT: 2	OUTPUT: 4
<br> INPUT: 3	OUTPUT: 9
<br> INPUT: 4	OUTPUT: 16
<br> INPUT: 5	OUTPUT: 25
...

So, functions take *inputs* and map them to some *output* (which is typically the result of some computational function on the input).

Some functions are *one-to-one*, meaning that each input maps onto a unique output. The square function is one-to-one, as we can see: there are no two inputs that map onto the same output, and there is no input that maps onto more than one output. However, other functions are *many-to-one*, meaning that multiple inputs can result in the same output. Here is an example of a many-to-one function: *multiplication by 0* [f(x): x * 0]:

INPUT 1:	OUTPUT: 0
INPUT 2: 	OUTPUT: 0
INPUT 3: 	OUTPUT: 0
...

In this case, every input maps onto the same output, so this is a clear case of a many-to-one function. (Not all many-to-one functions have just one possible output.)

We can write this function as: [f(x): x * 0]

Here the f(x) stands for “function of x” where x is the input to the function. Here x is a variable standing in for whatever is serving as the input.  What comes after the colon defines the function, telling you what to do with the variable. Here it tells you to multiply the variable times 0.

Functions dealing with integers can have an infinity of outputs (consider the function: [f(x): x + 1]. Yet when we consider *truth functions* (functions that take a proposition like a sentence as an input), there are really only two possible output values – True and False. There are an infinite number of propositions one can enter into a truth function (e.g., Michael Jordan was a basketball player, Michael Jordan was the greatest basketball player of all time, Michael Jordan was the greatest North Carolinian basketball player of all time, Michael Jordan was the greatest 6’6’’ basketball player of all-time, Michael Jordan was the greatest basketball player with a last name consisting of 6 letters...etc). Since truth functions can take many possible inputs but can only have one of two outputs - True or False - truth functions are generally *many-to-one* – many different combinations of inputs could all lead to the same value, e.g., True.

### Basic Truth Functions and Truth Tables

It is useful to think of the *logical operators* or *connectives* that we have discussed previously as mathematical functions in this sense – that is, they map a set of inputs to a given output.

For instance, the *and* function seems to take two *sentential arguments* and produces one sentence as its output. But, we have seen that the reason this is a valid rule is not in virtue of the *subject matter* of the sentences, but simply their *truth value*. Thus, whether or not a complex sentence formed by and will be true does not depend on the subject matter of the sentences, but simply on the truth values of the parts that it is operating on. In this sense, the output of the *and* function is *completely determined* by the *truth values* of the sentential parts, and not their content.

Thus, logical connectives are *truth functions* because *they take sentences as inputs and compute the output (a truth value) strictly on the basis of the truth values of the inputs*.

Suppose, then, we take “and” to be a truth functional operator. How can we describe its behavior mathematically?

“And” can combine any infinite number of sentences, but since all it really “cares about” in the sentence is its truth value, there are really only four possibilities:
<br> Take “P and Q” – If we just focus on the truth values of P and Q, we have the following possibilities:

P: True		Q: True
<br> P: True		Q: False
<br> P: False		Q: True
<br> P: False		Q: False

Thus, we can fully describe the mathematical behavior or “and” if we just list the value for “P and Q” for each set of possible truth values. We will do so in the following table, known as a **truth table**:

| P | Q | P and Q
| - | - | -
| T | T | T
| T | F | F
| F | T | F
| F | F | F

The key insight is that this truth table tells you everything you need to know about the logical function of “and.” Notice that it captures our intuition about the use of “and” as well. If someone says, “such-and-such and so-and-so,” then their statement would be *false* if *either* “such-and-such” *or* “so-and-so” (or both) were false. This is captured in rows 2-4 of the table, where you can see that “P and Q” is false. As row 1 shows, “P and Q” is only true in the case where both P is true and Q is true.

Let us construct another truth table for the word “or.”

| P | Q | P or Q
| - | - | -
| T | T | T
| T | F | T
| F | T | T
| F | F | F

This truth table once again reflects our ordinary intuitions about “or” – if someone says, “such-and-such, or so-and-so,” then their statement will be false if *neither* such-and-such *nor* so-and-so is true. This is captured in row 4 of the table.

Let us now consider “If... then” The rules for “If... then,” or what is known as the *conditional* or *implication*, are slightly more difficult than the rules for “and” and “or.”

First, some brief terminology: “If... then” statements consist of two component parts – the part that goes after “if” and the part that goes after “then.” The first part is called the **antecedent** of the conditional. The second part is called the **consequent** of the conditional. So, for a sentence like “If P then Q,” we shall say that P is the antecedent, and Q is the consequent.

Let us look at the truth table for “If... then”:

| P | Q | If P then Q
| - | - | -
| T | T | T
| T | F | F
| F | T | ?
| F | F | ?

Let us take an argument like:

(a) If it rained, the streets are wet.
<br> (b) It rained.
<br> (z) Therefore, the streets are wet.

Notice that if it rained and the streets are wet (see row 1), then the statement “if it rained then the streets are wet” appears to be true. However, if it rained but the streets are *not* wet, then the statement “If it rained, then the streets are wet” appears to be incorrect, or false (see row 2). So far this is intuitive.

But what if it didn’t rain? If it didn’t rain at all, but the streets are wet, is statement (a) true or false? It’s hard to say… (a) seems to be talking about what happens if it *did* rain – it doesn’t really tell us what to do if it *didn’t* rain.

It is hard to know what to say about “If P then Q” when P is false. However, for the purposes of symbolic logic, it is standard to stipulate that when the antecedent of the conditional (P) is false, the whole conditional “If P then Q” will be deemed *true* (no matter what the value of the consequent (Q) is.

So the truth table for “If... then” is:

| P | Q | If P then Q
| - | - | -
| T | T | T
| T | F | F
| F | T | T
| F | F | T

**HINT: This means that when evaluating a conditional, if you can tell that the antecedent is false, you can immediately tell that the whole conditional is true.**

We will quickly introduce the truth tables for the remaining operators. We hope that by now you will be able to read a truth table and understand how it determines the logical function of a truth-functional operator.

The truth table for “if”:

| P | Q | P if Q
| - | - | -
| T | T | T
| T | F | T
| F | T | F
| F | F | T

Notice that “P if Q” is logically equivalent to “If Q, then P.” “Bob will come to the party if there is pizza there” says the same thing as “If there is pizza there, then Bob will come to the party.”

The truth table for “only if”:

| P | Q | P only if Q
| - | - | -
| T | T | T
| T | F | F
| F | T | T
| F | F | T

“P only if Q” is effectively the same as “If P, then Q.”

The truth table for “if and only if”:

| P | Q | P if only if Q
| - | - | -
| T | T | T
| T | F | F
| F | T | F
| F | F | T

“P if and only if Q” can be thought as the combination of “P if Q” (i.e., “If Q, then P”), and “P only if Q” (I.e., “If P, then Q”). This is known as the *biconditional*, because it essentially consists of the conjunction of two conditionals (P->Q and Q->P). “P if and only if Q” is true just in case “P if Q” is true *and* “P only if Q” is true.

Another way to understand the biconditional is that the biconditional checks to see if both of its inputs have the *same truth value*, regardless of what that value is – if both the inputs are true, then the output is true; if one is true and the other false, the output is false; and, if both are false, then output is true.

Finally, let us look at the truth table for the *unary* operator (i.e., it takes only one argument) – “not”:

| P | Not P
| - | -
| T | F
| F | T

Here, you can see that the whole function of “not” is to switch, or invert, the truth value of the input, so that it becomes its opposite.

### More Complex Truth Tables

We have now seen how the truth tables for the basic logical operators look. It is important to try to memorize these tables. Although it may seem like a lot, these are the basis for analyzing propositions of any complexity. As we will see, when computing a truth table for a complex proposition, you simply apply the basic rules defined in the truth tables above over and over again. So, once you have mastered the basic truth table rules, you should be able to analyze a sentence of any complexity.

Let us take as an example the complex sentence “If (P and Q) then P”:


| P | Q | P and Q | If (P and Q) then P
| - | - | ------- | --------------------
| T | T |         | |
| T | F |         | |
| F | T |         | |
| F | F |         | | |

As you can see, when constructing the truth table for the complex proposition “If (P and Q) then P,” we have also included a column for the statement “P and Q,” since this complex statement itself is one of the inputs to the “If... then” operator in the last column. But “P and Q” involves a basic truth table for conjunction, such as we have already seen. So, there should be no problem there. Let us fill that in now:

| P | Q | P and Q | If (P and Q) then P
| - | - | ------- | --------------------
| T | T | T       | |
| T | F | F       | |
| F | T | F       | |
| F | F | F       | | |

Now, how do we complete the last column? The key insight is that you can basically ignore the complexity of “(P and Q”) when evaluating the last column. The arguments of the conditional in the last column are “P and Q” and “P” - but we have already computed the values for both of these (columns 1 and 3). So when we compute “If (P and Q) then P,” we can simply refer to the columns that we already filled out (columns 1 and 3) to compute the value for “If (P and Q) then P.”

| P | Q | P and Q | If (P and Q) then P
| - | - | ------- | --------------------
| T | T | T       | T |
| T | F | F       | T |
| F | T | F       | T |
| F | F | F       | T |


In other words, at each column you are always computing a basic truth function whose arguments either have primitive truth values, or whose truth values have already been computed in a previous column. Therefore, to apply the next rule, you simply follow the pattern described in the basic truth table for that connective, using the appropriate previous columns in the table.

Since every truth function has at most two arguments, you will only ever have to look at TWO other columns when computing the values for a given column. No matter how complex the final sentence is, the truth table can always be built up one operation at a time, so it only requires repeated application of the basic truth table rules.

Let’s look at one more example:

| P | Q | P or Q | Q if P | (P or Q) and (Q if P)
| - | - | ------- | --|------------------
| T | T | T       | T | T
| T | F | T       | F | F
| F | T | T       | T | T
| F | F | F       | T | F

Here, we are trying to build the truth table for “(P or Q) and (Q if P).” First, we break it down by computing the columns for the embedded sentences “P or Q” and “Q if P.” Then, we apply “and” to columns 3 and 4 to get the conjunction: “(P or Q) and (Q if P).” To do this, we just look at the columns for “P or Q” and “Q if P” and find the rows where they both say true.

By now, you should get the sense that this process is fully general – any complex proposition can be broken down into component parts, and each part is connected by a simple logical operator. Once you understand the truth tables for the logical operators, computing the truth table for a complex proposition simply consists in applying those rules to columns where the component propositions get more and complex as you proceed. In other words, you “build up” to the truth table of the final complex sentence by analyzing the truth values of the parts and combining them again and again.

### Key Concepts

* Truth function
* Truth table
