# I. Informal Logic & Logical Concepts

## 1. Introduction to Logic

### What is logic?
There are many ways to define logic. Some say that logic is “the science of truth,” while others say that it is about understanding how one ought to think. These are very lofty definitions, and they may make it hard for students to understand what it really means to “do logic” in an introductory classroom setting. There is no single correct way to define logic, but we will try to present logic in more concrete terms.

For the purposes of this class, we will understand **logic** to be **the study (analysis, evaluation, and criticism) of *arguments***.


### What is an argument?
In everyday life, we think of an argument as the kind of thing that usually happens when you accidentally hit a car’s bumper, or step on someone’s foot – two people shouting at each other and being angry until one of them gets their way. But in logic, we think of arguments in a different sense.

An argument in logic is more like an argument in the legal sense, where, for instance, a defense attorney will present an *argument* to the jury to try to *convince* them by way of *reasons* that their client is innocent. So, an argument is a series of sentences that are intended to provide reasons to support a conclusion.

That sounds very general, and indeed it is, but note that not all bits of language make up an argument. For instance, if someone is telling you about everything that happened to them on their way home from work that day, that probably isn't an argument in the sense that we're talking about. It's more of a *report*. Stating some facts or describing a series of events is not an argument if the person isn't trying to *convince* you of something, or doesn't have a "point to make."


### What is an entailment?

Suppose you wanted to convince someone of something that they don’t already believe. How could you do it?

There are many ways to get someone to agree with you that are not relevant to logic. For instance, you could entice them with money (bribery); threaten them with a baseball bat (coercion); or, feed them a mind-altering drug that would make them accept your belief (brainwashing). These are not really “fair” ways to win an argument, though.

In making a logical argument, the strategy is rather different. Suppose you want to convince someone to accept some statement – let’s call the statement Z (as you will soon see, we often use letters as placeholders for sentences in logic). They don’t believe Z, so what can you do? Well, the strategy that is employed in logic is to start with some statements that the person *does* believe – say, A, B, and C – and then show them that *if* they believe A, B, and C, then they *have to* accept Z!

In what sense do they “have to” accept Z? The technical notion that we will explore is that A, B, and C together **imply** or **entail** Z. But it’s best to explain by way of example.

Consider the following sentences:

(1)
<br> (A) Either Alice or Bob must chair the meeting.
<br> (B) Alice is sick, so she can’t chair the meeting.
<br> (Z) Therefore, Bob will chair the meeting.

Now suppose someone accepts both (A) and (B) – they know that only Alice and Bob can chair meetings, and they know that Alice can’t chair this meeting because she is sick – but they *don’t* accept (Z); that is, they refuse to accept that Bob will chair the meeting. (Let’s assume, also, that the meeting is definitely going to happen.)

The reaction you might have to such a person is – what the heck is wrong with them?! How could someone believe (A) and (B) and not believe (Z)? They must be crazy or irrational! Certainly, there appears to be something wrong in the way they are thinking. Thus, it should be clear that there is an intuitive sense in which believing (A) and (B) *forces* you to accept (Z). Failure to do so would constitute a lack of *rationality*, the basic rules that guide human thought.

Here’s another way to put the point: If we assume that (A) and (B) are true, could (Z) *possibly, in any way, fail to be true*? The answer is *no*! If (A) and (B) are true, (Z) *must be the case*.

So, there is a very interesting relationship between the sentences (A), (B), and (Z). First, if (A) and (B) are true, (Z) *must necessarily* be true. Second, if anyone *believes* (A) and (B) to be true, then they *must*, or *ought to*, believe that (Z) is true as well, or else we know there is something seriously wrong with their thinking. This relationship – between (A) and (B), and (Z) – is known as **entailment** (or, also, **implication** or **consequence**), and it is one of the central concepts in logic. Because (A) and (B) being true means that (Z) *must* be true, we say that (A) and (B) together **entail** or **imply** (Z) – or, that (Z) is an **entailment/implication/consequence** of (A) and (B).

Here is another example to illustrate the basic point:

(2)
<br> (A) Alice is older than Bob.
<br> (B) Bob is 35 years old.
<br> (Z) So, Alice is at least 35 years old.

Suppose that someone believed (A) and (B), but failed to believe (Z). That is, they believed all of the following:


