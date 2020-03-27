# III. Natural Deduction

# 1. What is Natural Deduction?

In the last unit, we learned how to construct truth tables for symbolic logic propositions, and then we learned how to use these truth tables to judge whether or not an argument is valid. The truth table method is certainly effective, but it doesn’t really reflect how people *actually* reason about deductive arguments. Essentially, the truth table method judges whether an argument is valid by looking at every possible way the world could be, and then seeing whether the conclusion is true in every possible state where the premises are true. But when we actually consider philosophical arguments, we usually don’t keep track of every possible state of the world. Our brains simply can’t handle that much information at once. Similarly, what would happen if we tried to build a truth table for the following argument?

(1)
<br> p
<br> q
<br> ______________
<br> (p & q) V (r & s)

| p | q | r | s | p & q | r & s | (p & q) V (r & s)
| - | - | - | - | ----- | ----- | ---------------- |
| T | T | T | T | | | |
| T | T | T | F | | | |
| T | T | F | T | | | |
| T | T | F | F | | | |
| T | F | T | T | | | |
| T | F | T | F | | | |
| T | F | F | T | | | |
| T | F | F | F | | | |
| F | T | T | T | | | |
| F | T | T | F | | | |
| F | T | F | T | | | |
| F | T | F | F | | | |
| F | F | T | T | | | |
| F | F | T | F | | | |
| F | F | F | T | | | |
| F | F | F | F | | | |

To build a truth table for a proposition with two different variables, you only need four rows. To build one for a proposition with three variables, you need eight rows. And to build one for a proposition with four variables, you need sixteen! As you can see, the number of rows in a truth table is equal to 2 raised to the number of distinct propositional variables. That means that truth tables grow exponentially as you increase the number of distinct variables. So, this clearly isn’t going to work for very complex arguments.

So, although the truth table method is effective for simple arguments, or for analyzing propositions with only a few variables, (i) it doesn’t reflect the way human beings actually reason about logical arguments, and (ii) truth tables become too large and unwieldy if you have more than a few variables. In this unit, we’ll learn about a proof method known as **natural deduction**, which doesn’t have these problems.

### A More Natural Kind of Proof

Rather than abstractly considering every possible state of the world, when we think about logical arguments, a much more *natural* approach is to consider the premises and try to draw out their obvious consequences. When we want to construct a large, complex proof, we will proceed step by step, building a chain of reasoning that starts with the premises and ends with the conclusion. This is much closer to how natural deduction works.

Natural deduction works by identifying basic patterns of good reasoning. One way to think about it is like a game. We will identify a set of basic rules, which are inference patterns that we know for sure are valid forms of reasoning. Then, the goal is to see whether you can move from the premises to the conclusion by applying some combination of these rules. If you can, then you have shown that the argument is valid.

Let’s start by looking at an example of one of the simplest inference rules that we can imagine. Consider the following arguments:

(2)
<br> (1) Alice is tall and Bob is short.
<br> ________
<br> (2) Therefore, Alice is tall.

(3)
<br> (1) Carol is late and Dave is early.
<br> ________
<br> (2) Therefore, Carol is late.

(4)
<br> (1) Alice is not home and Bob is at work.
<br> ________
<br> (2) Therefore, Alice is not home.

(5)
<br> (1) It’s raining and it’s cold out.
<br> ________
<br> (2) Therefore, it’s raining.

As you can see, these arguments all have basically the same form. The first statement, the premise, consists of a conjunction between two statements (*p and q*). Then, the conclusion asserts that one of those statements, or conjuncts, is true (p):

(6)
<br> (1) p & q
<br> ________
<br> (2) p

Is this a valid form of reasoning or not? Well, let’s assume the premise is true. If a conjunction, like *p and q*, is true, then each of the component statements, or conjuncts, (p, and q) must also be true individually. So, whenever you have a conjunction, you know that you can infer from the conjunction either of the conjuncts. In these examples, it is the first conjunct that is the conclusion, but you could just as easily infer the second conjunct:

(7)
<br> (1) Alice is tall and Bob is short.
<br> ________
<br> (2) Therefore, Bob is short.

(8)
<br> (1) Carol is late and Dave is early.
<br> ________
<br> (2) Therefore, Dave is early.

(9)
<br> (1) Alice is not home and Bob is at work.
<br> ________
<br> (2) Therefore, Bob is at work.

(10)
<br> (1) It’s raining and it’s cold out.
<br> ________
<br> (2) Therefore, it’s cold out

(11)
<br> (1) p & q
<br> ________
<br> (2) q

So, we have identified one very basic pattern of valid reasoning: Whenever you have a conjunction in your proof, you can infer that each of the conjuncts is true individually. In other words, the move from *p & q* to p, or from *p & q* to q, is a “legal” move in the game.

Let’s see how we would use this rule to construct a proof. Suppose we wanted to construct a proof for the following argument:

(12)
<br> (1) p & (q & (r & s))
<br> ________
<br> (2) s

According to the rule that we’ve just introduced, whenever we have a conjunction, we can infer each of the conjuncts. Well, our premise (1) just happens to be a conjunction. So, what can we “do” with it? Well, we can add each of the conjuncts (p, the left conjunct, and *q & (r & s)*, the right conjunct), to our proof.

(1) p & (q & (r & s))
<br> (2) p
<br> (3) q & (r & s)
<br> ________
<br> (4) s

