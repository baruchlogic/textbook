# II. Symbolic Logic & Truth Tables

# 1. Symbolic Logic Notation

### Why use symbols?

Let’s consider a few arguments:

(1)
<br> (1) If Alice is late, the meeting will be delayed.
<br> (2) Alice is late.
<br> (3) Therefore, the meeting will be delayed.

(2)
<br> (1) If Bob went to the supermarket, then he bought cookies.
<br> (2) Bob went to the supermarket.
<br> (3) Therefore, he bought cookies.

(3)
<br> (1) If it rained this morning, the grass will be wet.
<br> (2) It rained this morning.
<br> (3) Therefore, the grass will be wet.

What do we notice about these arguments? Well, for one thing, they are all valid deductive arguments. Let’s consider (1): The first premise states that the meeting will be delayed if Alice is late. Then the second premise affirms that Alice is, indeed, late. So, we can definitively conclude that the meeting will be delayed. We can observe that similar reasoning applies to the other arguments.

However, beyond the fact that they are all valid, these arguments clearly have a lot in common. They seem to follow a common pattern:

Pattern 1
<br> (1) If such-and-such, then so-and-so.
<br> (2) Such-and-such.
<br> (3) Therefore, so-and-so.

Let’s dwell on this fact for a moment. Here, we are treating “such-and-such” and “so-and-so” as placeholders or *variables* for sentences. Thus, any argument will fit this pattern so long as each occurrence of “such-and-such” is replaced with the same sentence, and each occurrence of “so-and-so” is replaced with the same sentence, as in the following case:

(4)
<br> (1) If Fido is a dog, then Fido is a canine.
<br> (2) Fido is a dog.
<br> (3) Therefore, Fido is a canine.

Is Argument 4 valid or invalid? Can we conceive of a counter-example? It doesn’t seem to be possible for Fido to be a dog, but not a canine, given the information in premise (1). So, argument (4) is also a valid deductive argument. That might seem obvious, but wait a minute – the sentences “Fido is a dog” and “Fido is a canine” were totally arbitrary, but when we inserted them into the pattern described in Pattern 1, we ended up with a valid argument. So, that means we now know how to form a valid argument from any two sentences, just by following this pattern. That’s a pretty significant fact.

Let’s look at the pattern displayed in Pattern 1 more closely. This time, we’ll use letters as variables for the sentences. That means that when you replace the variables with real sentences, you just have to make sure that *each occurrence of a given variable* is replaced with the *same sentence* as the other occurrences of that variable.

Pattern 1
<br> (1) If P, then Q.
<br> (2) P.
<br> (3) Therefore, Q.

We can now see that every instance of this pattern in which like variables are replaced with like sentences will result in a valid deductive argument.

Since validity only cares about the quality of reasoning involved in an argument, and ignores the question of whether the premises are true or false, this same generalization holds true even if we pick false statements as P and Q. For example, let’s suppose P is “Fish are mammals,” and Q is “Fish live in space”:

(5)
<br> (1) If fish are mammals, then fish live in space.
<br> (2) Fish are mammals.
<br> (3) Therefore, fish live in space.

Even though the conclusion is patently false, we’ve constructed another perfectly valid argument just by mechanically following Pattern 1.

Notice that Pattern 1 has almost entirely gotten rid of English words – the only remaining words are "If... then," and "Therefore." But “therefore” is really just a rhetorical device to clue you in to the conclusion – it is not essential. Thus, the only words that are needed to make a valid deductive argument (besides the sentences used to replace the variables) are "if" and "then."

Pattern 1
<br> (1) If P, then Q.
<br> (2) P.
<br> (3) Q.

Logicians are very interested in understanding these patterns. After all, we have seen that they are quite powerful – any specific argument that fits the pattern seems to be deductively valid. Thus, perhaps when judging whether an argument is valid or not, it can be helpful to see whether it fits into such a pattern of valid argument.