(2\*)
<br> (A) Alice is older than Bob.
<br> (B) Bob is 35 years old.
<br> (Z\`) Alice is less than 35 years old.

It would be hard to reason with such a person, to say the least. For they seem to believe that Alice is older than Bob, but also that Alice’s age is less than Bob’s age. What is going on?? This shows once again that because (A) and (B) together imply or entail (Z), it would be irrational to believe (A) and (B), but not (Z).

Logic is very interested in understanding this special relationship between sentences that holds when one set of sentences (like (A) and (B)) entails another (like (Z)).


### The Structure of a Logical Argument

We can now understand the basic structure of a logical argument, and the basic strategy used in making rational arguments.

We have seen that when one set of sentences entails another sentence, it would be irrational to accept the first set of sentences and not accept the other one. So, suppose you wanted to convince someone of some proposition (e.g., *Alice is at least 35 years old*) that they didn’t believe. In logical argumentation, you start with some statements that they *will* accept (e.g., maybe they already believe that Alice is older than Bob, and that Bob is 35 years old, but they just haven’t “put everything together”), and then show that those statements *entail* the proposition that you want them to accept. So, if your reasoning is good, your opponent will be *forced* to accept your conclusion if they are a reasonable person. (Unfortunately, people are not always reasonable!)

Thus, the basic structure of a logical argument is as follows:

* The point of an argument is to prove some statement or claim. This claim (or, perhaps, set of claims, but usually just one) is known as the conclusion. The conclusion is the main goal, target, or purpose of the argument. In the above example (2), the **conclusion** is that Alice is at least 35 years old.

* According to the strategy explained above, in order to prove the conclusion, you have to start with some statements that are intended to be accepted by both parties. These are known as the **premises** of the argument. They are the “raw material” that is used to build up the argument. Since you can’t provide a reason for *every single claim* that you are going to make in your argument (think of the endless children’s game of asking *Why?*), there have to be some claims that are just assumed, or taken for granted (at least for the purposes of the argument). So, every argument has **premises** or **assumptions** that are not themselves argued for. However, if your opponent disagrees with one of your premises, then they will challenge your argument, and you may have to provide reasons for the challenged premise.

* Once you have your premises, then you use logical principles to combine the premises in certain ways and make inferences that will eventually lead to your conclusion. If you make a sophisticated inference to a claim that was not obvious from the premises, you might describe that claim as an **intermediate conclusion** – it’s something that you have argued for (so, in that sense, it’s not a premise), but it’s not the *main* conclusion that the argument is working towards. Not every argument has an intermediate conclusion.

Here is another example argument illustrating these concepts:

(3)
<br> (A) Carol is 5’5” tall. (PREMISE)
<br> (B) Alice is taller than Bob. (PREMISE)
<br> (C) Bob is taller than Carol. (PREMISE)
<br> (D) So, Alice is taller than Carol. (INFERENCE / INTERMEDIATE CONCLUSION)
<br> (Z) Therefore, Alice is over 5’5” tall. (CONCLUSION)

Notice that we *infer* that (D) *Alice is taller than Carol* on the basis of the premises that Alice is taller than Bob and Bob is taller than Carol. (For it’s universally true that if person A is taller than person B, and person B is taller than person C, then person A is taller than person C – i.e., *being taller* than is a *transitive property*.) So, since we aren’t immediately given the fact that Alice is taller than Carol, we must make an inference to that claim. Then we can infer that Alice is over 5’5” tall, because we have shown that she is taller than Carol, who is 5’5” tall. Because (D) is the result of inference or deduction, it qualifies as an intermediate conclusion. It is not a premise because premises are supposed to offer new, independent pieces of information, whereas (D) is simply connecting the information that is contained in (B) and (C).

Pay attention to the fact that even though it’s kind of *obvious*, we still have to state explicitly that (D) *Alice is taller than Carol*, in order for the argument to be complete and logically acceptable. For example, the following argument does not work:

(4)
<br> (A) Carol is 5’5” tall. (PREMISE)
<br> (B) Alice is taller than Bob (PREMISE)
<br> (C) Bob is taller than Carol. (PREMISE)
<br> (Z) Alice is over 5’5” tall. (CONCLUSION)

Strictly speaking, this argument is incomplete because all we are explicitly told is that Alice is taller than Bob, and that Carol is 5’5” tall - we need to explicitly connect the three pieces of information contained in the premises in order to reach the conclusion. You might think, *We can just infer directly that Alice is over 5’5” tall because it’s obvious that she’s taller than Carol, who is 5’5” tall*. But the fact that Alice is taller than Carol is not explicitly one of the premises. It has to be inferred from (B) and (C). So, in constructing a logical argument, it is essential to make *every step of reasoning* explicit. Sophisticated logical arguments are built up by making small steps that gradually lead towards the conclusion. Every step must be explicit so that it is easy to see if the argument employs good reasoning or not.


### Key Words

Consider the following sentences:

(5) It’s going to rain.

(6) Therefore, it’s going to rain.

Notice the effect that the word ‘therefore’ has on sentence (6). It doesn’t really change the information that is conveyed by (5) - rather, it suggests that we are dealing with the conclusion of an argument. So the function of ‘therefore’ is to signal to the reader that the sentence is supposed to be a conclusion. Thus, it provides information about the logical structure of the text.

There are many words in English that signal logical structure. Being aware of these words makes it easier to distinguish premises and conclusions when analyzing an argument. Here we will review some of these logical key words:

#### **CONCLUSION:**
* So
* Hence
* Therefore
* Thus
* Consequently
* As a result
* It follows that

#### **PREMISE:**
* Because
* Since
* Due to the fact that
* As
* Given that
* Furthermore
* In addition
* Besides

(Note that there is no reliable indicator that differentiates the main conclusion from intermediate conclusions. Instead, you should rely on your intuitive grasp of the purpose of the text.)

Some of the premise key words can be slightly confusing at first, because they only work in complex sentences:

(7)
<br> (A) Pluto is a dog.
<br> (B) Since all dogs are fluffy, (C) Pluto is fluffy.

In this example, (A) and (B) are premises, and (C) is the conclusion. The word ‘since’ indicates that the fact that all dogs are fluffy is supposed to provide a reason for believing that Pluto is fluffy. Since reasons/justifications are typically *premises*, we can infer that ‘since’ is a premise indicator. However, due to the grammar of ‘since,’ it can only appear as part of a complex sentence, where the first part provides the premise, and the second part offers the conclusion. That is why we have split the second sentence into two parts - each part has a different logical purpose in the argument. This kind of pattern occurs with respect to ‘Because,’ ‘as,’ ‘due to the fact that,’ and ‘given that,’ as well:

(8)
<br> (A) If it rained, the grass should be wet.
<br> (B) Because the grass isn’t wet, (C) it must not have rained.

(9)
<br> (A) I’ll either go to the movies or watch TV.
<br> (B) Due to the fact that my TV is broken, (C) I’ll go to the movies.

Although one can usually recognize the structure of a logical argument without relying on such indicators, being aware of these keywords may simplify the task of argument analysis.


### Factual vs. Practical Arguments

The study of logic is concerned with the *evaluation* of rational arguments. But when you evaluate something, you have to know what *type* of thing it is. For instance, an ugly statuette might be a bad *piece of art* but a good *paperweight*. However, if it was intended to be a piece of art, then we ought to evaluate it as art, and not as a paperweight. Similarly, there are different **types of arguments**, to which different concepts and criteria apply. Thus, it is important to be able to identify argument types.

Recall that an argument is a set of sentences intended to provide reasons for accepting a conclusion. Sometimes, the conclusion is that *something is true*, or *is the case*, or *is a fact*. The following argument, as well as the examples discussed in previous sections, is of this type:

(10)
<br> (A) If that’s Alice’s coat, then she must be tall.
<br> (B) That is Alice’s coat.
<br> (Z) Therefore, Alice is tall.

The claim, *Alice is tall*, is a *factual* claim – it’s either true or false, it can be decided by measuring Alice’s height with a tape measure, etc. It’s also not a mere matter of subjective opinion – there really is a fact of the matter as to whether Alice is tall.

*(You might be wondering: what if Alice is 5’9” tall? Is the statement ‘Alice is tall’ true or false in that case? It may be hard to decide. This reveals a very messy problem in logic – *vagueness*. It may actually be impossible to know exactly what conditions need to be satisfied for Alice to count as being tall, so the statement that ‘Alice is tall’ seems like it might be *neither true nor false* if Alice is on the borderline. This is a Seriously Big Problem, but we will ignore it for simplicity. For the purposes of classical logic, we simply assume that every statement is *either* true or false. So, we will pretend that vagueness does not exist.)*

So, if the conclusion of an argument is a statement of fact, then we will say that it is a **factual argument**. However, some arguments are not intended to provide reasons for something being *true*, but rather are intended to provide reasons for *what someone should do*.

(11)
<br> (A) We ordered delivery for dinner last night.
<br> (B) Ordering delivery is more expensive than cooking.
<br> (Z) Therefore, we should cook dinner tonight.

Consider the conclusion of this argument: *we should cook dinner tonight*. Is there really a fact of the matter about whether or not they should cook dinner? If they’re trying to save money, then maybe that would be the best thing to do. But if they don’t have enough time to prepare food, then maybe they should order in…. There are pros and cons to either decision. But the point is that this argument is intended to provide reasons for *making a decision*, not reasons that a certain statement or claim is true.

If we have an argument whose conclusion is a *decision*, or that some action *should* be performed, then we will call it a **practical argument**. Here is another example:

(12)
<br> (A) Paris is nice at this time of year.
<br> (B) French food is delicious.
<br> (C) There are cheap flights to Paris available.
<br> (Z) So, I should take a vacation to Paris.

Notice that (A), (B), and (C) do provide reasons for the conclusion, (Z). But, notice also that they do not *entail* the conclusion. A person isn’t *rationally required* to agree that they should take a vacation to Paris, even if they agree with (A), (B), and (C) - in which case, this is a very different sort of argument than (10).


### Inductive vs. Deductive Arguments

The subject of practical reasoning (reasoning about practical arguments) is of great philosophical interest, but in this course we will be exclusively focused on factual arguments. Furthermore, we will mostly be focused on a specific kind of factual argument – deductive arguments.

Deductive and inductive arguments differ in *the kind of support that the argument is supposed to provide for the conclusion*. In a deductive argument, the premises are meant to provide conclusive, indisputable reasons for accepting the conclusion: if the premises are the true, the conclusion *must* be true, and there’s no possible way for it to be false. Recall our previous example:

(2)
<br> (A) Alice is older than Bob.
<br> (B) Bob is 35 years old.
<br> (Z) Alice is at least 35 years old.

If (A) and (B) are true, there is simply no possible way for (Z) to be false – it would be a *contradiction* to accept (A) and (B) and deny (Z). Thus, (A) and (B) are meant to provide definitive reasons for accepting (Z). This is a sign of a **deductive argument**.

An **inductive argument**, on the other hand, is one in which the premises are intended to provide *evidential support* for the conclusion, but not definitive proof. Consider:

(13)
<br> (A) Most basketball players are very tall.
<br> (B) Carol is a basketball player.
<br> (Z) Therefore, Carol is very tall.

In some sense, this is a good argument. (A) and (B) do provide a reason to think (Z) is likely, and if (A) and (B) are true, then (Z) is probably true as well. But notice that, unlike with argument (2), if (A) and (B) are true in (13), it isn’t *necessarily* the case that (Z) is true. Some basketball players are not very tall, and maybe Carol is one of those players who happens to be not-very-tall. So, since it’s possible that (A) and (B) are true, but (Z) is false, (A) and (B) do not entail (Z), i.e., they do not provide absolute, definitive proof of (Z). However, since they do provide *good evidence* of (Z), Argument B is still a good *inductive* argument.

Thus, an **inductive argument** is one in which the premises are intended to provide *evidence* for the conclusion, but not wholly definitive proof. Consider another example:

(14)
<br> (A) Robins are birds that fly.
<br> (B) Sparrows are birds that fly.
<br> (C) Finches are birds that fly.
<br> (Z) Therefore, all birds can fly.

Once again, this is not such a bad inductive argument. However, although the premises are true, the conclusion is false, since *not all* birds fly (e.g., penguins). Thus, Argument C is not very good when considered as a deductive argument. The premises make the conclusion *likely* to be true, but they do not entail the conclusion.

You may notice that inductive arguments often have a similar flavor – X, Y, and Z have some property (flying, being tall, etc.), therefore *other* things that are like X, Y, and Z will *also* have that property. Inductive reason typically involves using information about a specific subset of entities, and then extrapolating or generalizing that information to other similar entities. This is a good way to reason, and it is essential for natural science, but it is very different than deductive reasoning.

Although the study of inductive reasoning has grown by leaps and bounds, it is still less well understood than deductive reasoning. Probabilistic reasoning has seen a boon in recent years. Nevertheless, deductive reasoning is much more well-understood and will be the focus of this course.

### KEY CONCEPTS
* Entailment/Implication
* Premise
* Conclusion
* Intermediate Conclusion
* Logical Keywords
* Factual vs. Practical Arguments
* Deductive vs. Inductive Arguments

### RECOMMENDED EXERCISES
* [Argument Analysis](http://logic.baruchsites.com/exercises/argument-analysis)
* [Factual vs. Practical Arguments](http://logic.baruchsites.com/exercises/factual-vs-practical)
* [Deductive vs. Inductive Arguments](http://logic.baruchsites.com/exercises/deductive-vs-inductive)
