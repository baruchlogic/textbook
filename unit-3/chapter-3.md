# 2. Rules for Natural Deduction: Rules of Replacement

In this chapter, we will introduce some of the basic rules for natural deduction proofs.

## 9. Double Negation

~~p
<br> ________
<br> p

p
<br> ________
<br> ~~p

Double negation is one of the simplest inference rules in our toolkit. It simply relies on the fact that two negatives “cancel each other out.” Think about it this way: Suppose p is true. Negation reverses the value of its argument. So, therefore, if p is true, ~p is false. Then, if we apply negation again, we simply reverse the value of ~p, so the value of ~~p is true, just like that. Since negation reverses the truth value from true to false, or from false to true, if we apply it twice in a row, then we always end up with the same value as we started with. Therefore, ~~p is equivalent to p. (Similarly, p is always going to have the same truth value as ~~p.)

(One thing to note: In English, when we use double negation, we usually try to imply something more than the non-negated statement. For instance, if someone asks, “Is Bob a good singer?” and someone else replies, “Well, he’s not *not* a good singer,” then they are not exactly saying that Bob *is* a good singer, but they’re not denying it either - perhaps they’re trying to imply that Bob is a borderline case of a good singer. Either way, this is a matter of the pragmatics of natural language. In propositional logic, we simply assume that two negations cancel each other out.)

### Example Proof

~~p & ~~q
<br> ________
<br> p & q

| Proposition | Justification |
| - | - |
| (1) ~~p & ~~q			| Premise
| (2) ~~p			| Simplification (1)
| (3) ~~q     | Simplification (1)
| (4) p       | Double Negation (2)
| (5) q       | Double Negation (3)
| (6) p & q   | Conjunction (4, 5)

In this proof, we first use Simplification to infer each of the conjuncts of the premise independently (lines 2 and 3). Then, since these are both propositions that have two negations in a row, we use Double Negation to reduce them to p and q independently. Finally, we combine p and q with Conjunction to get p & q. (*Can you think of a shorter proof for this argument?*)

One important thing to note is that Double Negation only works if there are two negations *in a row* and the inner one is not nested within a more complex statement. For instance, consider:

**Not a valid proof!**

| Proposition | Justification |
| - | - |
| (1) ~(~p & q)		| Premise
| (2) p & q		| Double Negation (1)

In this example, I try to use Double Negation to cancel out the two negation symbols at the start of the formula. But this is illegal because the inner negation is actually nested inside of a conjunction: ~p & q. Usually, we suppress parentheses when using negation, but if we were more explicit, this would be clear:
<br>~((~p) & q)
<br>Here, you can see that the not is actually nested inside of (~p) & q, so we can’t apply Double Negation in that way.

## Rules of Replacement

One important thing to note about the rules we have previously covered (Rules 1-8) is that they are only application to *entire formulas*. For instance, the following is *not* O.K.:

| Proposition | Justification |
| - | - |
| (1) (p & q) → r		| Premise
| (2) p → r		| Simplification (1)

In this case, I try to directly apply Simplification to p & q in Line 1 to get p, and so I try to convert (p & q) → r to just p → r. This does not work. Line 1 is a conditional, and the main operator is the →. So, I cannot apply Simplification because the conjunction is only a subformula.

Intuitively, this is the desired result. For consider the following argument statement:

(1) If it's nice out and I don't have too much work, I'll go to the picnic.

This has the form (p & q) → r. If it were legal to apply Simplification to subformulas, then we could derive p → r, as in the *bad* proof above. So, we would be able to derive:

(2) If it's nice out, I'll go to the picnic.

But you can't infer (2) from (1). Just because it's nice out doesn't mean the speaker will go to the picnic - what if she has too much work to do? So, the fact that you can't infer (2) from (1) is an illustration of the fact that you can't apply Simplification to subformulas.

Another important observation is that they can only be applied one direction, that is, from the top line(s) to the bottom line. I cannot use Simplification like so (reversing the lines from a previous proof):

**Not a valid proof!**

| Proposition | Justification |
| - | - |
| (1) p & q		| Premise
| (2) (p & q) & r		| Simplification (1)

These rules are known as **Rules of Implication**. Rules 1 - 8 are all Rules of Implication:

