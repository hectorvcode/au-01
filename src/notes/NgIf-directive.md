# NgIf
A structural directive that conditionally includes a template based on the value of an expression coerced to Boolean. When the expression evaluates to true, Angular renders the template provided in a *then* clause, and when false or null, angular renders the template provided in an optional *else* clause. The default template for the *else* clause is blank

### Simple Form with shorthand syntax:
``` html
    <div *ngIf="condition">
        Content to render when condition is true.
    </div>
```

### Simple form with expanded syntax:
```html
    <ng-template [ngIf]="condition">
        <div>
            Content to render when condition is true.
        </div>
    </ng-template>
```

### Form with an "else" block
```html
<div *ngIf="condition; else elseBlock">
        Content to render when condition is true.
</div>
<ng-template #elseBlock>
    Content to render when condition is false.
</ng-template>
```

### Shorthand form with "then" and "else" blocks
```html
<div *ngIf="condition; then thenBlock else elseBlock">

</div>
<ng-template #thenBlock>
    Content to render when condition is true.
</ng-template>
<ng-template #elseBlock>
    Content to render when condition is false.
</ng-template>
```
