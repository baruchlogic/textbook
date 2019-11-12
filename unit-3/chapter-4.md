# 4. Advanced Proof Techniques

## (i) Indirect Proof

Now that we’ve mastered all the rules for natural deduction that we’re going to cover, let’s see how we can use them to prove whether a statement is a tautology, also known as a logical truth. Recall that a tautology is a statement that is true in every possible set of circumstances. Tautologies are important because they are special statements that are guaranteed to be true no matter what.

For instance, consider a proposition like p V ~p, “Either it’s raining or it’s not raining.” This statement is a tautology - it’s always true, true no matter what. At any given time, at any place, it either *is* raining or it’s *not* raining.

(In fact, you might think that there are some “in-between” states where it’s not clear whether it’s raining or not. As mentioned previously, we ignore these vagaries in our discussion of classical propositional logic, and we assume that every proposition is either true or false.)

We’ve seen already how to use natural deduction inference rules to show whether an argument is valid or not - you have to provide a proof from the premises to the conclusion. But how can we show whether a statement is a tautology? A tautology is not an an argument with premises and conclusion - in a way, we can think of it as  just a conclusion, with no premises. If you can prove that statement/conclusion without using any premises, then clearly that statement must be true no matter what.

Since a tautology is a statement that is true in every possible circumstances, then the negation of a tautology would be a statement that is true in *no* possible circumstances (all rows in the truth table would flip from “T” to “F”). In other words, negating a logical truth yields a situation that is *impossible*. But what is an “impossible” situation? Well, any possible combination of truth values for the atomic variables of a proposition represents a possible situation. Every variable, or state of affairs, is assigned either True or False. What would be *impossible* would be if a certain proposition, say p, were assigned *both* True and False! Consider the sentence “It’s raining and it’s not raining.” That does not describe a possible state of affairs - it has to be one or the other, and not both. Whenever we have a situation where we have asserted a proposition and also its negation, then we have derived a **contradiction**.

If we are able to derive a contradiction in our proof, that is, if we are able to infer on two separate lines both p (or any proposition) and its negation, then we know that we have started with a proposition that entails a contradiction.

So, putting this all together: we know how to identify a contradiction - we apply our inference rules and try to infer two lines that are the negation of one another. We also know that the negation of a tautology is a contradiction (or a statement that is always false). So, if we want to know whether a statement is a tautology, (1) we start by asserting its *negation* as a premise (which, by hypothesis, should be a contradiction), and then (2) we apply our inference rules to try to derive a direct contradiction (i.e., two lines that are the direct negation of each other).

Let’s see how this works in practice. Suppose we want to prove that the following is a tautology:

(Z) p → ((p → q) → q)

**Proof (begin by asserting the negation of Z):**

| Proposition | Justification |
| - | - |
| (1) ~(p → ((p → q) → q))		| Assumption
| (2) ~(~p V ((p → q) → q))		| Material Implication (1)
| (3) ~~p & ~((p → q) → q)		| DeMorgan's Law (2)
| (4) p & ~((p → q) → q)	   	| Double Negation (3)
| (5) p	   	| Simplification (4)
| (6) ~((p → q) → q)	   	| Simplification (4)
| (7) ~(~(p → q) V q)	   	| Material Implication (6)
| (8) ~~(p → q) & ~q	   	| DeMorgan's Law (7)
| (9) ~~(p → q)	   	| Simplification (8)
| (10) p → q	   	| Double Negation (9)
| (11) ~q	   	| Simplification (8)
| (12) ~p	   	| Modus Tollens (10, 11)
| (13) p & ~p	   	| Conjunction (5, 12)
| (14) ~~(p → ((p → q) → q))	   	| Indirect Proof (1, 13)
| (15) p → ((p → q) → q)	   	| Double Negation (14)