* Can be applied only to whole formulas (not subformulas).
* Can only be applied in the direction indicated in the rule definition.

What about Double Negation? Let’s consider the following argument:

(1) ~~p V q
<br> (2) (p V q) → r
<br> ________
<br> (3) r

In this example, line 1 is very similar to the antecedent of line 2, but they’re not quite the same. If they *were* the same, then we could use Modus Ponens to derive r in line 3.

As it turns out, unlike the previous rules of implication, Double Negation is a rule that we *can* apply to subformulas. So, the following is a valid proof:

| Proposition | Justification |
| - | - |
| (1) ~~p V q		| Premise
| (2) (p V q)	→ r 	| Premise
| (3) p V q         | Double Negation (1)
| (4) r          | Modus Ponens (2, 3)

Pay attention to line 3. In this line, we apply Double Negation to convert ~~p to p, but we do so within the disjunction ~~p V q. This is a known as a **Rule of Replacement**.

How come this is a legal move? Well, unlike the inference from p & q to p, which only goes in “one direction” (i.e., you can’t go from p to p & q), Double Negation works in “both directions,” as you can see in the rule definition. I can go from p to ~~p, and from ~~p to p. This means that p and ~~p are **equivalent**. If two statements are equivalent, then you can interchange them whenever they occur, even in subformulas.

In the rest of the chapter, we will look at more rules of replacement.

## 10. Commutativity

p & q
<br> ________
<br> q & p

p V q
<br> ________
<br> q V p

This rule is reminiscent of mathematics. Recall that with addition, 7 + 5 is the same as 5 + 7. That means that addition is *commutative* (you can move, or “commute,” the arguments around). The same is true for disjunctions and conjunctions. Order does not matter when it comes to disjunctions and conjunctions. If p & q is true, then obviously q & p is also true, because in both cases, both conjuncts must be true. The same argument applies to disjunction. If p V q is true, then q V p must also be true, since in both cases, at least one of p or q is guaranteed to be true.

Notice, also, that this rule can be applied in “either direction” (i.e., it is a rule of replacement). I can infer p & q from q & p and I can infer q & p from p & q.

### Example Proof

p → (p & (q V r))
<br> p
<br> ________
<br> (q V r) & p

| Proposition | Justification |
| - | - |
| (1) p → (p & (q V r))		| Premise
| (2) p		| Premise
| (3) p & (q V r)		| Modus Ponens (1, 2)
| (4) (q V r) & p   | Commutativity (3)

## 11. Associativity

p & (q & r)
<br> ________
<br> (p & q) & r

(p V q) V r
<br> ________
<br> p V (q V r)

Associativity is another term you may recall from mathematics. Associativity applies when there are two operations, and it doesn’t matter in which order you apply them. For instance, consider multiplication: 2 x (3 x 5) = (2  x 3) x 5. In both cases, if we simplify, we get: 2 x 15 = 6 x 5 = 30. So, when you have a multiplication inside a multiplication, you can switch the order and you will get the same result.

The same is true of conjunction and disjunction. They too have the property of associativity. If I have a conjunction inside a conjunction, like p & (q & r), then I can move the parentheses around, and it’s equivalent to (p & q) & r. This is another rule of replacement, so it also would apply to subformulas as in:

(p & (q & r)) V s
<br> ________
<br> ((p & q) & r) V s

Here, (p & (q & r)) is actually a disjunct of the main formula, but I can still apply Associativity.

One crucial thing to note is this rule does *not* apply to a *conjunction* inside a *disjunction*, and vice versa. In other words, if I have a conjunction inside a disjunction, I *cannot* move the parentheses around:

**Not a valid proof!**

| Proposition | Justification |
| - | - |
| (1) p & (q V r)		| Premise
| (2) (p & q) V r		| Associativity (1)

There is another rule for these types of situations, but remember that Associativity only works for two of the *same operator* in a row.

### Example Proof

(p V r) V s
<br> ~p
<br> ________
<br> r V s

| Proposition | Justification |
| - | - |
| (1) (p V r) V s		| Premise
| (2) ~p		| Premise
| (3) p V (r V s)		| Associativity (1)
| (4) r V s		| Disjunctive Syllogism (2, 3)

## 12. DeMorgan's Law

