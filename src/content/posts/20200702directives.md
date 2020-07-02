---
date    : "2020-07-02T16:50:00+08:00"
title	: "Angular Directive"

tags    : ["angular", "coding"]
type    : "post"
draft   : false
---

# Angular Directive

At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element (e.g. via event listeners), or even to transform the DOM element and its children.

- Use `ng generate directive highlight` to generate directive file: 
    - src/app/highlight.directive.ts
    - src/app/highlight.directive.spec.ts (for test)


### structural directives
- https://angular.tw/guide/structural-directives
- *ngIf , *ngFor

### attribute directives
- https://angular.tw/guide/attribute-directives
- NgStyle