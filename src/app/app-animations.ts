import { style, animate, animation, query, stagger } from "@angular/animations";

export var animFadeIn = animation([
    style({ opacity: 0 }),
    animate(1000, style({ opacity: 1 }))
]);

export var animFadeOut = animation([
    style({ opacity: 1 }),
    animate(1000, style({ opacity: 0 }))
]);