~(p & q)
<br> ________
<br> ~p V ~q

~(p V q)
<br> ________
<br> ~p & ~q

DeMorgan’s Law (or laws) is a very important rule in logic. At first glance, we have a negation surrounding a conjunction (or a disjunction), and then it looks like we “distribute” the negation across the arguments of the conjunction/disjunction. So, p becomes ~p and q becomes ~q. However, the crucial thing to note is we *also* have to change the operator, so a conjunction (&) becomes a disjunction (V), and vice versa.

You can kind of think of this rule as analogous to distributing a negation in arithmetic. For instance, if I have a formula like -(3 + 5), then that’s equivalent to (-3 + -5) = -8. So, in this case, I distribute the negation across the addition. DeMorgan’s Law is kind of like that, but we also have to remember to change the operator.

If you want an even better mathematical analogy, think of how we manipulate inequalities. Suppose I have an inequality like 3n > n + 1. Now, if I multiply both sides by -1, I also have to “flip,” or reverse the inequality sign. So, we would get: -(3n) < -(n + 1), or: -3n < -n - 1. In this case, we distribute the negation on both sides of the inequality operator, and we reverse the operator itself. This is akin to how with DeMorgan’s Law, we distribute the negation to the arguments and change the operator from V to &, or vice versa.

Hopefully, you can also grasp this rule intuitively, as well. Suppose we interpret ~(p & q) as, “It’s not true that I ate an appetizer and that I ate dessert.” The person is saying it’s not true that *both* of those things happened (notice, however, they’re not saying that *neither* of them happened) - so, that means that at least one of them *didn’t* happen. Either the person did not eat an appetizer or they did not eat dessert - or, perhaps they ate neither, but all we know for sure is that *at least* one of “I ate an appetizer” (p) and “I ate dessert” (q) is false. In other words, we can infer ~p V ~q from ~(p & q). (Note, also, that this rule, or move, can work in either direction - we can also infer ~(p V q) from ~p & ~q.)

Similarly, consider a sentence like ~(p V q), such as, “It’s false that I went to that building or ever spoke to that person.” If a speaker says this, then they are denying *both* that they went to the building, *and* that they spoke to the person. So, they are claiming ~p **and** ~q. If you deny a disjunction, then you are asserting the denial of both of the conjunctions, which is why ~(p V q) is equivalent to ~p & ~q.

Study the following proof carefully. It demonstrates a nice interplay between Addition and DeMorgan’s Law, and illustrates two applications of DeMorgan’s Law.

### Example Proof

~(p V q) V (p & q)
<br> ~p
<br> ________
<br> ~q

| Proposition | Justification |
| - | - |
| (1) ~(p V q) V (p & q)		| Premise
| (2) ~p		| Premise
| (3) ~p V ~q		| Addition (2)
| (4) ~(p & q)		| DeMorgan's Law (3)
| (5) ~(p V q)		| Disjunctive Syllogism (1, 4)
| (6) ~p & ~q		| DeMorgan's Law (5)
| (7) ~q		| Simplification (6)

## 13. Distribution

p & (q V r)
<br> ________
<br> (p & q) V (p & r)

p V (q & r)
<br> ________
<br>(p V q) & (p V r)

Recall that one of our previous rules, Associativity, allowed us to manipulate formulas with two conjunctions (or disjunctions) “in a row.” However, the rule does *not* apply to a mixture of a conjunction and a disjunction, as in p & (q V r). In these cases, we again do something sort of like distribution in mathematics. In the left-hand side case, we have a disjunction inside a conjunction, so we distribute the conjunction across the arguments of the disjunction, and then combine the two results with a disjunction. On the right-hand side, we do the same thing, but with conjunction and disjunction signs switched.

Think of how we distribute multiplication across an addition statement, e.g.: 3 x (4 + 5). This is equivalent to 3 x (9) = 27. But, we could also distribute the multiplication sign first, as in: 3 x (4 + 5) = (3 x 4) + (3 x 5) = 12 + 15 = 27. The same pattern applies when we distribute a conjunction across a disjunction, or a disjunction across a conjunction.

This rule can also be grasped intuitively. Consider the left-hand side. If we have p & (q V r), then we know for sure that p is true, and we know that either q or r is true. So, there’s two possibilities: Either p *and* q are true together, or p *and* r are true together. We don’t know which one, so we form a disjunction between those two possibilities, i.e., (p & q) V (p & r).

