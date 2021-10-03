import assign from 'object-assign';

let defaults = {
    template : 'Confetti',
    Count: 10,
    Size: 10,
    Spread: 10
};

function mergeOptions(options) {
    defaults = assign(defaults, options);
}

export { defaults, mergeOptions };