Study this proof carefully to follow the reasoning. Note that we begin by assuming the negation of the statement we are trying to prove (Z). Then we apply a series of rules to derive p on line 5, and then apply more inference rules to derive ~p on line 12. Now, we have found a contradiction, so we combine them on line 13 using Conjunction. This is a directly contradictory statement. Now that we have proven a contradiction, we can infer the *negation of line 1* via Indirect Proof (citing also the line containing the contradiction). To be clear: when you prove a contradiction, you have proven *the negation of the premises or assumptions you started with*. So, line 14 is the negation of line 1. Then, we simply eliminate the leading double negation, and we have proven (Z) by showing that the negation of (Z) is inconsistent.

This method is known as **indirect proof** because we are proving a statement *indirectly*, by showing that its negation leads to contradiction.

## (ii) Arguments

We have seen how to use indirect proof to judge whether a statement is a tautology. This method can also be used to judge whether an argument is valid. How would we do this? Let’s recall what a valid argument is. If an argument is valid, then we are guaranteed that if the premises are true, then the conclusion is definitely true. That is, if an argument is valid, it’s *impossible* for the premises to be true and the conclusion false. So, we can once again use indirect proof to test whether such a situation is impossible. That is, to apply indirect proof to judge whether an argument is valid, we (1) assert all the premises and assume the negation of the conclusion, and then (2) we use the inference rules to try to derive a contradiction. If we find a contradiction, then we know the combination of the premises and the *negation* of the conclusion is impossible, and therefore that the premises guarantee that the conclusion is true; in other words, we know the argument is valid.

Let’s see this in action.

### Proof

p
<br> (p V ~q) → ~(p V r)
<br> ________
<br> ~r

| Proposition | Justification |
| - | - |
| (1) p		| Premise
| (2) (p V ~q) → ~(p V r)		| Premise
| (3) ~~r		| Assumption (Note: We add the negation of the conclusion)
| (4) p V ~q		| Addition (1)
| (5) ~(p V r)		| Modus Ponens (2, 4)
| (6) ~p & ~r		| DeMorgan's Law (5)
| (7) ~r		| Simplification (6)
| (8) ~r & ~~r		| Conjunction (7, 8)
| (9) ~r		| Indirect Proof (3, 9)

Here, we start with the premises of our proof; then, we make an additional assumption (~~r), which is the negation of the conclusion that we want to reach (~r). Then we apply some more rules until we have derived a contradiction: r & ~r. Since we were able to derive a contradiction, we know that the combination of the premises and the negation of the conclusion is contradictory, and hence the argument is valid.

## (iii) Within Arguments

The method of indirect proof can also be used *within* the course of a proof. If you’re in the middle of a proof, you can start a “branch” of that proof by making a new assumption, say p. Unlike other lines in the proof, which have to be justified based on one of the inference rules, making a new assumption does not have to be justified. Like a premise, it’s just asserted. However, since it’s not one of the original premises of the argument, it can’t directly be used to derive the conclusion. However, if you’re able to derive a *contradiction* after making that new assumption, that means that p is not possible relative to the premises of the argument, so we can add ~p to the proof. Let’s look at an example. In this case, we will introduce a more explicit notation for indirect proof. Whenever you make an additional assumption, we will indent the propositions, to indicate that we are on a separate “branch” of the argument.

### Proof

r → ~p
<br> r
<br> p V q
<br> ________
<br> q V s

| Proposition | Justification |
| - | - |
| (1) r → ~p		| Premise
| (2) r		| Premise
| (3) p V q		| Premise
| (4) ~p		| Modus Ponens (1, 2)
| (5) &nbsp; &nbsp; &nbsp; &nbsp; ~q		| Assumption
| (6) &nbsp; &nbsp; &nbsp; &nbsp; p		| Disjunctive Syllogism (3, 5)
| (7) &nbsp; &nbsp; &nbsp; &nbsp; p & ~p		| Conjunction (4, 6)
| (8) q		| Indirect Proof (5, 7)
| (9) q	V s	| Addition (9)

