
# From Congruence to Quotient Group

*--- to use the view of number theory to underestand abstract algebra*

Hank Lo | Done Mar 1st, 2023 | Updated Jul 13, 2025

[TOC]

---

## Notations

- $aRb$: $a$ follows the **relationship** $R$ with $b$.
- $a\equiv b\pmod{m}$: $a$ is congruent to $b$ modulo $m$.
- $G$: a **group**.
- $\cdot~$: operation over group in general. Unless special explanations, we denote $a\cdot b$ by $ab$.
- $aS$: Given a set $S$, $aS=\{as \mid s\in S\}$.
- $H\leq G$: Given a group $G$, $H$ is the **subgroup** of $G$.
- $H\triangleleft G$: Giving a group $G$, $H$ is the **normal subgroup** of $G$.
- $G/H$: A **quotient group** with its normal subgroup $H$.


## Introduction

There is one saying from my friend:
> almost properties of number theory can be explained by the views of abstract algebra.

Well, it makes sense sometimes. $\mathbb{Z}_m^*=\{ \overline{0}, \overline{1}, \cdots, \overline{m-1} \mid m \text{ is a prime} \}$ is a quotient group as such with various algebra properties. However, some of algebra structure with 'abstract' features can be also understood and ultilized by using the actions in number theory. In this note, we are going to explore the construction of quotient group from views of integer congruence.


## Group Composed of Residue Classes

Given integers $a$ and $b$, $a$ is congruent to $b$ modulo $m$, i.e. $a\equiv b\pmod{m}$, if $(a-b) | m$. Knowing that congruence is an equivalent relationship, we can contstruct equivalent classes about this relationship. Here we have the form of arbitrary equivalent class, called *residue class*, as
$$
\overline{n}=\{k\in \mathbb{Z} \mid k\equiv n\pmod{m} \}.
$$

Therefore, we have quotient set $\{ \overline{0}, \overline{1}, \cdots, \overline{m-1} \}$, which is denoted by $\mathbb{Z}_m$.

Knowing that
$$
a\equiv b\pmod{m}, c\equiv d\pmod{m}\Rightarrow (a+c)\equiv (b+d)\pmod{m},
$$
we can extend it to 
$$\overline{a}\equiv \overline{b}\pmod{m}, \overline{c}\equiv \overline{d}\pmod{m}\Rightarrow \overline{a}+\overline{c}\equiv \overline{b}+\overline{d}\pmod{m}.$$
Moreover, $a+c$ also comes from one of residue classes for sure, which can be denoted by $\overline{a+c}$, i.e. $\overline{a}+\overline{c} = \overline{a+c}$. so we can define operation $+$ over $\mathbb{Z}_m$, which is also closed over $\mathbb{Z}_m$. 

It is apparent that $0+a\equiv a\pmod{m}$ for arbitrary $a$ in $\mathbb{Z}$, so we have $\overline{0}+\overline{a}\equiv \overline{a}\pmod{m}$, which indicates that $\overline{0}$ is the identity element of $\mathbb{Z}_m$.

As for arbitrary residue class, taking $\overline{a}$ as example, there exist $\overline{-a}$ such that $\overline{a}+\overline{-a}=\overline{a+(-a)}=\overline{0}$. So the existence of inverse element holds for every residue class in $\mathbb{Z}_m$.

The associativity of the operation above is also apparent. Now we can say that $\mathbb{Z}_m$ is a group with operation $+$, i.e. an additive group.


## Direct Construction of Quotient Group 

In this section We construct the quotient group with direct definition and basic properties.

**Definition**. Given a group $G$ and its two subsets $A$ and $B$, we say that $A$ is *conjugate* to $B$, if there exist $g$ in $G$ such that $gAg^{-1}=B$.

Furthermore, $A$ and $B$ can be restricted to $A=B$, which reflacts on the self-conjugate relationship.

**Definition**. Given a group $G$ and its one subset $H$, we say that $H$ is self-conjugate, if there exist $g$ in $G$ such that $gHg^{-1}=H$.

The set compose of these $g$s related to *self-conjugate* relationship can be explored more.

**Definition**. Given a group $G$ and its one subset $H$, the *normalizer* of $H$ is denoted by
$$
N_G(H)=\{ g\in G \mid gHg^{-1}=H \}.
$$

Then with two more conditions, $H$ can become a normal subgroup.

**Definition**. The subgroup $H$ of $G$ is the *normal subgroup* of $G$, denoted by $H\triangleleft G$, if $H$ is self-conjugate for every element of $G$, i.e. $\forall g\in G, gHg^{-1}=H$.

As for normal subgroup $H$, we have the following properties:

**Theorem**. Given a group $G$ and that $H\triangleleft G$, the following conditions are equivalent mutually:
1. $H\triangleleft G$;
2. $\forall g\in G, gH=Hg$;
3. $N_G(H)=G$.

It can be used to determine the existence of normal subgroup.

Now we combine all normal groups into a set. Before we introduce the formal definition of quotient group, it can be told that $\{gH\}$ is just the form of quotient group. Thus we have to find out features belonging to group, i.e., operation, indentity element and inverse element.

To begin with, we use a property of subgroup. It shows with the operation bewteen sets.

**Theorem**. Given a group $G$ and its non-empty subset $H$, we have that $H\leq G \Rightarrow HH=H$, where $HH=\{ab \mid a,b\in H\}$.

**Proof**. It is apparent that $HH\subseteq H$. Moreover, for every element in $H$, denoted by $h$, we have $h=(h\cdot h)\cdot h^{-1}$, where $h\cdot h\in H$ and $h^{-1}\in H$. so $H\subseteq HH$ holds. Thus $HH=H$ holds. $\blacksquare$

