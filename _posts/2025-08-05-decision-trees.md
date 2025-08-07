---
layout: default
title: "[ML Basic] Decision Trees"
date: 2025-08-05
---

# Decision Trees (DT) :evergreen_tree:
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

The **learning** happens at each node where the machine choses which feature and partition of the feature to use. 

Pros of DT:
- Easy to understand as it mimics human decision making.
- Requires little data processing
- Handles both numerical and categorical features

Cons:
- Prone to overfitting
- Unstable



## Popular Ensemble of decision trees
As we mentioned above, a single decision tree is prone to overfitting. To remedy this, we can use an ensemble of decision trees. Below are two popular approaches:

### Random Forests :evergreen_tree::evergreen_tree::evergreen_tree::evergreen_tree:

A *random forest* is a collection of decision trees, wehre each tree is trained on a random subset of the data and its features. The final prediction is made by aggregating the predictions of all the trees (for classification: majority vote; for regression: average). 

Key points: 
- The *randomness* lies in the data sampling and feature selection.
- Training are parallel: trees are trained independently. Resulting in faster training
- Good baseline, robust to noise.

### Gradient Boosting

Gradient boostings starts with a weak model, usually a small DT, measure its errors, then train a new model to predict the error and adding the new model to the ensemble. This sequential process is then repeated manytimes wehre each model learn from the mistakes of the previous ones.

```
Step 1: Start with an initial prediction (e.g., average)
    ┌──────────────┐
    │   Model 0    │
    │  (baseline)  │
    └──────────────┘
           │
           ▼
     Residuals/Error

Step 2: Fit a new tree to residuals
    ┌──────────────┐
    │   Model 1    │
    │  (residuals) │
    └──────────────┘
           │
           ▼
     Updated Predictions

Step 3: Fit another tree to new residuals
    ┌──────────────┐
    │   Model 2    │
    │  (new error) │
    └──────────────┘
           │
           ▼
     More Accurate Predictions

Repeat this process for N trees:
    Final Prediction = 
    Model₀ + η·Model₁ + η·Model₂ + ... + η·Modelₙ

Where η = learning rate (a small number, like 0.1)
```


Key points:
- Newer model boosts the gradeint of the loss function, essential numerical optimization.
- The sequential nature of the process. Resulting in slower training.
- Produces competitive results. Commonly the go-to models on Kaggle (XGBoost, LightGBM, CatBoost)




