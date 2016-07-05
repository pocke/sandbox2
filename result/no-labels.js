outer:
    while (true) {

        while (true) {
            break outer;
        }
    }
/*eslint no-labels: "error"*/

label:
    while(true) {
        // ...
    }

label:
    while(true) {
        break label;
    }

label:
    while(true) {
        continue label;
    }

label:
    switch (a) {
    case 0:
        break label;
    }

label:
    {
        break label;
    }

label:
    if (a) {
        break label;
    }
/*eslint no-labels: "error"*/

var f = {
    label: "foo"
};

while (true) {
    break;
}

while (true) {
    continue;
}
/*eslint no-labels: ["error", { "allowLoop": true }]*/

label:
    while (true) {
        break label;
    }
/*eslint no-labels: ["error", { "allowSwitch": true }]*/

label:
    switch (a) {
        case 0:
            break label;
    }
