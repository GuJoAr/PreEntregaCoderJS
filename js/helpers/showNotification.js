export const showNotification = (text, type) => {
    let gravity = "top";
    let position = "right";
    let stopOnFocus = true;
    let duration = 3000;
    let className = type === 'error' ? 'error' : 'success';

    Toastify ({
        text,
        gravity,
        position,
        stopOnFocus,
        duration,
        className
    }).showToast();
}
