import { DirectiveOptions, DirectiveBinding } from "vue/types/options";

const getElements = (el: HTMLElement) => {
    return el.querySelectorAll<HTMLElement>(`
        input,
        select,
        checkbox,
        textarea,
        button,
        fieldset,
        keygen`
    );
}

const shouldIgnoreElement = (el: HTMLElement) => {
    if (el.dataset.keepDisabled && !el.hasAttribute('disabled')) {
        delete el.dataset.keepDisabled;
    } else if (el.hasAttribute("disabled")) {
        el.dataset.keepDisabled = 'true';
    }
};

const parseElements = (el: HTMLElement, binding: DirectiveBinding) => {
    if (binding.value !== binding.oldValue) {
        const arg = binding.arg || ''
        for (const element of getElements(el)) {
            if (binding.value) {
                shouldIgnoreElement(element);
                element.setAttribute("disabled", "disabled");
                element.classList.add("disabled");
                element.classList.add(arg);
            } else {
                if (!el.dataset.keepDisabled) {
                    element.removeAttribute("disabled");
                    element.classList.remove("disabled");
                    element.classList.remove(arg);
                }
            }
        }
    }
};

const disabled: DirectiveOptions = {
    bind(el: HTMLElement, binding: DirectiveBinding) {
        for (const element of getElements(el)) {
            shouldIgnoreElement(element)
        }

        parseElements(el, binding);
    },
    update: parseElements
};

export default disabled;
