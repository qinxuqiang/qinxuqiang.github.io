---
layout: default
title: "[ML Basic] Decision Trees"
date: 2025-08-05
---

# Decision Trees (DT)
This post begins a series where I write about fundamentals of machine learning in my own understanding. The main purpose of this series is to help myself, but hopefully someone else can also get something out of it.

## Basics
A decision tree is a supervised leanring algorithm. It can be used both for classification and regression. As the name suggests, * it uses a (usually binary) tree structure, where at each node a decision is make, usually regarding some features of the dataset. * 

Take the titanic problem for example, where we are supposed to predict whether a passenger will survive (label) based on their information (features). Below is a simple decision tree: 

```
                ┌────────────────────┐
                │ First class?       │
                └────────────────────┘
                    │         │
                Yes │         │ No
                    ▼         ▼
         ┌────────────────────┐   ┌───────────┐
         │ Age < 30?          │   │ Dead      │
         └────────────────────┘   └───────────┘
              │        │
          Yes │        │ No
              ▼        ▼
         ┌────────┐ ┌────────┐
         │Survived│ │  Dead  │
         └────────┘ └────────┘
```

We can see that both numerical (age) and categorical (passenger class) features are used in the tree. 


Structurely, a decision tree is a flowchart-like structure: 

- Each internal node represents a decision based on a feature (e.g., "First class?")
- Each branch represents the outcome of the decision (e.g., "Yes" or "No")
- Each leaf node represents a final prediction (e.g., "Survived" or "Dead")

The ** learning ** happens at each node where the machine choses which feature and partition of the feature to use. 

Pros of DT:
- Easy to understand as it mimics human decision making.
- Requires little data processing
- Handles both numerical and categorical features

Cons:
- Prone to overfitting
- Unstable



## Popular Ensemble of decision trees


### Random Forests

### Gradient Boosting


