# 2. Rules for Natural Deduction: Rules of Implication

In this chapter, we will introduce some of the basic rules for natural deduction proofs.

## 1. Simplification

p & q
<br> ________
<br> p

p & q
<br> ________
<br> q

As we’ve already discussed, simplification is just a matter of reducing a conjunction to one of its conjuncts. Since a true conjunction requires each one of the conjuncts, or component statements, to be true, whenever you have a conjunction in your proof, you know that each side of the conjunction must be true individually.

### Example Proof:

p & (q & (r & s))
<br> ________
<br> q

| Proposition | Justification |
| - | - |
| (1) p & (q & (r & s))			| Premise
| (2) q & (r & s)				| Simplification (1)
| (3) q					| Simplification (2)

## 2. Conjunction

p
<br> q
<br> ________
<br> p & q

Conjunction is kind of the opposite of Simplification. The most basic fact about a conjunction is that a conjunction is true whenever each of its conjuncts are true. So, the rule of Conjunction states that if you have a proof that asserts two statements, e.g., p, and q, on separate lines, then you can infer the conjunction of those statements as well, i.e., p & q.

Note that whereas Simplification is a rule that only needs to cite one previous line, Conjunction involves “gluing” together two individual statements into one conjunction - so, it requires you to refer to two previous lines in the proof.

### Example Proof:

p & q
<br> r
<br> ________
<br> p & r

| Proposition | Justification |
| - | - |
| (1) p & q			| Premise
| (2) r				| Premise
| (3) p					| Simplification (1)
| (4) p & r 			| Conjunction (2, 3)

The proof above uses both Simplification and Conjunction to reach the conclusion. First, Simplification is applied to line 1, and we extract the left-hand conjunct. Then, since we now have both p and r asserted independently in the proof (lines 2 and 3), we can combine them into p & r using Conjunction (line 4).

## Modus Ponens

p → q
<br> p
<br> ________
<br> q

Modus Ponens is one of the most important rules of inference, since it captures the essence of the conditional, or implication. What do we know about a conditional? If a conditional is true, like p -> q, we still don’t know whether p is true or whether q is true. But since it’s a conditional, we know that *if* p is true, *then* q is true as well. So, with Modus Ponens, if we have a conditional somewhere in our proof, and we *also* have asserted the *antecedent* (left-hand side) of the conditional independently, then we know that the *consequent* (right-hand side) of the conditional must be true as well. If the conditional is true, then one thing we know *isn’t* the case is that the antecedent is true and the consequent false. So, once we have asserted the antecedent, we can go ahead and assert the consequent as well.

### Example Proof

p → (q & r)
<br> p
<br> ________
<br> r

| Proposition | Justification |
| - | - |
| (1) p → (q & r)			| Premise
| (2) p     | Premise
| (3) q & r       | Modus Ponens (1, 2)
| (4) r       | Simplification (3)

In this proof, we use Modus Ponens to combine the conditional (line 1), and the antecedent of the conditional (line 2), and we derive the consequent (line 3). Then we apply Simplification to 3 in order to derive the right-hand conjunct (line 4).

## 4. Modus Tollens

p → q
<br> ~q
________
~p

Modus Tollens is similar in some respects to Modus Ponens - you can think of it as kind of the inverse of Modus Ponens. It also builds off of the basic logical properties of the conditional. As you’ll recall, the one thing we know about a conditional is that *if* the antecedent is true, *then* the consequent is true as well. So, that means if the consequent is *false*, then the antecedent *can’t* be true either! If you think about it in terms of the truth table, the only way a conditional can be true when its consequent is false, is if the antecedent is false as well (since the conditional is always true when the antecedent is false, no matter what).

So, whereas with Modus Ponens, we have a conditional and its antecedent, and we derive the consequent, with Modus Tollens, we have a conditional and the *negation* of the *consequent*, and we derive the *negation* of the *antecedent*. It both reverses the order of arguments compared to Modus Ponens and also “flips the sign” of the arguments.

Think about it in terms of an intuitive example:
<br> 1. If Dave is home, then the lights are on.
<br> 2. The lights are not on.
<br> 3. Therefore, Dave is not home.

The fact that the lights are not on demonstrates that Dave couldn't be home, because if he *were* home, then the lights would be on (following line 1). So we go from the negation of the consequent (line 2) to the negation of the antecedent (line 3).

### Example Proof