This proof is a little silly, because a clever proof-solver would directly infer q from lines (3 and 4) using Disjunctive Syllogism. But here we illustrate a more roundabout technique. On line 5, we simply *assume* ~q to be true (notice that no lines are cited, as there is no justification for an assumption). Now, until we have applied Indirect Proof, everything that we infer can only be assumed to be true given ~q. Hence, we indent these lines. On line 7, we have derived a direct contradiction. Then, on line 8, we “break out” of the branch that we started by assuming ~q, and since we found a contradiction after making that assumption, we know that that assumption must be false, hence we infer the negation of line 5. Eventually, we reach our goal of q V s.

## (iii) Conditional Proof

Consider the following proof:

p
<br> (p & q)	→ r
<br> ________
<br> q → r

It’s possible to solve this proof using the rules that we have covered already. For instance, here is an example:

| Proposition | Justification |
| - | - |
| (1) p		| Premise
| (2) (p & q)	→ r	| Premise
| (3) p → (q → r)	| Exportation (2)
| (4) q → r	| Modus Ponens (1, 3)

That’s a relatively simple proof. But let’s think through the argument intuitively. In line 1, we’re told that p is the case. Then, in line 2, we’re told that *if* p and q are *both* true, then r is true. Now, we only know p for sure, so we can’t infer r. But we know if that if q *were* true, then r would be true as well (since p & q would be true). So, in that sense, q implies r.

There is another technique of natural deduction proof that we can use to model this kind of thinking. It is known as **conditional proof**. As in indirect proof, in conditional proof, we add an additional assumption to the proof. But rather than deriving a contradiction in order to refute that assumption, we use it to derive a conditional: if the assumption (whatever it is) is true, *then* some other statement is true.

Let’s look at another solution to the above proof, this time using conditional proof:

| Proposition | Justification |
| - | - |
| (1) p		| Premise
| (2) (p & q)	→ r	| Premise
| (3) &nbsp; &nbsp; q	| Assumption
| (4) &nbsp; &nbsp; p & q	| Conjunction (1, 3)
| (5) &nbsp; &nbsp; r	| Modus Ponens (2, 4)
| (6) q → r	| Conditional Proof (3, 5)

Observe that on line 3, we make a new assumption, and again visually indicate this by starting a new “branch.” Now, we are allowed to use q in the proof, but everything we derive will be dependent on q. In two steps, we reach r on line 5. So, what does this mean? It means *if* we assume q to be true, *then* we can derive r. In other words, to put it in symbols, p -> r.

So, conditional proof is very powerful. If you are trying to derive a conditional statement, you can make an assumption declaring the antecedent to be true, and then see if you can derive the consequent with that new information. If you can, then you know that the antecedent implies the consequent. Moving off of the branch as we go from line 5 to line 6 is also known as “discharging” the assumption. You must discharge any new assumptions (i.e., not part of the stated premises) that you add to your proof before reaching the final conclusion. That’s because with conditional proof, we’re not necessarily proving something to be positively true - we’re showing that something is true *conditionally*. Then, we have to discharge that assumption by deriving a conditional statement.

Let’s look at one more example:

### Proof

(p & q) → r
<br> ~p V s
<br> s → q
<br> ________
<br> r

| Proposition | Justification |
| - | - |
| (1) (p -> q) → r		| Premise
| (2) ~p V s  	| Premise
| (3) s → q  	| Premise
| (4) &nbsp; &nbsp; &nbsp; &nbsp; p  	| Assumption
| (5) &nbsp; &nbsp; &nbsp; &nbsp; s  	| Disjunctive Syllogism (2, 4)
| (6) &nbsp; &nbsp; &nbsp; &nbsp; q  	| Modus Ponens (3, 5)
| (7) p → q  	| Conditional Proof (4, 6)
| (8) r  	| Modus Ponens (1, 7)

In this proof, we assume p in line 4, then use that information to derive q, and then discharge our assumption p in line 7, which allows us to reach the conclusion.
