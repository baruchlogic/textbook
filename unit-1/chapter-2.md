# 2. Validity, Soundness, Strength, Cogency

### Validity and Soundness

We will now approach perhaps the most important concept of this unit, and one of the most important notions in logic – **validity**.

We have already begun to circle around this idea in our discussion of entailment. Recall this argument:

(2)
<br> (A) Alice is older than Bob.
<br> (B) Bob is 35 years old.
<br> (Z) Alice is at least 35 years old.

We said that in (2), the premises *entail* the conclusion in virtue of the fact that (a) if the premises are true, the conclusion *must necessarily* be true, and (b) if you accept the premises, you are rationally obligated to accept the conclusion.

A deductive argument in which the premises entail the conclusion is known as a **valid argument**. Consider another argument:

(15)
<br> (A) Either cows are red, or pigs can fly.
<br> (B) Cows are not red.
<br> (Z) Therefore, pigs can fly.

Let’s examine this argument. Obviously, it is not an amazing argument because it has an absurd conclusion – pigs can’t fly. But is it all bad? Pretend you don’t know anything about farm animals; you don’t know what cows look like; and you don’t know if pigs are birds or fish or mammals. All you know is what is claimed in (A) and (B). *In that situation*, you would have a good reason to accept (Z). In fact, (A) and (B) provide *conclusive* reasons to accept (Z) – just as with Argument A, it would be irrational to accept (A) and (B) and not accept (Z). Similarly, *if* (A) and (B) *were* true (even though we know (A) is false), then (Z) *would necessarily* be true – there is no way for (A) and (B) to be true, but (Z) false. Thus, we can see that although Argument (15) has a false conclusion, it still has that interesting connection between the premises and the conclusion – namely, the premises *entail* the conclusion, and thus the argument is *valid*.

Here is our definition of validity:

**(VALIDITY)** A deductive argument is valid just in case if the premises are true, then the conclusion must be true (i.e., it is impossible for the premises to be true and the conclusion to be false).

Logic is more interested in *reasoning* itself than whatever the reasoning is about (e.g., farm animals, in this case). Thus, when evaluating a deductive argument, we will mostly be focusing on whether or not it is *valid*, disregarding whether the premises are true or false. Notice that when judging validity, we consider what follows *if* the premises are true. Therefore, when discussing validity, we may simply *assume* the premises are true, and then ask ourselves – does the conclusion *follow*?

Validity is a key concept in logic because logic studies patterns of reasoning, and sometimes you can employ good reasoning even if you start from false assumptions. For instance, imagine that you’re told some important information about the weather - say, that there’s going to be a thunderstorm arriving tomorrow. You use that information to reason that the plants in the garden will get wet, and so they don’t need to be watered today. That is a fairly reasonable inference to make from the claim that there is going to be a hurricane tomorrow. But suppose there *isn’t* going to be a hurricane tomorrow - the information you were told was simply false. In that case, you may have arrived at an inaccurate conclusion. However, that doesn’t mean that you weren’t employing *good reasoning*, albeit on the basis of *false premises*.

Another way to think about validity is in terms of **truth preservation** – when thinking about validity, we don’t care whether the premises are true or false, we just assume that they are true and see if they entail the conclusion. Thus, a valid argument is one in which if the premises are true, we can know definitively that the conclusion is true as well – in other words, a valid argument *preserves truth* – if the premises are all true, then truth will be “transmitted” to the conclusion as well.

In sum, validity is an important property of logical arguments which pertains to the *quality of the reasoning* in the argument, and which *ignores* the question of whether the premises are in fact true (the premises are assumed to be true for the purpose of judging validity).

Although logic is *primarily* interested in validity, in “real life,” when we judge an argument, we also care about whether the statements are true or false. This is what the notion of **soundness** pertains to. Once you understand validity, soundness is easy to grasp. A **sound** argument is simply a **valid** argument *that has true premises*.

**(SOUNDNESS)** A deductive argument is sound just in case it is valid *and* all the premises are true.

Thus, argument (15), although valid, is not sound, because premise (A) is not true. The following type of argument is both sound and valid:

(A) Triangles have three edges.
<br> (B) Rectangles have four edges.
<br> (Z) Therefore, rectangles have more edges than triangles.

Let’s make some observations to solidify these concepts:

* **A valid argument may have false premises.** When judging validity, we simply *assume* that the premises are true, even if we know they are false.

* **A valid argument may have a false conclusion.** A valid argument must have good reasoning, but if you start from false premises, then you can end up at a false conclusion, even if your reasoning is valid.

* **A sound argument must have true premises.** Soundness is validity *plus* true premises, so this one is self-evident.

* **A sound argument must have a true conclusion.** This follows from the fact that a sound argument must have true premises, and it must be valid. Since validity preserves truth, a sound argument will also have a true conclusion.

* **An argument may be *invalid* even if every statement in the argument is true.** For example, consider the following argument:
(A) Grass is green.
<br> (B) Snow is white.
<br> (Z) Therefore, the ocean is blue.
All of the above statements are true, but (A) and (B) do not *entail* (Z) – there is no logical connection between them. Therefore, this is not an example of good (valid) reasoning, even though every statement happens to be true.


### Counter-Examples

Recall that when judging validity, we *assume* that the premises are true, and then we consider whether the conclusion *must necessarily* be true. Thus, a valid argument is one in which it is *impossible* for all of the premises to be true *and* the conclusion false.

This means that there is an intuitive way to think about whether an argument is valid or not. First, clear all factual information from your head (or, more realistically, try to suspend belief in all the facts under discussion); then pretend that the information in the premises is all true; then try to extend that scenario into one in which the conclusion is false. If you are able to imagine some hypothetical situation in which the premises are true, and the conclusion is false, then you have come up with a **counterexample** to the argument, and that counts as proof that the argument is *invalid*.

Let’s look at the following argument:

(16)
(A) All cows are blue.
<br> (B) Bessie is a cow.
<br> (Z) Therefore, Bessie is blue.

Now, we know this argument is unsound, since it has a false premise: (A). It isn’t even clear whether the conclusion has a truth value at all, since Bessie is an imaginary cow. But let’s apply the procedure just described: Let’s forget what we know about cows, and pretend that all cows are blue, and that there is some cow named Bessie. Is there any conceivable way that Bessie could be some color other than blue? It seems not. Thus, since we are unable to find a counterexample, it is reasonable to conclude that the argument is valid.

Now consider another argument:

(17)
(A) All cows are blue.
<br> (B) Bessie is blue.
<br> (Z) Therefore, Bessie is a cow.

Let’s try to find a counterexample to this argument. Let’s pretend that all cows blue, and that there is something or someone called Bessie, and Bessie is blue. Is it possible to imagine a situation in which Bessie is *not* a cow? Sure, there is! Maybe Bessie is a blue fish. The argument does not state that Bessie is a cow, so he/she/it could just be some other blue thing. Any such scenario would constitute a *counterexample* to this argument, and thus demonstrate that it is *invalid*. This is because we have managed to describe a hypothetical scenario in which all the premises are true and the conclusion is false. Thus, we can see that trying to find a counterexample can be an effective way to judge whether an argument is valid.

However, the counterexample method must be used with caution. If you really find a counterexample, then you can definitely conclude that the argument is invalid. But if you can’t think of a counter-example, it’s hard to know for sure that the argument is valid – counter-examples sometimes are difficult to come up with, and maybe you just haven’t thought of the right scenario yet! So, failure to find a counterexample is usually not conclusive proof that an argument is valid. Sadly, you can often be more confident that you’ve shown an argument to be invalid, than to have shown one to be valid.


### Strength and Cogency

Validity and soundness are used when evaluating *deductive arguments*. **Strength** and **cogency** are similar terms used to discuss *inductive arguments*. Consider the following inductive argument:

(18)
(A) Alice’s computer has a virus.
<br> (B) Bob’s computer has a virus.
<br> (Z) Therefore, everyone in the office’s computer has a virus.

This conclusion seems a little too hasty. You shouldn’t infer that everyone in the office has a virus just on the basis of two examples. This would be a case of **weak inductive reasoning** – drawing a conclusion on the basis of weak evidence. Now consider this argument:

(19)
(A) Alice’s computer has a virus.
<br> (B) Bob’s computer has a virus.
<br> (C) Carol’s computer has a virus.
<br> (D) Dave’s computer has a virus.
<br> (E) Elaine’s computer has a virus.
<br> (F) Everyone in the finance division’s computer has a virus.
<br> (Z) Therefore, everyone in the office’s computer has a virus.

Notice that the more examples you can cite of people in the office who have a computer virus, the more persuasive the argument becomes. It seems like less and less of a coincidence if more and more people in the office are found to have a computer virus. It doesn’t *necessarily* mean that the conclusion is true - even if you check the computers of 100 employees, it could be the case that the 101st employee got lucky, and *doesn’t* have a computer virus. But it’s still an example of **strong inductive reasoning** – reasoning on the basis of a strong body of evidence. The difference between weak and strong arguments has an obvious connection to the scientific notion of *sample size*, for those who are familiar with that term. An argument that appeals to a larger sample size tends to be stronger.

Recall that in deductive arguments, validity pertains to the quality of the reasoning involved – does the conclusion really follow from the premises, assuming the premises are true? With inductive arguments, we also want to be able to evaluate whether the premises provide good support for the conclusion, independently of whether the premises are in fact true or false. Thus, we use the term strong as the inductive analog of valid:

**(STRENGTH)** An inductive argument is strong just in case the premises provide good evidence for the conclusion (i.e., the premises make the conclusion highly probable).

Just as with validity, when judging strength, we ignore whether the premises are in reality true or false, and we just *assume* they are true and see whether they provide good *support* for the conclusion. Thus, (19) is a fairly strong inductive argument, since it appeals to a decent sample size, but we cannot say whether the premises are true or false in reality (since those people do not exist in reality).

Continuing the analogy between inductive and deductive arguments, just as a sound deductive argument is one that is *valid* and has *true premises*, a **cogent inductive argument** is one that is *strong* (the premises provide good evidence for the conclusion), *and* the premises are *in fact true*.

**(COGENCY)** An inductive argument is cogent just in case it is strong *and* all the premises are true.

Thus, if we imagine that the C.E.O. of the company in Argument (19) happens to be the one person at the company whose computer does not have a virus, then Argument (19) would be *strong* even though it would not be *cogent*.

Finally let’s make some observations that we can compare with our observations about deductive arguments:


* **A strong argument may have false premises.** When judging strength, we simply assume that the premises are true, even if we know they are false.

* **A strong argument may have a false conclusion.** Like deductive arguments, a strong argument might have a false conclusion if it starts from false premises. Unlike a deductive argument, a strong argument can have a false conclusion *even if it starts with true premises* (strong arguments only make the conclusion *probable*, not *certain*).

* **A cogent argument must have true premises.** Cogency is strength *plus* true premises, so this one is self-evident.

* **A cogent argument does not have to have a true conclusion.** Since inductive reasoning is probabilistic, even strong inductive reasoning can sometimes lead to a false conclusion.

* **An argument may be *weak* even if every statement in the argument is true.** As with deductive reasoning, if an argument does not follow a logical “train of thought,” but instead consists of unconnected (but true) statements, then it would not be a strong argument, even if all the statements happened to be truths.


#### Putting it Together

The relation between these concepts can be symbolized in a table:

|               | THE PREMISES SUPPORT THE CONCLUSION | THE PREMISES ARE TRUE AND SUPPORT THE CONCLUSION  |
| :-------------: |:-------------:| :-----:|
| DEDUCTIVE ARGUMENT      | Valid (the premises, if true, provide definitive proof of the conclusion) | Sound |
| INDUCTIVE ARGUMENT      | Strong (the premises, if true, provide good evidence for the conclusion)      |   Cogent |


### KEY CONCEPTS
* Validity - Truth Preservation
* Soundness
* Strength
* Cogency
* Counterexample

### RECOMMENDED EXERCISES
* [Validity - Informal Arguments](http://logic.baruchsites.com/exercises/validity-informal)