p & (q → ~p)
<br> ________
~q

| Proposition | Justification |
| - | - |
| (1) p & (q → ~p)			| Premise
| (2) p       | Simplification (1)
| (3) q → ~p        | Simplification (1)
| (4) ~q          | Modus Tollens (2, 3)

Here, we use Simplification to split up the conjunction (line 1) into independent statements (lines 2 and 3). Now, we have a conditional (line 3), *and* we have the *negation* of the *consequent* (line 2, since p is the negation of ~p). That means we can use Modus Tollens to derive the *negation* of the *antecedent* (line 4).

## 5. Addition

p
<br> ________
<br> p V q

p
<br> ________
<br> q V p

Recall that for a disjunction to be a true, only *one* of the disjuncts (component statements) has to be true. So, if we have a proof where we’ve already asserted some statement, like p (although it could also be a complex statement like p -> (p & r)), then you can always add a *disjunction* with that statement as one of the disjuncts, and *any other statement* as the other disjunct. In other words, if you have a true statement, you can add *any statement whatsoever* to it using disjunction (hence the name ‘Addition’). Since one of the disjuncts is sure to be true, it really doesn’t matter whether the other disjunct is true or false, so it can be whatever you like. As in:

p → q
<br> ________
<br> (p → q) V (r & s)

p ↔ (p V s)
<br> ________
<br> (p ↔ (p V s)) V (r → p)

p & (q & s)
<br> ________
<br> (~r V p) V (p & (q & s))

In each of these cases the premise, or statement above the line, is used as a disjunct in a more complex disjunctive statement as the conclusion (below the line). As you can see, this rule of Addition can work on simple statements or complex statements. And, because the order of arguments in a disjunction doesn’t matter at all for its truth value, you can take the statement you are adding to the disjunction and put it on the left-hand side or the right-hand side.

### Example Proof

p → q
<br> p
<br> ________
<br> q V (r → s)

| Proposition | Justification |
| - | - |
| (1) p → q			| Premise
| (2) p		| Premise
| (3) q		| Modus Ponens (1, 2)
| (4) q V (r → s)     | Addition (3)

**HINT: Addition is a useful rule to apply if the conclusion of the argument doesn’t appear anywhere in the premises. E.g., r -> s doesn’t appear anywhere until the last line of the proof. So the only way you could really derive it would be with addition.**

### A More Complex Example

Let’s look at a proof that uses all of the rules that we’ve seen so far.

q & ((q V r) → ~s)
<br> p → s
<br> ________
<br> ~s & ~p

| Proposition | Justification |
| - | - |
| (1) q & ((q V r) → ~s)			| Premise
| (2) p	→ s		| Premise
| (3) q		| Simplification (1)
| (4) (q	V r) → ~s	| Simplification (1)
| (5) q	V r	| Addition (3)
| (6) ~s	| Modus Ponens (4, 5)
| (7) ~p	| Modus Tollens (2, 6)
| (8) ~s & ~	| Conjunction (6, 7)

Let’s walk through this proof. Lines 1 and 2 are simply the premises. Then, we use Simplification on the conjunction in line 1 to derive each of its conjuncts in lines 3 and 4. Now, notice that 4 is a conditional, and the antecedent is q V r. We don’t have that statement yet, but we *do* have q, and because of the rule of Addition, you can create a disjunction out of any true statement. So, we have q, and we use Addition to “add” r to make q V r. (**HINT: Be careful! The rule of addition does NOT work for *conjunctions*, only *disjunctions*!**) Then, we have derived the antecedent for the conditional in like 4, so we can use Modus Ponens to infer the consequent (line 6). So how do we get to ~p. Well, line 2 is also a conditional, and remember that Modus* Tollens* tells us that whenever we have a conditional, and we have the *negation* of the *consequent*, we can infer the negation of the antecedent. So, we have Modus Tollens on lines 2 and 6 to derive ~p (line 7). Finally, our last two lines of the proof are now ~s and ~p, and according to Conjunction, we can create a conjunctive statement out of any two individual lines. So, we just combine lines 6 and 7 to derive the ultimate conclusion of the argument, line 8, ~s & ~p. And we’re done!

### Strategies