> **Remark**. The "$\Leftarrow$" holds when $G$ is finite.

Let's consider sets like $gH$ with that $g\in G$ and that $H$ is a normal subgroup. Knowing that for arbitrary $a,b\in G$,
$$
aH\cdot bH = (aH)(Hb) = a(HH)b = aHb = a(bH) = abH.
$$

we can let $\cdot$ become the operation over $gH$ and it is closed.

Let $e$ be the identity element of $G$. we have
$$
eH\cdot aH = (ea)H = aH,
$$
so $eH$ is the identity element of $\{gH\}$.

Similarly, for arbitrary $gH$, we can gain its inverse element $g^{-1}H$.

To sum up, $\{gH\}$ is a group. It is called quotient group with normal group $H$ and is denoted by $G/H$.


## Construction of Quotient Group from the View of Congruence

From the process of constructing a quotient group we can find some properties that are similar to these of congruence in number theory. Let's compare these properties one by one.

> It can be recalled that In integer congruence, $a\equiv b\pmod{m} \Leftrightarrow (a-b)|m$. With that $(a-b)|m\Leftrightarrow (a-b)\in m\mathbb{Z}$, we can say that $a$ follows the congruence relationship with $b$ if and only if $a-b$ is in $m\mathbb{Z}$, i.e. $\{mk | k\in\mathbb{Z}\}$. Knowing that $-b$ is the inverse element of $b$ in $\mathbb{Z}_m$, let's define a similar relationship in general group.

To begin with, given a group $G$ and a corresponding subgroup $H$, a relationship over the group $G$ is introduced, i.e.,
$$
a,b\in G, aRb \Leftrightarrow ab^{-1}\in H.
$$

**Theorem**. $R$ is an equivalent relationship. And for arbitrary element $a$ in G, the corresponding equivalent class can be denoted by $Ha$.

**Proof**. With $a\cdot a^{-1}=e\in H$, i.e. $aRa^{-1}$, the reflexivity of $R$ holds. As for $ab^{-1}\in H$ and $H\leq G$, we have $(ab^{-1})^{-1}=ba^{-1}\in H$. Thus $bRa$, which indicates the symmetry of $R$ holds. Knowing that $aRb$ and that $bRc$, i.e. $ab^{-1}\in H$ and $bc^{-1}\in H$, we have $(ab^{-1})\cdot (bc^{-1})=ac^{-1}\in H$, i.e. $aRc$, indicating that the transitivity of $R$ holds. In conclusion, $R$ is an equivalent relationship.

Denoting $ab^{-1}$ by $h$, i.e. $h=ab^{-1}\in H$, we can say that the equivalent class $b$ comes from is identical to that $a$ comes from. Moreover, from $h=ab^{-1}$ we can gain $b=h^{-1}a$. With the arbitrariness of $h$ in $H$, we can say that $b\in Ha$, which indicates that the equivalent class $a$ comes from is $Ha$. $\blacksquare$

> We can find that the form of $H$ is similar to $m\mathbb{Z}$, so two comparasion can be found as follows:
> - $ab^{-1}\in H$ and $a-b\in m\mathbb{Z}$,
> - $Ha$ and $m\mathbb{Z}+b$.
> 
> Knowing that $\mathbb{Z}=\bigcup\limits_{r\in\Lambda}\left(m\mathbb{Z}+b\right)$, we can gain a similar partition of $G$.

With $R$, there is one partition of group $G$ showed as
$$
G = \bigcup\limits_{a\in\Lambda}Ha.
$$

> In number theory, it is apparent that $m\mathbb{Z}=\mathbb{Z}m$, whereas it is not the case for general group. So we have to add restriction to $H$, which indicates the function of normal subgroup.

**Definition**. Given a group $G$ and its one subset $H$, we say that $H$ is a normal subgroup, if $gH=Hg$ holds for arbitrary $g$ in $G$.

> From $gH=Hg$ we can have $gHg^{-1}=H$, which indicates that $H$ is self-conjugate.
> 
> Now we analyse the action of general group that is similar to the operation of residue class in number theory.
> 
> With that $m\mathbb{Z}+a=\overline{a}, m\mathbb{Z}+b=\overline{b}$ we have $\overline{a}+\overline{b}=\overline{a+b}$. It is feasible to find the corresponding operation for general group. Now it comes true with normal subgroup.

**Definition**. Given a group $G$ and its one normal subgroup $H$, it holds that
$$
\forall a,b\in G, aH\cdot bH = (aH)(Hb) = a(HH)b = aHb = a(bH) = abH.
$$

We can also say that $aH$ and $bH$ follow congruence relationship if $aH\cdot bH=(ab)H$.

Those feature of quotient set $\{gH\}$ to become a group is similar as above. So we can say that $\{gH\}$ is a quotient group modulo $H$ and it can be denoted by $G/H$.

> By the way, $\mathbb{Z}_m=\mathbb{Z}/m\mathbb{Z}$.

the integer congruence can be extented to the method on finding the partition of $\mathbb{Z}$, and we can perform modular operation on $\mathbb{Z}$, where the modulus is $m\mathbb{Z}$. Every partitioned set can be distinguished through this modular operation, which means the function of $r$ in $m\mathbb{Z}+r$. Now the $G/H$ does so with correspondingly similar properties.

## Conclusion

In this note we introduce integer congruence in number theory, along with the construction of $\mathbb{Z}_m$ as a group. Then we construct the general quotient group $G/H$ by using the method on constructing $\mathbb{Z}_m$, where the congruence relationship matters a lot in the context. Following such a approach, we can also solve the construction of quotient ring, although more conditions are required.