### Example Proof

p
<br> q
<br> ________
<br> (p & q) V (p & r)

| Proposition | Justification |
| - | - |
| (1) p		| Premise
| (2) q		| Premise
| (3) q V r		| Addition (2)
| (4) p & (q V r)		| Conjunction (1, 3)
| (5) (p & q) V (p & r)		| Distribution (4)

## 14. Transposition

p → q
<br> ________
<br> ~q → ~p

Transposition can be a very handy rule, and should be easy to grasp by now. When we apply Transposition to a conditional, we (i) reverse the order of the arguments; and, (ii) negate both sides. Note that ~q → ~p is also known as the **contrapositive** of p → q.

Why is this move allowed? Well, think about a rule we’ve already covered, Modus Tollens:

p → q
<br> ~q
<br> ________
<br> ~p

Modus Tollens tells us that if we have a conditional, and we also can infer the negation of the consequent of the conditional, then we can infer the negation of the antecedent. Transposition relies on this same fact. We start with a conditional (p → q). And then we reason that if we had the negation of the consequent (~q), *then* we could guarantee the negation of the antecedent (~q). So, whereas Modus Tollens takes a conditional *and* the negation of the consequent, with Transposition, we turn one conditional into another by saying if the consequent is false (which we don’t know yet), then the antecedent is false as well.

### Example Proof

(~r → ~p) → (r → s)
<br> p → q
<br> q → r
<br> ________
<br> p → s

| Proposition | Justification |
| - | - |
| (1) (~r → ~p) → (r → s)		| Premise
| (2) p → q		| Premise
| (3) q → r		| Premise
| (4) p → r		| Hypothetical Syllogism (2, 3)
| (5) ~r → ~p		| Transposition (4)
| (6) r → s		| Modus Ponens (1, 5)
| (7) p → s		| Hypothetical Syllogism (4, 6)

## 15. Exportation

(p & q) → r
<br> ________
<br> p → (q → r)

This rule can be a bit tricky to remember, and it might look a little strange at first. Actually, however, we can try to make it very intuitive. Consider the top line - this asserts that *if* p and q are true, then r will be true. So, if p and q are both true, then r is true. Now, let’s look at the second line. What if we start with just p? If just p is true, then we can’t infer r, because we are told that p and q *together* imply r in line 1. However, we can reason as follows: *if* p is true, *then if* q is true as well, then we know r is true. So, in a way, we take the conjunction p & q and break it down into pieces - first, *if* we get p, then we are halfway there towards p & q, so *if* we get p, then *if* we also get q, we will get r. Symbolically: p → (q → r).

### Example Proof

~p
<br> q
<br> ~p → (q → (r V p))
<br> ________
<br> r

| Proposition | Justification |
| - | - |
| (1) ~p		| Premise
| (2) q		| Premise
| (3) ~p → (q → (r V p))		| Premise
| (4) ~p & q		| Conjunction (1, 2)
| (5) (~p & q) -> (r V p)		| Exportation (3)
| (6) r V p		| Modus Ponens (4, 5)
| (7) r		| Disjunctive Syllogism (1, 6)

## 16. Tautology

p V p
<br> ________
<br> p

Tautology is a rule that perhaps does not come up as frequently as some other rules, since it’s unusual to find yourself with a line of the proof with the form p V p. However, if it does arise, the intuition behind this inference rule should be clear. Normally, if we have a disjunction, like p V q, we can’t simply eliminate one of the disjuncts and infer p or infer q - that’s because we don’t know which of the two is true! But what if the disjunction is of the form p V p? Well, let’s consider both “possibilities.” If the left hand side happens to be true, then p is true. If the right-hand side is true, then p is also true. We know that at least one of the sides has to be true, and in either case we know p is true, so therefore we can directly infer p from p V p.

### Example Proof

(~~p → q) V (~q → ~p)
<br> ________
<br> p → q

| Proposition | Justification |
| - | - |
| (1) (~~p → q) V (~q → ~p)		| Premise
| (2) (p → q) V (~q → ~p)		| Double Negation (1)
| (3) (p → q) V (p → q)		| Transposition (2)
| (4) p → q		| Tautology (3)