What we are beginning to look at, then, is the form of valid arguments. For, as we have seen, Pattern 1 remains valid *regardless of which sentences are used to replace "P" and "Q."* That is, you can use *any statement whatsoever* to replace a variable. So, since Pattern 1 produces a valid argument no matter which sentences are used to replace the variables, it must be in virtue of the *form* of the pattern itself that the argument is valid, and not in virtue of the specific claims that are used to replace, or *instantiate*, the variables. In other words, as long as it has the right form, the subject matter of the argument is totally irrelevant to whether or not it is valid. This is a highly significant fact: *validity depends on an argument’s form, not its subject matter.*

Since we are really concerned with the form of the argument, then, we will do away with English words altogether, and think of "If... then" as an **operator** that takes two **arguments**. We will symbolize this function with the arrow, →. Thus, the final form of Pattern 1 is:

Pattern 1
<br> (1) P → Q
<br> (2) P
<br> (3) Q

“P → Q” is read as: “If P then Q;” or, equivalently, “P implies Q.” We will symbolize the fact that (3) is intended to be the conclusion by putting it below a solid line.

We have now looked at one example of a deductive argument expressed in the notation of **symbolic logic**. The rest of the course will focus on symbolic logic (also known as formal logic). So, first we need to learn how to translate from English into symbolic logic.

First, let’s look at one more easy example of an obviously valid argument form:

(6)
<br> (1) Snow is white and grass is green.
<br> (2) Therefore, snow is white.

(7)
<br> (1) Alice is tall and she is wearing a blue hat.
<br> (2) Therefore, Alice is tall.

(8)
<br> (1) Bob is at home and he’s watching TV.
<br> (2) Therefore, Bob is at home.

These arguments are clearly valid. It is difficult to explain informally *why* they are valid, because the inference is so obvious and direct, but if it’s true that both snow is white and grass is green, then obviously each statement must be individually true as well – i.e., snow is white. In general, if you say that two things are true, then they must be true individually as well.

These arguments are all clearly valid, and they also share a similar form:

Pattern 2
<br> (1) Such-and-such and so-and-so.
<br> (2) Therefore, such-and-such.

Once again, we are informally using “such-and-such” and “so-and-so” as *sentential variables*. Let us, then, simply replace them with letters (and get rid of the unnecessary “therefore”):

Pattern 2
<br> (1) P and Q
<br> (2) P

We have now identified another valid sentence pattern, or form, where we can fill in the variables with *any sentences whatsoever* (as long as like variables are replaced by like sentences), and end up with a valid argument.

We can see that the only English word remaining is “and,” so we will again think of this (informally for now) as a kind of operator that takes two arguments – P and Q, in this case – and produces a result (P). We will use the symbol **&** to represent “and,” thus:

Pattern 2
<br> (1) P & Q
<br> (2) P

This is another *valid inference rule* expressed in symbolic terms. In this unit, we will learn about a number of such rules, and how they can be used to determine whether an argument is valid or not.

### Symbolic Logic Translations

### Atomic vs. Complex Sentences

As we have already seen, when formalizing an English argument, that is, translating it into symbolic notation, we sometimes take *whole sentences* and replace them with variables. But with "If... then," we broke it up into two parts and used a different symbol for "If... then." In order to understand why, we must understand the concept of an **atomic sentence**.

First, notice that some sentences have other sentences as parts:

(9) The sky is blue.
<br> (10) Grass is green.
<br> (11) The sky is blue and grass is green.

Sentence (11) essentially consists of sentences (9) and (10) plus the word “and” – that is, it seems to have sentences (9) and (10) as parts. Whereas, it *doesn’t* appear to be the case that either sentence (9) or sentence (10) has any other sentence as a part.

We will say, then, that a sentence which has another sentence as a part is a **complex sentence**, whereas a sentence that does not have any other sentences as parts is an **atomic sentence**. Sentences (9) and (10) are clearly atomic, while sentence (11) is complex.

