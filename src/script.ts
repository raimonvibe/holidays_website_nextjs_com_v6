function createSnowflake(button: HTMLElement) {
    const container = (button.querySelector('.snowflake-container') as HTMLElement) || button;
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.position = 'absolute';
    snowflake.style.left = `${Math.random() * container.offsetWidth}px`;
    snowflake.style.top = `${-20}px`;  // Start boven de knop
    snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;  // Variabele grootte
    snowflake.style.opacity = `${Math.random() * 0.5 + 0.5}`;  // Variabele doorzichtigheid
    snowflake.style.transition = 'top 2s ease-in, left 2s ease-in-out';
    snowflake.style.pointerEvents = 'none';
    snowflake.style.zIndex = '1000';
    container.appendChild(snowflake);

    // Animatie
    setTimeout(() => {
        snowflake.style.top = `${container.offsetHeight + 20}px`;  // Beweeg voorbij de onderkant van de knop
        snowflake.style.left = `${Math.random() * container.offsetWidth}px`;  // Horizontale beweging
    }, 50);

    setTimeout(() => {
        snowflake.remove();
    }, 2000);
}

export function createMultipleSnowflakes(button: HTMLElement) {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createSnowflake(button), i * 200);
    }
}

export function useSnowflakeEffect() {
    const addSnowflakeListeners = () => {
        const socialButtons = document.querySelectorAll('.Social:not(.footer-link)');
        socialButtons.forEach(button => {
            button.addEventListener('mouseenter', () => createMultipleSnowflakes(button as HTMLElement));
        });
    };

    if (document.readyState === 'complete') {
        addSnowflakeListeners();
    } else {
        window.addEventListener('load', addSnowflakeListeners);
    }

    return () => {
        const socialButtons = document.querySelectorAll('.Social');
        socialButtons.forEach(button => {
            button.removeEventListener('mouseenter', () => createMultipleSnowflakes(button as HTMLElement));
        });
        window.removeEventListener('load', addSnowflakeListeners);
    };
}