1. If you find a conjuction, always consider using Simplification to separate out the individual conjuncts. It might be helpful, and it can never really hurt.
2. If you see a conditional, try to think about how you can derive the antecedent of the conditional. Usually, you’ll want to use Modus Ponens or Modus Tollens for a conditional, so consider the other premises and see if you can’t convert them into either the antecedent of the conditional or the negation of the consequent.
3. If you have a statement or a propositional variable that seems to “comes out of nowhere” and it’s part of a disjunction, then try to prove one of the disjuncts, and then use Addition to add the new information to is.
4. Conjunction is perhaps not used as often as some other rules, but always keep in mind that if you need to create a conjunction (say, you want to do something with the statement (p & q) -> r, then see if it’s possible to establish each of the conjuncts (p and q) independently, so that you can them combine them with Conjunction.

## 6. Hypothetical Syllogism

p → q
<br> q → r
<br> ________
<br> p → r

You can thinking of hypothetical syllogism as “chaining together” two conditional statements. If we have two conditionals in our proof where the *consequent* of the first is the exactly the same as the *antecedent* of the second, then you can infer a new conditional that has the *antecedent* of the first and the *consequent* of the second. In other words, if there is a “common link” between the consequent of one conditional and the antecedent of another, then you can essentially create a “shortcut” that bypasses that common link. For instance, consider:


| Proposition | Justification |
| - | - |
| (1) p → (q & r)			| Premise
| (2) (q & r) → s			| Premise
| (3) p → s           | Hypothetical Syllogism (1, 2)

In this example, q & r is a common link between the conditional in line 1 and line 2. So we can directly “hop over” q & r and connect p and s with a conditional. To put it in metaphorical terms, line 1 is like a train that takes you from p to q & r; line 2 is like a train that takes you from q & r to s. So, that means that we can be sure that there is a path to take us from p to s, and we can simply leave out the intermediate “stop” of q & r.

### Example Proof
p
<br> (p V q) → (r & s)
<br> ________
<br> r

| Proposition | Justification |
| - | - |
| (1) p			| Premise
| (2) (p V q) → (r & s) | Premise
| (3) p V q   | Addition (1)
| (4) r & s    | Modus Ponens (2, 3)
| (5) r     | Simplification (4)

## 7. Constructive Dilemma

p → r
<br> q → s
<br> p V q
<br> ________
<br> r V s

This rule might seem a little more complicated at first, but it should be rather intuitive once you grasp it. The key is to think of the disjunction p V q as saying, “Either p is the case, or q is the case.” Then p -> r tells us that “If p is the case, then r is the case,” and q -> s tells us that “If q is the case, then is the case.” So, since p V q a disjunction, we don’t know whether p or q is the case. But either way, we know that one or the other must be true, and if it’s p, then r is true, and it’s q, then s is true. So altogether, these three statements imply r V s.

Thinking metaphorically again, you can imagine that you’re either going to board the train at station p or station q. If you board at p, then you’ll get off at r. If you board at q, then you’ll get off at s. You don’t know which one you will board at, but you know you will end up at either station r or station s.

### Example Proof

(p & r) V q
<br> (q → t) & r
<br> (p & r) → s
<br> ________
<br> (s V t) V u

| Proposition | Justification |
| - | - |
| (1) (p & r) V q			| Premise
| (2) (q → t) & r     | Premise
| (3) (p & r) → s     | Premise
| (4) q → t       | Simplification (2)
| (5) s V t       | Constructive Dilemma (1, 3, 4)
| (6) (s V t) V u     | Addition (5)

## 8. Disjunctive Syllogism

p V q
<br> ~p
<br> ________
q

p V q
<br> ~q
<br> ________
<br> p

Disjunctive Syllogism is simply eliminating a false alternative, or option, from a disjunction. If I am told that either p is the case or q is the case, and then I’m told that p is *not* the case, then there’s only one option remaining - q. So, with disjunctive syllogism, we have a disjunction, and we also have the negation of one of the disjuncts, so we can eliminate it and infer the other disjunct. Think of it as a choice between p and q - once one of the choices is eliminated, you can only choose the remaining option.

### Example Proof

p & ~q
<br> q V r
<br> t → ~r
<br> ________
<br> ~t

| Proposition | Justification |
| - | - |
| (1) p & ~q			| Premise
| (2) q V r 			| Premise
| (3) t → ~r			| Premise
| (4) ~q          | Simplification (1)
| (5) r           | Disjunctive Syllogism (2, 4)
| (6) ~t          | Modus Tollens (3, 5)
