export class Progress {
    constructor({
        value = 0,
        animated = false,
        hidden = false,
    } = {}) {
        this.state = {
            value: this.normalizeValue(value),
            animated: Boolean(animated),
            hidden: Boolean(hidden),
        };

        this.element = this.createElement();
        this.track = this.element.querySelector('.progress__track');
        this.valueCircle = this.element.querySelector('.progress__value');
        this.rotator = this.element.querySelector('.progress__rotator');

        this.radius = 40;
        this.circumference = 2 * Math.PI * this.radius;

        this.setupCircles();
        this.render();
    }

    createElement() {
        const svg = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'svg'
        );

        svg.classList.add('progress');

        svg.setAttribute('viewBox', '0 0 100 100');

        svg.setAttribute('role', 'progressbar');
        svg.setAttribute('aria-valuemin', '0');
        svg.setAttribute('aria-valuemax', '100');

        svg.innerHTML = `
            <g class="progress__rotator">
                <circle
                    class="progress__track"
                    cx="50"
                    cy="50"
                    r="40"
                ></circle>

                <circle
                    class="progress__value"
                    cx="50"
                    cy="50"
                    r="40"
                ></circle>
            </g>
        `;

        return svg;
    }

    setupCircles() {
        this.valueCircle.style.strokeDasharray =
            this.circumference;

        this.track.style.strokeDasharray =
            this.circumference;
    }

    render() {
        this.renderValue();
        this.renderAnimation();
        this.renderVisibility();
    }

    renderValue() {
        const offset =
            this.circumference *
            (1 - this.state.value / 100);

        this.valueCircle.style.strokeDashoffset = offset;

        this.element.setAttribute(
            'aria-valuenow',
            this.state.value
        );
    }

    renderAnimation() {
        this.element.classList.toggle(
            'progress--animated',
            this.state.animated
        );
    }

    renderVisibility() {
        this.element.classList.toggle(
            'progress--hidden',
            this.state.hidden
        );
    }

    normalizeValue(value) {
        const numericValue = Number(value);

        if (Number.isNaN(numericValue)) {
            return 0;
        }

        return Math.min(
            100,
            Math.max(0, numericValue)
        );
    }

    setValue(value) {
        this.state.value = this.normalizeValue(value);

        this.renderValue();
    }

    setAnimated(animated) {
        this.state.animated = Boolean(animated);

        this.renderAnimation();
    }

    setHidden(hidden) {
        this.state.hidden = Boolean(hidden);

        this.renderVisibility();
    }

    setState(nextState = {}) {
        if ('value' in nextState) {
            this.state.value =
                this.normalizeValue(nextState.value);
        }

        if ('animated' in nextState) {
            this.state.animated =
                Boolean(nextState.animated);
        }

        if ('hidden' in nextState) {
            this.state.hidden =
                Boolean(nextState.hidden);
        }

        this.render();
    }

    getValue() {
        return this.state.value;
    }

    isAnimated() {
        return this.state.animated;
    }

    isHidden() {
        return this.state.hidden;
    }

    mount(container) {
        container.append(this.element);

        return this;
    }

    destroy() {
        this.element.remove();
    }
}