Here, we take the information in premise (1), which is a conjunction, and “break it apart” and draw out each of the conjuncts individually. So, if *p & (q & (r & s))* is true, then we can infer p and also *q & (r & s)*.

Great! But, we still haven’t reached our conclusion - s. So, what can we do? Well, we only have one rule so far, so let’s apply it again. This time, we’ll apply the same rule to the sentence that we just added to the proof (3), so we get:


(1) p & (q & (r & s))
<br> (2) p
<br> (3) q & (r & s)
<br> (4) q
<br> (5) r & s
<br> ________
<br> (6) s

Here I’ve applied the conjunction rule (twice, actually) to the statement *q & (r & s)*, first to infer q (line 4), then to infer *r & s* (line 5). So, as you can see, you can apply the rules again and again until you eventually reach your goal. We seem to be a little closer now, but we still only have *r & s*, and we’re trying to prove s. So, we just need to apply the rule one more time to *r & s*:

(1) p & (q & (r & s))
<br> (2) p
<br> (3) q & (r & s)
<br> (4) q
<br> (5) r & s
<br> (6) r
<br> —
<br> (7) s

Here, I’ve applied the very same rule, this time to the statement *r & s*, to infer both r and s. Since s is the statement we were trying to prove, we’re done! We’ve shown that you can move from *p & (q & (r & s))* to s by repeatedly applying a very basic rule of inference that we know is definitely valid. Since we’ve shown that you can create a valid chain of reasoning that starts with the premises and ends with the conclusion, and only performs basic inferences that are clearly valid, we’ve proven that you can infer s from *p & (q & (r & s))*, i.e., that argument (12) is valid.

That’s the basic idea behind natural deduction proofs. Here, we’ve constructed a proof using just one inference rule. In the rest of the unit, we’ll learn a bunch of other simple rules, but the basic strategy will be just like what we’ve done here.

Notice that unlike the truth table method, which is entirely mechanical, natural deduction proofs are *constructive* proofs - they require some creative input on your part. There is no automatic mechanism to tell you *how* to get from the premises to the conclusion, or what sequence of rules you need to apply, so it’s a bit more like solving a puzzle that requires creative problem-solving.

### Notation For Natural Deduction Proofs

It’s important to use the right notation when constructing natural deduction proofs. If the goal is to construct a valid chain of reasoning from the premises to the conclusion, you need to be very clear about how you are getting from one line to the next. So, in addition to writing the statements down in order, like we did in the previous section, we will also want to make note of (i) which rule is being applied, and (ii) which statement(s) it is being applied to.

In order to make this easier, each of the basic inference rules will be given a name, so that when we apply that rule, we can refer to it in the notation. Consider the conjunction rule that we have been applying:

p & q
<br> ________
<br> p

In formal notation, this rule is known as **Simplification** - essentially, you can think of it as taking a complex statement (a conjunction) and *simplifying* it (reducing it to one of its conjuncts).

**Simplification**

p & q
<br> ________
<br> p

p & q
<br> ________
<br> q

(Although these are *technically* distinct “moves,” we will refer to them both as “Simplification,” i.e., it doesn’t matter if you are deriving the first conjunct or the second.)

Now, when we are building our proof, we will refer to this rule each time it is applied. The following is a complete proof from the premise *p & (q & (r & s))* to the conclusion s:

| Proposition | Justification |
| - | - |
| (1) p & (q & (r & s))			| Premise
| (2) p					| Simplification (1)
| (3) q & (r & s)				| Simplification (1)
| (4) q					| Simplification (3)
| (5) r & s					| Simplification (3)
| (6) r					| Simplification (5)
| (7) s					| Simplification (5)

So, a proof has two columns - on the left-hand side, you write the statements that make up the proof, and on the right-hand side you write down the inference rule that you used to derive that sentence, and which previous sentence(s) in the proof you are referring to when you use the rule. (If the statement is actually one of the *premises* of the argument, you can simply write “Premise.”) This allows the reader to follow the chain of reasoning and make sure that each move is a valid one. For instance, the proof above shows that line 5 (r & s) was derived from line 3 (q & (r & s)) using the Simplification rule.

It’s worth noting that this proof is a little bit inefficient - some of the inferences that are made don’t really help me get to the conclusion. For instance, on line 2, I infer p from *p & (q & (r & s))*. But I don’t actually “do” anything with p after that line; I don’t use the information in line 2 anywhere else in the proof (as you can easily tell with our notation, since no line later on refers to it). That means we could have done without it. In general, with natural deduction, you will often be able to apply the rules in ways that are “legal” but don’t really help you get to your conclusion. This can definitely be helpful when exploring solutions, and it doesn’t actually result in an *incorrect* proof, but it’s best to leave those kinds of moves out when we are constructing proofs. So, here is the same proof again, but with only the “essential” lines:

| Proposition | Justification |
| - | - |
| (1) p & (q & (r & s))			| Premise
| (2) q & (r & s)				| Simplification (1)
| (3) r & s					| Simplification (2)
| (4) s					| Simplification (3)

Now, it’s nice and clear that we are repeatedly simplifying the complex conjunction in the premise (1) until we reach the conclusion, and each step actually brings us closer to the goal. Notice, of course, that you can only apply Simplification once per line. E.g., I can’t go from line 1 to line 3 directly using one application of Simplification (1), because that would be skipping a move.

So, that’s the basic idea behind natural deduction. The real trick is learning all of the rules that are available to us, and coming up with strategies that make it easier to construct correct proofs.

### Key Concepts
* Natural deduction
* Natural deduction rules
