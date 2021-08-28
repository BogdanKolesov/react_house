export function cssCalc(Vmin, Vmax, Fmin, Fmax) {
    return (
        window.addEventListener('resize', function () {
            const DocWidth = document.documentElement.scrollWidth;
            const res = ((DocWidth - Vmin) / (Vmax - Vmin)) * (Fmax - Fmin) + Fmin;
            return res;
        })
    )
}