## 17. Material Implication

p → q
<br> ________
<br> ~p V q

Material Implication, or Material Conditional, is another essential rule in logic. It shows us that there is a fundamental equivalence between a conditional and a disjunction. But how are these two related? Why are they equivalent?

One way to understand the equivalence is to construct a proof using rules we’ve learned already. Think about what p → q means. Recall that a conditional is only false when the antecedent is true and the conditional is false. So to assert p → q is to assert that it’s *not* the case that p & ~q (since that would make the conditional false). So, intuitively, we can think of p → q as equivalent to ~(p & ~q). Then, we can show how to reach ~p V q:

| Proposition | Justification |
| - | - |
| (1) ~(p & ~q)		| Premise
| (2) ~p V ~~q		| DeMorgan's Law (1)
| (3) ~p V q		| Double Negation (2)

So, if we think of a conditional in this way, we can see why p → q is equivalent to ~p V q.

Here’s another way to think about it. Recall that a conditional is true whenever its antecedent is false. So, let’s take p → q. Well, p could either be true or false. If p is false, then the conditional is true, so we’re all good. But if p is *true*, then for the conditional to be true, q has to be true. So, *either* p is false, *or* p is true and q is also true. That is, either ~p or p & q, which reduces to ~p V q, as shown here:

| Proposition | Justification |
| - | - |
| (1) ~p V (p & q)		| Premise
| (2) (~p V p) & (~p V q)		| Distribution (1)
| (3) ~p V q		| Simplification (2)

The fact that a conditional can be converted to a disjunction (and vice versa) can be a very useful tactic in many proofs.

### Example Proof

p V q
<br> (~p → q) → (r & s)
<br> ________
<br> s & r

| Proposition | Justification |
| - | - |
| (1) p V q		| Premise
| (2) (~p → q) → (r & s)		| Premise
| (3) ~p → q		| Material Implication (1)
| (4) r & s		| Modus Ponens (2, 3)
| (5) s & r		| Commutativity (4)

Note that we can't move *directly* from line 3 to line 5. That is, when we apply Modus Ponens using lines 2 and 3, we can derive the consequent of line 2 - r & s - but, we have to keep the order of the consequent the same. We can't, in the same move, switch r & s to s & r. So, to be precise, we *first* derive r & s, and then we can independently apply Commutativity to derive s & r (line 5). Make sure not to skip steps in your proof, or combine multiple moves into one, even if it seems really obvious.

## 18. Material Equivalence

p ↔ q
<br> ________
<br> (p → q) & (q → p)

p ↔ q
<br> ________
<br> (p & q) V (~p & ~q)

Looking at the left-hand side, this rule is about taking a biconditional and breaking it up into a conjunction of two conditionals. It essentially formalizes the meaning of the biconditional itself. A biconditional like p ↔ q is equivalent to p → q and q → p. (In fact, using the “arrow” notation for conditionals and biconditionals makes this obvious, since we see the arrow pointing from p to q, and also from q back to p.) So, a biconditional is equivalent to a conjunction of conditionals from each side to the other.

Now, let’s look at the right-hand side. This looks very different, but again, it closely mirrors the basic definition of the biconditional. Thinking about the truth table for a biconditional, recall that the key requirement for a biconditional to be true is that both sides have the *same value* (i.e., both true, or both false). So, a biconditional like p ↔ q is equivalent to saying *either* p and q are both true (p & q), or p and q are both false (~p & ~q). Putting those together with a disjunction, we get (p & q) V (~p & ~q).

### Example Proof

(p → q) ↔ (r → s)
<br> ~p
<br> ~s
<br> ________
<br> ~r

| Proposition | Justification |
| - | - |
| (1) (p → q) ↔ (r → s)		| Premise
| (2) ~p		| Premise
| (3) ~s		| Premise
| (4) ~p V q		| Addition (2)
| (5) p → q		| Material Implication (4)
| (6)  ((p → q) → (r -> s)) & ((r → s) -> (p → q))		| Material Equivalence (1)
| (7)  (p → q) → (r -> s)		| Simplification (6)
| (8)  r -> s		| Modus Ponens (5, 7)
| (9)  ~r		| Modus Tollens (3, 8)