### Logical Operators

There are a number of special words in English that are used to combine sentences. Earlier we identified two such words (or sets of words): “and,” and "if... then." We will think of “and” as an **operator** that combines two sentences – in other words, a **logical operator** (also known as a **sentential operator**, or, **logical connective**). A logical operator takes two sentences and produces a complex sentence.

Here is a list of logical operators in English:

| Operator      | Usage         |
| ------------- | ------------- |
| AND           | P AND Q       |
| OR            | P OR Q        |
| IF... THEN    | IF P THEN Q   |
| IF            | P IF Q        |
| IF AND ONLY IF| P IF AND ONLY IF Q|
| UNLESS        | P UNLESS Q    |

Notice that sometimes a logical operator will take two atomic sentences and produce a complex sentence, as in:

(11) The sky is blue and grass is green.

However, logical operators can also be used on complex sentences – to make even more complex sentences:

(12) If __the sky is blue__ and __the grass is green__, then __this photograph will be beautiful__.

Note that sentence (12) actually contains *three* atomic sentences: (9), (10), and

(13) This photograph will be beautiful.

We can think of this as “and” combining “the sky is blue” and “the grass is green” to form “the sky is blue and the grass is green,” and then “If…then” combines the already complex sentence “the sky is blue and the grass is green” and the atomic sentence “this photograph will be beautiful,” to form the (doubly complex) sentence “**IF** the sky is blue **AND** the grass is green, **THEN** this photograph will be beautiful.”

Finally, there is one logical operator that only operates on one argument: the word “not.”

(14) Grass is green.
(15) Grass is not green.

Although the word “not” is located in the middle of the sentence, we can easily think of sentence (15) as consisting of sentence (14) plus the word “not.” Thus, we will consider (15) a complex sentence as well, and we will take “not” to be a logical operator that only takes one argument.

### Symbolic Notation

Here is a list of logical operators, and their accompanying translation into symbolic logic:

| Operator      | Usage         | Symbolic Notation
| ------------- | ------------- | -----------------
| AND (Conjunction)           | P AND Q       | P & Q
| OR (Disjunction)            | P OR Q        | P V Q
| IF... THEN (Conditional/Implication)    | IF P THEN Q   | P → Q
| IF AND ONLY IF (Biconditional)| P IF AND ONLY IF Q | P ↔ Q
| NOT (Negation)        | NOT P    | ~P

There are two other ways of expressing the conditional:

| Operator      | Usage         | Symbolic Notation
| ------------- | ------------- | -----------------
| IF            | P IF Q        | Q → P
| ONLY IF       | P ONLY IF Q   | P → Q
| UNLESS        | P UNLESS Q    | ~Q → P

### A Note on "Unless" and the Oddity of Thought

“Unless” often throws students off: "P unless Q" gets translated as ~Q →P. “Unless” encodes a negation (the “un” part), hence the negation in the formalism. When in doubt about how to translate think about it as you might try to understand a sentence. Children (and Pink Floyd fans) are often told that they can’t have their pudding unless they eat their meat. That is: “No pudding unless meat” = ~meat -> ~pudding. Here there are two negations, one from unless, and the other from the explicit “No” in "no pudding."

Don’t be fooled! You know what “unless” means, and have since you were a kid. Just think it through. Whenever you are stuck for a translation take a second to step back and think about how you would normally respond to what the sentence means. The sentence “A number is odd unless it is even," so  ~even → odd. In other words you know that “a number is odd unless it is even” just means “if it’s not even then it’s odd.”

### Other Uses of "Or" and "And"

So far, we have seen uses of “or”/“and” that clearly connect two sentences. But what about the following?

(16) Alice and Peter are tall.
<br> (17) Bob is at home and is watching TV.
<br> (18) Snow is white and cold.

