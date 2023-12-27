/**
 * @function onIntersect
 * @param  {HTMLElement} elementToWatch elementToWatch
 * @param  {function} callback       callback once element is intersecting
 * @param  {function} outCallback
 * @param  {Boolean} once           if callback only run one time
 * @param  {Object} options        Intersection Observer API options
 * @return {IntersectionObserver} observer
 */
export const onIntersect = (
    elementToWatch,
    callback,
    outCallback = () => {},
    once = true,
    options = { threshold: 1.0 }
) => {
    const observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
            callback(entry.target);

            if (once) {
                observer.unobserve(entry.target);
            }
        }

        else {
            outCallback(entry.target);
        }
    }, options);

    // Observe the element
    observer.observe(elementToWatch);

    return observer;
};
