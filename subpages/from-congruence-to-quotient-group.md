
# From Congruence to Quotient Group

*--- to use the view of number theory to underestand abstract algebra*

Hank Lo | Done Mar 1st, 2023 | updated Jul 11, 2025

---

## Notations

- $aRb$: $a$ follows the **relationship** $R$ with $b$.
- $a\equiv b\pmod{m}$: $a$ is congruent to $b$ modulo $m$
- $G$: a **group**.
- $\cdot~$: General operation over group. Unless special explanation, we denote $a\cdot b$ by $ab$.
- $aS$: Giving a set $S$, $aS=\{as \mid s\in S\}$.
- $H\leq G$: Giving a group $G$, $H$ is the **subgroup** of $G$.
- $H\triangleleft G$: Giving a group $G$, $H$ is the **normal subgroup** of $G$.
- $G/H$: A **quotient group** with modulo $H$.


## Introduction

There is one saying from my friend:
> almost properties of number theory can be explained by the views of abstract algebra.

Well, it make sense sometimes. $\mathbb{Z}_m^*=\{ \overline{0}, \overline{1}, \cdots, \overline{m-1} \mid m \text{ is a prime} \}$ is a quotient group as such with various algebra properties. However, some of algebra structure with 'abstract' features can be easier to understand and ultilize by using the actions in number theory. In this note, we are going to explore the construction of quotient group from the views of residue class.


## Group Composed of Residue Classes

Giving integers $a$ and $b$, $a$ is congruent to $b$ modulo $m$, i.e. $a\equiv b\pmod{m}$, if $(a-b) | m$. Knowing that congruence is an equivalent relationship, we can contstruct equivalent classes about this relationship. Here we have the form of arbitrary equivalent class, which is called *residue class*, as
$$
\overline{n}=\{k\in \mathbb{Z} \mid k\equiv n\pmod{m} \}.
$$

Therefore, we have the quotient set $\{ \overline{0}, \overline{1}, \cdots, \overline{m-1} \}$, which is denoted by $\mathbb{Z}_m$.

Knowing that
$$a\equiv b\pmod{m}, c\equiv d\pmod{m}\Rightarrow (a+c)\equiv (b+d)\pmod{m},$$
we can extend it to 
$$\overline{a}\equiv \overline{b}\pmod{m}, \overline{c}\equiv \overline{d}\pmod{m}\Rightarrow \overline{a}+\overline{c}\equiv \overline{b}+\overline{d}\pmod{m}.$$
Moreover, $a+c$ also comes from one of residue classes, which can be denoted by $\overline{a+c}$, i.e. $\overline{a}+\overline{c} = \overline{a+c}$. Now we can define operation $+$ over $\mathbb{Z}_m$, which is also closed over $\mathbb{Z}_m$. 

It is obvious that $0+a\equiv a\pmod{m}$ for arbitrary $a$ in $\mathbb{Z}$, so we have $\overline{0}+\overline{a}\equiv \overline{a}\pmod{m}$, which indicated that $\overline{0}$ is the identity element in $\mathbb{Z}_m$.

As for arbitrary residue class, taking $\overline{a}$ as example, there exit $\overline{-a}$ subject to $$\overline{a}+\overline{-a}=\overline{a+(-a)}=\overline{0}$. So the existence of inverse element holds for every residue class in $\mathbb{Z}_m$.

Now we can say that $\mathbb{Z}_m$ is a group with operation $+$, i.e. an additive group.


## A Direct Construction of Quotient Group 

To begin with, given a group $G$ and a corresponding subgroup $H$, a relationship over the group $G$ is introduced, i.e.,
$$
a,b\in G, aRb \Leftrightarrow ab^{-1}\in H.
$$

**Theorem**. $R$ is an equivalent relationship. And for arbitrary element $a$ in G, the corresponding equivalent class can be denoted by $Ha$.

**Proof**. With $a\cdot a^{-1}=e\in H$, i.e. $aRa^{-1}$, the reflexivity of $R$ holds. As for $ab^{-1}\in H$ and $H\leq G$, we have $(ab^{-1})^{-1}=ba^{-1}\in H$. Thus $bRa$, which indicates the symmetry of $R$ holds. Knowing that $aRb$ and that $bRc$, i.e. $ab^{-1}\in H$ and $bc^{-1}\in H$, we have $(ab^{-1})\cdot (bc^{-1})=ac^{-1}\in H$, i.e. $aRc$, indicating that the transitivity of $R$ holds. In conclusion, $R$ is an equivalent relationship.

Denoting $ab^{-1}$ by $h$, i.e. $h=ab^{-1}\in H$, we can say that the equivalent class $b$ comes from is identical to that $a$ comes from. Moreover, from $h=ab^{-1}$ we can gain $b=h^{-1}a$. With the arbitrariness of $h$ in $H$, we can say that $b\in Ha$, which indicates that the equivalent class $a$ comes from is $Ha$. $\blacksquare$


## References

[1] 冯克勤. 近世代数引论