These sentences all contain “and,” but “and” doesn’t seem to be combining two complete sentences. Consider sentence (18): in this case, “and” appears to be combining, or “operating on” – “Snow is white” and “cold.” But “cold” is not a sentence. Nevertheless, if we had to rephrase what is conveyed by (18), we could easily do as follows:

(21*) Snow is white and snow is cold.

Obviously if snow is both white and cold, then snow is white, and snow is cold. So, the moral is that when you see “and” combining things that are not complete sentences, you should see if you can rephrase the sentence in a longer way so that both sides are complete sentences. Example:

(16*) Alice is tall and Peter is tall.
<br> (17*) Bob is at home and Bob is watching TV.

The same lesson applies to “or,” as we can observe from the following examples:

(19) Alice is at home or at the store.
<br> (20) Either Bob or Claire is rich.
<br> (21) Snow is white or heavy.

In these examples, “or” once again combines two parts that are not complete sentences. But we can easily rephrase these sentences so that they fit the familiar pattern for “or”:

(19*) Alice is at home or Alice is at the store.
<br> (20*) Bob is rich or Claire is rich.
<br> (21*) Snow is white or snow is heavy.

So, if you encounter such examples of “and”/“or” that do not combine full sentences, try to reformulate them so that their logical structure is more transparent.

HINT: Be Careful! This strategy does not always work: “Alice and Bill drank a whole bottle of wine,” does not mean the same as “Alice drank a whole bottle of wine and Bill drank a whole bottle of wine” – since they might have drank a single bottle *together*. We won’t expand on this problem here, but it’s something to be aware of.

### Pragmatics

English communication does not simply involve conveying propositions in formal logic. Rather, language is full of connotations and nuances that we must learn to ignore in trying to analyze some English sentences.

For example, consider the following case:

(22) The sky is blue, but my shoes are untied.

How should we translate this sentence? We have not learned a symbol for the word “but.” Should we then translate the whole sentence using one sentential variable? That seems inadequate, since (1) really does seem to contain sentential parts:

(23) The sky is blue.
<br> (24) My shoes are untied.

So, “but” seems to be a sentential connective, or operator. But which one is it? Well, what can we infer from (22)? If (22) is true, then we can infer both (23) and (24). So, from a logical point of view, “but” seems to behave exactly like “and!” But isn’t there a difference between saying “but” and saying “and”? Intuitively, “but” seems to imply some kind of contrast between the parts of the statement. That’s, perhaps, why sentence (22) seems awkward – what connection could there be between the sky being blue and the speaker’s shoes being untied? Notice that this element of contrast is not always present when using “and”:

(22*) The sky is blue, and my shoes are untied.

(22*) seems much more natural than (22), because “and” does not have that connotation of contrast. However, it is not the business of basic propositional logic to try to capture that difference in connotation.

What this example is supposed to illustrate is that there are many parts of an English sentence that are *not relevant* to our goal of translating into propositional logic. *Pragmatics* is the branch of the philosophy of language and linguistics that studies what is implied, as opposed to entailed, by sentences. *Entailment* is a logical property, but being merely implied isn’t. For example, imagine you ask a scout about your prospects for being a professional basketball player and the scout responds “I think you’d make a great coach.” There is nothing entailed in that statement about one’s chances of being a professional basketball player. Nevertheless, pragmatically the statement implies that the scout doesn’t think you will be a good player, for if he did he would’ve said so instead of changing the topic.


The study of pragmatics is of deep importance to understanding human communication, but it is outside of the bounds of what we will be considering in this course. Instead our focus is on the elements of the sentence that lead to the truth value of the sentence. Thus in the scout’s sentence she is asserting that she thinks it is true that you would make a great coach, but she is not asserting anything about you as a player at all.

In order to understand the logical structure of an argument, when we analyze English into symbolic notation, we will simply ignore those parts of meaning that are not directly relevant to the *truth* of what is being asserted. Take sentence (25):

(25) The police arrived and the party stopped.

