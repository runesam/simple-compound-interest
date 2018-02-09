module.exports = {
    scrollDown: () => {
        const target = document.getElementsByTagName('body')[0].scrollHeight;
        window.scrollBy({
            top: target, // could be negative value
            left: 0,
            behavior: 'smooth',
        });
    },
};
