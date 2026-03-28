---
title: Exemple d'organigramme interactif
description: Test Mermaid avec Starlight
---

# Mon premier organigramme

```mermaid
flowchart TD
    A[Début] --> B{Décision importante ?}
    B -->|Oui| C[Action 1<br/>Détail]
    B -->|Non| D[Action 2]
    C --> E[Fin]
    D --> E[Fin]