(25) Implies a certain causal and temporal structure: that the cops first arrived and as a consequence the party stopped. But nothing in the semantics of the sentence--nothing that determines the sentence’s truth--is so implied. Instead the sentence is true as long as it’s true that the police arrived and it’s true that the party stopped. The causal and temporal implications are merely pragmatically implied--they aren’t based on the logic of the sentence, but are instead based on extra-logical facts--facts about what one knows about the world (for example, that cops break up parties).

Going back to our original example about “but” and “and,” “but” implies a contrast, but that contrast has no effect on the sentence’s truth value - instead it just acts as a connective. Consequently, you may treat “but” as equivalent to “and.”

### Ambiguity

Groucho Marx once quipped:

(26) I once shot an elephant in my pajamas… How he got in my pajamas I’ll never know.

When getting to the punchline, you realize that the first way you understood “I once shot an elephant in my pajamas”--with you shooting the elephant while wearing your pajamas--is not the only available reading. “I once shot an elephant in my pajamas” is *ambiguous* between meaning “While wearing pajamas, I shot an elephant” and “I shot an elephant who was wearing my pajamas."

Consider the following pairs of sentences:

(27) Alice is studying or Bob is studying, and Claire is studying.
<br> (28) Alice is studying, or Bob is studying and Claire is studying.

Although the difference between the two sentences appears to be just a mere movement of a single comma, (27) and (28) suggest very different readings: (27) suggests that Claire is studying, *and* either Alice or Bob is also studying – this can only be true if Claire is indeed studying; (28), on the other hand, suggests that *either* Alice is studying, *or* Bob and Claire are studying – this suggests that Claire *might* be studying, but is not necessarily studying. These are clearly different conditions. But how are we to translate (27) and (28)? Even worse, suppose the commas were missing:

(29) Alice is studying or Bob is studying and Claire is studying.

Which reading ((27) or (28)) is the correct analysis of (29)? There is no clear answer. The problem is that, like ordinary speech, sentence (29) is ambiguous – in this case, it is *ambiguous* – its logical structure is not clear so the sentence is not *well-formed*.

This is a problem for doing logical analysis. For instance, how shall we analyze “or” in sentence (29)? Should “or” combine “Alice is studying” and “Bob is studying and Claire is studying”? Or should “or” simply combine “Alice is studying” and “Bob is studying”? Unfortunately, the sentence itself does not resolve the matter – it is logically ambiguous – but, our symbolic translations must *not* have any ambiguity. Thus, in analyzing a sentence like (3), we must resolve the ambiguity in one way or the other.

Typically, as in sentences (27) and (28), commas and other devices may help disambiguate the intended reading. In (27), the comma separates “Alice is studying or Bob is studying” and “Claire is studying.” This suggests that “Alice is studying or Bob is studying” is a logical unit, and that “and” is operating on that unit and “Claire is studying.”

In example (28), we see the opposite effect. The comma separates “Alice is studying” and “Bob is studying and Claire is studying.” This suggests that the intended reading is that *either* Alice is studying, *or* Bob and Claire are studying.

In this latter case, we see that “Alice is studying” and “Bob is studying and Claire is studying” each form “units,” in a way. Thus, we will symbolize this by enclosing such “units” in parentheses, to show that they go together.

Let us demonstrate how we would translate (27) and (28) using this method of disambiguation:

(27*) (Alice is studying or Bob is studying) and Claire is studying.
<br> (28*) Alice is studying or (Bob is studying and Claire is studying).

As you can see, in the case of atomic sentences, like “Alice is studying,” if it is not part of a bigger unit, we will simply drop the parentheses, as in (28*). This still results in a fully disambiguated representation.

Finally, let us translate these into symbolic logic using the following key:
P: Alice is studying
<br> Q: Bob is studying
<br> R: Claire is studying
<br> (27) (P  Q) & R
<br> (28) P  (Q & R)

Disambiguation is very important in symbolic logic because sentences like (27) and (28) can have different truth values, so *different disambiguations are not logically equivalent*. It is always crucial to check whether your logical formula is ambiguous or not.

**HINT: A properly disambiguated complex sentence will have one pair of parentheses for every sentential operator minus one.**

### Semantic vs. Syntactic Ambiguity

Many English sentences are ambiguous. Some are ambiguities arise because of the meanings of words, and others because the structure of sentences. Take sentence (29)

(29) I dropped my money off at the bank.

On one reading - the natural one - one assumes bank refers to a financial institution and one dropped their money off there. But there is another reading available where "bank" refers to a river bank. (To make the context clear imagine you are about to take a dip in a river after a bank robbery and your accomplices ask you where you stashed the loot.) The sentence “I dropped my money off at the bank” is *semantically* ambiguous because one of the words it contains is ambiguous - “bank” can mean monetary bank or river bank.

Now let’s return to the Marx quip which opened the section. When Groucho says “I once shot an elephant in my pajamas” he too is saying something ambiguous. But none of the words in “I once shot an elephant in my pajamas” are ambiguous themselves, instead the syntactic structure of the sentence is ambiguous. The sentence is *syntactically ambiguous* between two readings:

(30a): [I once shot [an elephant] wearing my pajamas] (i.e., wearing my pajamas I once shot an elephant]
and
<br> (30b): [I once shot an elephant] wearing my pajamas (i.e., I once shot an elephant who was wearing my pajamas).

Both types of ambiguities are disallowed in FOL, but they are dealt with differently. Syntactic ambiguities are to be disambiguated via parentheses. Semantic ambiguity on the other hand is dealt with by certain rules for how we specify keys. Take the Key we introduced above where

P: Alice is studying
<br> Q: Bob is studying
<br> R: Claire is studying

To exclude semantic ambiguities we must have certain rules for our keys. In particular each variable--here the P, Q, and R must have only one referent. That is, if "P" refers to "Alice is studying" then P CANNOT also refer to "Claire." The rule is that each variable only pick out one name. Call a variable that only refers to a single item a univocal variable. If we abide by this rule and then only build our sentences out of univocal variables and logical operators, then we can ensure our sentences will never be semantically ambiguous. As long as these rules are followed for one’s key, then the only ambiguities to be on the lookout for are syntactic ambiguities.

But of course this supposes that the operators themselves are univocal. Thus, we must ensure that the definitions of the operators are themselves unambiguous. Return again to (25) (The police arrived and the party stopped.) In (25) we put the temporal and causal implication of “and” into the pragmatics of the sentence, and not into the meaning of “and.” Instead “and” is only taken to be a mere function whose meaning is given by the following rules (where “and” is taken to be equivalent to the ampersand, &):

P & Q
<br> __________
<br> P
<br> Q

This says that from P and Q, one can infer P and one can infer Q. This rule of the meaning of “and” can be seen as an argument where P&Q make up the first premise, and there are two conclusions, the first being P, and the second being Q.

The meaning of “and” - the *conjunction* - is relatively straightforward. But other operators are a bit trickier. Let’s now move to the trickiest, “or.”

### Exclusive vs. Inclusive "OR"

Students often have a problem with translating “or” as it appears in ordinary speech. In particular, sometimes “or” seems to imply that one or the other (or *both*) things might be true. For instance, consider the following utterance, by a speaker who is reluctant to go outside:

(31) It’s going to be cold, or it’s going to snow.

It seems like the speaker’s statement is true if it’s going to be cold, or if it’s going to snow, or if it’s both cold and it snows. Thus, it often seems that "or" is *inclusive* in the sense that it includes the possibility of both of its parts being true. Another example: Consider a hotel concierge discussing the benefits of the hotel:

(32) You can enjoy breakfast in bed or a nice swim in the pool.

The concierge is not implying that the guest can *only* do one or the other – both are *included*. Thus, we shall call this **inclusive "or"**.

On the other hand, other uses of “or” seem to suggest that only *one* argument *or* the other is true, but *not both*.

For instance:
<br> Imagine a banquet reception in which guests have a selection of main course – chicken or fish. The waiter utters:

(33) For the main course, you may have chicken or fish.

In uttering (33), the waiter seems to imply that the guest may have chicken *or* fish – *but not both*! (Only one entrée per guest.) Thus, this reading *excludes* the possibility of having *both chicken and fish*. Thus, we shall call it **exclusive "or"**.

The difference, then, between inclusive “or” and exclusive “or” is how they function when both of their component statements are true. With inclusive “or," which we can symbolize as V<sub>I</sub>, the statement as a whole remains true even if *both* arguments are true. With exclusive “or” (V<sub>E</sub>), the statement as a whole is *not* true when both arguments are true. This is a crucial difference.

Remember: Inclusive “Or” means *one-or-the-other-**or-both***. Exclusive “Or” means *one-or-the-other-but-**not-both***.

There are some reasons to suspect that the English use of “or” is the inclusive use. For one thing, note that it is never redundant to add the ***but-not-both*** in (33). This suggests that ***but-not-both*** cannot be part of the definition of “or” for if it was then adding it to “or” should make a redundancy. Compare: “bachelor” means “unmarried man” and calling someone an “unmarried bachelor” is redundant, as there are no unmarried bachelors. But hearing you can have *a-or-b-but-**not-both*** isn’t at all redundant, it’s informative and tells you about a restriction that wasn’t apparent merely from the use of “or."

Thus we follow tradition in assuming that “or” always expresses inclusive-or, and thus we will understand “V” to mean “V<sub>I</sub>." Thus for the purposes of symbolic logic translation, we will translate “or” as the inclusive disjunction (V<sub>I</sub>).

### Finding the Main Operator

Because sentences with multiple operators are disambiguated with parentheses, there is always one operator that is the **main operator** of the sentence. Finding the main operators are similar to finding the order of operations in arithmetic. 4 + 3 x 7 is taken to not be well-formed, and instead gets disambiguated as 4 + (3 x 7). Here one first calculates the product of 3 x 7 and then adds four to that. Here addition is outside of the parentheses and so would get calculated last (as we will see in the next section). Similarly main operators are operators that take the greatest *scope* over the sentence - they hold over the rest of the sentence.

But that supposes there is always a main operator. In the case of sentences with no operators, there is no main operator:

(34) P
<br> Main operator: NONE

In sentences with one operator, that operator must be the main operator:

(35) P if and only if Q

Main operator: “if and only if”

What about more complex sentences with more operators?

(36) P if and only if (Q or R)

What is the main operator in this sentence? As you can see, “or” does not operate on the whole sentence, so to speak – rather, it combines Q and R to make: Q or R. On the other hand, “if and only if” combines the parts of the whole sentence – (i) P, and (ii) (Q or R). In that sense, it seems like the *input* to “if and only if” is in fact the *output* of (Q or R). Therefore, there is always one “final” operator whose parts make up the whole rest of the sentence, and the output of this operator is not the input to any other operator. Another example:

(37) ((P and Q) or (Q and R)) if (P implies Q)

Here, the main operator is “if.”

HINT: Another way to find the main operator, if the sentence is properly disambiguated, is to find the first operator that you encounter where there are *no open parentheses*.

Must sentences have 1 (or rarely, 0) main operators? No! Some special sentences can have what appear to be multiple “main” operators. This only happens when the sentences contain multiple occurrences of the same type of operator. This only holds for either disjunction or conjunction. Take sentences 5 and 6:

(5) P & Q & R
<br> (6) A B C

(5) and (6) are both well-formed and have multiple main operators. The main operator in (5) is conjunction, *both of them*. Similarly, in (6) disjunction is the main operators but both are equals.

### KEY CONCEPTS
* Atomic sentence
* Complex sentence
* Logical/sentential operator
* Ambiguity (semantic vs. syntactic)
* Pragmatics
